import { Button } from "./_commons/Button";

export function BannerPromo() {
    return (
        // <div className="container w-full flex flex-col justify-between gap-3 px-6 py-20 mx-auto my-3 rounded-xl banner-promo bg-[url(assets/images/hero-banner.jpg)] bg-cover bg-center">
        <div className="container w-full flex justify-between gap-3 px-8 py-10 mx-auto my-3 rounded-xl bg-[#232323]">
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-black tracking-tighter text-text-dark sm:text-5xl lg:text-6xl">
                    Descubra a MERN Stack
                </h1>
                <p className="text-base text-text-muted-dark lg:text-lg">
                    Desbloqueie o poder do MongoDB, React, Node.js e Express.js
                    para criar aplicações web modernas e escaláveis.
                </p>
                <Button className="px-4 py-2 mt-20 bg-indigo-600 rounded-lg max-w-56">
                    Comprar
                </Button>
            </div>
        </div>
    );
}
