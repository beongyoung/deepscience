import axios from "axios";

const authToken = import.meta.env.VITE_SUCCESS_TOKEN;
const serverUrl = import.meta.env.VITE_SERVER_URL;

const fetchData = async () => {
  try {
    const response = await axios.post(
      `${serverUrl}/v1/companies`,
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
};

export default fetchData;
