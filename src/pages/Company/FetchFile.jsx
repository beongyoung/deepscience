import axios from "axios";
const authToken = import.meta.env.VITE_SUCCESS_TOKEN;

function FetchFile() {
  // Assuming id should be 1
  const id = 1;

  // File Upload
  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", document.frm.file.files[0]);

    try {
      const response = await axios.post(
        `/v1/companies/${id}/financial-analysis`,
        formData,
        {
          headers: {
            "X-AUTH-TOKEN": authToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("성공");
      console.log(response);
    } catch (error) {
      alert("안돼...");
      console.log(error);
    }
  };

  // File Download
  const download = async () => {
    let filename = "algorithm.png";
    const url = "http://localhost:3000/filedownload?filename=" + filename;

    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", url);
    downloadLink.setAttribute("download", filename);
    downloadLink.setAttribute("type", "application/json");
    downloadLink.click();
  };

  // JSX Component
  return (
    <>
      {/* File Upload */}
      <h1>File upload</h1>
      <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">
        <input type="file" name="file" accept="*" />
        <input type="submit" value="upload" />
      </form>

      {/* File Download */}
      <h1>File download</h1>
      <button onClick={download}>download</button>
    </>
  );
}

export default FetchFile;
