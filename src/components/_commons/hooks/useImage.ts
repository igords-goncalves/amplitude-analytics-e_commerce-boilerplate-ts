import { useState } from "react";

type useImageProps = {
    priority?: boolean;
    loading?: "lazy" | "eager";
    onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export function useImage({loading, priority, onLoad, onError}: useImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    function handleLoad(e: React.SyntheticEvent<HTMLImageElement, Event>) {
        setIsLoaded(true);
        if (typeof onLoad === "function") onLoad(e as any);
    }

    function handleError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
        setIsError(true);
        if (typeof onError === "function") onError(e as any);
    }

    const imgLoading = priority ? "eager" : loading;

    return { isLoaded, isError, imgLoading, handleLoad, handleError };
}
