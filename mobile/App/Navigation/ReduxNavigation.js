import React from "react";
import { BackHandler, Platform } from "react-native";
// import { addNavigationHelpers } from "react-navigation";
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import AppNavigation from "./AppNavigation";

/* ------------- Navigation Middleware ------------ */
export const navigationMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
)

const App = reduxifyNavigator(AppNavigation, "root");

// class ReduxNavigation extends React.Component {
//   componentDidUpdate() {
//     if (Platform.OS === "ios") return;
//     BackHandler.addEventListener("hardwareBackPress", () => {
//       const { dispatch, nav } = this.props;
//       // change to whatever is your first screen, otherwise unpredictable results may occur
//       if (
//         nav.routes.length === 1 &&
//         nav.routes[0].routeName === "LaunchScreenStack"
//       ) {
//         return false;
//       }
//       // if (shouldCloseApp(nav)) return false
//       dispatch({ type: "Navigation/BACK" });
//       return true;
//     });
//   }
//
//   componentWillUnmount() {
//     if (Platform.OS === "ios") return;
//     BackHandler.removeEventListener("hardwareBackPress");
//   }
//
//   render() {
//
//
//       return (
//       <App
//
//         // navigation={addNavigationHelpers({
//         //   dispatch: this.props.dispatch,
//         //   state: this.props.nav,
//         //   addListener: createReduxBoundAddListener("root")
//         // })}
//       />
//     );
//   }
// }

const mapStateToProps = state => ({ state: state.nav });
export default connect(mapStateToProps)(App);
