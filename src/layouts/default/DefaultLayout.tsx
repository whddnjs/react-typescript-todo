import { ReactNode } from "react";

export function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <div className="fixed w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="p-4 rounded-xl bg-white min-w-[500px]">
                {children}
            </div>
        </div>
    )
}