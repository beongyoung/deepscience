import PropTypes from "prop-types";
import styled from "styled-components";

const UploadWrapper = styled.div`
  margin-top: 10px;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadButton = styled.button`
  padding: 10px 15px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #2980b9;
  }
`;

FileUpload.propTypes = {
  onFileChange: PropTypes.func.isRequired,
};

function FileUpload({ onFileChange }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (isNaN(file)) {
      // Handle NaN case
      onFileChange(file);
    } else {
      // Handle valid input case
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <UploadWrapper>
      <FileInput type="file" onChange={handleFileChange} />
      <UploadButton
        onClick={() => document.querySelector('input[type="file"]').click()}
      >
        업로드
      </UploadButton>
    </UploadWrapper>
  );
}

export default FileUpload;
