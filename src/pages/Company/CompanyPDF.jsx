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

function PdfUploader() {
  const [pdfName, setPdfName] = useState("");

  const handlePdfChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      setPdfName(file.name);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const companyId = 1;
        const response = await fetchFiles.uploadPdf(companyId, formData);

        alert("File uploaded successfully!");
        console.log(response);
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Error uploading file. Please try again.");
      }
    }
  };

  return (
    <PdfUploaderContainer>
      <UploadInput
        type="file"
        accept=".pdf"
        id="pdfUploader"
        onChange={handlePdfChange}
      />
      <UploadButton htmlFor="pdfUploader">Upload PDF</UploadButton>
      {pdfName && <p>Selected PDF: {pdfName}</p>}
    </PdfUploaderContainer>
  );
}

export default PdfUploader;
