import axios from "axios";

const authToken = import.meta.env.VITE_SUCCESS_TOKEN;
const dynamicCategory = "CLEAN_TECH";

const fetchGetApi = async () => {
  try {
    const response = await axios.get(
      "http://api.updatecome.com:8081/v1/companies/",
      {
        params: {
          category: dynamicCategory,
        },
        headers: {
          "X-AUTH-TOKEN": authToken,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);
    console.error(error);
  }
};

export default fetchGetApi;
