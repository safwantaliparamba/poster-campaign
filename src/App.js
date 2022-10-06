import styled from "styled-components";
import "./App.css";
import Home from "./components/Home";

function App() {
    return (
        <>
            <Home />
            <Footer>
                <p>&copy; <br /> Noor Masjid & Madrasa Committee</p>
                <a
                    href="https://safwantaliparamba.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Developer Contact
                </a>
            </Footer>
        </>
    );
}

export default App;

const Footer = styled.footer`
  text-align: center;

  p{
    font-weight: 600;
    color: #111;
    margin-bottom: 10px;
  }
  a{
    font-weight: 700;
    color: #000838;
  }
`