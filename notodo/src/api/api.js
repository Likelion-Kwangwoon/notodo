import axios from "axios";

const baseURL = "https://notodo.shop";



const instanceUtil = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNjgxODk4OTcwLCJleHAiOjE2ODE4OTk1NzAsInN1YiI6ImNoczk4NDEyQG5hdmVyLmNvbSIsIm5pY2tuYW1lIjoi7LWc7ZiB7IicIiwidWlkIjoiY2hzOTg0MTJAbmF2ZXIuY29tIiwicGxhdGZvcm0iOiJrYWthbyJ9.M1_r9V-CjLMi6jzWvgTtxuQpkJJAxz0pmF05-5ZiYlI`,
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


export const getAllContent = async (date) => {
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