import axios from "axios";

const authToken = import.meta.env.VITE_SUCCESS_TOKEN;

async function fetchGetCompanyDetail(id = 1) {
  try {
    const response = await axios.get(`/v1/companies/${id}`, {
      headers: {
        "X-AUTH-TOKEN": authToken,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
    throw new Error("Failed to fetch company details");
  }
}

function handleError(error) {
  console.error(error);

  if (error.response) {
    // Handle specific error cases
    console.log(error.response);
  } else if (error.request) {
    // Handle request not received by server
    console.log(error.request);
  } else {
    // Handle other errors
    console.log(error.message);
  }
}

export default fetchGetCompanyDetail;
