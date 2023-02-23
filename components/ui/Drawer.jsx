import styled from 'styled-components';

function Drawer({ drawerActive, closeDrawer }) {
    return (
        <Overlay
            className={`${drawerActive ? 'active' : ''}`}
            onClick={closeDrawer}
        >
            <DrawerContainer>
                <div className='category'>
                    <h2>FRONT END</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>React</li>
                        <li>Material UI</li>
                        <li>Next.js</li>
                        <li>Redux/Zustand/Recoil</li>
                        <li>Styled Components</li>
                        <li>Tailwind</li>
                        <li>GraphQL</li>
                        <li>Jest / RTL</li>
                    </ul>
                    <h2>BACKEND</h2>
                    <ul>
                        <li>Node/Express</li>
                        <li>REST</li>
                        <li>Sanity</li>
                        <li>Firebase</li>
                    </ul>
                    <h2>DATABASE</h2>
                    <ul>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                    </ul>
                    <h2>Mobile</h2>
                    <ul>
                        <li>React Native/Expo</li>
                        <li>Cordova</li>
                    </ul>
                    <h2>WORKFLOW</h2>
                    <ul>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Bitbucket</li>
                        <li>Jira</li>
                        <li>Agile/Scrum</li>
                    </ul>
                </div>
            </DrawerContainer>
        </Overlay>
    );
}

export default Drawer;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    z-index: 200;
    transition: transform 1s ease;
    transform: translateX(100%) scaleX(0);

    &.active {
        transform: translateX(0) scaleX(1);
    }
`;

const DrawerContainer = styled.div`
    position: fixed;
    width: 350px;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.sidebar};
    color: white;
    font-size: 1rem;
    padding: 10px 10px 20px;
    height: 100%;
    z-index: 300;

    h2 {
        font-size: 1rem;
        margin: 10px 0px 5px;
        border-bottom: 1px solid ${({ theme }) => theme.light};
    }

    h1 {
        font-size: 2.5rem;
        text-align: center;
    }

    ul {
        margin-left: 5px;
        margin-bottom: 5px;
    }

    .category {
        width: 230px;
        padding: 20px;
    }
    @media screen and (max-width: 768px) {
        padding: 10px 0;
        font-size: 0.85rem;

        .category {
            padding: 5px 15px;
        }
    }

    @media screen and (max-width: 990px) {
        margin: 0;
        grid-template-columns: 1fr;
    }
`;
