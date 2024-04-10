import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Cards = ({ title, image }) => {
  return (
    <>
      <Card className="w-72 lg:w-96">
        <Card.Img
          variant="top"
          src={image}
          className=" object-center h-72 p-6"
        />
        <Card.Body>
          <Card.Title>
            <h1 className="truncate mt-1 text-center text-lg font-medium text-gray-900 ">
              {title}
            </h1>
          </Card.Title>
          <div className="text-center">
            <Button variant="primary" className="mt-3">
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

Cards.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Cards;
