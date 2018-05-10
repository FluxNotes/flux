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
            selectedButtons: {}
        }

        // Add an index at the end of trigger string to differentiate shortcuts with the same trigger
        this.arrayOfPickLists = this.props.arrayOfPickLists.map((pickList, i) => {
            return {
                trigger: pickList.trigger + `_${i}`,
                options: pickList.options
            }
        });
        // triggerSelections are the selections made by the user for each pick List
        // pushing the trigger value first so that order of shortcuts remain the same
        this.triggerSelections = this.arrayOfPickLists.map((pickList) => {
            return {
                trigger: pickList.trigger
            };
        });
        console.log(this.arrayOfPickLists)
        console.log(this.triggerSelections)
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
        this.toggleView("context-tray");
        this.props.updateTemplateToInsert(null);
    }

    // Pass array of select of pick list options to be used in updating the template to be inserted
    handleOkButtonClick = () => {

        console.log("Ok button selected options");
        console.log(this.triggerSelections);

        this.triggerSelections = this.triggerSelections.map((triggerSelection, i) => {
            let underScoreIndex = triggerSelection.trigger.indexOf("_");
            return {
                trigger: triggerSelection.trigger.slice(0, underScoreIndex),
                selectedOption: triggerSelection.selectedOption
            }
        });

        this.props.updateTemplateWithSelectedPickListOptions(this.triggerSelections);

    }

    handleOptionButtonClick(option, trigger) {
        let selectedButtons = this.state.selectedButtons;
        selectedButtons[trigger] = option;

        this.setState(
            {
                "selectedButtons": selectedButtons
            }
        );

        console.log("selectedButton");
        console.log(this.state.selectedButtons);
        this.updateSelectedOptions(option, trigger);
    }

    handleOptionDropDownSelection(index, options, trigger) {
        this.setState({optionIndex: index});
        this.updateSelectedOptions(options[index], trigger);
    }

    // Update triggerSelections array, which keeps track of the option selected by the user for each pick list.
    // Note: Only one option is saved per pick list
    updateSelectedOptions(selectedOption, trigger) {
        const index = this.triggerSelections.findIndex((option) => {
            return trigger === option.trigger;
        });

        // Find index of trigger in triggerSelections and set the selectedOption
        if (index >= 0) {
            this.triggerSelections[index].selectedOption = selectedOption;
        } else {
            console.error(`Trigger ${trigger} is not in triggerSelections array.`);
        }
    }

    // Render pick list option panel
    renderPanel(pickLists, i) {
        // Loop through each shortcut in the array and render the options
        return (
            pickLists.map((shortcut, i) => {
                let underScoreIndex = shortcut.trigger.indexOf("_");
                let shortcutName = shortcut.trigger.slice(1, underScoreIndex);
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
                                    isSelected={option === this.state.selectedButtons[trigger]}
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
        return (
            <div className="pickList-options-panel">
                {this.renderPanel(this.arrayOfPickLists)}

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
