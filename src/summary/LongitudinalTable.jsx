import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import _ from 'lodash';
import moment from 'moment';
import './LongitudinalTable.css';
import propTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

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
    createData(name, unit, data, id, bands, favorite) {
        return { name, unit, data, id, bands, favorite }; //the names given here are the keys and the values passed into those parameters become the key's values
    }
    gatherTableValues() {
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
        return [tableValues, dates];
    }
    toggleFavorites = (section) => {
        const newFavorites = this.state.favorites;
        if (_.includes(this.state.favorites, section.name)) {
            newFavorites.splice(this.state.favorites.indexOf(section.name), 1);
            this.setState({ favorites: newFavorites });
        }
        else {
            newFavorites.push(section.name);
            this.setState({ favorites: newFavorites });
        }
    }
    renderHeader(dates) {
        let currYear = null;
        return (
            <TableHead>
                <TableRow>
                    <TableCell className='star-cell' />
                    <TableCell />
                    <TableCell />
                    {dates.map((date) => {
                        const year = moment(date, 'DD MMM YYYY').year();
                        if (year !== currYear) {
                            currYear = year;
                            return <TableCell key={date} className='table-header'>{currYear}</TableCell>;
                        }
                        return <TableCell key={date}></TableCell>;
                    })}
                </TableRow>
                <TableRow>
                    <TableCell className='star-cell' />
                    <TableCell className='table-header'>{this.props.subsectionLabel}</TableCell>
                    <TableCell className='table-header'>Unit</TableCell>
                    {dates.map((date) => { //makes a new date column-heading for each date in the dates object defined in the constructor
                        const curr = new moment(date, 'DD MMM YYYY');
                        const day = curr.format('DD');
                        const month = curr.format('MMM');
                        return <TableCell className='table-header' key={date}>{day + ' ' + month}</TableCell>;
                    }
                    )}
                </TableRow>
            </TableHead>

        );
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
    renderData(tableValues) {
        return tableValues.map(n => { //n is a row in the table
            const matchingSubsection = this.props.tdpSearchSuggestions.find(s => {
                return s.section === this.props.conditionSectionName && s.valueTitle === 'Subsection' && s.subsection === n.name;
            });
            let clickedClass = _.includes(this.state.favorites, n.name) ? 'clicked' : '';
            const subsectionClassName = matchingSubsection ? 'highlighted' : '';
            return (
                <TableRow key={n.id}>
                    {/* Names and Units Cells */}
                    <TableCell className='star-cell'>
                        {this.renderStar(n.name, n.id)}
                    </TableCell>
                    <TableCell className={`name ${clickedClass} ${subsectionClassName}`} onClick={() => { this.toggleFavorites(n); this.props.reorderRows(n.name); }} onMouseOver={() => { this.setState({ hovered: n.id }); }} onMouseOut={() => { this.setState({ hovered: null }); }}>
                        {n.name}
                    </TableCell>
                    <TableCell>{n.unit}</TableCell>
                    {Object.entries(n)[2][1].map((value, newkey) => {
                        const matchingDataPoint = this.props.tdpSearchSuggestions.find(s => {
                            return s.section === this.props.conditionSectionName && value !== '' && s.contentSnapshot.includes(value);
                        });
                        const cellClassName = matchingDataPoint ? 'highlighted' : '';
                        const bands = tableValues[tableValues.indexOf(n)].bands;
                        // Data Cells
                        if (!bands || ((bands[1].high === 'max' || value < bands[1].high) && (bands[1].low === 'min' || value > bands[1].low))) {
                            return <TableCell style={{ color: 'black' }} key={newkey} className={cellClassName}>{value}</TableCell>;
                        } else {
                            return <TableCell style={{ color: 'red' }} key={newkey} className={cellClassName}>{value}</TableCell>;
                        }
                    })}
                </TableRow>
            );
        });
    }
    renderFirstTable(tableValues) {
        return tableValues.map(n => { //n is a row in the table
            const matchingSubsection = this.props.tdpSearchSuggestions.find(s => {
                return s.section === this.props.conditionSectionName && s.valueTitle === 'Subsection' && s.subsection === n.name;
            });
            let clickedClass = _.includes(this.state.favorites, n.name) ? 'clicked' : '';
            const subsectionClassName = matchingSubsection ? 'highlighted' : '';
            return (
                <TableRow key={n.id}>
                    {/* Names and Units Cells */}
                    <TableCell className='star-cell'>
                        {this.renderStar(n.name)}
                    </TableCell>
                    <TableCell className={`name ${clickedClass} ${subsectionClassName}`} onClick={() => { this.toggleFavorites(n); this.props.reorderRows(n.name); }} onMouseEnter={() => { this.setState({ hovered: n.name }); }} onMouseLeave={() => { this.setState({ hovered: null }); }}>
                        {n.name}
                    </TableCell>
                    <TableCell>{n.unit}</TableCell>
                </TableRow>
            );
        });
    }
    render() {
        const [tableValues, dates] = this.gatherTableValues();
        let currYear = null;
        const matchingSubsection = null;
        return (
            <div className='tabular-list table-scrollable'> {/* tabular-list brings in all the right formatting stuff so that the table format matches the rest of the tables*/}
                <div className='floatLeft'>
                    <Table style={{ float: 'left' }}>
                        <TableHead>
                            <TableRow className='table-left'>
                                <TableCell className='star-cell'></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow className='table-left-two'>
                                <TableCell className='star-cell'></TableCell>
                                <TableCell className='table-header'>{this.props.subsectionLabel}</TableCell>
                                <TableCell className='table-header'>Unit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderFirstTable(tableValues)}
                        </TableBody>
                    </Table>
                </div>
                <div className='floatRight'>
                    <Table>
                        {this.renderHeader(dates)}
                        <TableBody>
                            {this.renderData(tableValues)}
                        </TableBody>
                    </Table>
                </div>
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
};