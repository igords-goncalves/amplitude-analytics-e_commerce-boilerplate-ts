import React from "react";
import { Footer, Header, Hero, Main } from "../components/template";
import { NavigationMenu } from "../components/NavigationMenu";
import { BannerPromo } from "../components/BannerPromo";
import { CategoriesSwipper } from "../components/CategoriesSwipper";
import { Site } from "../components/layout/Site";
import { ProductsGrid } from "../components/ProductsGrid";
import { FooterContent } from "../components/FooterContent";

export function HomePage() {
    return (
        <React.Fragment>
            <Site>
                <Header>
                    <NavigationMenu />
                </Header>
                <Hero>
                    <BannerPromo />
                </Hero>
                <Main>
                    <CategoriesSwipper />
                    <ProductsGrid />
                </Main>
                <Footer>
                    <FooterContent />
                </Footer>
            </Site>
        </React.Fragment>
    );
}
