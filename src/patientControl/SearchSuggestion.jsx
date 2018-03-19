import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'material-ui/Menu';

class SearchSuggestion extends React.Component {
    render() { 
        const { suggestion, index, itemProps, highlightedIndex, selectedItem } = this.props;
        const isHighlighted = highlightedIndex === index;
        const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;
        return (
            <MenuItem
                {...itemProps}
                selected={isHighlighted}
                component="div"
                style={{
                    fontWeight: isSelected ? 500 : 400,
                }}
            >
                {suggestion.contentSnapshot}
            </MenuItem>
        );
    }
}

SearchSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

export default SearchSuggestion;