import HeroSection from "../Components/HeroSection";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/getUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";
import Cards from "../Components/Cards";

const Home = () => {
  const { users, loading, error } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const [displayItems, setDisplayItem] = useState(12);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2 className="text-5xl font-bold text-center my-5">Loading...</h2>;
  }

  if (error !== null) {
    return (
      <h2 className="text-3xl font-bold">
        Something went wrong with your network.
      </h2>
    );
  }

  const moreItems = () => {
    setDisplayItem((prevCount) => prevCount + 10);
  };

  return (
    <div className="sm:mx-24 mx-20">
      <Carousel />
      <HeroSection />
      <h1 className="py-5 mt-4 text-2xl sm:text-3xl lg:text-5xl flex justify-center items-center font-bold bg-white ">
        Restaurants in Lahore
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-5 py-5">
        {users.slice(0, displayItems).map((value) => (
          <Link key={value.id}>
            <Cards title={value.title} image={value.image} />
          </Link>
        ))}
        {displayItems < users.length && (
          <button
            className="bg-black text-white px-4 py-2 rounded-xl"
            onClick={moreItems}
          >
            More items
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
