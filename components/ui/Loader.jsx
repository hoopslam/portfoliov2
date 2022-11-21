import styled from 'styled-components';

const Loader = () => {
    return (
        <Container>
            <Spinner />
        </Container>
    );
};

export default Loader;

const Container = styled.div`
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
    width: '100%';
    height: '100vh';
`;

const Spinner = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    :after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
`;
