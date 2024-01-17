import { useEffect, useState } from "react";
import fetchGetCompanyDetail from "../../hooks/fetch/fetchGetCompanyDetail";
import fetchFiles from "../../hooks/fetch/fetchFiles";
import { useParams } from "react-router-dom";
import UploadFinancial from "../Company/UploadFinancial";
import UploadQuant from "../Company/UploadQuant";
import PDFViewer from "../../components/PDF/PDFViewer";
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
  const [financial, setFinancial] = useState([]);
  const [quant, setQuant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGetCompanyDetail(id);
        setCompanyDetail(data.data);
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    };
    const fetchFinancialFile = async () => {
      try {
        const data = await fetchFiles.getFinancial(id);
        setFinancial(
          data.data.split("/AUTH_2197aef3-436e-443d-a060-df0b98a86913")[1]
        );
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    };
    const fetchQuantFile = async () => {
      try {
        const data = await fetchFiles.getQuant(id);
        setQuant(
          data.data.split("/AUTH_2197aef3-436e-443d-a060-df0b98a86913")[1]
        );
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    };

    fetchQuantFile();
    fetchFinancialFile();
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
              <p>회사 업종: {translation[companyDetail.category]}</p>
              <p>회사 이름: {companyDetail.name}</p>
              <p>회사 설명: {companyDetail.description}</p>
              <p>공시 코드: {companyDetail.stockCode}</p>
            </CompanyInfo>
          </CompanyDetailContainer>
          <CompanyDetailContainer>
            {financial ? (
              <>
                <h2>재무 분석</h2>
                <PDFViewer fileUrl={String(financial)} />
              </>
            ) : (
              <>
                <h2>재무 분석</h2>
                <UploadFinancial id={id} />
              </>
            )}
          </CompanyDetailContainer>
          <CompanyDetailContainer>
            {quant ? (
              <>
                <h2>퀀트 분석</h2>
                <PDFViewer fileUrl={String(quant)} />
              </>
            ) : (
              <>
                <h2>퀀트 분석</h2>
                <UploadQuant id={id} />
              </>
            )}
          </CompanyDetailContainer>
        </>
      )}
    </>
  );
};

export default CompanyDetail;
