"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface fakeStore {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Server = () => {
  const [data, setData] = useState<fakeStore[] >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [parsedResponse, setParsedResponse] = useState<fakeStore[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      setParsedResponse(await response.json());
      setData(await parsedResponse);
      setLoading(false);
    };
    fetchData();
  });


  return (
    <div className="flex flex-col items-center justify-center w-full bg-amber-400 ">
      {!loading ? <h1 className="text-6xl text-zinc-800 my-10 font-bold max-md:text-4xl max-md:text-center max-md:border-b-2 max-md:border-double max-md:border-black max-md:pb-3">Client Side Data Fetching</h1> : null }
      <div className="grid gap-2 w-fit grid-flow-row grid-cols-4 xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-2 2xl:grid-cols-4 max-md:grid-cols-1">
       {loading ? <h1 className="py-10 text-6xl h-screen w-screen font-extrabold bg-emerald-500 text-zinc-900 flex justify-center items-center font-serif">Loading...</h1> : 
       data.map((products, index) => (
        <div key={index} className="flex flex-col border rounded-lg border-black w-[25rem] relative min-h-[652px] justify-end">
          <div className="flex justify-center items-center w-full py-2 bg-amber-100">
            <Image src={products.image} alt=" " height={180} width={150} className="h-[180px] w-auto mix-blend-multiply" />
          </div>
          <div className="flex flex-col justify-between px-1 bg-amber-200 h-[414px] relative ">
            <h1 className="text-2xl font-bold my-2 text-zinc-900 h-[130px]" >{products.title} <code className="pl-1 text-orange-600 text-2xl font-bold">{products.price}$</code></h1>
            <p className="text-lg font-semibold font-mono text-zinc-800 mb-2 absolute top-[146px]">{products.description.split(" ").slice(0, 20).join(" ") }</p>
            <p className="text-red-700 font-sans font-bold text-2xl my-2 absolute top-[294px]">{products.category}</p>
            <p className="my-2 text-xl font-semibold text-zinc-900 self-end">{products.rating.rate}(<i className="text-xl font-semibold text-orange-600">{products.rating.count}</i>)</p>
          </div>
          <button className="bg-orange-500 text-white py-2 rounded-b-md self-end w-full text-2xl font-semibold active:opacity-70">Add to Cart</button>
        </div>
       ))}
      </div>
    </div>
  );
};

export default Server;