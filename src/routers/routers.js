import { Component, lazy } from "react";

const routers = [{
    path:'/',
    Component: lazy(() => import('../components/HomePage/HomePage'))
}]


export default  routers