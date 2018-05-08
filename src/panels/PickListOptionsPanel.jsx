import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MaterialButton from 'material-ui/Button';
import Tooltip from 'rc-tooltip';
import './PickListOptionsPanel.css';

export default class PickListOptionsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {

            tooltipVisibility: 'visible'
        }
    }


    // componentWillReceiveProps = (nextProps) => {
    //     console.log("in pick list options panel");
    //     console.log(nextProps.arrayOfPickLists);
    // }
    mouseLeave = () => {
        this.setState({ tooltipVisibility: 'hidden' })
    }

    mouseEnter = () => {
        this.setState({ tooltipVisibility: 'visible' })
    }

    // Switch view (i.e clinical notes view or context tray)
    toggleView(mode) {
        this.props.updateNoteAssistantMode(mode);
    }

    handleOptionClick(option) {
        console.log("you clicked: " + option);
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
                        {this.renderShortcutOptions(shortcut.options, i)}
                    </div>
                )
            })
        );
    }

    renderShortcutOptions(options, i) {

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
                                className="option-btn"
                                style={{textTransform: "none"}}
                                onClick={() => {
                                    this.handleOptionClick(option)
                                }}>
                                {optionLabel}
                            </MaterialButton>
                        </Tooltip>
                    </div>
                )
            })
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
