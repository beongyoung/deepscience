import axios from "axios";

const authToken = import.meta.env.VITE_SUCCESS_TOKEN;

async function fetchGetCompany(category) {
  if (category === null) {
    console.log(category);
    category = "CLEAN_TECH";
  }
  try {
    const response = await axios.get(
      "http://api.updatecome.com:8081/v1/companies",
      {
        params: {
          category: category,
        },
        headers: {
          "X-AUTH-TOKEN": authToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
    console.error(error);
  }
}

export default fetchGetCompany;
