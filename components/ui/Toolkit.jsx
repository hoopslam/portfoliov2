import styled from 'styled-components';
import ToolkitItems from './ToolkitItems';

const Toolkit = () => {
    return (
        <ToolKitContainer>
            <div className='slide-track'>
                <div className='items-container'>
                    <ToolkitItems />
                </div>
                <div className='items-container'>
                    <ToolkitItems />
                </div>
            </div>
        </ToolKitContainer>
    );
};

export default Toolkit;

const ToolKitContainer = styled.div`
    background-color: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
    height: 100px;
    position: relative;
    width: 100%;
    overflow: hidden;

    &::before,
    &::after {
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        content: '';
        height: 100px;
        position: absolute;
        z-index: 2;
    }

    &::after {
        width: 200px;
        right: 0;
        top: 0;
        transform: rotateZ(180deg);

        @media screen and (max-width: 767px) {
            width: 0;
        }
    }

    &::before {
        left: 0;
        top: 0;
        width: 350px;

        @media screen and (max-width: 767px) {
            width: 0;
        }
    }

    .slide-track {
        animation: scroll 28s linear infinite;
        display: flex;
        width: 200%;
        position: absolute;
        left: 0;
    }

    .items-container {
        display: flex;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    @keyframes scroll {
        0% {
            left: 0%;
        }
        100% {
            left: -200%;
        }
    }
`;
