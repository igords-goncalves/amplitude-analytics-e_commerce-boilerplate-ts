export function FlagEnv () {
    return (
        <div>
            {process.env.ENVIRONMENT === "development" && (
                <span className="absolute bottom-0 right-0 -rotate-90 bg-red-500 text-white p-1 text-xs z-50">
                    {process.env.ENVIRONMENT.toUpperCase()}
                </span>
            )}
        </div>
    );
};

FlagEnv.displayName = "FlagEnv";

export default FlagEnv;
