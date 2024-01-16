import axios from "axios";

const authToken = import.meta.env.VITE_SUCCESS_TOKEN;

const fetchFiles = {
  PostFinancial: async (id, formData) => {
    try {
      const response = await axios.post(
        `/v1/companies/${id.id}/financial-analysis`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-AUTH-TOKEN": authToken,
          },
        }
      );
      return response;
    } catch (error) {
      console.error("Error uploading PDF:", error.message);
      if (error.response) {
        console.error("Response Status:", error.response.status);
        console.error("Response Data:", error.response.data);
      }
      throw error;
    }
  },
  PostQuant: async (id, formData) => {
    try {
      const response = await axios.post(
        `/v1/companies/${id.id}/quant-analysis`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-AUTH-TOKEN": authToken,
          },
        }
      );
      return response;
    } catch (error) {
      console.error("Error uploading PDF:", error.message);
      if (error.response) {
        console.error("Response Status:", error.response.status);
        console.error("Response Data:", error.response.data);
      }
      throw error;
    }
  },
  getFinancial: async (id) => {
    try {
      const response = await axios.get(
        `/v1/companies/${id}/financial-analysis`,
        {
          headers: {
            "X-AUTH-TOKEN": authToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching company details:", error);
      throw new Error("Failed to fetch company details");
    }
  },
  getQuant: async (id) => {
    try {
      const response = await axios.get(`/v1/companies/${id}/quant-analysis`, {
        headers: {
          "X-AUTH-TOKEN": authToken,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching company details:", error);
      throw new Error("Failed to fetch company details");
    }
  },
};

export default fetchFiles;
