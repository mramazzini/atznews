"use client";
import Image from "next/image";
import { useState } from "react";
const pages = [
  "https://lh3.googleusercontent.com/d/1-X98jLGcQeTh4S7DETDyQ28GMT00mOip=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1dt4qqkwm7lAw_iRvdmIoNTDPRP7Xmql5=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/12hHFNO6_G86fWj8__Meoro4eOosVJxVq=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1C_duMOMUJVxfXb26YWBvWR8w8hG9IYn1=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1gLjRhUwWkhYE1ywHNtA_wtRnJoz6yNP0=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1EnJXqa2rIQkVB9fQjJi2xMlErJOenwcJ=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1WtLu4OIzO-a_-U0z0cj58mt71GE-TDPP=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1tjbZ0fj1lTAAEN-5YvDllxY5wn7Cq5GC=s2200?authuser=0",
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
