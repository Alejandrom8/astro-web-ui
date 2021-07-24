import {CssBaseline, ThemeProvider} from "@material-ui/core";
import Theme from './components/core/Theme';
import MainView from "./views";
import {useDispatch, useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import LoginView from './views/login';
import {LOADING, LOGIN_ERROR, LOGIN_SUCCESS, UPDATE_TOKEN} from "./store/types";
import {useLazyQuery, useQuery} from "@apollo/client";
import {useEffect, useRef, useState} from "react";
import authReducer from "./store/reducers/auth";

// const useRefreshToken = () => {
//     const dispatch = useDispatch(),
//         token = window.localStorage.getItem('refreshToken'),
//         [fetchRefreshQuery, { loading, error, data }] = useLazyQuery(gql`
//             query refreshToken($token: String) {
//                 refresh(refreshToken: $token)
//             }
//         `);
//
//     useEffect(() => {
//         fetchRefreshQuery({ variables: { token } });
//     });
//
//     useEffect(() => {
//         if (loading) return;
//         if (error) {
//             return dispatch({
//                 type: LOGIN_ERROR,
//                 payload: error[0]?.message
//             });
//         }
//         if (data) dispatch({ type: UPDATE_TOKEN, payload: data.refresh });
//     }, [loading, error, data]);
//
//     return [
//         data?.refresh,
//         () => fetchRefreshQuery({ variables: { token } })
//     ];
// };

function App() {
    const { token } = useSelector((state) =>state.authReducer);

    // const { token } = useSelector((state) => state.auth),
    //     [result, reFetcher] = useRefreshToken(),
    //     [intervalRef, setIntervalRef] = useState();
    //
    // useEffect(() => {
    //     if (!intervalRef) setIntervalRef(setInterval(() => reFetcher(), 1000 * 60 * 15));
    // }, [result]);

    return <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Router>
            <Switch>
                <Route exact path={'/'} render={(props) =>
                    token ? (
                        <MainView />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
                } />
                <Route path={'/login'}>
                    <LoginView />
                </Route>
            </Switch>
        </Router>
    </ThemeProvider>;
}

export default App;