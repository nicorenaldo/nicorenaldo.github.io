import { Navigate, Route, Routes } from "react-router-dom";
import GenericLayout from "./components/Layout/GenericLayout";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GenericLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
}

export default App;
