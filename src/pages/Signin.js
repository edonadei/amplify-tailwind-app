import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createBlog, createComment, createPost } from "../graphql/mutations";
import { v4 as uuidv4 } from "uuid";
import { fireEvent } from "@testing-library/react";

const addBlog = async name => {
  /*
createBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
*/

  /*
type Blog @model {
  id: ID!
  name: String!
  posts: [Post] @connection(keyName: "byBlog", fields: ["id"])

  type Post @model @key(name: "byBlog", fields: ["blogID"]) {
  id: ID!
  title: String!
  blogID: ID!
  blog: Blog @connection(fields: ["blogID"])
  comments: [Comment] @connection(keyName: "byPost", fields: ["id"])
}

type Comment @model @key(name: "byPost", fields: ["postID", "content"]) {
  id: ID!
  postID: ID!
  post: Post @connection(fields: ["postID"])
  content: String!
}
}
*/

  const blog = {
    id: uuidv4(),
    name: name,
    posts: []
  };
  console.log(blog);
  return await API.graphql(graphqlOperation({ input: blog }));
};

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
                    First the creations
                  </p>

                  <div class="mt-1 grid grid-cols-3 gap-3">
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          onClick={() => {
                            addBlog("trop bien")
                              .then(data => console.log(data))
                              .catch(err => console.log(err));
                          }}
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Blog
                        </button>
                      </span>
                    </div>

                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Post
                        </button>
                      </span>
                    </div>

                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button
                          type="button"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                          Comment
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="mt-6 relative">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300" />
                  </div>
                  <div class="relative flex justify-center text-sm leading-5">
                    <span class="px-2 bg-white text-gray-500">Then</span>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <form action="#" method="POST">
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Email address
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="email"
                        type="email"
                        required
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div class="mt-6">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Password
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="password"
                        required
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div class="mt-6 flex items-center justify-between">
                    <div class="flex items-center">
                      <input
                        id="remember_me"
                        type="checkbox"
                        class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                      <label
                        for="remember_me"
                        class="ml-2 block text-sm leading-5 text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div class="text-sm leading-5">
                      <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                      <button
                        type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      >
                        Sign in
                      </button>
                    </span>
                  </div>
                </form>
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
