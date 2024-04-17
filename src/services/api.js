import Axios from "axios";
import endPoint from "./endPoint";

// Auth Api's Start
export const LoginAPI = async (loginData) => {
  try {
    const { data } = await Axios.post(
      `${import.meta.env.VITE_API_URL + endPoint.login}`,
      loginData,
    );
    return data;
  } catch (error) {
    throw error;
  }
};

// Auth Api's End
