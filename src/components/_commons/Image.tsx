import { ImgHTMLAttributes, useState } from "react";
import { Spinner } from "./Spinner";
import { useImage } from "./hooks/useImage";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
    placeholder?: React.ReactNode;
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
    priority?: boolean; // if true, treat as eager (useful for LCP images)
};

export function Image({
    src,
    alt,
    className = "",
    width = 100,
    height = 100,
    loading = "lazy",
    placeholder,
    objectFit = "cover",
    priority = false,
    onLoad,
    onError,
    ...props
}: ImageProps) {
    const hookProps = {
        loading,
        priority,
        onLoad,
        onError,
    };

    const { imgLoading, handleLoad, handleError, isLoaded, isError } = useImage(
        { ...hookProps }
    );

    return (
        <div
            className={`inline-block relative overflow-hidden ${className}`.trim()}
            style={{
                width: typeof width === "number" ? width : undefined,
                height: typeof height === "number" ? height : undefined,
            }}
            aria-busy={!isLoaded && !isError}
        >
            {!isLoaded && !isError && (
                <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                    {placeholder ?? <Spinner />}
                </div>
            )}

            {isError ? (
                <div
                    className="flex items-center justify-center text-sm text-gray-600 bg-gray-100"
                    style={{ width, height }}
                >
                    <span>Imagem indisponível</span>
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    loading={imgLoading}
                    width={typeof width === "number" ? width : undefined}
                    height={typeof height === "number" ? height : undefined}
                    onLoad={handleLoad}
                    onError={handleError}
                    style={{ objectFit }}
                    className={`block w-full h-full transition-opacity duration-200 ${
                        isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    {...props}
                />
            )}
        </div>
    );
}

Image.displayName = "Image";

export default Image;
