import React from "react";
import Property from "../Property";

const index = () => {
  const property = [
    {
      id: 1,
      title: "Property 1",
      image: "/assets/images/house1.png",
      createdAt: "2020-01-01",
      price: "100$",
      bedroom: 1,
    },
    {
      id: 2,
      title: "Property 2",
      image: "/assets/images/house2.png",
      createdAt: "2020-01-01",
      price: "99$",
      bedroom: 1,
    },
    {
      id: 3,
      title: "Property 3",
      image: "/assets/images/house3.png",
      createdAt: "2020-01-01",
      price: "98$",
      bedroom: 1,
    },
    {
      id: 4,
      title: "Property 4",
      image: "/assets/images/house4.png",
      createdAt: "2020-01-01",
      price: "97$",
      bedroom: 1,
    },
    {
      id: 5,
      title: "Property 5",
      image: "/assets/images/house5.png",
      createdAt: "2020-01-01",
      price: "96$",
      bedroom: 1,
    },
  ];
  return (
    <section className="my-48 flex justify-center items-center flex-col bg-gradient-to-lr from-slate-100 via-transparent to-indigo-200">
      <h1 className="text__gradient text-center text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold uppercase mb-10">
        latest added properties
      </h1>
      <div className=" container mx-auto grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-center px-5 sm:p-0">
        {property.map((item) => {
          return <Property key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default index;
