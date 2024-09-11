"use client";
import Image from "next/image";
import { useState } from "react";
const pages = [
  "/september/page1.svg",
  "/september/page2.svg",
  "/september/page3.svg",
  "/september/page4.svg",
  "/september/page5.svg",
  "/september/page6.svg",
  "/september/page7.svg",
  "/september/page8.svg",
];

const September = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setIsLoading(true);
  };
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex md:flex-row justify-between items-center flex-col">
        <div className="">
          <h1 className="text-4xl font-bold "></h1>
        </div>
        <div className="flex justify-center space-x-4 m-4">
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
          >
            &lt;- Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pages.length - 1}
          >
            Next -&gt;
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Page {currentPage + 1}</h2>
        </div>
      </div>
      <div className="flex justify-center space-x-4 m-4">
        {isLoading ? (
          <span className=" h-6 loading "></span>
        ) : (
          <span className="h-6"></span>
        )}
      </div>

      <Image
        src={pages[currentPage]}
        alt="September"
        width={1000}
        height={1000}
        onLoad={() => setIsLoading(false)}
        className={isLoading ? "opacity-0" : ""}
      />
      <div className="flex justify-center space-x-4 m-4">
        <button
          className="btn btn-primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          &lt;- Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pages.length - 1}
        >
          Next -&gt;
        </button>
      </div>
    </div>
  );
};

export default September;
