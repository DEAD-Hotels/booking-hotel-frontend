// import * as securityApi from "../api/securityApi";
// import {useSnackbar} from "../utils/snackbar";
// import {useContext} from "react";
// import {AppContext} from "../context/AppContext";
// import { IdleTimer } from 'react-idle-timer'
// import AppView from "./AppView";
// import {withRouter} from "react-router-dom";
// import Login from "../pages/login/Login";
// import {hot} from "react-hot-loader";
//
//
// const logout = (currentUsername, context, snackbar) => () => {
//     securityApi.logout()
//         .then(() => snackbar.showSuccess(`Вас слишком долго не было, ${currentUsername}`));
// }
//
// const App = (props) => {
//     const [context] = useContext(AppContext);
//     const {currentUser} = context;
//     const snackbar = useSnackbar();
//
//     const currentUserName = currentUser && currentUser.username;
//
//     return (
//         currentUser ?
//             <IdleTimer element={document} onIdle={logout(currentUserName, context, snackbar)}>
//                 <AppView {...props}/>
//             </IdleTimer>
//             :
//             <Login {...props}/>
//     )
// }
// export default withRouter(hot(module)(App));