import { Container, Grid, Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainImg from "../../assets/MainImg.jpeg";

const StyledGridItem = styled(Grid)`
  button {
    font-size: x-large;
    font-weight: bolder;
  }
`;

const ContainerWrapper = styled(Container)`
  position: absolute;
  bottom: -30em;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  padding: 0;
  margin: 0;
`;

const BackgroundImage = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default function Home() {
  const navigate = useNavigate();
  const menuList = [
    { title: "클린테크", category: "clean_tech" },
    { title: "에너지저장 및 서비스", category: "energy" },
    { title: "자동차/모빌리티", category: "mobility" },
    { title: "바이오헬스", category: "bio_health" },
    { title: "로보틱스", category: "robotics" },
    { title: "항공/우주", category: "aeorspace" },
  ];

  const handleCategoryChange = (category) => {
    category = category.toUpperCase();
    console.log(`Category onclick to: ${category}`);
  };

  const handleButtonClick = (category) => {
    handleCategoryChange(category);
    category = category.toLowerCase();
    navigate(`company/${category}`);
  };

  return (
    <>
      <BackgroundImage src={MainImg} alt=""/>
      <ContainerWrapper>
        <Grid container spacing={4}>
          {menuList.map((menu) => (
            <StyledGridItem item xs={12} sm={6} md={4} key={menu.title}>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)", // 배경색 수정
                  color: "black", // 글자색 수정
                }}
                fullWidth
                onClick={() => handleButtonClick(menu.category)}
              >
                {menu.title}
              </Button>
            </StyledGridItem>
          ))}
        </Grid>
      </ContainerWrapper>
    </>
  );
}
