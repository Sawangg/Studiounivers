import React from "react";
import { Button } from "../../ui/Button";

export const Navbar: React.FC<{}> = () => (
    <nav className="fixed w-full z-50 top-0 text-primary-700 shadow-md bg-background-100">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
                logo
            </div>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-background-100 lg:bg-transparent p-4 lg:p-0 z-20">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-5">
                        <Button color="primary-outline">Register</Button>
                    </li>
                    <li className="mr-5">
                        <Button>Login</Button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
