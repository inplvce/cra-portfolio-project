import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skill} from "./layout/sections/skills/skill/Skill";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import React from "react";
import {About} from "./layout/sections/about/About";
import {ButtonEllipsMenu} from "./components/buttons/Button";
// import {Testing} from "./layout/sections/testing/Testing";



function App() {
    return (

        <div className="App">
            <Header/>
            <Main/>
            <About/>
            {/*<Skills/>*/}
            <Works/>
            {/*<Testimony/>*/}
            <Slogan/>
            <Contacts/>
            <Footer/>
            {/*<Testing/>*/}
        </div>
    );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
