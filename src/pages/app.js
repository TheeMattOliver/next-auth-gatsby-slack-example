import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import Profile from "../components/Profile";

const App = () => (
  <Layout>
    <Router>
      <Profile path="/app/profile" />
    </Router>
  </Layout>
);
export default App;
