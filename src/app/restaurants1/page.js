"use client";

import dynamic from "next/dynamic";
import { RestaurantsTabsPage } from "../../Pages/RestaurantsTabsPage/RestaurantsTabsPage";

const AppDynamic = dynamic(() => import("../../components/App/App"), {
    ssr: false,
});

// export default function RestaurantsTabsPageNew() {
//     return (
//         <AppDynamic>
//             <RestaurantsTabsPage />
//         </AppDynamic>
//     );
// };


