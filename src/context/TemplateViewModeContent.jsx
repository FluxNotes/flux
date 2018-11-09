import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TemplateForm from '../forms/TemplateForm';

export default class TemplateViewModeContent extends Component {

    // These don't need to be stored as state since they're not being updated
    templates = [
        { name: 'physical exam', content: 'Vitals: @vitals\nSkin:\nLymph:' },
        { name: 'follow-up', content: 'REASON FOR VISIT:\n@patient following up on @condition on @date of visit. @reason for next visit.\n\nONCOLOGY HISTORY:\n@ONCOHIST\n\nHISTORY OF PRESENT ILLNESS:\n\n\nREVIEW OF SYSTEMS:\n@ROS\n\nALLERGIES:\n@ALLERGIES\n\nMEDICATIONS:\n@active medications\n\nPHYSICAL EXAM:\n\n\nASSESSMENT:\n\n\nPLAN:\n\n' },
        { name: 'initial consult', content: 'REASON FOR VISIT:\n@patient presenting with @condition for initial consult on @date of visit. @reason for next visit. @referred by.\n\nHISTORY OF PRESENT ILLNESS:\n\n\nREVIEW OF SYSTEMS:\n@ROS\n\nALLERGIES:\n@ALLERGIES\n\nMEDICATIONS:\n@active medications\n\nPHYSICAL EXAM:\n\n\nASSESSMENT:\n\n\nPLAN:\n\n' },
        { name: 'test', content: 'FOLLOW UP:\nPatient is showing signs of @condition @ONCOHIST @condition @ONCOHIST\n\nMEDICATIONS:\n@medication\n\nProcedures:\n@procedure' },
        { name: 'consult note', content: '@patient presenting with ' }
    ];

    // Insert the content of the template as you would a shortcut
    insertTemplate = (i) => {
        this.props.setInsertingTemplate(true);
        this.props.onShortcutClicked(this.templates[i].content);
    }

    // Just render the form for the templates; if additional information was to rendered, we would do it here.
    render() {
        return (
            <TemplateForm
                handleClick={this.insertTemplate}
                heading=""
                patient={this.props.patient}
                templates={this.templates.map((item) => { return item.name })}
            />
        );
    }
}

TemplateViewModeContent.proptypes = {
    onShortcutClicked: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
    setInsertingTemplate: PropTypes.func.isRequired,
}
