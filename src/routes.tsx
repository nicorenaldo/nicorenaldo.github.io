import React from "react";
import { Route } from "react-router-dom";
import ItinProject from "./pages/Projects/Itin";
import JagawanaProject from "./pages/Projects/Jagawana";

export const BlogRoutes = <React.Fragment></React.Fragment>;

export const ProjectRoute = <React.Fragment>
    <Route path="jagawana" element={<JagawanaProject />} />
    <Route path="itin" element={<ItinProject />} />
</React.Fragment>;
