"use client";

import dynamic from "next/dynamic";
import { HomePage } from "../../Pages/HomePage/HomePage";
import "../../../src/index.css";

const AppDynamic = dynamic(() => import("../../components/App/App"), {
    ssr: false,
});

export const ClientOnlyApp = () => {
    return (
        <AppDynamic>
            <HomePage />
        </AppDynamic>
    );
};
