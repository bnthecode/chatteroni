import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Grow,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerItem: {
    color: "white",
    width: "100%",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    borderRadius: 6,
  },
  menu: {
    position: "absolute",
    top: 54,
    left: 86,
    padding: 6,
    width: "calc(100% - 110px)",
    backgroundColor: "#1e1e1e",
  }, 
  menuItem: {
    fontSize: 12, fontWeight: 600
  }
}));
const HeaderOptions = ({ headerOptions, inviteFriends, handleAddChannel }) => {
  const classes = useStyles();
  return (
    <Grow in={headerOptions}>
      <Paper className={classes.menu}>
        <List>
          <ListItem
            onClick={handleAddChannel}
            className={classes.headerItem}
            dense
            button
          >
            <ListItemText
              primary={
                <Typography className={classes.menuItem}>
                  Add a channel
                </Typography>
              }
            ></ListItemText>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </ListItem>
          <ListItem
            onClick={inviteFriends}
            className={classes.headerItem}
            dense
            button
          >
            <ListItemText
              primary={
                <Typography className={classes.menuItem}>
                  Invite friends
                </Typography>
              }
            ></ListItemText>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </ListItem>
        </List>
      </Paper>
    </Grow>
  );
};

export default HeaderOptions;
