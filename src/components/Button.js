import React from "react";
import { API, graphqlOperation } from "aws-amplify";

export const Button = ({ name, GraphQLQuery, setID, input }) => {
  return (
    <div>
      <span class="w-full inline-flex rounded-md shadow-sm">
        <button
          onClick={() => {
            API.graphql(
              graphqlOperation(GraphQLQuery, input)
            )
              .then(resultOfPromise => {
                console.log(resultOfPromise);
                const nameOfFunction = setID.name;
                console.log(setID); 
                console.log(nameOfFunction); 
                setID(resultOfPromise.data[nameOfFunction].id); 
              })
              .catch(err => console.log(err));
          }}
          type="button"
          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
        >
          {name}
        </button>
      </span>
    </div>
  );
};
