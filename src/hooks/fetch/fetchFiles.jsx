import axios from "axios";

const authToken =
  localStorage.getItem("authCode") || import.meta.env.VITE_SUCCESS_TOKEN;

function getInstance(id = 1) {
  return axios.create({
    baseURL: `/v1/companies/${id}/quant-analysis`,
    headers: {
      "content-type": "multipart/form-data",
      "X-AUTH-TOKEN": authToken,
    },
  });
}

const fetchFiles = {
  uploadPdf: async (id, formData) => {
    const instance = getInstance(id);

    try {
      const response = await instance.post("", formData);
      return response.data;
    } catch (error) {
      console.error(
        "Error uploading PDF:",
        error.response || error.message || error
      );
      throw error;
    }
  },
};

export default fetchFiles;
