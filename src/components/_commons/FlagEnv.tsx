import React from "react";
import { Dropdown } from "./Dropdown";
import { Info } from "lucide-react";

export function FlagEnv() {
    const appVersion = process.env.APP_VERSION;
    const reactVersion = React.version;
    const host = typeof window !== 'undefined' ? window.location.host : 'N/A';
    const environment = process.env.ENVIRONMENT;

    return (
        <div className="fixed top-25 right-2 z-50">
            <Dropdown
                label={<Info size={16} />}
                buttonClassName={`${environment === "development" ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"} text-white rounded-full p-2 shadow-lg`}
                className="w-auto"
                align="right"
            >
                <div className="text-white space-y-2 py-1">
                    <div className="border-b border-gray-600 pb-2 mb-2">
                        <p className="font-semibold text-sm">App Informations</p>
                    </div>
                    
                    <div className="space-y-1">
                        <div className="flex justify-between gap-4">
                            <span className="text-gray-400">Env:</span>
                            <span className={`font-semibold ${environment === 'development' ? 'text-yellow-400' : 'text-green-400'}`}>
                                {environment!.toUpperCase()}
                            </span>
                        </div>
                        
                        <div className="flex justify-between gap-4">
                            <span className="text-gray-400">App Version:</span>
                            <span className="font-medium">{appVersion}</span>
                        </div>
                        
                        <div className="flex justify-between gap-4">
                            <span className="text-gray-400">React Version:</span>
                            <span className="font-medium">{reactVersion}</span>
                        </div>
                        
                        <div className="flex justify-between gap-4">
                            <span className="text-gray-400">Host:</span>
                            <span className="font-medium text-xs">{host}</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-600 pt-2 mt-2">
                        <a 
                            href="/docs" 
                            target="_blank" 
                            className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <span>Documentação</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </Dropdown>
        </div>
    );
}

FlagEnv.displayName = "FlagEnv";

export default FlagEnv;
