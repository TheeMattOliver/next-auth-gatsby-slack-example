import React from "react";
import { Link } from "gatsby";
import { Router } from "@reach/router";

const Profile = () => <p>profile</p>;
const Details = () => <p>details</p>;
const Default = () => <p>index</p>;

const App = () => {
  return (
    <>
      <Router basepath="/app">
        <Profile path="/profile" />
        <Details path="/details" />
        <Default path="/" />
      </Router>
      {["profile", "details", ""].map((sub) => (
        <li>
          <Link to={`/app/${sub}`}>{sub != "" ? sub : "/"}</Link>
        </li>
      ))}
    </>
  );
};
export default App;
