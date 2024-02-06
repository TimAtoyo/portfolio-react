import React from 'react'
import { Document, Page } from 'react-pdf';
function Cv() {
    const pdfURL = '../assets/cv.pdf';
  return (
    <Document file={pdfURL}>
    <Page pageNumber={1} />
    </Document>
  )
}

export default Cv


