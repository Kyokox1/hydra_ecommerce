import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="container navBar-contenedor d-flex justify-content-between">
        <img src={logo} alt="logo" />

        <div className="d-flex ">
          <ul className="d-flex"
          // className={mobile ? "show" : "deploy-nav"}
          // onClick={() => setMobile(false)}
          >
            <li>
              <NavLink className="nav-link" to="/">
                INICIO
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="productos">
                PRODUCTOS
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="promociones">
                PROMOCIONES
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="comprar">
                COMO COMPRO
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="contacto">
                CONTACTO
              </NavLink>
            </li>
          </ul>
          <div className="navBar-contenedor__buscar d-flex">
            Buscar <FiSearch />
          </div>
          <div className="navBar-contenedor__carrito d-flex">
            <span>
              <BsFillPersonFill />
            </span>
            <span>
              <NavLink className="nav-link" to="carrito"><AiOutlineShoppingCart /></NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
