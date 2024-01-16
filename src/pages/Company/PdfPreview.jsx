import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pdfjs } from "react-pdf";
import PropTypes from "prop-types";

PdfPreview.propTypes = {
  fileUrl: PropTypes.string.isRequired,
};

const PdfPreview = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);

  const onFileLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <p>Number of pages: {numPages}</p>
      <div style={{ width: "100%" }}>
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
        >
          <Viewer
            fileUrl={fileUrl}
            fileType="pdf"
            onLoadSuccess={onFileLoadSuccess}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PdfPreview;
