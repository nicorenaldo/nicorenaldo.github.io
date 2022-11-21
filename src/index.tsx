import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./fonts.css";
import ScrollToTop from "./utils/ScrollToTop";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <HashRouter >
    <ScrollToTop />
    <App />
  </HashRouter>
);
