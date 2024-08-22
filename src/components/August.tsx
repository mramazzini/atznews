"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const pages = [
  "/august/page1.svg",
  "/august/page2.svg",
  "/august/page3.svg",
  "/august/page4.svg",
  "/august/page5.svg",
  "/august/page6.svg",
  "/august/page7.svg",
  "/august/page8.svg",
];

const August = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(pages.length).fill(false)
  );
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (loadedImages[page]) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    // Preload all images using the native browser Image constructor
    pages.forEach((src, index) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
        if (index === currentPage) {
          setIsLoading(false);
        }
      };
    });
  }, [currentPage]);

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
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
        {isLoading && <span className="loading loading-lg "></span>}
      </div>

      <Image
        src={pages[currentPage]}
        alt="August"
        width={1000}
        height={1000}
        onLoad={() => setIsLoading(false)}
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

export default August;
