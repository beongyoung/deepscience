import { useEffect, useState } from "react";
import fetchGetCompanyDetail from "../../hooks/fetch/fetchGetCompanyDetail";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CompanyDetailContainer = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompanyInfo = styled.div`
  margin-top: 15px;
`;

const translation = {
  CLEAN_TECH: "청정기술",
  ENERGY: "에너지",
  MOBILITY: "모빌리티",
  BIO_HEALTH: "바이오 헬스케어",
  ROBOTICS: "로봇",
  AEORSPACE: "항공우주",
};

const CompanyDetail = () => {
  const { id } = useParams();
  const [companyDetail, setCompanyDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGetCompanyDetail(id);
        setCompanyDetail(data.data);
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {companyDetail && (
        <>
          <h1 style={{ textAlign: "center" }}>
            Company Detail for {companyDetail.id}
          </h1>
          <CompanyDetailContainer>
            <CompanyInfo>
              <p>Company Category: {translation[companyDetail.category]}</p>
              <p>Company Name: {companyDetail.name}</p>
              <p>Company Description: {companyDetail.description}</p>
              <p>Company stockCode: {companyDetail.stockCode}</p>
            </CompanyInfo>
          </CompanyDetailContainer>
        </>
      )}
    </>
  );
};

export default CompanyDetail;
