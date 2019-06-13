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
        };
        this.toggleFavorites = this.toggleFavorites.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.dataInfo, nextProps.dataInfo)) {
            this.setState({
                favorites: nextProps.dataInfo.filter(data => data.favorite).map((obj) => {
                    return obj.name;
                })});
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
            tableValues.push(this.createData(data.name, data.unit, Object.values(data.datesAndData), index, data.bands, data.favorite));
            predates.push(Object.keys(this.props.dataInfo[index].datesAndData));
        }
        const dates = _.uniq(_.flattenDeep(predates));
        const sortFunction = (date1,date2) => {
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
    toggleFavorites(section) {
        const newFavorites = this.state.favorites;
        if (_.includes(this.state.favorites, section.name)) {
            newFavorites.splice(this.state.favorites.indexOf(section.name), 1);
            this.setState({favorites: newFavorites});
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
                    <TableCell className='star-cell'></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    {dates.map((date) => {
                        if (date.substring(7) !== currYear) {
                            currYear = date.substring(7);
                            return <TableCell key={date} className='table-header'>{currYear}</TableCell>;
                        }
                        return <TableCell key={date}></TableCell>;
                    })}
                </TableRow>
                <TableRow>
                    <TableCell className='star-cell'></TableCell>
                    <TableCell className='table-header'>{this.props.subsectionLabel}</TableCell>
                    <TableCell className='table-header'>Unit</TableCell>
                    {dates.map(function (date) { //makes a new date column-heading for each date in the dates object defined in the constructor
                        return <TableCell className='table-header' key={date}>{date.substring(0, 7)}</TableCell>;
                    }
                    )}
                </TableRow>
            </TableHead>

        );
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
                    <TableCell className='star-cell'> {_.includes(this.state.favorites, n.name) ? <FontAwesome className='star' name='star' /> : <div></div> }</TableCell>
                    <TableCell className={`name ${clickedClass} ${subsectionClassName}`} onClick={() => { this.toggleFavorites(n); }}>
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
                            return <TableCell style={{color: 'black'}} key={newkey} className={cellClassName}>{value}</TableCell>;
                        } else {
                            return <TableCell style={{color: 'red'}} key={newkey} className = {cellClassName}>{value}</TableCell>;
                        }
                    })}
                </TableRow>
            );
        });
    }
    render() {
        const [tableValues, dates] = this.gatherTableValues();
        return (
            <div className='tabular-list table-scrollable'> {/* tabular-list brings in all the right formatting stuff so that the table format matches the rest of the tables*/}
                <Table>
                    {this.renderHeader(dates)}
                    <TableBody>
                        {this.renderData(tableValues)}
                    </TableBody>
                </Table>
            </div>
        );
    }
};

LongitudinalTable.propTypes = {
    dataInfo: propTypes.array.isRequired,
    tdpSearchSuggestions: propTypes.array,
    conditionSectionName: propTypes.string
};