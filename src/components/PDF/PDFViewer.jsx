import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";

import PropTypes from "prop-types";

PDFViewer.propTypes = {
  fileUrl: PropTypes.string.isRequired,
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ViewerContainer = styled.div`
  width: 100%;
  max-height: 800px;
  overflow: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ControlsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

function PDFViewer({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <ViewerContainer>
      <ControlsContainer>
        <StyledButton onClick={handlePrevPage} disabled={pageNumber === 1}>
          <span>-</span>
        </StyledButton>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <StyledButton
          onClick={handleNextPage}
          disabled={pageNumber === numPages}
        >
          <span>+</span>
        </StyledButton>
      </ControlsContainer>
      <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page width={800} height={100} pageNumber={pageNumber} />
      </Document>
    </ViewerContainer>
  );
}

export default PDFViewer;
