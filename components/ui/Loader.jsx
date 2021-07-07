import { Circle } from "better-react-spinkit";
import styled from "styled-components";

const Loader = () => {
	return (
		<Container>
            <Circle color='#00acc1' size={100} />
        </Container>
	);
};

export default Loader;

const Container = styled.div`
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
    width: "100%";
    height: "100vh";
`;
