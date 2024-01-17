import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function Company() {
  const [selectedCategory, setSelectedCategory] = useState("");
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
    navigate(`${category}`);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {menuList.map((menu) => (
          <Grid item xs={12} sm={6} md={4} key={menu.title}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                handleCategorySelect(menu.category);
                handleButtonClick(menu.category);
              }}
            >
              {menu.title}
            </Button>
          </Grid>
        ))}
      </Grid>
      {selectedCategory && <p>Selected Category: {selectedCategory}</p>}
    </Container>
  );
}

export default Company;
