import { withStyles } from 'material-ui/styles';
import Select from 'material-ui/Select';

const styles = {
  root: {
    border: 0,
    fontFamily: '"Open Sans", Arial, sans-serif',
    fontSize: "0.9em",
    color: "#555",
  }

};

export default withStyles(styles)(Select);
