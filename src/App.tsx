import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from "./Layout.tsx";
import Menu1 from "./components/pages/menus/menu1/Menu1.tsx";
import Menu2 from "./components/pages/menus/menu2/Menu2.tsx";
import Menu3 from "./components/pages/menus/menu3/Menu3.tsx";
import Main from "./components/pages/main/Main.tsx";
import Contacts from "./components/pages/contacts/Contacts.tsx";
import Menu4 from "./components/pages/menus/menu4/Menu4.tsx";
import Menu5 from "./components/pages/menus/menu5/Menu5.tsx";
import Menu6 from "./components/pages/menus/menu6/Menu6.tsx";
import Menu7 from "./components/pages/menus/menu7/Menu7.tsx";
import Menu8 from "./components/pages/menus/menu8/Menu8.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Main/>},
                {path: "menu1", element: <Menu1/>},
                {path: "menu2", element: <Menu2/>},
                {path: "menu3", element: <Menu3/>},
                {path: "menu4", element: <Menu4/>},
                {path: "menu5", element: <Menu5/>},
                {path: "menu6", element: <Menu6/>},
                {path: "menu7", element: <Menu7/>},
                {path: "menu8", element: <Menu8/>},
                {path: "contacts", element: <Contacts/>},
                {path: "*", element: <h2>404 Not Found</h2>},
            ],
        },
    ]);

    return <RouterProvider router={router}/>;
}

export default App;
