import React, { Component } from 'react';
// import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import _ from 'lodash';
import moment from 'moment';
import './LongitudinalTable.css';
import propTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';

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
    // Assigns an id to each row
    createData = (name, unit, data, id, bands, favorite) => {
        return { name, unit, data, id, bands, favorite }; //the names given here are the keys and the values passed into those parameters become the key's values
    }
    gatherTableValues = () => {
        const tableValues = [];
        const predates = [];
        const { dataInfo } = this.props;
        for (let index = 0; index < this.props.dataInfo.length; index++) {
            const data = this.props.dataInfo[index];
            const id = `${index}-${data.name}`;
            tableValues.push(this.createData(data.name, data.unit, Object.values(data.datesAndData), id, data.bands, data.favorite));
            predates.push(Object.keys(this.props.dataInfo[index].datesAndData));
        }
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
        for (let dateIndex = 0; dateIndex < dates.length; dateIndex++) { //for each section, check to see if each date is in its list of dates.  If it is not, add an empty string to its array of data, at the dataIndex
            dataInfo.forEach((obj) => {
                if (!Object.keys(obj.datesAndData).includes(dates[dateIndex])) {
                    tableValues[dataInfo.indexOf(obj)].data.splice(dateIndex, 0, "");
                }
            });
        }
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
        const newFavorites = this.state.favorites;
        if (_.includes(this.state.favorites, section.name)) {
            newFavorites.splice(this.state.favorites.indexOf(section.name), 1);
            this.setState({ favorites: newFavorites });
            this.props.preferenceManager.setPreference(`${this.props.conditionSectionName}-longitudinal-viz-favorites`, newFavorites);
        }
        else {
            newFavorites.push(section.name);
            this.setState({ favorites: newFavorites });
            this.props.preferenceManager.setPreference(`${this.props.conditionSectionName}-longitudinal-viz-favorites`, newFavorites);
        }
    }
    renderStar(name, id) {
        if (_.includes(this.state.favorites, name)) {
            return <FontAwesome className='star-clicked' name='star' />;
        }
        else if (this.state.hovered === id) {
            return <FontAwesome className='star-hovered' name='star' />;
        }
        return <div />;
    }
    renderYearHeader(dates) {
        let currYear = null;
        return (<Row id='sticky-header'>
            {/*year row*/}
            <Cell className='star-cell header' id='section-header'></Cell>
            <Cell className='header' id='sticky-name'></Cell>
            <Cell className='header' id='sticky-unit'></Cell>
            {dates.map((date) => { //years
                const year = moment(date, 'DD MMM YYYY').year();
                if (year !== currYear) {
                    currYear = year;
                    return <Cell key={date} className='header' id='sticky-header'>{currYear}</Cell>;
                }
                return <Cell className='header' key={date}></Cell>;
            })}
        </Row>);
    }
    renderDateHeader(dates) {
        return (
            <Row>
                {/*date row*/}
                <Cell id='section-header' className='header star-cell'>starred</Cell>
                <Cell className='header' id='sticky-name'></Cell>
                <Cell className='header' id='sticky-unit'></Cell>
                {dates.map((date) => { //month and day
                    const curr = new moment(date, 'DD MMM YYYY');
                    const day = curr.format('DD');
                    const month = curr.format('MMM');
                    return <Cell className='header' key={date}>{day + ' ' + month}</Cell>;
                }
                )}
            </Row>
        );
    }
    renderFavoriteData(starTableValues) {
        return starTableValues.map(n => { //n is a row in the table
            let background = starTableValues.indexOf(n) % 2 === 0 ? 'gray-background' : 'white-background';
            return (
                <Row key={n.id}>
                    <Cell className={'star-cell ' + background}>
                        {this.renderStar(n.name, n.id)}
                    </Cell>
                    <Cell className={'name-hover table-content ' + background} id='sticky-name' onClick={() => { this.toggleFavorites(n); this.props.reorderRows(n.name); }} onMouseOver={() => { this.setState({ hovered: n.id }); }} onMouseOut={() => { this.setState({ hovered: null }); }}>
                        {n.name}
                    </Cell>
                    <Cell className={'table-content ' + background} id='sticky-unit'>{n.unit}</Cell>
                    {/* Names and Units Cells */}
                    {Object.entries(n)[2][1].map((value, newkey) => {
                        const bands = starTableValues[starTableValues.indexOf(n)].bands;
                        // Data Cells
                        if (!bands || ((bands[1].high === 'max' || value < bands[1].high) && (bands[1].low === 'min' || value > bands[1].low))) {
                            return <Cell style={{ color: 'black' }} key={newkey} className={'table-content ' + background} >{value}</Cell>;
                        } else {
                            return <Cell style={{ color: 'red' }} key={newkey} className={'table-content ' + background}>{value}</Cell>;
                        }
                    })}
                </Row>
            );
        });
    }
    renderAllDataHeader(dates) {
        return (
            <Row>
                <Cell className='header star-cell' id='section-header'>all {this.props.pluralLabel}</Cell>
                <Cell className='header' id='sticky-name'></Cell>
                <Cell className='header' id='sticky-unit'></Cell>
                {dates.map((date,key) => {
                    return <Cell className='header' key={key}></Cell>;
                })}
            </Row>
        );
    }
    renderAllData(tableValues) {
        return tableValues.map(n => { //n is a row in the table
            let background = tableValues.indexOf(n) % 2 === 0 ? 'gray-background' : 'white-background';
            return (
                <Row key={n.id}>
                    {/* Names and Units Cells */}
                    <Cell className={'star-cell ' + background}>
                        {this.renderStar(n.name, n.id)}
                    </Cell>
                    <Cell className={`name-hover table-content ` + background} id='sticky-name' onClick={() => { this.toggleFavorites(n); this.props.reorderRows(n.name); }} onMouseOver={() => { this.setState({ hovered: n.id }); }} onMouseOut={() => { this.setState({ hovered: null }); }}>
                        {n.name}
                    </Cell>
                    <Cell className={'table-content ' + background} id='sticky-unit'>{n.unit}</Cell>
                    {Object.entries(n)[2][1].map((value, newkey) => {
                        const matchingDataPoint = this.props.tdpSearchSuggestions.find(s => {
                            return s.section === this.props.conditionSectionName && value !== '' && s.contentSnapshot.includes(value);
                        });
                        let cellClassName = matchingDataPoint ? 'highlighted cell-width' : 'cell-width';
                        const bands = tableValues[tableValues.indexOf(n)].bands;
                        if (tableValues.indexOf(n) === 0) {
                            cellClassName += ' bordered-body';
                        }
                        // Data Cells
                        if (!bands || ((bands[1].high === 'max' || value < bands[1].high) && (bands[1].low === 'min' || value > bands[1].low))) {
                            return <Cell style={{ color: 'black' }} key={newkey} className={'table-content ' + background}>{value}</Cell>;
                        } else {
                            return <Cell style={{ color: 'red' }} key={newkey} className={'table-content ' + background}>{value}</Cell>;
                        }
                    })}
                </Row>
            );
        });
    }
    render() {
        const [tableValues, dates, starTableValues] = this.gatherTableValues();
        let currYear = null;
        return (
            <div className='horizontal-scroll'>
                {/* <div className='vertical-scroll'> */}
                <StickyTable>
                    {this.renderYearHeader(dates)}
                    {this.renderDateHeader(dates)}
                    {this.renderFavoriteData(starTableValues)}
                </StickyTable>
                {/* </div> */}
                {/* <div className='vertical-scroll'> */}
                <StickyTable>
                    {this.renderAllDataHeader(dates)}
                    {this.renderAllData(tableValues)}
                </StickyTable>
                {/* </div> */}
            </div>
        );
    }
};

LongitudinalTable.propTypes = {
    dataInfo: propTypes.array.isRequired,
    tdpSearchSuggestions: propTypes.array,
    conditionSectionName: propTypes.string,
    reorderRows: propTypes.func,
    subsectionLabel: propTypes.string,
    starredData: propTypes.array,
    pluralLabel: propTypes.string,
};
