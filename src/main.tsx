import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages/home";
import AmplitudeInitializer from "./services/AmplitudeInitializer";
import { FlagEnv } from "./components/_commons/FlagEnv";
import { BrowserRouter } from "react-router";
import { Router } from "./router/routes";
import AppConcept from "./pages/docs/app-concept.mdx";
import DocsIndex from "./pages/docs/index.mdx";
import DocsEvents from "./pages/docs/analytics/events.mdx";
import DocsFeatures from "./pages/docs/features/index.mdx";
import { MDXProvider } from "@mdx-js/react";
import { MdxComponents } from "./components/_commons/MdxComponents";
import { CartPage } from "./pages/cart";
import { CheckoutPage } from "./pages/checkout";
import { ProductPage } from "./pages/product";
import { routesBasePaths } from "./constants/routesBasePaths";

/**
 * Inicializa o Amplitude assim que a aplicação carrega
 * não é necessário useEffect aqui,
 * pois este arquivo é executado apenas no cliente
 */
AmplitudeInitializer.getInstance().init();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MDXProvider components={MdxComponents}>
            <BrowserRouter>
                <FlagEnv />
                {routesBasePaths.map((base) => (
                    <Router key={base.path} path={base.path}>
                        {base.jsxElement}
                    </Router>
                ))}
            </BrowserRouter>
        </MDXProvider>
    </React.StrictMode>
);
