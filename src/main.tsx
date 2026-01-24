import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import AmplitudeInitializer from "./services/AmplitudeInitializer";
import { FlagEnv } from "./components/_commons/FlagEnv";
import { BrowserRouter } from "react-router";
import { Router } from "./router/routes";
import { MDXProvider } from "@mdx-js/react";
import { MdxComponents } from "./components/_commons/MdxComponents";
import { routesBasePaths } from "./router/config";
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
                {
                    process.env.NODE_ENV === 'development' || process.env.ENVIRONMENT === 'staging' ? (
                        <FlagEnv />
                    ) : null
                }
                {routesBasePaths.map((base) => (
                    <Router key={base.path} path={base.path}>
                        {base.jsxElement}
                    </Router>
                ))}
            </BrowserRouter>
        </MDXProvider>
    </React.StrictMode>
);
