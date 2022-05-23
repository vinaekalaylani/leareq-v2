import {
  SET_USER_LOGIN,
  SET_USERS,
  SET_USER,
  SET_LEVEL,
  SET_INITIAL,
  SET_LEAVE,
  SET_LEAVES,
  SET_HISTORY,
  SET_IS_ERROR,
  SET_IS_LOADING,
} from "./actionType";
import axios from "../apis/server.js";

export function setUserLogin(payload) {
  return {
    type: SET_USER_LOGIN,
    payload,
  };
}

export function setUser(payload) {
  return {
    type: SET_USER,
    payload,
  };
}

export function setUsers(payload) {
  return {
    type: SET_USERS,
    payload,
  };
}

export function setLevel(payload) {
  return {
    type: SET_LEVEL,
    payload,
  };
}

export function setIniial(payload) {
  return {
    type: SET_INITIAL,
    payload,
  };
}

export function setLeave(payload) {
  return {
    type: SET_LEAVE,
    payload,
  };
}

export function setLeaves(payload) {
  return {
    type: SET_LEAVES,
    payload,
  };
}

export function setHistory(payload) {
  return {
    type: SET_HISTORY,
    payload,
  };
}

export function setIsLoading(payload) {
  return {
    type: SET_IS_LOADING,
    payload,
  };
}

export function setIsError(payload) {
  return {
    type: SET_IS_ERROR,
    payload,
  };
}

// done
export function login({ email, password }) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: "/user/login",
        data: { email, password },
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("level", data.level);
          resolve();
        })
        .catch((error) => {
          const { message } = error.response.data;
          reject(message);
        })
        .finally(() => {
          dispatch(setIsLoading(false));
        });
    });
  };
}

// done
export function getLevel() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const level = localStorage.getItem("level");
      if (level) {
        dispatch(setLevel(level));
      }
    });
  };
}

// done
export function getInitial() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: "/user/initial",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(({ data }) => {
          dispatch(setIniial(data));
          resolve();
        })
        .catch((error) => {
          const { message } = error.response.data;
          reject(message);
        })
        .finally(() => {
          dispatch(setIsLoading(false));
        });
    });
  };
}

// done
export function getUserLogin() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: "/user/user-login",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(({ data }) => {
          dispatch(setUserLogin(data));
          resolve();
        })
        .catch((error) => {
          const { message } = error.response.data;
          reject(message);
        })
        .finally(() => {
          dispatch(setIsLoading(false));
        });
    });
  };
}

export function getUser(params) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `/user/detail?id=${params}`,
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(({ data }) => {
          dispatch(setUser(data));
          resolve();
        })
        .catch((error) => {
          const { message } = error.response.data;
          reject(message);
        })
        .finally(() => {
          dispatch(setIsLoading(false));
        });
    });
  };
}

export function getListUser({ fullName, deleted }) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `/user/list?fullName=${fullName}&isDeleted=${deleted}`,
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(({ data }) => {
          dispatch(setUsers(data));
          resolve();
        })
        .catch((error) => {
          const { message } = error.response.data;
          reject(message);
        })
        .finally(() => {
          dispatch(setIsLoading(false));
        });
    });
  };
}
