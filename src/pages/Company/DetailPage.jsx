import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import fetchGetCompanyDetail from "../../hooks/fetch/fetchGetCompanyDetail";
import fetchFiles from "../../hooks/fetch/fetchFiles";
import UploadFinancial from "../Company/UploadFinancial";
import UploadQuant from "../Company/UploadQuant";
import PDFViewer from "../../components/PDF/PDFViewer";
import PropTypes from "prop-types";

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

const AnalysisSection = ({ title, file, uploadComponent }) => (
  <CompanyDetailContainer>
    {file ? (
      <>
        <h2>{title}</h2>
        <PDFViewer fileUrl={String(file)} />
      </>
    ) : (
      <>
        <h2>{title}</h2>
        {uploadComponent}
      </>
    )}
  </CompanyDetailContainer>
);
AnalysisSection.propTypes = {
  title: PropTypes.string.isRequired,
  file: PropTypes.string,
  uploadComponent: PropTypes.node,
};

const CompanyDetail = () => {
  const { id } = useParams();
  const [companyDetail, setCompanyDetail] = useState({});
  const [financial, setFinancial] = useState(null);
  const [quant, setQuant] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchGetCompanyDetail(id);
        setCompanyDetail(data);
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    };

    const fetchFile = async (fetchFunction, setFunction) => {
      try {
        const data = await fetchFunction(id);
        setFunction(
          data.data.split("/AUTH_2197aef3-436e-443d-a060-df0b98a86913")[1]
        );
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    };

    fetchData();
    fetchFile(fetchFiles.getFinancial, setFinancial);
    fetchFile(fetchFiles.getQuant, setQuant);
  }, [id]);

  return (
    <>
      {companyDetail && (
        <>
          <h1 style={{ textAlign: "center" }}>
            {companyDetail.name} 기업의 정보
          </h1>
          <CompanyDetailContainer>
            <CompanyInfo>
              <p>회사 업종: {translation[companyDetail.category]}</p>
              <p>회사 이름: {companyDetail.name}</p>
              <p>회사 설명: {companyDetail.description}</p>
              <p>공시 코드: {companyDetail.stockCode}</p>
            </CompanyInfo>
          </CompanyDetailContainer>

          <AnalysisSection
            title="재무 분석"
            file={financial}
            uploadComponent={<UploadFinancial id={id} />}
          />

          <AnalysisSection
            title="퀀트 분석"
            file={quant}
            uploadComponent={<UploadQuant id={id} />}
          />
        </>
      )}
    </>
  );
};

export default CompanyDetail;
