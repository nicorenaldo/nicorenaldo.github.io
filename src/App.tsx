import { Navigate, Route, Routes } from "react-router-dom";
import GenericLayout from "./components/Layout/GenericLayout";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import { ProjectRoute } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GenericLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
        <Route path="not-found" element={<NotFoundPage />} />
      </Route>

      <Route path="projects" element={<GenericLayout />}>
        {ProjectRoute}
      </Route>

    </Routes>
  );
}

export default App;
