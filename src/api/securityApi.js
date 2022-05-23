import {getCommonJsonRequestProps, throwHttpErrors} from "../commons/commons";
import jwtDecode from "jwt-decode";
import {HOST} from "../const/commonConsts";


export const setCurrentUserToken = (currentUserToken) => {
    if (currentUserToken) {
        localStorage.setItem("access-token", currentUserToken)
    } else {
        localStorage.removeItem("access-token");
    }
};
export const logout = () => new Promise((resolve) => {
    setCurrentUserToken(null);
    resolve();
});

export const login = (username, password) =>
    fetch(HOST +`/auth/login`, {
        method: "POST",
        headers: {
            ...getCommonJsonRequestProps().headers
        },
        body: JSON.stringify({username, password})
    })
        .then(throwHttpErrors)
        .then(response => response.json())
        .then(jwtResponse => jwtResponse.accessToken)
        .then(accessToken => {
            console.log(accessToken);
            setCurrentUserToken(accessToken);
            return getCurrentUser();
        })

export const signUp = (username, password, fullName, email) =>
    fetch (HOST+`/auth/signUp`, {
        method: "POST",
        headers: {
            ...getCommonJsonRequestProps().headers
        },
        body: JSON.stringify({username, password, fullName, email})
    })
        .then(throwHttpErrors)
        .then(res => res.text())
        .catch(err => alert(err))



export const getCurrentUser = () => {
    const currentUserToken = localStorage.getItem("access-token");
    if (currentUserToken) {
        const decodedJwt = jwtDecode(currentUserToken);
        console.log("decodedJWT:" + decodedJwt);
        if (Date.now() >= decodedJwt.exp * 1000) {
            setCurrentUserToken(null);
            return null;
        }
        console.log("CURRENT USER decoded JWT:" + JSON.parse(decodedJwt.currentUser));
        return JSON.parse(decodedJwt.currentUser);
    }
    return null;
}

