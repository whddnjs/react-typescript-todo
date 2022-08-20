import { ReactNode } from "react";
import { Link } from "react-router-dom";

export function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <div className="fixed w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="p-4 rounded-xl bg-white max-w-[400px]">
                <div className="w-full border-b flex justify-between items-center mb-4 pb-2">
                    <Link to="/" className="flex-1 flex justify-center border-r">스캐쥴 목록</Link>
                    <Link to="/create" className="flex-1 flex justify-center">할일 작성</Link>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}