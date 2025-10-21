import React from "react";
import { product } from "../database/product";
import { AddToCartButton } from "../components/AddToCartButton";
import { ExperimentWrapper } from "../components/ExperimentWrapper";

export function HomePage() {
    return (
        <React.Fragment>
            <ExperimentWrapper />
            <AddToCartButton product={product} />
        </React.Fragment>
    );
}
