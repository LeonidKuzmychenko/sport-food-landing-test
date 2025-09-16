import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from "./Layout.tsx";
import Main from "./components/pages/main/Main.tsx";
import Contacts from "./components/pages/contacts/Contacts.tsx";
import Menu from "./components/pages/menus/Menu.tsx";
import { slimControl, slimFit} from "./data/weekData";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Main/>},
                {path: "menu1", element: <Menu weekData={slimControl}/>},
                {path: "menu2", element: <Menu weekData={slimFit}/>},
                {path: "menu3", element: <Menu weekData={slimFit}/>},
                {path: "menu4", element: <Menu weekData={slimFit}/>},
                {path: "menu5", element: <Menu weekData={slimFit}/>},
                {path: "menu6", element: <Menu weekData={slimFit}/>},
                {path: "menu7", element: <Menu weekData={slimFit}/>},
                {path: "menu8", element: <Menu weekData={slimFit}/>},
                {path: "contacts", element: <Contacts/>},
                {path: "*", element: <h2>404 Not Found</h2>},
            ],
        },
    ]);

    return <RouterProvider router={router}/>;
}

export default App;
