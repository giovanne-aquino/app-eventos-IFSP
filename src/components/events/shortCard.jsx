import React from "react";

function ShortCard({ name }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Primeira div */}
      <div className="h-[15.875rem] w-[33rem] bg-stone-200 border border-gray-300 rounded-t-lg rounded-b-none p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">Data: 01/01/2023</p>
      </div>

      {/* Segunda div */}
      <div className="h-[12.9375rem] w-[33rem] bg-white-200 border border-gray-300 rounded-b-lg rounded-t-none p-4 flex flex-col justify-between">
        <h2 className=" text-3xl font-bold font-montserrat text-slate-800">{name}</h2>
        <p className="text-gray-600">Data: 01/01/2023</p>
      </div>
    </div>
  );
}

export default ShortCard;
