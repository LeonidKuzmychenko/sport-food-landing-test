import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from "./Layout.tsx";
import Main from "./components/pages/main/Main.tsx";
import Contacts from "./components/pages/contacts/Contacts.tsx";
import Menu from "./components/pages/menus/Menu.tsx";
import {activeEnergy, balanceEnergy, fitBalance, massBuilder, muscleGain, slimControl, slimFit} from "./data/weekData";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Main/>},
                {path: "menu1", element: <Menu type={"1200 - Slim Control"} weekData={slimControl}/>},
                {path: "menu2", element: <Menu type={"1600 - Slim Fit"} weekData={slimFit}/>},
                {path: "menu3", element: <Menu type={"1800 - Fit Balance"} weekData={fitBalance}/>},
                {path: "menu4", element: <Menu type={"2200 - Balance Energy"} weekData={balanceEnergy}/>},
                {path: "menu5", element: <Menu type={"2500 - Active Energy"} weekData={activeEnergy}/>},
                {path: "menu6", element: <Menu type={"3000 - Muscle Gain"} weekData={muscleGain}/>},
                {path: "menu7", element: <Menu type={"3200 - Mass Builder"} weekData={massBuilder}/>},
                {path: "menu8", element: <Menu type={"Преміум меню"} weekData={massBuilder}/>},
                {path: "contacts", element: <Contacts/>},
                {path: "*", element: <h2>404 Not Found</h2>},
            ],
        },
    ]);

    return <RouterProvider router={router}/>;
}

export default App;
