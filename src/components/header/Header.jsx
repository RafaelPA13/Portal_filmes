import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [abrir, setAbrir] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>Portal Filmes</h1>
        </div>
        <nav className={abrir ? "aberto" : ""}>
          <button
            className="btn-mobile"
            onClick={() => {
              setAbrir(!abrir);
            }}
          >
            <IoIosMenu />
          </button>
          <ul className="menu">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/filmes"}>Filmes</Link>
            </li>
            <li>
              <Link to={"/generos"}>Gênero</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
