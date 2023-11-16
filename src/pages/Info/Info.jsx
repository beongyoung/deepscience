import React from "react";
import {
  Avatar,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import cardImg from "../../assets/about_deepscience.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const history = [
  `DeepScience X 2023년 7월 설립`,
  `중소기업벤처부 예비창업패키지 선정`,
  `중소기업벤처부 딥테크 스쿨 트랙 선정`,
  `과학정보통신부 데이터바우처 사업 선정`,
  `과학정보통신부 클라우드 혁신 사업 선정`,
  `한양대학교 에리카 이노폴리스 사업 선정`,
  `서울대학교 바이오 산업 창업스쿨 선정`,
];

function generateHistory() {
  return history.map((value, idx) => (
    <ListItem key={idx} disablePadding>
      {idx === 0 ? (
        <ListItemText
          primary={
            <Typography color={"primary"} variant={"h6"}>
              {value}
            </Typography>
          }
        />
      ) : (
        <ListItemText
          primary={<Typography variant={"h6"}>{value}</Typography>}
        />
      )}
    </ListItem>
  ));
}

const teamMembers = [
  { img: "", name: "김경남", hierarchy: "CEO", contact: "sciencex@gmail.com" },
  { img: "", name: "김경남", hierarchy: "CEO", contact: "sciencex@gmail.com" },
  { img: "", name: "김경남", hierarchy: "CEO", contact: "sciencex@gmail.com" },
  { img: "", name: "김경남", hierarchy: "CEO", contact: "sciencex@gmail.com" },
  { img: "", name: "김경남", hierarchy: "CEO", contact: "sciencex@gmail.com" },
  { img: "", name: "김경남", hierarchy: "CEO", contact: "sciencex@gmail.com" },
  { img: "", name: "김경남", hierarchy: "CEO", contact: "sciencex@gmail.com" },
  { img: "", name: "김경남", hierarchy: "CEO", contact: "sciencex@gmail.com" },
];
function generateTeamMember() {
  return teamMembers.map((item, idx) => {
    return (
      <React.Fragment key={idx}>
        <Grid item width={"18rem"} pb={5}>
          <Stack alignItems={"center"}>
            <Avatar src={item.img} sx={{ width: "8rem", height: "8rem" }} />
            <Typography variant="h5" fontWeight={"bold"}>
              {item.name}
            </Typography>
            <Typography variant="h5" color={"grey"}>
              {item.hierarchy}
            </Typography>
            <Typography>Contact | {item.contact}</Typography>
          </Stack>
        </Grid>
      </React.Fragment>
    );
  });
}

function Info() {
  return (
    <Container>
      <Grid container alignItems={"end"} pb={3}>
        <Grid>
          <CardMedia
            component="img"
            sx={{ maxWidth: "30rem", mb: 2 }}
            image={cardImg}
            alt="DEEP SCIENCE X"
          />
        </Grid>
        <Grid pl={4} pb={4} sx={{ maxWidth: "30rem" }}>
          <Typography variant={"h3"} mb={3} fontWeight={800}>
            회사소개
          </Typography>
          <Typography variant={"h6"}>
            상상을 현실로 만드는 딥사이언스 및 딥테크 기업에 대한 리서치 및
            투자운용 시스템과 bank X (SaaS Workspace)를 기관투자가들에게
            제공하는 핀테크 스타트업입니다
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"h5"} fontWeight={"bold"}>
            위대한 아이디어를 혁신으로 투자하는 기관투자가들의 파트너
          </Typography>
        </Grid>
      </Grid>

      <List>{generateHistory()}</List>

      <Typography mt={3} color={"primary"}>
        Team
      </Typography>
      <ArrowForwardIcon color={"primary"} />

      <Grid container justifyContent={"center"}>
        {generateTeamMember()}
      </Grid>
    </Container>
  );
}

export default Info;
