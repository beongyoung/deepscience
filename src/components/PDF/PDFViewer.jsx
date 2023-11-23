import { Document, Page } from "react-pdf";

function PDFViewer() {
  const pdfURL = "../assets/Sample.pdf";
  return (
    <div>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
export default PDFViewer;
