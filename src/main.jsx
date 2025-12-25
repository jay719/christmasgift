import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./css/main/index.css";
import "./css/main/app.css";
import "./css/slides/slides.css";
import "./css/slides/friendsandfam.css";
import "./css/slides/accomplishments.css";
import "./css/slides/intro.css";
import "./css/slides/mestory.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
