import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Question({ id, title, info }) {
  const [toggle, setToggle] = React.useState(false);
  return (
    <section className="border-2 border-purple-400 rounded mt-4 shadow-lg p-2">
      <div className="flex justify-between items-center">
        <h1 className="pl-4">{title}</h1>

        {toggle ? (
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className="bg-gray-300 rounded-full p-2 border-red-200 border-2 mr-4"
          >
            <AiOutlineMinus />
          </button>
        ) : (
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className="bg-gray-300 rounded-full p-2 border-red-200 border-2 mr-4"
          >
            <AiOutlinePlus />
          </button>
        )}
      </div>

      <div>
        <h2 className="pl-4">{toggle && info}</h2>
      </div>
    </section>
  );
}
