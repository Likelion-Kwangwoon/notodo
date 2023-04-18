import axios from "axios";

const baseURL = process.env.REACT_APP_URL;

const instanceUtil = axios.create({
  baseURL,
  headers: {
    Authorization: JSON.parse(JSON.parse(sessionStorage.getItem("persist:root")).reducer).token,
    "Content-type": "application/json",
  },
});

export const getContent = async (date) => {
  try {
    const response = await instanceUtil.get(`/notodo/view?date=${date}`);

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