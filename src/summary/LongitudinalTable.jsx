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
    // renderLeftTableHeader() {
    //     return (
    //             <Row>
    //                 <Cell className='star-cell'>starred {this.props.pluralLabel}</Cell>
    //                 <Cell></Cell>
    //                 <Cell></Cell>
    //             </Row>
    //             <Row>
    //                 <Cell className='star-cell'>&nbsp;</Cell>
    //                 <Cell className='table-header'></Cell>
    //                 <Cell className='table-header'></Cell>
    //             </Row>
    //     );
    // }
    renderLeftFavoriteData() {
        const starTableValues = this.gatherTableValues()[2];
        return starTableValues.map(n => { //n is a row in the table
            const matchingSubsection = this.props.tdpSearchSuggestions.find(s => {
                return s.section === this.props.conditionSectionName && s.valueTitle === 'Subsection' && s.subsection === n.name;
            });
            let clickedClass = _.includes(this.state.favorites, n.name) ? 'clicked' : '';
            const subsectionClassName = matchingSubsection ? 'highlighted' : '';
            return (
                <Row key={n.id}>
                    {/* Names and Units Cells */}
                    <Cell className='star-cell'>
                        {this.renderStar(n.name, n.id)}
                    </Cell>
                    <Cell className={`name ${clickedClass} ${subsectionClassName}`} onClick={() => { this.toggleFavorites(n); this.props.reorderRows(n.name); }} onMouseOver={() => { this.setState({ hovered: n.id }); }} onMouseOut={() => { this.setState({ hovered: null }); }}>
                        {n.name}
                    </Cell>
                    <Cell>{n.unit}</Cell>
                    {/* Names and Units Cells */}
                    {Object.entries(n)[2][1].map((value, newkey) => {
                        const matchingDataPoint = this.props.tdpSearchSuggestions.find(s => {
                            return s.section === this.props.conditionSectionName && value !== '' && s.contentSnapshot.includes(value);
                        });
                        const cellClassName = matchingDataPoint ? 'highlighted cell-width' : 'cell-width';
                        const bands = starTableValues[starTableValues.indexOf(n)].bands;
                        // Data Cells
                        if (!bands || ((bands[1].high === 'max' || value < bands[1].high) && (bands[1].low === 'min' || value > bands[1].low))) {
                            return <Cell style={{ color: 'black' }} key={newkey} className={cellClassName}>{value}</Cell>;
                        } else {
                            return <Cell style={{ color: 'red' }} key={newkey} className={cellClassName}>{value}</Cell>;
                        }
                    })}
                </Row>
            );
        });
    }
    extraEvenRow() {
        const starTableValues = this.gatherTableValues()[2];
        if (starTableValues.length % 2 === 0) {
            return <Row></Row>;
        };
    }
    renderLeftTableData(tableValues) {
        return tableValues.map(n => { //n is a row in the table
            const matchingSubsection = this.props.tdpSearchSuggestions.find(s => {
                return s.section === this.props.conditionSectionName && s.valueTitle === 'Subsection' && s.subsection === n.name;
            });
            let clickedClass = _.includes(this.state.favorites, n.name) ? 'clicked' : '';
            const subsectionClassName = matchingSubsection ? 'highlighted' : '';
            return (
                <Row key={n.id}>
                    {/* Names and Units Cells */}
                    <Cell className='star-cell'>
                        {this.renderStar(n.name, n.id)}
                    </Cell>
                    <Cell className={`name ${clickedClass} ${subsectionClassName}`} onClick={() => { this.toggleFavorites(n); this.props.reorderRows(n.name); }} onMouseOver={() => { this.setState({ hovered: n.id }); }} onMouseOut={() => { this.setState({ hovered: null }); }}>
                        {n.name}
                    </Cell>
                    <Cell>{n.unit}</Cell>
                </Row>

            );
        });
    }
    // renderRightTableHeader(dates) {
    //     let currYear = null;
    //     return (
    //         <Row>
    //             {dates.map((date) => {
    //                 const year = moment(date, 'DD MMM YYYY').year();
    //                 if (year !== currYear) {
    //                     currYear = year;
    //                     return <Cell key={date} className='table-header'>{currYear}</Cell>;
    //                 }
    //                 return <Cell key={date}></Cell>;
    //             })}
    //         </Row>
    //         <Row>
    //             {dates.map((date) => { //makes a new date column-heading for each date in the dates object defined in the constructor
    //                 const curr = new moment(date, 'DD MMM YYYY');
    //                 const day = curr.format('DD');
    //                 const month = curr.format('MMM');
    //                 return <Cell className='table-header' key={date}>{day + ' ' + month}</Cell>;
    //             }
    //             )}
    //         </Row>
    //     );
    // }
    renderRightFavoriteData() {
        const starTableValues = this.gatherTableValues()[2];
        return starTableValues.map(n => { //n is a row in the table
            return (
                <Row key={n.id}>
                    {/* Names and Units Cells */}
                    {Object.entries(n)[2][1].map((value, newkey) => {
                        const matchingDataPoint = this.props.tdpSearchSuggestions.find(s => {
                            return s.section === this.props.conditionSectionName && value !== '' && s.contentSnapshot.includes(value);
                        });
                        const cellClassName = matchingDataPoint ? 'highlighted cell-width' : 'cell-width';
                        const bands = starTableValues[starTableValues.indexOf(n)].bands;
                        // Data Cells
                        if (!bands || ((bands[1].high === 'max' || value < bands[1].high) && (bands[1].low === 'min' || value > bands[1].low))) {
                            return <Cell style={{ color: 'black' }} key={newkey} className={cellClassName}>{value}</Cell>;
                        } else {
                            return <Cell style={{ color: 'red' }} key={newkey} className={cellClassName}>{value}</Cell>;
                        }
                    })}
                </Row>
            );
        });
    }
    // renderRightTableData(tableValues) {
    //     return (
    //             {tableValues.map(n => { //n is a row in the table
    //                 return (
    //                     <TableRow key={n.id}>
    //                         {/* Names and Units Cells */}
    //                         {Object.entries(n)[2][1].map((value, newkey) => {
    //                             const matchingDataPoint = this.props.tdpSearchSuggestions.find(s => {
    //                                 return s.section === this.props.conditionSectionName && value !== '' && s.contentSnapshot.includes(value);
    //                             });
    //                             let cellClassName = matchingDataPoint ? 'highlighted cell-width' : 'cell-width';
    //                             const bands = tableValues[tableValues.indexOf(n)].bands;
    //                             if (tableValues.indexOf(n) === 0) {
    //                                 cellClassName += ' bordered-body';
    //                             }
    //                             // Data Cells
    //                             if (!bands || ((bands[1].high === 'max' || value < bands[1].high) && (bands[1].low === 'min' || value > bands[1].low))) {
    //                                 return <Cell style={{ color: 'black' }} key={newkey} className={cellClassName}>{value}</Cell>;
    //                             } else {
    //                                 return <Cell style={{ color: 'red' }} key={newkey} className={cellClassName}>{value}</Cell>;
    //                             }
    //                         })}
    //                     </TableRow>
    //                 );
    //             })}
    //             {this.extraEvenRow()}
    //     );
    // }
    synchronizeScroll = (div) => {
        const div1 = this.refs.div1;
        const div2 = this.refs.div2;
        if (div === div1) {
            div2.scrollLeft = div1.scrollLeft;
        } else {
            div1.scrollLeft = div2.scrollLeft;
        }
    }
    render() {
        const [tableValues, dates, starTableValues] = this.gatherTableValues();
        let realignClass = '';
        let currYear = null;
        if (starTableValues.length !== 0) { //to realign the tables that are off by 1 pixel if there are favorites
            realignClass += ' right-table-spacing';
        }
        return (
            <div className=' max-height vertical-scroll'>
                <StickyTable>
                    <Row>
                        {/*year row*/}
                        <Cell className='star-cell header'></Cell>
                        <Cell className='header' id='sticky-name'></Cell>
                        <Cell className='header' id='sticky-unit'></Cell>
                        {dates.map((date) => { //years
                            const year = moment(date, 'DD MMM YYYY').year();
                            if (year !== currYear) {
                                currYear = year;
                                return <Cell key={date} className='header'>{currYear}</Cell>;
                            }
                            return <Cell className='header' key={date}></Cell>;
                        })}
                    </Row>
                    <Row>
                        {/*date row*/}
                        <Cell id='section-header' className='header'>starred</Cell>
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
                    {/* favorite data */}
                    {starTableValues.map(n => { //n is a row in the table
                        let background = starTableValues.indexOf(n) % 2 === 0? 'gray-background' : 'white-background';
                        return (
                            <Row key={n.id}>
                                <Cell className={'star-cell '+background}>
                                    {this.renderStar(n.name, n.id)}
                                </Cell>
                                <Cell className={'name-hover table-content '+background} id='sticky-name' onClick={() => { this.toggleFavorites(n); this.props.reorderRows(n.name); }} onMouseOver={() => { this.setState({ hovered: n.id }); }} onMouseOut={() => { this.setState({ hovered: null }); }}>
                                    {n.name}
                                </Cell>
                                <Cell className={'table-content '+background} id='sticky-unit'>{n.unit}</Cell>
                                {/* Names and Units Cells */}
                                {Object.entries(n)[2][1].map((value, newkey) => {
                                    const bands = starTableValues[starTableValues.indexOf(n)].bands;
                                    // Data Cells
                                    if (!bands || ((bands[1].high === 'max' || value < bands[1].high) && (bands[1].low === 'min' || value > bands[1].low))) {
                                        return <Cell style={{ color: 'black' }} key={newkey} className={'table-content '+background} >{value}</Cell>;
                                    } else {
                                        return <Cell style={{ color: 'red' }} key={newkey} className={'table-content ' +background}>{value}</Cell>;
                                    }
                                })}
                            </Row>
                        );
                    })}
                    {this.extraEvenRow()}
                </StickyTable>
                <StickyTable stickyColumnCount={3}>
                    {/*the in-between*/}
                    <Row>
                        <Cell className='list-column-heading' id='section-header'>all {this.props.pluralLabel}</Cell>
                        <Cell className='list-subsection-header list-column-heading'></Cell>
                        <Cell className='list-subsection-header list-column-heading'></Cell>
                    </Row>
                    {/*all labs/data body*/}
                    {tableValues.map(n => { //n is a row in the table
                        const matchingSubsection = this.props.tdpSearchSuggestions.find(s => {
                            return s.section === this.props.conditionSectionName && s.valueTitle === 'Subsection' && s.subsection === n.name;
                        });
                        let clickedClass = _.includes(this.state.favorites, n.name) ? 'clicked' : '';
                        const subsectionClassName = matchingSubsection ? 'highlighted' : '';
                        return (
                            <Row key={n.id}>
                                {/* Names and Units Cells */}
                                <Cell className='star-cell'>
                                    {this.renderStar(n.name, n.id)}
                                </Cell>
                                <Cell className={`name-hover ${clickedClass} ${subsectionClassName}`} onClick={() => { this.toggleFavorites(n); this.props.reorderRows(n.name); }} onMouseOver={() => { this.setState({ hovered: n.id }); }} onMouseOut={() => { this.setState({ hovered: null }); }}>
                                    {n.name}
                                </Cell>
                                <Cell>{n.unit}</Cell>
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
                                        return <Cell style={{ color: 'black' }} key={newkey} className={cellClassName}>{value}</Cell>;
                                    } else {
                                        return <Cell style={{ color: 'red' }} key={newkey} className={cellClassName}>{value}</Cell>;
                                    }
                                })}
                            </Row>
                        );
                    })}
                    {this.extraEvenRow()}
                </StickyTable>
            </div>
        );
    }};

LongitudinalTable.propTypes = {
    dataInfo: propTypes.array.isRequired,
    tdpSearchSuggestions: propTypes.array,
    conditionSectionName: propTypes.string,
    reorderRows: propTypes.func,
    subsectionLabel: propTypes.string,
    starredData: propTypes.array,
    pluralLabel: propTypes.string,
};
