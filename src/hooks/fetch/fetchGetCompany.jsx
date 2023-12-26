import axios from "axios";

const authToken = import.meta.env.VITE_SUCCESS_TOKEN;
const serverUrl = import.meta.env.VITE_SERVER_URL;

async function fetchGetCompany(category = "CLEAN_TECH") {
  try {
    const response = await axios.get(`${serverUrl}v1/companies`, {
      params: {
        category: category,
      },
      headers: {
        "X-AUTH-TOKEN": authToken,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response);
    console.error(error);
  }
}

export default fetchGetCompany;
