import axios from "axios";

async function fetchGetUser(token) {
  try {
    const response = await axios.get(`/v1/user`, {
      headers: {
        "X-AUTH-TOKEN": token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response);
    console.error(error);
  }
}

export default fetchGetUser;
