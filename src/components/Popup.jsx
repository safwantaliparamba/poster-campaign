import React from "react";
import styled from "styled-components";

const Popup = ({onClose}) => {
    return (
        <MainWrapper onClick={onClose}>
            <ContetWrapper onClick={e => e.stopPropagation()}>
                <h1>safwan</h1>
            </ContetWrapper>
        </MainWrapper>
    );
};

export default Popup;

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
const ContetWrapper = styled.div`
    background: #fff;
    width: 50%;
    height: 70%;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    animation: slide-down 300ms cubic-bezier(0.46, -0.06, 0.39, 1.15) forwards;
    @keyframes slide-down {
        from {
            opacity: 0;
            transform: scale(2);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @media (max-width: 425px) {
        width: 90%;
        height: auto;
    }
`;
