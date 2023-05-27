import axios from "axios";
import store from "../redux/store";

const baseURL = process.env.REACT_APP_URL;

const instanceUtil = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

instanceUtil.interceptors.request.use(
  (config) => {
    const token = store.getState().token.token;
    const expirationTime = store.getState().token.expirationTime;

    if (!!token && expirationTime > new Date().getTime()) {
      config.headers.Authorization = token;
    } else {
      sessionStorage.clear();
      window.location.replace("/");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getUserInfo = async () => {
  try {
    const response = await instanceUtil.get(`/notodo/memberinfo`);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getContent = async (date) => {
  try {
    const response = await instanceUtil.get(`/notodo/view?date=${date}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getAllContent = async () => {
  try {
    const response = await instanceUtil.get(`/notodo/viewall`);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const postList = async (data) => {
  try {
    const response = await instanceUtil.post(`/notodo/create`, data);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const postSuccess = async (data) => {
  try {
    const response = await instanceUtil.post(`/notodo/setsuccess`, data);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const postFail = async (data) => {
  try {
    const response = await instanceUtil.post(`/notodo/setFail`, data);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const modifyNotodo = async (data) => {
  try {
    const response = await instanceUtil.put(`/notodo/put`, data);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const deleteNotodo = async (data) => {
  try {
    const response = await instanceUtil.delete(`/notodo/delete`, {
      data: data,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getFollowingList = async () => {
  try {
    const response = await instanceUtil.get("/friend/list");

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getFollowerList = async () => {
  try {
    const response = await instanceUtil.get("/friend/list");

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getFriendNotodo = async (email, date) => {
  try {
    const response = await instanceUtil.get(
      `/friend/view?email=${email}&date=${date}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const searchUser = async (data) => {
  try {
    const response = await instanceUtil.get(`/friend/search?email=${data}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const followUser = async (email) => {
  try {
    const response = await instanceUtil.post(`/friend/add`, email);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
