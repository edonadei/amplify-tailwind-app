import React from "react";
import { API, graphqlOperation } from "aws-amplify";

export const Button = props => {
  const { onClick, state } = props;

  return (
    <div>
      <span class="w-full inline-flex rounded-md shadow-sm">
        {state
          ? <button
              onClick={onClick}
              type="button"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
            >
              {props.children}
            </button>
          : <button
              disabled
              onClick={onClick}
              type="button"
              class="opacity-50 cursor-not-allowed w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
            >
              {props.children}
            </button>}
      </span>
    </div>
  );
};
