import {
    SiJavascript,
    SiNextDotJs,
    SiFirebase,
    SiRedux,
    SiTypescript,
    SiTailwindcss,
} from 'react-icons/si';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import {
    DiCss3,
    DiBootstrap,
    DiReact,
    DiMongodb,
    DiSass,
} from 'react-icons/di';
import { FaNode } from 'react-icons/fa';

import styled from 'styled-components';

function ToolkitItems() {
    return (
        <>
            <ToolIcon>
                <AiFillHtml5
                    size={50}
                    color={'#e34c26'}
                    title={'HTML 5'}
                />
                <p>HTML5</p>
            </ToolIcon>
            <ToolIcon>
                <DiCss3
                    size={50}
                    color={'#264de4'}
                    title={'CSS 3'}
                />
                <p>CSS3</p>
            </ToolIcon>
            <ToolIcon>
                <SiJavascript
                    size={50}
                    color={'#f0db4f'}
                    title={'Javascript'}
                />
                <p>Javascript</p>
            </ToolIcon>
            <ToolIcon>
                <SiTypescript
                    size={50}
                    color={'#007acc'}
                    title={'Typescript'}
                />
                <p>Typescript</p>
            </ToolIcon>
            <ToolIcon>
                <SiTailwindcss
                    size={50}
                    color={'#0ea4e9'}
                    title={'Tailwind'}
                />
                <p>Tailwind</p>
            </ToolIcon>
            <ToolIcon>
                <DiBootstrap
                    size={50}
                    color={'#602C50'}
                    title={'Bootstrap'}
                />
                <p>Bootstrap</p>
            </ToolIcon>
            <ToolIcon>
                <DiSass
                    size={50}
                    color={'#c69'}
                    title={'Sass'}
                />
                <p>Sass</p>
            </ToolIcon>
            <ToolIcon>
                <DiReact
                    size={50}
                    color={'#61DBFB'}
                    title={'React'}
                />
                <p>React</p>
            </ToolIcon>
            <ToolIcon>
                <SiRedux
                    size={50}
                    color={'#764abc'}
                    title={'Redux'}
                />
                <p>Redux</p>
            </ToolIcon>
            <ToolIcon>
                <SiNextDotJs
                    size={50}
                    color={'#000000'}
                    title={'Next.js'}
                />
                <p>Next.js</p>
            </ToolIcon>
            <ToolIcon>
                <FaNode
                    size={50}
                    color={'#303030'}
                    title={'Node'}
                />
                <p>Node</p>
            </ToolIcon>
            <ToolIcon>
                <DiMongodb
                    size={50}
                    color={'#4DB33D'}
                    title={'MongoDB'}
                />
                <p>MongoDB</p>
            </ToolIcon>
            <ToolIcon>
                <AiFillGithub
                    size={50}
                    color={'#211F1F'}
                    title={'Github'}
                />
                <p>Github</p>
            </ToolIcon>
            <ToolIcon>
                <SiFirebase
                    size={50}
                    color={'#ffcb2b'}
                    title={'Firebase'}
                />
                <p>Firebase</p>
            </ToolIcon>
        </>
    );
}

export default ToolkitItems;

const ToolIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    padding: 12px 32px;

    p {
        margin-left: 12px;
        font-size: 1rem;
        color: black;
    }
`;
