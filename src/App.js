import React from "react";
import {Signin} from "./pages/Signin"
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <Signin />
  );
}

export default App;
