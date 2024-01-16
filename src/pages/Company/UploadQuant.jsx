import { useState } from "react";
import styled from "styled-components";
import fetchFiles from "../../hooks/fetch/fetchFiles";

const PdfUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadButton = styled.label`
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

function UploadQuant(id) {
  const [pdfName, setPdfName] = useState("");

  const handlePdfChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    setPdfName(selectedFile.name);

    try {
      const companyId = id;
      const formData = new FormData();
      formData.append("file", selectedFile);

      for (let key of formData.keys()) {
        console.log(key);
      }

      for (let value of formData.values()) {
        console.log(value);
      }

      const response = fetchFiles.PostQuant(companyId, formData);
      if (response.status === 200) {
        alert("File uploaded successfully!");
      } else if (response.data === "File already exists") {
        alert("File already exists");
      } else if (response.data === "Maximum file size exceeded") {
        alert("Maximum file size exceeded");
      } else {
        alert("Error uploading file. Please try again.");
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    }
  };

  return (
    <PdfUploaderContainer>
      <UploadInput
        type="file"
        accept=".pdf"
        id="Quant Upload"
        onChange={handlePdfChange}
      />
      <UploadButton htmlFor="Quant Upload">Upload Quant</UploadButton>
      {pdfName && <p>Selected PDF: {pdfName}</p>}
    </PdfUploaderContainer>
  );
}

export default UploadQuant;
