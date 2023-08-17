import {PropsWithChildren} from "react";

export default function Layout ({children}: PropsWithChildren) {
    return (
        <div className="max-w-container mx-auto px-[5%]">
            {children}
        </div>
    )
}