import axios from "axios";

const authToken = import.meta.env.VITE_SUCCESS_TOKEN;

const fetchFiles = {
  uploadPdf: async (id, formData) => {
    try {
      const response = await axios.post(
        `/v1/companies/${id}/quant-analysis`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-AUTH-TOKEN": authToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error uploading PDF:", error.message);
      if (error.response) {
        console.error("Response Status:", error.response.status);
        console.error("Response Data:", error.response.data);
      }
      throw error;
    }
  },
};

export default fetchFiles;
