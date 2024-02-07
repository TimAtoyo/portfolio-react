import { pdfjs } from 'react-pdf';
import cv from '../assets/cv.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
function Cv() {

  return (
       <div className="flex mb-4">
       <div className="flex-1 bg-gray-500 h-12">
 <iframe src={cv} width='100%' style={{height: '87vh'}} />
 </div>
     </div>
      
  )
}

export default Cv


