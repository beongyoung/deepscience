import Link from "@mui/material/Link";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import PDFViewer from "../../components/PDF/PDFViewer";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 12px;
`;

const Container = styled.div`
  max-width: 100%;
  padding: 0 16px;
  @media (min-width: 768px) {
    padding: 0 24px;
  }
  @media (min-width: 1024px) {
    padding: 0 32px;
  }
`;

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Title = styled(Typography)`
  && {
    font-size: 3xl;
    font-weight: bold;
    letter-spacing: tighter;
    @media (min-width: 640px) {
      font-size: 5xl;
    }
    @media (min-width: 1280px) {
      font-size: 6xl;
    }
  }
`;

const Description = styled(Typography)`
  && {
    max-width: 600px;
    font-size: xl;
    @media (min-width: 768px) {
      font-size: base;
    }
    @media (min-width: 1024px) {
      font-size: xl;
    }
  }
`;

const StyledLink = styled(Link)`
  && {
    display: inline-flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #1a202c;
    padding: 0 16px;
    font-size: 14px;
    font-weight: medium;
    color: #edf2f7;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #1a202c;
    }
  }
`;

const HorizontalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const HorizontalRule = styled.hr`
  margin: 8px 0;
  border-top: 1px solid #edf2f7;
  @media (prefers-color-scheme: dark) {
    border-top-color: #4a5568;
  }
`;

const Grid = styled.div`
  max-width: 5xl;
  margin: 0 auto; // Center the grid
  display: grid;
  gap: 24px;
  align-items: center;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledCard = styled(Card)`
  && {
    border: 2px solid #4caf50;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #4caf50;
    color: #ffffff;
    &:hover {
      background-color: #45a049;
    }
  }
`;

function Company() {
  const [pdfVisible, setPdfVisible] = useState(false);
  const pdfPath = "../assets/Sample.pdf";
  const pdfScale = 1.5;

  const handleButtonClick = () => {
    setPdfVisible(true);
  };

  return (
    <Section>
      <Container>
        <CenteredContainer>
          <div>
            <Title variant="h3">PDF Viewer</Title>
            <Description variant="body1">
              View your uploaded PDFs here.
            </Description>
          </div>
          <HorizontalFlexContainer>
            <StyledLink href="#">Upload PDF</StyledLink>
          </HorizontalFlexContainer>
        </CenteredContainer>
        <HorizontalRule />
        <Grid>
          <StyledCard>
            <CardHeader title="PDF Title" />
            <CardContent>
              <Typography
                variant="body1"
                className="text-zinc-500 dark:text-zinc-400"
              >
                Description of the PDF file.
              </Typography>
            </CardContent>
            <CardActions>
              <StyledButton variant="outlined" onClick={handleButtonClick}>
                View PDF
              </StyledButton>

              {pdfVisible && <PDFViewer path={pdfPath} scale={pdfScale} />}
            </CardActions>
          </StyledCard>
          <StyledCard>
            <CardHeader title="PDF Title" />
            <CardContent>
              <Typography
                variant="body1"
                className="text-zinc-500 dark:text-zinc-400"
              >
                Description of the PDF file.
              </Typography>
            </CardContent>
            <CardActions>
              <StyledButton variant="outlined">View PDF</StyledButton>
            </CardActions>
          </StyledCard>
        </Grid>
      </Container>
    </Section>
  );
}

export default Company;
