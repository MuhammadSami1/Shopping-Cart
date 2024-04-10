import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="bg-gray-800 mx-20 sm:mx-24">
        <Container className="px-3">
          <Link className="text-white sm:text-2xl md:text-3xl hover:font-bold transition-all font-sans py-1">
            Shopping Cart
          </Link>
          <div className="text-white">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} size="xl" />
            </span>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
