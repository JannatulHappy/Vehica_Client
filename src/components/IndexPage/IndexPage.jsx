import React from "react";
function IndexPage() {
  return (
    <>
      <div className="px-4 md:mx-auto max-w-[1440px] mx-auto">
        <div className="pt-10 md:pt-40">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="w-full md:w-1/2 lg:w-2/3 xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <h1 className="text-2xl font-black tracking-tighter lg:text-5xl md:leading-snug f-f-l">
                    Boost adoption of product and services
                  </h1>
                  <h2 className="py-4 text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r md:py-8">
                    Here at Vehica we take special care of what your
                    organization needs instead of selling you a mass market tool
                    that takes a one size fits all approach. I personally review
                    each and every client business and oversee the team that
                    tailores a solution
                  </h2>
                  <div className="flex items-center pb-4 cursor-pointer md:pb-0">
                    <h3 className="text-lg font-semibold underline f-f-r ">
                      Lets Get Started
                    </h3>
                    <div className="pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="#ff4605"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-end justify-center w-full lg:w-1/3 md:w-1/2 h-80">
                <img
                  className="absolute inset-0 object-cover object-center w-full h-full rounded-md"
                  src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png"
                  alt
                />
                <div className="relative z-10 w-10/12 p-6 -mb-20 bg-white rounded shadow">
                  <div className="flex items-center justify-between w-full mb-8 sm:w-full">
                    <div className="flex items-center">
                      <div className="p-4 bg-yellow-200 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-discount"
                          width={32}
                          height={32}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={9} y1={15} x2={15} y2={9} />
                          <circle cx="9.5" cy="9.5" r=".5" />
                          <circle cx="14.5" cy="14.5" r=".5" />
                          <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                        </svg>
                      </div>
                      <div className="ml-6">
                        <h3 className="mb-1 text-2xl font-bold leading-5 text-gray-800">
                          2,330
                        </h3>
                        <p className="text-sm font-normal leading-5 tracking-normal text-gray-600">
                          Avg Sales
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pl-3 text-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-trending-up"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="3 17 9 11 13 15 21 7" />
                          <polyline points="14 7 21 7 21 14" />
                        </svg>
                        <p className="pl-1 text-xs font-bold leading-normal tracking-wide text-green-400">
                          7.2%
                        </p>
                      </div>
                      <p className="text-xs font-normal leading-4 tracking-normal text-right text-green-400">
                        Increase
                      </p>
                    </div>
                  </div>
                  <div className="relative mb-3">
                    <hr className="h-1 bg-gray-200 rounded-sm" />
                    <hr className="absolute top-0 w-7/12 h-1 bg-indigo-700 rounded-sm" />
                  </div>
                  <h4 className="text-base font-normal leading-5 tracking-normal text-gray-600">
                    Yearly Goal
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 pb-32">
          <div className="mx-auto">
            <div className="flex flex-row-reverse flex-wrap items-center">
              <div className="w-full pl-0 md:w-1/2 lg:w-2/3 lg:pl-20 md:pl-10 sm:pl-0">
                <div className="py-2 text-color">
                  <h1 className="text-2xl font-black tracking-tighter lg:text-4xl md:leading-snug f-f-l">
                    Easily manage sales through our invoicing system
                  </h1>
                  <h2 className="py-8 text-lg leading-7 lg:text-xl md:leading-10 f-f-r">
                    Here at Vehica we take special care of what your
                    organization needs instead of selling you a mass market tool
                    that takes a one size fits all approach. I personally review
                    each and every client business and oversee the team that
                    tailores a solution
                  </h2>
                  <div className="flex items-center pb-4 cursor-pointer md:pb-0">
                    <h3 className="text-lg font-semibold underline 0 f-f-r lg:text-xl">
                      Lets Get Started
                    </h3>
                    <div className="pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="#ff4605"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-end justify-center w-full lg:w-1/3 md:w-1/2 h-96">
                <img
                  className="absolute inset-0 object-cover object-center w-full h-full rounded-md"
                  src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
                  alt
                />
                <div className="relative z-10 w-9/12 p-4 mx-auto -mb-20 bg-white rounded shadow">
                  <h4 className="mb-2 font-normal leading-4 tracking-normal text-gray-800 text-md">
                    Invoice # 35RD87
                  </h4>
                  <p className="text-xs font-normal leading-3 text-gray-600">
                    Assigned to: Josh Rollins
                  </p>
                  <div className="flex items-center mt-4">
                    <span className="text-gray-600">
                      <svg
                        className="feather feather-user"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </span>
                    <p className="ml-1 text-sm font-normal leading-3 tracking-normal text-gray-800">
                      Specter Consultancy
                    </p>
                  </div>
                  <div className="flex items-center mt-3">
                    <span className="text-gray-600">
                      <svg
                        className="feather feather-dollar-sign"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1={12} y1={1} x2={12} y2={23} />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </span>
                    <p className="ml-1 text-sm font-normal leading-3 tracking-normal text-gray-800">
                      2,354 USD
                    </p>
                  </div>
                  <button className="relative py-2 pl-3 pr-10 mt-4 text-xs tracking-normal text-white cursor-pointer bg-orange focus:outline-none hover:opacity-90">
                    View Invoice
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={5} y1={12} x2={19} y2={12} />
                      <line x1={13} y1={18} x2={19} y2={12} />
                      <line x1={13} y1={6} x2={19} y2={12} />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
