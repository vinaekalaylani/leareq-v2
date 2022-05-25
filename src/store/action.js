import {
  SET_USER_LOGIN,
  SET_USERS,
  SET_USER,
  SET_LEVEL,
  SET_INITIAL,
  SET_EVENT,
  SET_LEAVE,
  SET_LEAVES,
  SET_HISTORY,
  SET_IS_ERROR,
  SET_IS_LOADING,
} from "./actionType";
import axios from "../apis/server.js";
import moment from "moment";

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

export function setEvent(payload) {
  return {
    type: SET_EVENT,
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

// done
export function getEvent() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: "/user/user-login",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(({ data }) => {
          let list = []
          data.Leaves.map((el) => {
            const mstart = moment(new Date(el.dateFrom));
            const mend = moment(new Date(el.dateTo)).add(1, 'day');;

            while (mstart.format('DD-MM-YYYY') !== mend.format('DD-MM-YYYY')) {
              let obj = {};
              obj.date = mstart.format('YYYY-MM-DD')
              obj.status = el.status
              mstart.add(1, 'day')
              list.push(obj)
            }
          })
          dispatch(setEvent(list));
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

export function getUsers({ fullName, deleted }) {
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

// done
export function apply(payload) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: "/leave/create",
        data: payload,
        headers: { access_token: localStorage.getItem("access_token") }
      })
        .then(() => {
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
export function getLeaves() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: "/leave/list",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(({ data }) => {
          dispatch(setLeave(data[0]))
          dispatch(setLeaves(data));
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
export function getLeave(id) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `/leave/list/${id}`,
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(({ data }) => {
          dispatch(setLeave(data));
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
export function updateStatus({ status, id }) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "PATCH",
        url: `/leave/update/${id}`,
        headers: { access_token: localStorage.getItem("access_token") },
        data: {
          status
        }
      })
        .then(({data}) => {
          console.log(data)
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
export function getHistory({type, status, deleted, year}) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `/leave/history?type=${type}&status=${status}&isDeleted=${deleted}&year=${year}`,
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(({ data }) => {
          dispatch(setHistory(data));
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
