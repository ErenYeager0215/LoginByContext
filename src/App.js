import React from "react";
import { UserProvier } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <UserProvier>
      <Router />;
    </UserProvier>
  );
}
