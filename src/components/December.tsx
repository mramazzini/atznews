"use client";
import Image from "next/image";
import { useState } from "react";
const pages = [
  "https://lh3.googleusercontent.com/d/1heIfNmrUdoHe2OLGohyIgqTBVZ-9Ak7U=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1nvw9cztsr7eEteuUFWS25LWXo2unaBiF=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1GC7ULFOHHwVirxawYu_N4vQxI0QM2BLx=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1sSsUom0OPEvaJU4haaoSKKroJGzYXBDT=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1i_P1sHv-WpsaPi-6vswkotTp0cHW0nY9=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1tPou8tT8TCYpuhBiQ6nze3Dytn2okh2o=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/15D3P4tpXC0UsH01xFYJiB_D1X0q4D3MU=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/1aZDPz5w1px4v1PB4GoyjP-kRbj1sMvdO=s2200?authuser=0",
  "https://lh3.googleusercontent.com/d/13newonSzxtzBuvVu8s10nTrSTkBVcTQR=s2200?authuser=0",
];

const December = () => {
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
        alt="December"
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

export default December;
