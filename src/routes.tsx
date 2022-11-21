import React from "react";
import { Route } from "react-router-dom";
import JagawanaProject from "./pages/Projects/Jagawana";

export const BlogRoutes = <React.Fragment></React.Fragment>;

export const ProjectRoute = <React.Fragment>
    <Route path="jagawana" element={<JagawanaProject />} />
</React.Fragment>;
