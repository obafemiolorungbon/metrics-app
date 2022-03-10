import axios from "axios";
const baseUrl = process.env.REACT_APP_API_ENDPOINT;
export const dataService = {
  getData: async (endpoint) => {
    try {
      const data = await axios.get(`${baseUrl}${endpoint}`);
      return data.data;
    } catch (error) {
      console.log("AN ERROR OCCURED HERE", error.message);
    }
  },
};
