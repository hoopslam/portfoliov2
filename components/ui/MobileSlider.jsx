import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled from "styled-components";
import Image from "next/image";

const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

const MobileSlider = ({images}) => {
  return (
    <Carousel defaultWait={4000} maxTurns={Infinity}>
      {images.map((image, i) => (
        <Slide key={i} right>
          <Image
                  src={image}
                  alt={`Project Image ${i}`}
                  width={97}
                  height={200}
                />
        </Slide>
      ))}
    </Carousel>
  );
};

export default MobileSlider;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 97px;
  height: 200px;
  border-radius: 12px;
	border: 5px solid black;
`;
