import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import variable from '../styles/_variables.scss';

const styles = {
  root: {
    border: 0,
    fontFamily: '"Open Sans", Arial, sans-serif',
    fontSize: "0.8em",
    color: "#555",
    '&:hover': {
        backgroundColor: variable.state
    }
  }

};

export default withStyles(styles)(MenuItem);
