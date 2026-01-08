import CartPage from "../pages/cart";
import CheckoutPage from "../pages/checkout";
import { HomePage } from "../pages/home";
import ProductPage from "../pages/product";

import AppConcept from "../pages/docs/app-concept.mdx";
import DocsIndex from "../pages/docs/index.mdx";
import DocsEvents from "../pages/docs/analytics/events.mdx";
import DocsFeatures from "../pages/docs/features/index.mdx";

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
        path: "/cart",
        jsxElement: <CartPage />,
    },
    {
        path: "/checkout",
        jsxElement: <CheckoutPage />,
    },
    {
        path: "/docs",
        jsxElement: <DocsIndex />,
    },
    {
        path: "/docs/app-concept",
        jsxElement: <AppConcept />,
    },
    {
        path: "/docs/analytics/events",
        jsxElement: <DocsEvents />,
    },
    {
        path: "/docs/features",
        jsxElement: <DocsFeatures />,
    },
];