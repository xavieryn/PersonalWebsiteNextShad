import React from "react";
import SocialMedia from "./SocialMedia";

export default function AboutMe() {
    return (
        <div className="flex justify-center items-center h-screen w-full"> {/* Full screen height and width, centered content */}
            <div className="text-center sm:text-sm lg:text-xl font-[family-name:var(--font-geist-mono)]">
                <p className="mb-2">
                    Integer consequat ridiculus lobortis tristique nascetur, ultrices taciti? Curabitur maximus euismod varius sem ultrices montes vitae mi. Cras praesent duis volutpat phasellus massa taciti sem libero. Enim felis scelerisque eros cursus suspendisse interdum consectetur taciti nostra.
                </p>
            </div>
        </div>
    );
}
