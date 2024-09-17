import { Link } from "lucide-react";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function NavBar(){
    return(
        <div className="flex max-w-5xl mx-auto border-b border-gray-200 py-4 px-8">
            <Link href="#">Logo</Link>
            <ModeToggle/>
        </div>
    )
}