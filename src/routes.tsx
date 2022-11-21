import React from "react";
import { Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import JagawanaML from "./pages/Blogs/2021-06-10-JagawanaML";
import AyoLombaProject from "./pages/Projects/AyoLomba";
import ItinProject from "./pages/Projects/Itin";
import JagawanaProject from "./pages/Projects/Jagawana";

export const BlogRoutes = <React.Fragment>
    <Route index element={<BlogPage />} />
    <Route path="jagawana-machine-learning" element={<JagawanaML />} />
    <Route path="jagawana-iot" element={<JagawanaML />} />
    <Route path="jagawana-overview" element={<JagawanaML />} />
    <Route path="headless-raspi" element={<JagawanaML />} />
    <Route path="securing-raspi" element={<JagawanaML />} />
</React.Fragment>;

export const ProjectRoute = <React.Fragment>
    <Route path="jagawana" element={<JagawanaProject />} />
    <Route path="itin" element={<ItinProject />} />
    <Route path="ayolomba" element={<AyoLombaProject />} />
</React.Fragment>;
