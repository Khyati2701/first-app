import React,{ Suspense } from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";
import HeaderComp from "./CommonCompo/Header";
import ExampleCompo from "./ExampleCompo";
import EcmaScript from "./EcmaScript.jsx";
import ReactRender from "./ReactReander.jsx";
import ReactJSX from "./ReactJSX.jsx"; 

const ClassCompoRoute = React.lazy(()=>{ return import('./ClassCompo/ClassCompoRoute.jsx') })
// const FunctionalCompoRoute = React.lazy(()=>import('./FunctionalCompo/FunctionalCompoRoute'))
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderComp/><HomePage/></>,
    },
    {
        path: "/about",
        element: <><HeaderComp/><AboutPage></AboutPage></>,
    },
    {
        path: "/contact",
        element: <><HeaderComp/><ContactPage/></>,
    },
    {
        path: "/ecmaScript",
        element: <><HeaderComp/><EcmaScript></EcmaScript></>,
    },
    {
        path: "/reactRender",
        element: <><HeaderComp/><ReactRender></ReactRender></>,
    },
    {
        path: "/reactJsx",
        element: <><HeaderComp/><ReactJSX></ReactJSX></>,
    },
    {
        path: "/examples",
        element: <><HeaderComp/><ExampleCompo/></>,
        children: [
            {
              path: "classcompo/*",
              element: <Suspense fallback={<h2>Loading...</h2>}><ClassCompoRoute/></Suspense>,
            },
        ]
    },
]);


export default MainRouter;