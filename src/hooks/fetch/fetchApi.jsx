import axios from "axios";

const authToken = import.meta.env.VITE_SUCCESS_TOKEN;

const fetchData = async () => {
  try {
    const response = await axios.post(
      "http://api.updatecome.com:8081/v1/companies",
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
