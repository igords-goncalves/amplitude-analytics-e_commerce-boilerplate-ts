import React from "react";

import { AddToCart } from "../feature/AddToCart";
import { ExperimentWrapper } from "../feature/ExperimentWrapper";
import product from "../../database/product";
import { Product } from '../../database/product';

export function HomePage() {
    return (
        <React.Fragment>
            <ExperimentWrapper />
            <AddToCart product={product as Partial<Product>} />
        </React.Fragment>
    );
}
