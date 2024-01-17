import axios from "axios";

const secretKey = import.meta.env.VITE_DART_SECRET_KEY;
const authToken = import.meta.env.VITE_SUCCESS_TOKEN;

const fetchCompany = {
  getCompany: async (corp_code = "00126380") => {
    try {
      const response = await axios.get(`/api/company.json`, {
        params: {
          crtfc_key: secretKey,
          corp_code: corp_code,
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching Dart:", error);
      return error;
    }
  },
  postCompany: async (formData) => {
    try {
      const response = await axios.post(`/v1/companies/`, formData, {
        headers: {
          "X-AUTH-TOKEN": authToken,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching company details:", error);
      return error;
    }
  },
};

export default fetchCompany;
