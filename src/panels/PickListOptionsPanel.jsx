import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MaterialButton from 'material-ui/Button';
import SingleChoiceButton from '../forms/SingleChoiceButton';
import Tooltip from 'rc-tooltip';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';
import './PickListOptionsPanel.css';

export default class PickListOptionsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltipVisibility: 'visible',
            // optionIndex keeps track of index of item selected in the drop down
            optionIndex: "",
            selectedButton: ""
        }

        this.selectedOptions = [];
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

    // Cancels insertion of text
    handleCancelButtonClick = () => {
        this.toggleView("clinical-notes");
        this.props.updateTemplateToInsert(null);
    }

    // Pass array of select of pick list options to be used in updating the template to be inserted
    handleOkButtonClick = () => {
        this.props.updateTemplateWithSelectedPickListOptions(this.selectedOptions);
    }

    handleOptionButtonClick(option, trigger) {
        this.setState({selectedButton: option});
        this.updateSelectedOptions(option, trigger);
    }

    handleOptionDropDownSelection(index, options, trigger) {
        this.setState({optionIndex: index});
        this.updateSelectedOptions(options[index], trigger);
    }

    // Update selectedOptions array, which keeps track of the option selected by the user for each pick list.
    // Note: Only one option is saved per pick list
    updateSelectedOptions(selectedOption, trigger) {

        const index = this.selectedOptions.findIndex((option) => {
            return trigger === option.trigger;
        });

        // If there are other options that are saved in the array, check if the trigger option has already been saved
        // If it has already been saved, overwrite the option with the most recent option selected
        if (index >= 0) {
            this.selectedOptions[index] = {
                "trigger": trigger,
                "selectedOption": selectedOption
            }
        }
        // If no options have been saved, push to the array
        else {
            this.selectedOptions.push(
                {
                    "trigger": trigger,
                    "selectedOption": selectedOption
                }
            )
        }
    }

    // Render pick list option panel
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

    // Render the options for each pick list (shortcut)
    renderShortcutOptions(shortcut, i) {
        let options = shortcut.options;
        const trigger = shortcut.trigger;

        // If the number of options is small, generate buttons for each button
        if (options.length < 8) {
            return (
                options.map((option, i) => {
                    let optionLabel = "";
                    if (option.length > 12) {
                        optionLabel = option.slice(0, 12) + "...";
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
                                <SingleChoiceButton
                                    buttonKey={i}
                                    className="option-btn"
                                    buttonText={optionLabel}
                                    onClick={(e) => this.handleOptionButtonClick(option, trigger)}
                                    isSelected={option === this.state.selectedButton}
                                />
                            </Tooltip>
                        </div>
                    )
                })
            );
        }
        // If there are a lot of options, render a drop down instead of buttons
        else {
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

    // Render option list for the drop dow
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
        const pickLists = this.props.arrayOfPickLists;

        return (
            <div className="pickList-options-panel">
                {this.renderPanel(pickLists)}

                <MaterialButton
                    raised
                    id="cancel-btn"
                    onClick={this.handleCancelButtonClick}>
                    Cancel
                </MaterialButton>
                <MaterialButton
                    raised
                    id="ok-btn"
                    onClick={this.handleOkButtonClick}>
                    Ok
                </MaterialButton>
            </div>
        );
    }
}

PickListOptionsPanel.proptypes = {
    updateNoteAssistantMode: PropTypes.func.isRequired,
    arrayOfPickLists: PropTypes.array.isRequired,
    updateTemplateToInsert: PropTypes.func.isRequired,
    updateTemplateWithSelectedPickListOptions: PropTypes.func.isRequired
};
