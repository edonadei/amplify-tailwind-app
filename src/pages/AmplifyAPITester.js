import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Button } from "../components/Button";
import {
  createBlog,
  createComment,
  createPost,
  updateBlog,
  updateComment,
  updatePost,
  deleteBlog,
  deletePost,
  deleteComment
} from "../graphql/mutations";
import { getBlog, getComment, getPost } from "../graphql/queries";

export const AmplifyAPITester = () => {
  const [blogID, setblogID] = useState(null);
  const [postID, setpostID] = useState(null);
  const [commentID, setcommentID] = useState(null);

  return (
    <div className="App">
      <div class="min-h-screen bg-white flex">
        <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div class="mx-auto w-full max-w-sm">
            <div>
              <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
                Amplify API Tester
              </h2>
            </div>

            {
              /////////////////  CREATE   ////////////////
            }

            <div class="mt-8">
              <div>
                <div>
                  <p class="text-sm leading-5 font-medium text-gray-700">
                    Create
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
                              .then(resultOfPromise => {
                                console.log(resultOfPromise);
                                setblogID(resultOfPromise.data.createBlog.id);
                              })
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
                              .then(resultOfPromise => {
                                console.log(resultOfPromise);
                                setpostID(resultOfPromise.data.createPost.id);
                              })
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
                              .then(resultOfPromise => {
                                console.log(resultOfPromise);
                                setcommentID(
                                  resultOfPromise.data.createComment.id
                                );
                              })
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Create msg
                        </button>
                      </span>
                    </div>
                    {/*
                    <Button
                      name="Create msg"
                      GraphQLQuery={createComment}
                      setID={setcommentID}
                      input={{
                        input: {
                          postID: "e77d2c5f-fff8-41ce-a52c-c49440615d6e",
                          content: "Real cool article"
                        }
                      }}
                    />
                    */}
                  </div>
                </div>
              </div>

              {
                /////////////////  GET   ////////////////
              }
              <div class="mt-8">
                <p class="text-sm leading-5 font-medium text-gray-700">Get</p>
                <div>
                  <div class="mt-1 grid grid-cols-3 gap-3">
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(
                              graphqlOperation(getBlog, {
                                id: blogID
                              })
                            )
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
                            API.graphql(
                              graphqlOperation(getPost, {
                                id: postID
                              })
                            )
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
                            API.graphql(
                              graphqlOperation(getComment, {
                                id: commentID
                              })
                            )
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

              {
                /////////////////  UPDATE  ////////////////
              }

              <div class="mt-8">
                <p class="text-sm leading-5 font-medium text-gray-700">
                  Update
                </p>
                <div>
                  <div class="mt-1 grid grid-cols-3 gap-3">
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(
                              graphqlOperation(updateBlog, {
                                input: {
                                  id: blogID,
                                  name: "testModified"
                                }
                              })
                            )
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
                            API.graphql(
                              graphqlOperation(updatePost, {
                                input: {
                                  id: postID,
                                  title: "How to modify a post"
                                }
                              })
                            )
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
                            API.graphql(
                              graphqlOperation(updateComment, {
                                input: {
                                  id: commentID,
                                  content: "you do edit it like that"
                                }
                              })
                            )
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

              {
                /////////////////  DELETE   ////////////////
              }

              <div class="mt-8">
                <p class="text-sm leading-5 font-medium text-gray-700">
                  Delete
                </p>
                <div>
                  <div class="mt-1 grid grid-cols-3 gap-3">
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(
                              graphqlOperation(deleteBlog, {
                                input: {
                                  id: blogID
                                }
                              })
                            )
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Delete blog
                        </button>
                      </span>
                    </div>
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(
                              graphqlOperation(deletePost, {
                                input: {
                                  id: postID
                                }
                              })
                            )
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Delete post
                        </button>
                      </span>
                    </div>
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            API.graphql(
                              graphqlOperation(deleteComment, {
                                input: {
                                  id: commentID
                                }
                              })
                            )
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Delete msg
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
            src="https://images.unsplash.com/photo-1516675302207-722c37ce2f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
