import { Container, Box, Grid, Button } from "@mui/material";
import styled from "styled-components";
import Search from "../../components/Search";
import { useNavigate } from "react-router-dom";
import CleanTech from "../../assets/clean_tech.jpeg";

export default function Home() {
  const StyledGridItem = styled(Grid)`
    button {
      font-size: x-large;
      font-weight: bolder;
    }
  `;
  const navigate = useNavigate();
  const menuList = [
    { title: "클린테크", url: "companies/clean-tech" },
    { title: "에너지저장 및 서비스", url: "companies/energy" },
    { title: "자동차/모빌리티", url: "companies/mobility" },
    { title: "바이오헬스", url: "companies/bio-helth" },
    { title: "로보틱스", url: "companies/robotics" },
    { title: "항공/우주", url: "companies/space" },
  ];
  return (
    <Container>
      <Search />
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          component="img"
          sx={{
            bgcolor: "#EFF3FD",
            mt: 3,
            mb: 3,
          }}
          src={CleanTech}
          height={560}
          width={"100%"}
          border={0}
        />
      </Box>
      <Grid container spacing={4}>
        {menuList.map((menu) => (
          <StyledGridItem item xs={12} sm={6} md={4} key={menu.title}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => navigate(menu.url)}
            >
              {menu.title}
            </Button>
          </StyledGridItem>
        ))}
      </Grid>
    </Container>
  );
}
