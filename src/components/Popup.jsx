import React, { useRef, useState } from "react";
import { Cropper } from "react-cropper";
import styled from "styled-components";

import "cropperjs/dist/cropper.css";

const Popup = ({ onClose, setDetails }) => {
    const [image, setImage] = useState(null);
    const [imageSelected, setImageSelected] = useState(false);
    const [croppedImage, setCroppedImage] = useState(null);

    const cropperRef = useRef();
    const nameRef = useRef();

    const imageOnChange = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        let url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setImage(reader.result);
            setImageSelected(true);
        };
    };
    const onCrop = () => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        setCroppedImage(cropper.getCroppedCanvas().toDataURL());
    };

    return (
        <>
            <MainWrapper onClick={onClose}>
                <ContnetWrapper onClick={(e) => e.stopPropagation()}>
                    <div className="input-container">
                        <input
                            type="file"
                            hidden
                            id="image"
                            onChange={imageOnChange}
                        />
                        <label htmlFor="image">upload</label>
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Name" ref={nameRef} />
                    </div>
                    <button
                        onClick={(e) => {
                            setDetails(croppedImage, nameRef.current.value);
                        }}
                    >
                        Create
                    </button>
                </ContnetWrapper>
            </MainWrapper>
            {imageSelected && (
                <MainWrapper>
                    <ContnetWrapper>
                        <CropperWrapper>
                            <Cropper
                                style={{
                                    width: "300px",
                                }}
                                src={image}
                                aspectRatio={1 / 1}
                                crop={onCrop}
                                ref={cropperRef}
                            />
                        </CropperWrapper>
                        <button
                            onClick={(e) => {
                                setImageSelected(false);
                            }}
                        >
                            select
                        </button>
                    </ContnetWrapper>
                </MainWrapper>
            )}
        </>
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
const ContnetWrapper = styled.div`
    background: #fff;
    width: 50%;
    height: 70%;
    border-radius: 10px;
    padding: 32px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    animation: slide-down 300ms cubic-bezier(0.46, -0.06, 0.39, 1.15) forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
        max-height: 80%;
    }

    .input-container {
        width: 100%;
        label {
            display: block;
            background: #00f291;
            color: #fff;
            padding: 8px 30px;
            font-weight: 600;
            font-size: 16px;
            border-radius: 7px;
            cursor: pointer;
            width: 100%;
            margin-bottom: 24px;
        }
        input[type="text"] {
            border: 1px solid #808080;
            width: 100%;
            padding: 7px 15px;
            font-size: 18px;
            border-radius: 5px;
        }
    }
    button {
        background: #0062e6;
        color: #fff;
        padding: 9px 30px;
        font-weight: 600;
        font-size: 16px;
        border-radius: 7px;
        cursor: pointer;
        width: 100%;
        margin: 32px 0;
    }
`;

const CropperWrapper = styled(ContnetWrapper)`
    margin-bottom: 40px;
    img {
        width: 500px;
    }
`;
