import React, { useState } from 'react';
import photo from "../photos/bio pic.jpg";
import styled from 'styled-components';
import {AiFillCaretRight} from 'react-icons/ai'
import {AiFillCaretLeft} from 'react-icons/ai'
import PDF from "../photos/APP_PDF_compressed.pdf"
import photo6 from "../photos/intake 1.jpg"


const Carousel = () => {

    const [slides] = useState([
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=BeRGtW_QWogVhgXL1JQYChdU8PiGZGj.MDT56H63IOdTInOPCOIdzyMQNAr670OSGIkYh1o6Ltp2k8HmuEN7MSDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "cover"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=UV4xaCgj3LYoQquAMotqVndCVhU5ePONneclPwkbW04dx.KtY4ghDVfaA5VlRJ1nSkPHLc5CIX_THck3E6IMUSDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 1"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=f7nysIegiYodQ3IiLJVaUAGbqEBbII8OeoZxz1fW5gOWD0MQmL2dcv80yySPGY0NqoA8lqGyryrhbB8FMyjN_yDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 2"
        },
        
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=09CRC58ogE42EYij5KWKk2qxzhOtApC7sB_1bTcCAfIPU3q3Wq5XhucMwjTsPzOX6K0deRoHbHHOPHBR_BX.JCDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 3"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=Jq8u2ZYJhJFtPqIsdN8DpsZTQDnYFb2aOKHYoihuZqPOdR.UO0_gubzosyEiC4xm7jlz_uIk.QioiAGLgbD7uSDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 4"
        },

        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=T0Euim6g0ntd4LXpIvltNQT8PMShgw3t_sGhdcX6rTuZ6LnNBNABN81dHFEzMZfQ_Enjrlxm7s7wJC9GsOiZCiDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 6"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=yukR8Vu.wwX1Uzj7w58D1w0ggrZ595_r8XqT9f.U_Z67kl_ssViixB2kUtk1iYANkiqjIYzCPExyHrZuahKPmSDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 7"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=T0Euim6g0ntd4LXpIvltNSBlEKhDpJy.BPLW1Lq4kdFs7wvzZx2v9mNABEL05tDWOC2.BkXf.HQccTFxtORf5yDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 8"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=61HvQbOUQOTxmWyluHSBaH_097c10OyL91.g65q1xXRt5BplOSAfUG5GwiG9R1bVHC4J3dNhBBil82ueXjI6piDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 9"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=61HvQbOUQOTxmWyluHSBaKN8lyn4w1qOZBSFBH5w2m4SQDCsWQO8YW9OoEmkX_yYiUTBlYG9dvEOAkqgelN7jiDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 10"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=SgYf1N8BJPWu3NBaDC04p7WoSevQZvYtNJTa9yR23GWcLTUFusHUl5PwjmWJOSdrHSC737fOl06X2qeJG6hMzyDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 11"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=YZ4vbxB3d5VfSncgj_4exbtFW_GeG6n4qIZGm5hjYQcUyaotLkI9wdzlUF9RvKwfKLIPN1kw8Vtp0tC8ihpfUSDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 12"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=RJ6jKz_TEyMgfSjQ6iDc9ViaA2Y8Yp970201zdrwliKNpL6m1CY2UCn9vo7YKegR8FntR2g9EcZTZkyeeB7q4SDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 13"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=RJ6jKz_TEyMgfSjQ6iDc9aL8IFu_pcGDNnsMTomv_NqLH8JKKHRgbK2phQfSJK5sqmjsp1fPMvLVvmC.2BWvjiDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 14"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=QO3vhERWAibBHI_n57PY3l1Jii8wuUShU9u4bQ4lH0RuFOZVOFxtzkhhL_bmer0Jarxri0RmvWmB8ML5hn0NjiDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 15"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=sbY_f6Xur3tRo1rWin55HTUx_Z5dr.NCe_owYF4VkWwlO5mDTr6FWJ8gBfURQdyVvca401wk1oPZANVR0aPDKyDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 16"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=sbY_f6Xur3tRo1rWin55Hewp7yuXZXuE7VR5D2mmpCcMR2CoZHTRg1RVtrIYwawVfaASfQMhuMyUTTG41j8ZRiDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 17"
        },    
         {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=enAzkewbEfjBSwcMEwWh0NgeX1MWXU0QiNGPMFSMj3Is.xTtTJ.eROQaZh8aeQdPJPihGrzpZ0sMlaKqykReqSDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 18"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=f5Ma16X5EmPhe_6ZZx9UXZnHUFvfo3siBz6RRwvMp_UCaEdPBPkYNTKMg13bAIwW.V0P7RwptHE1_XMaHWQ8ByDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 19"
        },     {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=9URp_HM._n9YxKpztMSIuggO1SW6s6e0j_9l_EFIKP1KOnut5PCmzLBP93PLjVDE_LpQXowhUNUQDft2Qemz4iDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 20"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=oCNBim_8q47uTEC_AZue8ZDH5WO.fEzNLbkEHaIYFQqVpNFRYvFPyOIsZPwasQ3SxLjHW0ehVo2lqLt9EDpnyCDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 21"
        },    
         {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=GGkWyb4hcLAsQfZviPqYsP9Lnelc7KoCoCiqgyKiIYdsjO5v2e0fMQXqth25pFuofh5YwLfJgCKYu.O8sMavmyDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 22"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=oCNBim_8q47uTEC_AZue8XdW1jgC3UxfmxhPBEsP2HJZ9qBJehHxaKHmnUILTBlH_NEJZ6q3p6SqxJ9Wkyu6lCDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 23"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=f6Aln.xqqW9yijYWbKEAFXdQq72hv5Ghl9L5Z9logkkRt9Sk3quA7O7Cq0vXTCBvR5P7eW7wpEPT2JfClXEVESDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 24"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=Y6TZAWj9gAha1_mUGOHY2Twk3M3poLclwq1cCqLKe.SUC2TVMm1qQU6NB8c5mBnr9JI.sc1eNwXeDEKOqzDxkyDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 25"
        },
        
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=JAXoC_9OvlgoPvWMuYi0x04knpsMW2idAs3Q5_iWuzSSVTc2lrtA1JPpr9tUdwKvxQbZEXUUGAHYG82lpzCNbyDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 26"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=b2cnbH3M1NjmDkcVTRimT3glYFWXhTodp.Y2vlyuZt2rdZLthW1ENnhqDWrBtKmxLGF2m8vqvH8Mr.RzXL1nSyDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 27"
        },
        
        
    ]);

    // SET CAROUSEL DEFAULTS
    let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
    let currentSlide = slides[currentPosition]; // variable index value we can reference later

    const arrowRightClick = () => {
        currentPosition !== slides.length -1 ? // Check index length
        setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
        currentSlide = slides[currentPosition];
    }

    const arrowLeftClick = () => {
        currentPosition !== 0 ? // Check index length
        setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition = slides.length - 1);
        currentSlide = slides[currentPosition];
    }

    // const newWindow = () => {
    //     window.open({photo6}, "newwindow",
    //     ); return false;
    //   };
    

    return (
        <>
        <Wrapper>
        <div className="carousel-block">
            <div className="flex-container">
                <div id="slider">
                
                        
                        <Slider>
                            <Arrow onClick={arrowLeftClick}><i className="fas fa-arrow-alt-circle-left"> <AiFillCaretLeft/> </i></Arrow>
                        <Desktop><Img src={currentSlide.source} alt={currentSlide.title} title={currentSlide.title} className="slider-img" onClick={arrowRightClick} /> </Desktop>
                        <MobileImg> <a href = {PDF}> <Img src={currentSlide.source} alt={currentSlide.title} title={currentSlide.title}/> </a></MobileImg> 
                       
                            <Arrow onClick={arrowRightClick}><i className="fas fa-arrow-alt-circle-right"><AiFillCaretRight/></i></Arrow>
                            </Slider>
                    
                           

{/* <a href="#" onClick={newWindow}>MyPDF</a> */}
{/* <a href="#" onClick="window.open('../photos/APP_PDF_compressed.pdf', '_blank'); return false;">MyPDF</a>                 */}

                </div>
            </div>
        </div>
        </Wrapper>
        </>
    )
}
const Arrow = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
const MobileImg = styled.div`
width: 100%;
display:flex;
justify-content: center;
align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`
const Desktop = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
const Wrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-body);
  color: var(--color-blue);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Img = styled.img`
  max-height: 600px;
  border-radius: 20px;

  
  @media (max-width: 768px) {
    width: 80%;
    max-height: 80%;

  }
`;

const Slider = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
    max-width: 100%;
    max-height: 80%;
    flex-direction: column;

  }
`

export default Carousel;