import React, { useState } from 'react';
import photo from "../photos/bio pic.jpg";
import styled from 'styled-components';
import {AiFillCaretRight} from 'react-icons/ai'
import {AiFillCaretLeft} from 'react-icons/ai'



const Carousel = () => {

    const [slides] = useState([
        {
            source: "https://lh3.googleusercontent.com/nmmLSG2y0EW4vWJtR8gQ3eigCfkMEWXEc0i911zmpi_kGDYH5K0JECZCX8xkGsYP8ioT9Rcqzi4VmRR0-7_L6NPGHMGKdrZSWbM71UIVPONTH6MFIkg98OBx_7z8Dpw80wmMvirAO048RSOXEBiFHwhxSIw49x-mAuQT52ZYd5pkqNujoxSVbf0DprFmYnEkxhH3wDV0NYVmrmC3Yy9slWOD_keqZlqKZOuXfIVmDMUnWjzf2lAAEYT-sHJo1iAodwZBAcEW8kG0pJkMfYztTg9Cxq1VGzjpUE2FfubW_3lwPXWAbq6RDP3F71fzbPa7jlWisxulCngCvCya1GuLWrsmiJeQtqdj3bVLsd2q3NtJ5rX4x31ht6g0QwNf5lD0BM6ccbjGCmqyY0n6HYDlXh7uiE3ND6ZtpNJ_1O1cR9_f5IkSmoo5aXq9x6NOzze8XiS966eu0hO8IGCxdUtxMYWlg9f6I97DRg8vHO_fq18dSBcrZVh9bUQ4zUY7aVoeiWXH_GZUeY-bcYRXEe0byCX_A3ynYEwSjtXO1mhZ_h_ZolXTf2Ba0WE8qmrZ4VFJLcwUftH4U8p0KH0iMXMFxEf8-P406JLKmrAS8avTarWgFLEsntZ7zyP_oV65-QEnIZUKcNZ_SxT-pmwdnXWRdHYh2AwVLCQFcKl-qQlj3X1VKWisrRanX8Y9U05UWbZny9eXf-dNoLi45UDuEq-CCRfJy8DWQKGI_a6iJeUywsUgCNQbKPsvLVSf04t3LKXu7W0VUZLgMT-xgArpOrH6n4CBB7ezknyvPJFtR3aHtTM1REQT7dWhNsoOCb9n4RcqRRW4vxyHW_0mUY2_PcEJDYCA6ozXCUHS8LZNfxcq7iT35ZX7Un7onh1W9_z2stzmYneyYbCEOYWyz6mS02ARzEHYnwVJd6a3Vwm_gHMQKQG3o9zPXZB448_up64GxPdUKZq0I-Jau5kaW3lV5CDG=w610-h944-no?authuser=0",
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
            source: "https://icecube-eu-303.icedrive.io/download?p=Wu6YWDE2TWRkkCXWHNt1AIaGkdcugnjSFmPH1XltQ6X1_GftRTRd5paShCzxQ5jp4CNYAcIIKY_sgb3SF7pXgT7_ZhEbnIg9AueeNfNCCeJE2fBadh7vdeqIBZJfYxPZwDOtr9TtQsdD15iBBEADHme88WlBo1857X7h_ZlV.Xrm9pfTzXqRRKmtc13tindin1H9lfojUwftm7yrULCtB4hC5Jf9y6RTyRPnSfFT7V7d2GdYQR_pXdbGzHfepa52",
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
            source: "https://icecube-eu-303.icedrive.io/download?p=Wu6YWDE2TWRkkCXWHNt1AIaGkdcugnjSFmPH1XltQ6WeT3g1tBfS96_tkFQx27xt4CNYAcIIKY_sgb3SF7pXgT7_ZhEbnIg9AueeNfNCCeJZSkr3bn0whK5DID5wr7KY4fuCzPEtVm9maJH50WeMwdcMsCdbaYjNSffOmkfralrm9pfTzXqRRKmtc13tindin1H9lfojUwftm7yrULCtBxhpmgMrZuj9LgcHSEq0c1Ld2GdYQR_pXdbGzHfepa52",
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
            source: "https://icecube-eu-303.icedrive.io/download?p=Wu6YWDE2TWRkkCXWHNt1AIaGkdcugnjSFmPH1XltQ6XupNOPOVYSP4hNzPpuMrw94CNYAcIIKY_sgb3SF7pXgT7_ZhEbnIg9AueeNfNCCeLn9kAfSF9WrJh7ajM0Yma_zz2dZQFtCmGeStRG.IVJTiA5ydxcVauIQLDn1vId9lTm9pfTzXqRRKmtc13tindin1H9lfojUwftm7yrULCtB6UCBWbwf5727uqP3dozJNjd2GdYQR_pXdbGzHfepa52",
            title: "page 22"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/download?p=Wu6YWDE2TWRkkCXWHNt1AIaGkdcugnjSFmPH1XltQ6VsS9N_s7_V_N1vUG2E4hHX4CNYAcIIKY_sgb3SF7pXgT7_ZhEbnIg9AueeNfNCCeIn9m.QV8GB58NcgXR2.N7pFVCtRZb7s5uZcPNmvHI5TFBF22UuPsSrYvxSU0PYih7m9pfTzXqRRKmtc13tindin1H9lfojUwftm7yrULCtB2mKZrVrXCRAdVVq358oq1Pd2GdYQR_pXdbGzHfepa52",
            title: "page 23"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/thumbnail?p=f6Aln.xqqW9yijYWbKEAFXdQq72hv5Ghl9L5Z9logkkRt9Sk3quA7O7Cq0vXTCBvR5P7eW7wpEPT2JfClXEVESDlyLGz8uHpUKktTHrYuxA1khxMa1KkldA_XxRUmM39&w=1024&h=1024&m=cropped",
            title: "page 24"
        },
        {
            source: "https://icecube-eu-303.icedrive.io/download?p=Wu6YWDE2TWRkkCXWHNt1AIaGkdcugnjSFmPH1XltQ6X7E_FFyF6Pw34XsfWEBjo04CNYAcIIKY_sgb3SF7pXgT7_ZhEbnIg9AueeNfNCCeIEClvZTskWs4OF_zSNmnw2D2uffSrPwhO1f.4wA.8hBLnB1Fwuzh0S7hdCb.YNBznm9pfTzXqRRKmtc13tindin1H9lfojUwftm7yrULCtByayydQARy3xdHU7Eof_ZpTd2GdYQR_pXdbGzHfepa52",
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

    return (
        <>
        <Wrapper>
        <div className="carousel-block">
            <div className="flex-container">
                <div id="slider">
                
                        
                        <Slider>
                            <div id="arrow-left" onClick={arrowLeftClick}><i className="fas fa-arrow-alt-circle-left"> <AiFillCaretLeft/> </i></div>
                        <Img src={currentSlide.source} alt={currentSlide.title} title={currentSlide.title} className="slider-img" onClick={arrowRightClick} />
                            <div id="arrow-right" onClick={arrowRightClick}><i className="fas fa-arrow-alt-circle-right"><AiFillCaretRight/></i></div>
                            </Slider>
                    
                

                </div>
            </div>
        </div>
        </Wrapper>
        </>
    )
}

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
    max-width: 100%;
    max-height: 80%;

  }
`;

const Slider = styled.div`
display: flex;
flex-direction: row;
align-items: center;
@media (max-width: 768px) {
    max-width: 100%;
    max-height: 80%;
    flex-direction: column;

  }
`

export default Carousel;