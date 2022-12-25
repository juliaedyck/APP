import React, { Component } from 'react';  
import ReactDOM from 'react-dom';  
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  
import SinglePagePDFViewer from "./pdf/single-page";
import samplePDF from "../photos/APP_PDF_compressed.pdf";

const Publication =() => {


    return (
       <>publication 
       <SinglePagePDFViewer pdf={samplePDF} />
    
             </>
    )
}

export default Publication;