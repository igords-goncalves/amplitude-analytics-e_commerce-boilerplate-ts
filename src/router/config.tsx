import CartPage from "../pages/cart";
import CheckoutPage from "../pages/checkout";
import { HomePage } from "../pages/home";
import ProductPage from "../pages/product";

import AppConcept from "../pages/docs/app-concept.mdx";
import DocsIndex from "../pages/docs/index.mdx";
import DocsEvents from "../pages/docs/analytics/events.mdx";
import DocsFeatures from "../pages/docs/features/index.mdx";
import { ProtectedRoute } from "../components/ProtectedRoute";
import path from "path";
import { CategoryPage } from "../pages/category";


export const routesBasePaths = [
    {
        path: "/",
        jsxElement: <HomePage />,
    },
    {
        path: "/product",
        jsxElement: <ProductPage />,
    },
    {
        path: "/category",
        jsxElement: <CategoryPage />,
    },
    {
        path: "/cart",
        jsxElement: <CartPage />,
    },
    {
        path: "/checkout",
        jsxElement: <CheckoutPage />,
    },
    {
        path: "/docs",
        jsxElement: <ProtectedRoute><DocsIndex /></ProtectedRoute>,
    },
    {
        path: "/docs/app-concept",
        jsxElement: <ProtectedRoute><AppConcept /></ProtectedRoute>,
    },
    {
        path: "/docs/analytics/events",
        jsxElement: <ProtectedRoute><DocsEvents /></ProtectedRoute>,
    },
    {
        path: "/docs/features",
        jsxElement: <ProtectedRoute><DocsFeatures /></ProtectedRoute>,
    },
];