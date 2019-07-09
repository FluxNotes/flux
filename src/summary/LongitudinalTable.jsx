import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import './LongitudinalTable.css';
import propTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';
import Tooltip from 'rc-tooltip';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

export default class LongitudinalTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: props.dataInfo.filter(data => data.favorite).map((obj) => {
                return obj.name;
            }),
            hovered: null,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.dataInfo, nextProps.dataInfo)) {
            this.setState({
                favorites: nextProps.dataInfo.filter(data => data.favorite).map((obj) => {
                    return obj.name;
                })
            });
        }
    }
    /*
    Assigns an id to each row
    */
    createData = (name, unit, data, id, bands, favorite) => {
        return { name, unit, data, id, bands, favorite }; //the names given here are the keys and the values passed into those parameters become the key's values
    }
    gatherTableValues = () => {
        const tableValues = [];
        const predates = [];
        const { dataInfo } = this.props;
        this.props.dataInfo.forEach((data, index) => {
            const id = `${index}-${data.name}`;
            tableValues.push(this.createData(data.name, data.unit, Object.values(data.datesAndData), id, data.bands, data.favorite));
            predates.push(Object.keys(data.datesAndData));
        });
        const dates = _.uniq(_.flattenDeep(predates));
        const sortFunction = (date1, date2) => {
            const moment1 = new moment(date1, "DD MMM YYYY");
            const moment2 = new moment(date2, "DD MMM YYYY");
            if (moment1 < moment2) {
                return -1;
            }
            if (moment1 > moment2) {
                return 1;
            }
            return 0;
        };
        dates.sort(sortFunction);
        dates.forEach((date, index) => { //if a data object doesn't have a date in its date list, add "" to the corresponding location in its data
            dataInfo.forEach((obj) => {
                if (!Object.keys(obj.datesAndData).includes(dates[index])) {
                    tableValues[dataInfo.indexOf(obj)].data.splice(index, 0, "");
                }
            });
        });
        const starTableValues = [];
        tableValues.forEach((section) => {
            if (section.favorite) {
                starTableValues.push(section);
            }
        });
        return [tableValues, dates, starTableValues];
    }
    // updates current favorites and local storage
    toggleFavorites = (section) => {
        const newFavorites = [...this.state.favorites];
        if (_.includes(newFavorites, section.name)) {
            newFavorites.splice(newFavorites.indexOf(section.name), 1);
            this.setState({ favorites: newFavorites });
            this.props.preferenceManager.setPreference(`${this.props.conditionSectionName}-longitudinal-viz-favorites`, newFavorites);
        }
        else {
            newFavorites.push(section.name);
            this.setState({ favorites: newFavorites });
            this.props.preferenceManager.setPreference(`${this.props.conditionSectionName}-longitudinal-viz-favorites`, newFavorites);
        }
    }
    renderNameCell = (name, background) => {
        return (
            <Tooltip
                placement='right'
                overlayClassName={`name-tooltip`}
                overlay={`${name}`}
                mouseEnterDelay={0.5}
            >
                <Cell className={'name table-content ' + background} id='sticky-name'>
                    <span>{name}</span>
                </Cell>
            </Tooltip>
        );
    }
    renderStar = (name, id) => {
        if (_.includes(this.state.favorites, name)) {
            return <FontAwesome className='star-clicked' name='star' />;
        }
        else if (this.state.hovered === id) {
            return <FontAwesome className='star-hovered' name='star-o' />;
        }
        return <div />;
    }
    renderYearHeader = (dates) => {
        let currYear = null;
        return (
            <Row id='sticky-header'>
                {/*year row*/}
                <Cell className='star-cell header year-header' id='section-header'></Cell>
                <Cell className='header year-header' id='sticky-name'></Cell>
                <Cell className='header year-header' id='sticky-unit'></Cell>
                <Cell className='header year-header' id='break'></Cell>
                {dates.map((date, key) => { //years
                    const year = moment(date, 'DD MMM YYYY').year();
                    if (year !== currYear) {
                        currYear = year;
                        return <Cell key={key} className='header year-header' id='sticky-header'>{currYear}</Cell>;
                    }
                    return <Cell className='header year-header' key={key}></Cell>;
                })}
            </Row>);
    }
    renderDateHeader = (dates) => {
        return (
            <Row>
                {/*date row*/}
                <Cell className='star-cell header' id='section-header'>starred</Cell>
                <Cell className='header' id='sticky-name'></Cell>
                <Cell className='header' id='sticky-unit'></Cell>
                <Cell className='header' id='break'></Cell>
                {dates.map((date, key) => { //month and day
                    const curr = new moment(date, 'DD MMM YYYY');
                    const day = curr.format('DD');
                    const month = curr.format('MMM');
                    return <Cell className='header' key={key}>{day + ' ' + month}</Cell>;
                }
                )}
            </Row>
        );
    }
    renderAllDataHeader = (dates) => {
        return (
            <Row>
                <Cell className='header star-cell' id='section-header'>all {this.props.pluralSectionLabel}</Cell>
                <Cell className='header' id='sticky-name'></Cell>
                <Cell className='header' id='sticky-unit'></Cell>
                <Cell className='header' id='break'></Cell>
                {dates.map((date, key) => {
                    return <Cell className='header' key={key}></Cell>;
                })}
            </Row>
        );
    }
    renderData(tableValues) {
        return tableValues.map(n => { //n is a row in the table
            let background = tableValues.indexOf(n) % 2 === 0 ? 'gray-background' : 'white-background';
            return (
                <Row key={n.id}>
                    {/* Names and Units Cells */}
                    <Cell className={'hoverable star-cell star-body ' + background} onClick={() => { this.onClick(n); }} onMouseOver={() => { this.setState({ hovered: n.id }); }} onMouseLeave={() => { this.setState({ hovered: null }); }}>
                        {this.renderStar(n.name, n.id)}
                    </Cell>
                    {this.renderNameCell(n.name, background)}
                    <Cell className={'table-content ' + background} id='sticky-unit'>{n.unit}</Cell>
                    <Cell className='table-content' id='break'></Cell>
                    {Object.entries(n)[2][1].map((value, newkey) => {
                        const bands = tableValues[tableValues.indexOf(n)].bands;
                        // Data Cells
                        if (!bands || ((bands[1].high === 'max' || value < bands[1].high) && (bands[1].low === 'min' || value > bands[1].low))) {
                            return <Cell key={newkey} className={'table-content black-text ' + background}>{value}</Cell>;
                        } else {
                            return <Cell key={newkey} className={'table-content red-text ' + background}>{value}</Cell>;
                        }
                    })}
                </Row>
            );
        });
    }
    onClick = (n) => {
        this.toggleFavorites(n);
        this.props.reorderRows(n.name);
        this.setState({ hovered: null });
    }
    render() {
        const [tableValues, dates, starTableValues] = this.gatherTableValues();
        return (
            this.props.dataInfo.length > 0 ?
                <ScrollSync>
                    <div id='longitudinal-table'>
                        <div className='vertical-scroll'>
                            <ScrollSyncPane>
                                <StickyTable className=' white-scrollbar'> {/*react-sticky-table doesn't add a space between classNames, so we added a space before classNames */}
                                    {this.renderYearHeader(dates)}
                                    {this.renderDateHeader(dates)}
                                    {this.renderData(starTableValues)}
                                </StickyTable>
                            </ScrollSyncPane>
                        </div>
                        <div className='vertical-scroll'>
                            <ScrollSyncPane>
                                <StickyTable>
                                    {this.renderAllDataHeader(dates)}
                                    {this.renderData(tableValues)}
                                </StickyTable>
                            </ScrollSyncPane>
                        </div>
                    </div>
                </ScrollSync > :
                <h2 className='no-entries'>None</h2>
        );
    }
}
LongitudinalTable.propTypes = {
    dataInfo: propTypes.array.isRequired,
    tdpSearchSuggestions: propTypes.array,
    conditionSectionName: propTypes.string,
    reorderRows: propTypes.func,
    subsectionLabel: propTypes.string,
    pluralSectionLabel: propTypes.string,
    preferenceManager: propTypes.object,
};
