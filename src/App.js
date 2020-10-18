import React from "react";
import Question from "./Question";
import data from "./data";

export default function App() {
  return (
    <section className="grid place-items-center h-screen">
      <div className="bg-white md:w-2/3 w-11/12 mx-auto md:flex p-4 rounded-lg shadow-xl hover:shadow-2xl">
        <h1 className="text-purple-700 text-2xl font-bold md:p-4">
          Questions and answers about login
        </h1>
        <div className="flex flex-col w-full">
          {data.map((question, index) => {
            return <Question key={index} {...question} />;
          })}
        </div>
      </div>
    </section>
  );
}
