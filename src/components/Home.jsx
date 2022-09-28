import React, { useState } from "react";
import styled from "styled-components";

import poster from "../assets/full-poster.jpg";
import Popup from "./Popup";

const Home = () => {
    const [clicked, setClicked] = useState();
    return (
        <>
        {clicked && <Popup onClose={e => setClicked(false)} />}
            <MainWrapper bg={poster}>
                <img src={poster} alt="" />
                <h2>Create personalized poster to support campign</h2>
                <h1>NOOR MADRASA & MASJID COMMITTEE</h1>
                <h3>PULIMPARAMBA</h3>
                <p>create and download your own image</p>

                <button onClick={() => setClicked(true)}>Create</button>
            </MainWrapper>
        </>
    );
};

export default Home;

const MainWrapper = styled.div`
    width: 530px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #fff;
    border-radius: 15px;
    padding: 20px;

    @media screen and (max-width: 425px) {
        width: 100%;
    }

    img {
        width: 300px;
        margin-bottom: 24px;

        @media screen and (max-width: 425px) {
            width: 70%;
        }
    }
    * {
        text-align: center;
        @media screen and (max-width: 425px) {
            width: 90%;
        }
    }
    h2 {
        font-size: 19px;
        margin-bottom: 16px;
        color: #707070;
    }
    h1 {
        font-weight: 600;
        font-size: 24px;
        margin-bottom: 12px;
    }
    h3 {
        font-size: 20px;
        margin-bottom: 32px;
    }
    p {
        color: #808080;
        font-weight: 600;
        font-size: 14px;
    }
    button {
        background: #0062e6;
        color: #fff;
        padding: 10px 25px;
        font-weight: 600;
        font-size: 18px;
        border-radius: 7px;
        cursor: pointer;
    }
`;
