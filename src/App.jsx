import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <img
          src="./img/Logo.svg"
          alt=""
          className="lg:mt-7 my-3 block lg:inline-block fixed ml-4 lg:ml-0"
        />
        <div className="flex lg:flex-row flex-col items-center">
          <div className="lg:w-3/6 order-last px-3 py-5 sm:px-4">
            <h1 className="lg:text-7xl sm:text-6xl text-3xl font-bold leading-none">
              Explore the best camps on Earth.
            </h1>
            <p className="lg:text-xl sm:text-2xl text-lg w-4/6 my-5 ">
              YelpCamp is a curated list of the best camping spots on Earth.
              Unfiltered and unbiased reviews.
            </p>
            <p className="lg:text-xl sm:text-2xl text-lg flex my-3">
              <img
                src="./img/Checkmark.svg"
                alt=""
                className="w-6 lg:mr-4 mr-3"
              />{" "}
              Add your own camp suggestions.
            </p>
            <p className="lg:text-xl sm:text-2xl text-lg flex my-3">
              <img
                src="./img/Checkmark.svg"
                alt=""
                className="w-6 lg:mr-4 mr-3"
              />
              Leave reviews and experiences.
            </p>
            <p className="lg:text-xl sm:text-2xl text-lg flex my-3">
              <img
                src="./img/Checkmark.svg"
                alt=""
                className="w-6 lg:mr-4 mr-3"
              />{" "}
              See loaction for all camps.
            </p>
            <a
              href="#"
              className=" bg-black text-white px-4 py-3 sm:px-8 sm:py-5 align-middle text-center font-semibold lg:text-lg sm:text-2xl rounded my-6 inline-block"
            >
              View Campgrounds
            </a>
            <p>
              <span className="block lg:text-xl sm:text-2xl">
                Partner with :
              </span>
              <div className="flex my-2">
                <a href="#">
                  <img
                    src="./img/Airbnb.svg"
                    alt=""
                    className="sm:w-36 lg:w-44"
                  />
                </a>
                <a href="#">
                  <img
                    src="./img/Booking.svg"
                    alt=""
                    className=" sm:w-48 lg:w-44"
                  />
                </a>
                <a href="#">
                  <img
                    src="./img/Plum Guide.svg"
                    alt=""
                    className=" sm:w-48 lg:w-44"
                  />
                </a>
              </div>
            </p>
          </div>
          <div className="lg:w-3/6 lg:order-last mt-12">
            <img
              src="./img/Hero Image.jpg"
              alt=""
              className="hidden lg:block"
            />
            <img
              src="./img/Hero Image (Tablet and Mobile).jpg"
              className="visible lg:hidden"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
