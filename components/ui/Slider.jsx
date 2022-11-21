import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import Image from 'next/image';

const Slider = ({ images, mobile }) => {
    const CarouselUI = ({ children }) => (
        <Container mobile={mobile}>{children}</Container>
    );
    const Carousel = makeCarousel(CarouselUI);

    return (
        <Carousel
            defaultWait={4000}
            maxTurns={Infinity}
        >
            {images.map((image, i) => (
                <Slide
                    key={i}
                    right
                >
                    <Image
                        src={image}
                        alt={`Project Image ${i}`}
                        width={mobile ? 97 : 350}
                        height={mobile ? 200 : 262}
                    />
                </Slide>
            ))}
        </Carousel>
    );
};

export default Slider;

const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: ${(props) => (props.mobile ? `97` : `350`)}px;
    height: ${(props) => (props.mobile ? `200` : `262`)}px;
    border-radius: 12px;
    border: ${(props) => (props.mobile ? `5` : `10`)}px solid black;
`;
