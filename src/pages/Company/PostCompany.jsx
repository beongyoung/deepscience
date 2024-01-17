import { useState } from "react";
import styled from "styled-components";
import fetchCompany from "../../hooks/fetch/fetchCompany";

const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
`;

const TitleContainer = styled.div`
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Label = styled.label`
  flex: 1;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 2;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  flex: 2;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SuccessMessage = styled.p`
  color: green;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const PostCompany = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "CLEAN_TECH",
    description: "",
    stockCode: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetchCompany.postCompany(formData);

      if (response.status === 200) {
        setSuccessMessage("Company successfully submitted!");
        setErrorMessage("");
      }
      console.log(response);
    } catch (error) {
      setErrorMessage("Error submitting the company. Please try again.");
      setSuccessMessage("");
      console.error(error);
    }
  };

  return (
    <>
      <TitleContainer>
        <h1>회사 등록 페이지</h1>
      </TitleContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Label htmlFor="name">회사 이름:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Row>
          <Row>
            <Label htmlFor="category">회사 업종:</Label>
            <Select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="CLEAN_TECH">청정기술</option>
              <option value="ENERGY">에너지</option>
              <option value="MOBILITY">모빌리티</option>
              <option value="BIO_HEALTH">바이오 헬스케어</option>
              <option value="ROBOTICS">로봇</option>
              <option value="AEORSPACE">항공우주</option>
            </Select>
          </Row>
          <Row>
            <Label htmlFor="description">회사 정보:</Label>
            <Input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Row>
          <Row>
            <Label htmlFor="stockCode">공시 코드:</Label>
            <Input
              type="text"
              id="stockCode"
              name="stockCode"
              value={formData.stockCode}
              onChange={handleChange}
            />
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </FormContainer>
    </>
  );
};

export default PostCompany;
