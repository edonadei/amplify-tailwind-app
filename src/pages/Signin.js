import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createBlog, createComment, createPost } from "../graphql/mutations";
import { getBlog, getComment, getPost } from "../graphql/queries";
import { v4 as uuidv4 } from "uuid";
import { fireEvent } from "@testing-library/react";

export const Signin = () => {
  return (
    <div className="App">
      <div class="min-h-screen bg-white flex">
        <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div class="mx-auto w-full max-w-sm">
            <div>
              <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
                Let's test Amplify API
              </h2>
            </div>

            <div class="mt-8">
              <div>
                <div>
                  <p class="text-sm leading-5 font-medium text-gray-700">
                    Creations
                  </p>

                  <div class="mt-1 grid grid-cols-3 gap-3">
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(
                              graphqlOperation(createBlog, {
                                input: { name: "coucou2" }
                              })
                            )
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Create blog
                        </button>
                      </span>
                    </div>

                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(
                              graphqlOperation(createPost, {
                                input: {
                                  blogID:
                                    "28c6fcab-6916-4adb-aa9c-a5f619f3bc53",
                                  title: "postCool"
                                }
                              })
                            )
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Create post
                        </button>
                      </span>
                    </div>

                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(
                              graphqlOperation(createComment, {
                                input: {
                                  postID:
                                    "e77d2c5f-fff8-41ce-a52c-c49440615d6e",
                                  content: "Real cool article"
                                }
                              })
                            )
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Create msg
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <p class="text-sm leading-5 font-medium text-gray-700">
                  Getters
                </p>
                <div>
                  <div class="mt-1 grid grid-cols-3 gap-3">
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(graphqlOperation(getBlog, {
                              id: "28c6fcab-6916-4adb-aa9c-a5f619f3bc53"
                            }))
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Get blog
                        </button>
                      </span>
                    </div>
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(graphqlOperation(getPost, {
                              id: "e77d2c5f-fff8-41ce-a52c-c49440615d6e"
                            }))
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Get post
                        </button>
                      </span>
                    </div>
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(graphqlOperation(getComment, {
                              id: "e6cd6591-ca7a-4a8c-a6b9-2ed1e697b44e"
                            }))
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Get msg
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            
              <div class="mt-8">
              <p class="text-sm leading-5 font-medium text-gray-700">
                  Modifiers
                </p>
                <div>
                  <div class="mt-1 grid grid-cols-3 gap-3">
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(graphqlOperation(getBlog, {
                              id: "28c6fcab-6916-4adb-aa9c-a5f619f3bc53"
                            }))
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Edit blog
                        </button>
                      </span>
                    </div>
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(graphqlOperation(getPost, {
                              id: "e77d2c5f-fff8-41ce-a52c-c49440615d6e"
                            }))
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Edit post
                        </button>
                      </span>
                    </div>
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(graphqlOperation(getComment, {
                              id: "e6cd6591-ca7a-4a8c-a6b9-2ed1e697b44e"
                            }))
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Edit msg
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            
          </div>
        </div>
        
        <div class="hidden lg:block relative w-0 flex-1">
          <img
            class="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
