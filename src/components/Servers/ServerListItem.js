import { Paper, Tooltip, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  serverListItem: {
    transition: "all .5s",
    height: 44,
    width: 44,
    minHeight: 40,
    color: "#43b581",
    borderRadius: 22,
    // backgroundSize: '44px 44px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    objectFit: 'contain',
    backgroundColor: theme.palette.secondary.dark,
    margin: 6,
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      backgroundColor: '#43b581',
      borderRadius: "35%",
    },
  },
  selected: {
    transition: "all .5s",
    color: "white",
    backgroundColor: '#43b581',
    borderRadius: "35%",
  }
}));

const ServerListItem = ({
  listItemProps,
  id,
  title,
  selected,
  setSelected,
  children,
}) => {
  const classes = useStyles();
  const getSelectedStyles = () => {
    return selected ? {  borderLeft: '3px solid white', marginLeft: '-3px' } : { }
  }
  return (
    <div onClick={() => setSelected(id)}>
      <div style={getSelectedStyles()}>
      <Tooltip placement="right" title={title}>
        <Paper
        onClick={() => setSelected(id)}
          className={clsx( selected ? 
            [classes.serverListItem, classes.selected] : [classes.serverListItem]
          )}
          {...listItemProps}
        >
          {children}
        </Paper>
      </Tooltip>
      </div>
    </div>
  );
};

export default ServerListItem;
