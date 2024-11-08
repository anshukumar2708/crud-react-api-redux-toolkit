import { axiosInstance } from "./axios-instance";

export const getData = async ({ path }: { path: string }) => {
  try {
    const response = await axiosInstance.get(`${path}`);
    const result = await response.data;
    return result;
  } catch (error) {
    throw error;
  }
};

export const postData = async ({ path, data }: { path: string; data: any }) => {
  try {
    const response = await axiosInstance.post(path, data);
    const result = await response.data;
    return result;
  } catch (error) {
    throw error;
  }
};
