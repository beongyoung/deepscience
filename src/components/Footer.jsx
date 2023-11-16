import styles from "styled-components";
import logo from "../assets/logo.png";

const FooterWrapper = styles.footer`
  position: relative;
  margin-top: 20px;
	width: fill-available;
	height: 150px;
  padding: 0px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #9D9D9D;
`;

const FooterTextBox = styles.div`
  display: flex;
  flex-direction: column;
`;

const FooterBox = styles.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
`;

const FooterImg = styles.img`
	width: 150px;
	height: 75px;
	object-fit: contain;
`;

const P = styles.p`
	font-size: 0.8rem;
  margin: 0.5rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterBox>
        <FooterImg src={logo} alt="DeepScience X 로고" />
        <FooterTextBox>
          <P>(주) 딥사이언스X</P>
          <P>대표: 김경남 | 사업자등록번호: 7078103223</P>
          <P>
            주소: 경기도 안산시 상록구 한양대학로 55 한양대학교 에리카
            산업협력관 3층
          </P>
        </FooterTextBox>
        <FooterTextBox>
          <P>연락처: 010-3686-2713</P>
          <P>메일: sciencex@deepsciencex.com</P>
          <P>All Right Reserved 2023.</P>
        </FooterTextBox>
      </FooterBox>
    </FooterWrapper>
  );
}
