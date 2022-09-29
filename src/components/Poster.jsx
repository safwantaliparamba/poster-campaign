import React, { useEffect, useState } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";

import poster from "../assets/poster-campaign-final-1.png";

const Poster = ({ image, name, onClose }) => {
    const [imagePath, setImagePath] = useState(null);
    useEffect(() => {
        const canvas = document.querySelector(".canvas");
        canvas.classList.add("block");
        html2canvas(canvas)
            .then((image) => {
                // console.log(image.toDataURL("image/jpg"));
                setImagePath(image.toDataURL("image/png"));
                canvas.classList.remove("block");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <MainWrapper>
            <ContentWrapper>
                <div
                    className="canvas"
                    style={{
                        background: `url(${poster}) no-repeat center center`,
                    }}
                >
                    <img src={image} alt="" />
                </div>
                <h4>Hii,  {name}</h4>
                <a href={imagePath} download>
                    download
                </a>
                <button className="close" onClick={onClose}>
                    Close
                </button>
            </ContentWrapper>
        </MainWrapper>
    );
};

export default Poster;

const MainWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #8080809c;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ContentWrapper = styled.div`
    background: #fff;
    /* width: 425px; */
    /* height: 70%; */
    border-radius: 10px;
    padding: 32px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    animation: slide-down 300ms cubic-bezier(0.46, -0.06, 0.39, 1.15) forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 425px) {
        /* width: 90%; */
    }
    a {
        display: block;
        background: #0062e6;
        color: #fff;
        padding: 8px 30px;
        font-weight: 600;
        font-size: 16px;
        border-radius: 7px;
        cursor: pointer;
        margin: 32px 0;
    }
    button {
        color: red;
        font-weight: 600;
        cursor: pointer;
    }

    .canvas {
        display: none;
        width: 50cm;
        height: 50cm;
        background-size: 50cm !important;

        img {
            position: absolute;
            position: absolute;
            width: 15cm;
            border-radius: 50%;
            top: 8cm;
            right: 17.5cm;
            left: 17.5cm;
            z-index: 100;
        }
        &.block {
            display: block;
        }
    }
`;
