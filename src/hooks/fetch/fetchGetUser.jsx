import axios from "axios";

const authToken = import.meta.env.VITE_SUCCESS_TOKEN;

async function fetchGetUser() {
  try {
    const response = await axios.get(`/v1/user`, {
      headers: {
        "X-AUTH-TOKEN": authToken,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);
    console.error(error);
  }
}

export default fetchGetUser;
