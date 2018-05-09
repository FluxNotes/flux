import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MaterialButton from 'material-ui/Button';
import Tooltip from 'rc-tooltip';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';

import './PickListOptionsPanel.css';

export default class PickListOptionsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltipVisibility: 'visible',
            optionIndex: "",

        }

        this.selectedOptions = [];
        this.option_btn_classname = "option-btn";
    }

    mouseLeave = () => {
        this.setState({tooltipVisibility: 'hidden'})
    }

    mouseEnter = () => {
        this.setState({tooltipVisibility: 'visible'})
    }

    // Switch view (i.e clinical notes view or context tray)
    toggleView(mode) {
        this.props.updateNoteAssistantMode(mode);
    }

    handleOptionButtonClick(option, trigger) {
        // this.option_btn_classname = "option-btn-selected";
        console.log("you clicked: " + option);
        this.updateSelectedOptions(option, trigger);

    }

    handleOptionDropDownSelection(index, options, trigger) {

        this.setState({optionIndex: index});

        console.log("you selected: " + options[index]);
        this.updateSelectedOptions(options[index], trigger);

    }

    updateSelectedOptions(selectedOption, trigger) {
        console.log("--------selectedOptions length: " + this.selectedOptions.length);


        if (this.selectedOptions.length > 0) {

            for (let i=0; i < this.selectedOptions.length; i++) {
                if (trigger === this.selectedOptions[i].trigger) {
                    this.selectedOptions[i] = {
                        "trigger": trigger,
                        "selectedOption": selectedOption
                    }
                } else {
                    this.selectedOptions.push(
                        {
                            "trigger": trigger,
                            "selectedOption": selectedOption
                        }
                    )
                    break;
                }
            }
        }
        else {
            this.selectedOptions.push(
                {
                    "trigger": trigger,
                    "selectedOption": selectedOption
                }
            )
        }

        if (this.selectedOptions.length === this.props.arrayOfPickLists.length) {
            console.log("got all " + this.props.arrayOfPickLists.length + " of them move on");


            this.props.updateTemplateWithSelectedPickListOptions(this.selectedOptions);
        }

        console.log("selected options");
        console.log(this.selectedOptions);
    }

    renderPanel(pickLists, i) {


        // Loop through each shortcut in the array and render the options
        return (
            pickLists.map((shortcut, i) => {
                let shortcutName = shortcut.trigger.slice(1);
                shortcutName = shortcutName.charAt(0).toUpperCase() + shortcutName.slice(1);
                return (
                    <div key={i} className="shortcut-options-container">
                        {shortcutName}
                        {this.renderShortcutOptions(shortcut, i)}
                    </div>
                )
            })
        );
    }

    renderShortcutOptions(shortcut, i) {

        let options = shortcut.options;
        let trigger = shortcut.trigger;

        if (options.length < 8) {
            return (
                options.map((option, i) => {

                    // const largeTrigger = option.length > 100;
                    let optionLabel = "";
                    if (option.length > 12) {
                        optionLabel = option.slice(0, 12);
                    } else {
                        optionLabel = option;
                    }
                    const text = <span>{option}</span>
                    return (
                        <div key={i}>
                            <Tooltip
                                key={i}
                                overlayStyle={{'visibility': this.state.tooltipVisibility}}
                                placement="left"
                                overlay={text}
                                destroyTooltipOnHide={true}
                                mouseEnterDelay={0.5}
                                onMouseEnter={this.mouseEnter}
                                onMouseLeave={this.mouseLeave}
                            >
                                <MaterialButton
                                    raised
                                    id={`${option}-btn`}
                                    className={this.option_btn_classname}
                                    style={{textTransform: "none"}}
                                    onClick={() => {
                                        this.handleOptionButtonClick(option, trigger)
                                    }}>
                                    {optionLabel}
                                </MaterialButton>
                            </Tooltip>
                        </div>
                    )
                })
            );
        } else {
            return (
                <div className="option-select-container">
                    <Select
                        className="option-select"
                        value={this.state.optionIndex}
                        onChange={(event) => this.handleOptionDropDownSelection(event.target.value, options, trigger)}
                    >

                        {this.renderOptionList(options)}
                    </Select>
                </div>
            );
        }
    }

    renderOptionList(options) {
        return options.map((option, index) =>
            <MenuItem
                className="option-item"
                key={`option-${index}`}
                value={index}>
                {option}
            </MenuItem>
        );
    }


    render() {

        let pickLists = this.props.arrayOfPickLists;

        return (
            <div className="pickList-options-panel">

                {this.renderPanel(pickLists)}

                <MaterialButton
                    raised
                    id="cancel-btn"
                    onClick={() => {
                        this.toggleView("clinical-notes")
                    }}>
                    Cancel
                </MaterialButton>
            </div>
        );
    }
}

PickListOptionsPanel.proptypes = {
    updateNoteAssistantMode: PropTypes.func.isRequired,
    arrayOfPickLists: PropTypes.array.isRequired,
    updateTemplateWithSelectedPickListOptions: PropTypes.func.isRequired
};
