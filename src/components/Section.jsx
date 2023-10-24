import React from 'react'
import Fade from 'react-reveal/Fade';
import './section.css'



const Section = ({ title, description, backgroundImage, leftButtonText, rightButtonText }) => {
    const containerStyle = {
        "backgroundImage": `url('/images/${backgroundImage}')`,
        "height": "100vh",
        "width": "100vw",
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "backgroundRepeat": "noRepeat",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-between",
        "alignItems": "center"

    }
    const ItemTextStyle = {
        "paddingTop": "15vh",
        "textAlign": "center",
        "fontSize":"1.2rem",
        "color":"black",
    }
    const buttonGrp = {
        "display": "flex",
        "marginBottom": "30px",

    }
    const buttonGrpMobile = {
        "display": "flex",
        "marginBottom": "30px",
        "flexDirection": "column",
    };
    const leftButton = {
        "backgroundColor": "#F4F4F4",
        "height": "40px",
        "width": "256px",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "borderRadius": "100px",
        "opacity": "0.85",
        "textTransform": "uppercase",
        "fontSize": "12px",
        "cursor": "pointer",
        "margin": "8px",
        "fontWeight": "600"

    }

    return (
        <>
            <div className='Section'>
                <div className="container" style={containerStyle}>
                    <div className="ItemText" style={ItemTextStyle}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>

                    <div>
                        <div className="buttonGrp">
                            <div style={leftButton} >
                                {leftButtonText}
                            </div>

                            <div style={{ ...leftButton, backgroundColor: 'rgba(23, 26, 32, 0.5)', color: "white", fontWeight: "400" }}>
                                {rightButtonText}
                            </div>
                        </div>
                        <Fade up>

                            <div style={{ marginBottom: "40px" }}>

                                <img src="/images/down-arrow-2.svg" alt="" style={{ filter: "brightness(0) invert(1)" }} />
                            </div>
                        </Fade>


                    </div>


                </div>
            </div>
        </>
    )



}

export default Section
