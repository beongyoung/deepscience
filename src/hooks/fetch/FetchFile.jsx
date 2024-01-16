import axios from "axios";
const authToken = import.meta.env.VITE_SUCCESS_TOKEN;

function FetchFile() {
  const id = 13;

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
  const Download = async () => {
    const url = `/v1/companies/${id}/financial-analysis`;

    try {
      const response = await axios.get(url, {
        headers: {
          "X-AUTH-TOKEN": authToken,
        },
      });
      if (response.data.data === "") {
        alert("파일이 없습니다.");
      } else {
        alert("성공");
        console.log(response.data.data);
      }
      console.log(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        alert("파일이 없습니다.");
      }
      alert("안돼...");
      console.log(error);
    }
  };

  // File Delete
  const Delete = async () => {
    const url = `/v1/companies/${id}/financial-analysis`;

    try {
      const response = await axios.delete(url, {
        headers: {
          "X-AUTH-TOKEN": authToken,
        },
      });
      alert("성공");
      console.log(response);
      console.log(response.data);
    } catch (error) {
      alert("안돼...");
      console.log(error);
    }
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
      <h1>File Download</h1>
      <button onClick={Download}>download</button>

      {/* File Delete */}
      <h1>File delete</h1>
      <button onClick={Delete}>delete</button>
    </>
  );
}

export default FetchFile;
