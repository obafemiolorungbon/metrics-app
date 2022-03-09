import axios from "axios";
import { getAllurl } from "./url";

export const dataService = {
  getData: async () => {
    try {
      const allJokes = await axios.get(getAllurl);
      return allJokes;
    } catch (error) {
      console.log("AN ERROR OCCURED HERE", error.message);
    }
  },
};
