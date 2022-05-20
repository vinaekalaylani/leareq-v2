import { SET_USER_LOGIN, SET_USERS, SET_USER, SET_LEVEL, SET_INITIAL, SET_LEAVE, SET_LEAVES, SET_HISTORY, SET_IS_ERROR, SET_IS_LOADING } from "./actionType"
import axios from 'axios'

export function setUserLogin(payload) {
  return {
    type: SET_USER_LOGIN,
    payload
  }
}

export function setUser(payload) {
  return {
    type: SET_USER,
    payload
  }
}

export function setUsers(payload) {
  return {
    type: SET_USERS,
    payload
  }
}

export function setLevel(payload) {
  return {
    type: SET_LEVEL,
    payload
  }
}

export function setIniial(payload) {
  return {
    type: SET_INITIAL,
    payload
  }
}

export function setLeave(payload) {
  return {
    type: SET_LEAVE,
    payload
  }
}

export function setLeaves(payload) {
  return {
    type: SET_LEAVES,
    payload
  }
}

export function setHistory(payload) {
  return {
    type: SET_HISTORY,
    payload
  }
}

export function setIsLoading(payload) {
  return {
    type: SET_IS_LOADING,
    payload
  }
}

export function setIsError(payload) {
  return {
    type: SET_IS_ERROR,
    payload
  }
}

export function login(data) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3600/user/login', data)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('level', data.level)
          resolve()
        })
        .catch((error) => {
          const { message } = error.response.data
          reject(message)
        })
        .finally(() => {
          dispatch(setIsLoading(false))
        })
    })
  }
}

export function getLevel() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const level = localStorage.getItem("level")
      if (level) {
        dispatch(setLevel(level))
      }
    })
  }
}

export function getInitial() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3600/user/initial', {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          dispatch(setIniial(data))
          resolve()
        })
        .catch((error) => {
          const { message } = error.response.data
          reject(message)
        })
        .finally(() => {
          dispatch(setIsLoading(false))
        })
    })
  }
}

export function getUserLogin() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3600/user/user-login', {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          dispatch(setUserLogin(data))
          resolve()
        })
        .catch((error) => {
          const { message } = error.response.data
          reject(message)
        })
        .finally(() => {
          dispatch(setIsLoading(false))
        })
    })
  }
}

export function getUser(params) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3600/user/detail?id=${params}`, {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          dispatch(setUser(data))
          resolve()
        })
        .catch((error) => {
          const { message } = error.response.data
          reject(message)
        })
        .finally(() => {
          dispatch(setIsLoading(false))
        })
    })
  }
}

export function getListUser(params) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const { fullName, deleted } = params
      axios.get(`http://localhost:3600/user/list?fullName=${fullName}&isDeleted=${deleted}`, {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          dispatch(setUsers(data))
          resolve()
        })
        .catch((error) => {
          const { message } = error.response.data
          reject(message)
        })
        .finally(() => {
          dispatch(setIsLoading(false))
        })
    })
  }
}