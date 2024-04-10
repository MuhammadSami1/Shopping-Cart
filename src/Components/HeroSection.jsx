const HeroSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-lg lg:text-4xl sm:text-2xl xl:text-6xl font-extrabold tracking-tight leading-none   dark:text-white">
              Savor Lahore Culinary Delights
            </h1>
            <p className="max-w-2xl text-sm mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From dine-in elegance to global culinary fusion, restaurants
              worldwide trust Flowbite to streamline their dining experience.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="Images/photo1.png" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
