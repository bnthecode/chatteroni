import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCrown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import DialogItem from "../DialogItem";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    fontWeight: 800,
  },
  subtitle: {
    marginTop: 8,
    color: "grey",
  },

}));
const PageOne = ({ setStep, step }) => {
  const classes = useStyles();
  return (
    <>
      <DialogTitle>
        <Typography className={classes.title}>Create a server</Typography>
        <Typography variant="body2"  className={classes.subtitle}>
          Your server is where you and your friends hang out. Make yours and
          start talking.
        </Typography>
      </DialogTitle>
      <DialogItem
        title="Create My Own"
        clickHandler={() => setStep(step + 1)}
        iconLeft={faCrown}
        iconRight={faChevronRight}
      />
    </>
  );
};

export default PageOne;
