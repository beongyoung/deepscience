import { useState } from "react";
import styled from "styled-components";

const ImageUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 300px;
  margin-bottom: 10px;
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

function ImageUploader() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <ImageUploaderContainer>
      {imagePreview && <ImagePreview src={imagePreview} alt="Preview" />}
      <UploadInput
        type="file"
        accept="image/*"
        id="imageUploader"
        onChange={handleImageChange}
      />
      <UploadButton htmlFor="imageUploader">Upload Image</UploadButton>
    </ImageUploaderContainer>
  );
}

export default ImageUploader;
