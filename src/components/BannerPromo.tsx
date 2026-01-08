import { Button, Image } from "./_commons";
import mern_stack from "../assets/images/mern-stack.webp";

export function BannerPromo() {
    return (
        // <div className="container w-full flex flex-col justify-between gap-3 px-6 py-20 mx-auto my-3 rounded-xl banner-promo bg-[url(assets/images/hero-banner.jpg)] bg-cover bg-center">
        <div className="container w-full flex justify-between gap-3 px-8 py-10 mx-auto my-3 rounded-xl bg-[#232323]">
            <div className="flex flex-col max-w-lg gap-3">
                <h1 className="text-4xl font-black tracking-tighter text-text-dark sm:text-5xl lg:text-6xl">
                    Descubra a MERN Stack
                </h1>
                <p className="mb-6 text-base text-neutral-400 lg:text-lg">
                    Desbloqueie o poder do MongoDB, React, Node.js e Express.js
                    para criar aplicações web modernas e escaláveis.
                </p>
                <Button className="px-4 py-2.5 font-medium rounded-lg bg-neutral-950 max-w-36">
                    Explore Agora
                </Button>
            </div>
            <div>
                <Image
                    src={mern_stack}
                    alt="Banner Promoção"
                    width={400}
                    height={250}
                    className="hidden rounded-md md:block"
                />
            </div>
        </div>
    );
}
