import { withStyles } from 'material-ui/styles';
import Button from './Button';

const styles = {
  root: {
    fontSize: '.8rem',
    height: "50px",
    margin: 0.5,
    width: "130px",
    backgroundColor: "white",
    textTransform: "none"
  }
};

export default withStyles(styles)(Button);
