import { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import fetchGetApi from "../../hooks/fetch/fetchGetCompany.jsx";
import { useParams, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  transition: opacity 0.3s ease;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const CompanyList = styled.div`
  margin-top: 20px;
  display: flow;
  gap: 20px;
`;

const CompanyCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  align-content: center;
  justify-content: space-evenly;
`;

export default function CompanyDetail() {
  const { id } = useParams();
  const upperId = id.toUpperCase();
  const [selectedCategory, setSelectedCategory] = useState(upperId);
  const [companyData, setCompanyData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (category) => {
      try {
        const data = await fetchGetApi(category);
        setCompanyData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedCategory) {
      fetchData(selectedCategory);
    }
  }, [selectedCategory, navigate]);

  const categories = useMemo(
    () => [
      "CLEAN_TECH",
      "ENERGY",
      "MOBILITY",
      "BIO_HEALTH",
      "ROBOTICS",
      "AEORSPACE",
    ],
    []
  );

  const handleSelectChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    navigate(`/company/${category.toLowerCase()}`);
  };

  return (
    <Wrapper>
      <h2>Bank X</h2>
      <p>Selected Category: {selectedCategory}</p>

      <Select onChange={handleSelectChange} value={selectedCategory}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>

      {companyData.data === null ? (
        <p>정보가 존재하지 않습니다</p>
      ) : (
        <CompanyList>
          {companyData?.data?.map((company) => (
            <CompanyCard key={company.id}>
              <h3>{company.name}</h3>
              <p>Description: {company.description}</p>
              <p>Stock Code: {company.stockCode}</p>
            </CompanyCard>
          ))}
        </CompanyList>
      )}
    </Wrapper>
  );
}
