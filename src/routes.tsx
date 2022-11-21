import React from "react";
import { Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import AyoLombaProject from "./pages/Projects/AyoLomba";
import ItinProject from "./pages/Projects/Itin";
import JagawanaProject from "./pages/Projects/Jagawana";

export const BlogRoutes = <React.Fragment>
    <Route index element={<BlogPage />} />

</React.Fragment>;

export const ProjectRoute = <React.Fragment>
    <Route path="jagawana" element={<JagawanaProject />} />
    <Route path="itin" element={<ItinProject />} />
    <Route path="ayolomba" element={<AyoLombaProject />} />
</React.Fragment>;
