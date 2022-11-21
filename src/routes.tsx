import React from "react";
import { Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import SecuringRaspi from "./pages/Blogs/2021-02-11-SecuringRaspi";
import HeadlessRaspi from "./pages/Blogs/2021-03-04-HeadlessRaspi";
import JagawanaOverview from "./pages/Blogs/2021-05-16-JagawanaOverview";
import JagawanaIot from "./pages/Blogs/2021-06-05-JagawanaIot";
import JagawanaML from "./pages/Blogs/2021-06-10-JagawanaML";
import AyoLombaProject from "./pages/Projects/AyoLomba";
import ItinProject from "./pages/Projects/Itin";
import JagawanaProject from "./pages/Projects/Jagawana";

export const BlogRoutes = <React.Fragment>
    <Route index element={<BlogPage />} />
    <Route path="jagawana-machine-learning" element={<JagawanaML />} />
    <Route path="jagawana-iot" element={<JagawanaIot />} />
    <Route path="jagawana-overview" element={<JagawanaOverview />} />
    <Route path="headless-raspi" element={<HeadlessRaspi />} />
    <Route path="securing-raspi" element={<SecuringRaspi />} />
</React.Fragment>;

export const ProjectRoute = <React.Fragment>
    <Route path="jagawana" element={<JagawanaProject />} />
    <Route path="itin" element={<ItinProject />} />
    <Route path="ayolomba" element={<AyoLombaProject />} />
</React.Fragment>;
