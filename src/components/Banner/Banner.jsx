import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const carCategories = [
    "Sedan",
    "Coupe",
    "SUV",
    "Hatchback",
    "Convertible",
    "Sedan",
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full h-screen bg-[url('https://i.ibb.co/r2x0Rx2/banner01.jpg')] bg-cover bg-no-repeat bg-right-bottom">
          <div className="flex items-center justify-center w-full h-full bg-gray-900/50 backdrop-brightness-75">
            <div
              className="px-5"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div>
                <h4 className="text-lg font-bold">Biggest Car Dealer</h4>
                <h1 className="pl-8 mt-5 text-4xl font-extrabold tracking-wide border-l-8 lg:text-7xl md:text-5xl border-orange">
                  Find Your <span className="text-orange"> Perfect</span> Car
                </h1>
                <p className="mt-8 text-lg">
                  We can help you find the best car. Check our reviews, compare
                  models, and find cars for sale.
                </p>
              </div>
              <div className="flex items-center gap-10 pt-10">
                {carCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center py-8 avatar"
                  >
                    <div className="w-20 rounded-full ring ring-white">
                      <img
                        src="https://i.ibb.co/KryPCmr/sendan-black.jpg"
                        alt={category}
                      />
                    </div>
                    <p className="pt-10 text-lg font-medium">{category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
