import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";

const Header = () => {
  return (
    <>
      <Navbar className="bg-black mx-20">
        <Container>
          <h1 className="text-white sm:text-2xl md:text-3xl hover:font-bold transition-all font-sans py-1">
            Shopping Cart
          </h1>
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
