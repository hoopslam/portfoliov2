import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled from "styled-components";
import Image from "next/image";

const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

const DesktopSlider = ({images}) => {
  return (
    <Carousel defaultWait={4000} maxTurns={Infinity}>
      {images.map((image, i) => (
        <Slide key={i} right>
          <Image
                  src={image}
                  alt={`Project Image ${i}`}
                  width={350}
                  height={262}
                />
        </Slide>
      ))}
    </Carousel>
  );
};

export default DesktopSlider;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 350px;
  height: 262px;
  border-radius: 12px;
	border: 10px solid black;
`;
