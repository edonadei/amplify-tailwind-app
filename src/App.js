import React from "react";
import { AmplifyAPITester } from "./pages/AmplifyAPITester";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return <AmplifyAPITester />;
}

export default App;
