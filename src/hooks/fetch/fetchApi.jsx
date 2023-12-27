import axios from "axios";

const authToken =
  localStorage.getItem("authCode") || import.meta.env.VITE_SUCCESS_TOKEN;

async function fetchData() {
  try {
    const response = await axios.post(
      `/v1/companies`,
      {
        name: "string",
        category: "ROBOTICS",
        description: "string",
        stockCode: 4,
      },
      {
        headers: {
          "X-AUTH-TOKEN": authToken,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;
