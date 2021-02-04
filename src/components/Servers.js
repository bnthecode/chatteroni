import { Divider, makeStyles } from "@material-ui/core";
import Drawer from "./Drawer";
import AddIcon from "@material-ui/icons/Add";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import { channelService, serverService, userService } from "../services";
import { useEffect, useState } from "react";

import ServerListItem from "./ServerListItem";
import AddServerDialog from "./AddServerDialog/AddServerDialog";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar-thumb": {
      display: "none",
    },
    "::-webkit-scrollbar": {
      display: "none",
    },
    "::-webkit-scrollbar-track": {
      display: "none",
    },
    "::-webkit-scrollbar-thumb": {
      display: "none",
    },
    "::-webkit-scrollbar-thumb:hover": {
      display: "none",
    },
  },
  drawer: {
    height: "100vh",
    overflowY: "auto",
    display: "flex",
    width: "72px",
    alignItems: "center",
    backgroundColor: "#202225",
  },
  divider: {
    backgroundColor: "#1e1e1e",
    margin: "0 16px 0 16px",
    height: 1,
    width: "calc(100% - 32px)",
  },
}));
const Servers = ({ setServer, setChannel, user }) => {
  const [servers, setServers] = useState([]);
  const [selected, setSelected] = useState("Home");
  const [showAddServerDialog, setAddServerDialogOpen] = useState(false);
  const isSelected = (id) => selected === id;

  useEffect(() => {
    const fetchServers = async () => {
      const servers = await serverService.getServers();
      setServers(servers);
    };
    fetchServers();
  }, []);

  const handleServerSelection = async (id) => {
    setSelected(id);
    const foundServer = servers.find((svr) => svr.id === id);
    setServer(foundServer);
    const channels = await channelService.getChannels(id);
    setChannel(channels.length ? channels[0] : {});
  };

  const handleAddServer = async (serverName) => {
    const newServer = await serverService.addServer(serverName, user);
    const userData = { assocatiedServers: [newServer.id] };
    await userService.updateUser(userData, user.uid);
    const serverList = await serverService.getServers();
    setServers(serverList);
    setAddServerDialogOpen(false);
  };

  const classes = useStyles();
  return (
    <Drawer anchor="left" className={classes.drawer}>
      <ServerListItem
        title="Home"
        id="Home"
        selected={isSelected("Home")}
        setSelected={setSelected}
      >
        <VideogameAssetIcon />
      </ServerListItem>
      <Divider className={classes.divider} />
      {servers.map((svr) => (
        <ServerListItem
          title={svr.name}
          id={svr.id}
          setSelected={handleServerSelection}
          selected={isSelected(svr.id)}
          listItemProps={{
            onClick: () => setServer(svr),
            style: { backgroundImage: `url(${svr.photoURL})` },
          }}
        />
      ))}
      <ServerListItem
        title="Add a server"
        id="Add a server"
        setSelected={setSelected}
        selected={isSelected("Add a server")}
        listItemProps={{
          onClick: () => setAddServerDialogOpen(true),
        }}
      >
        <AddIcon />
      </ServerListItem>
      <AddServerDialog
        showAddServerDialog={showAddServerDialog}
        handleAddServer={handleAddServer}
        setAddServerDialogOpen={setAddServerDialogOpen}
      />
    </Drawer>
  );
};

export default Servers;
