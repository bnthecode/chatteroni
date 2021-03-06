import { connect } from "react-redux";
import AppRouter from "./components/Router";

function App({ user }) {
  return (
    <div style={{ backgroundColor: "#36393f", height: "100vh", width: "100%" }}>
      <AppRouter user={user} />
    </div>
  );
}


const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(App);
