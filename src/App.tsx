import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from "./Layout.tsx";
import Menu1 from "./components/pages/menus/menu1/Menu1.tsx";
import Menu2 from "./components/pages/menus/menu2/Menu2.tsx";
import Menu3 from "./components/pages/menus/menu3/Menu3.tsx";
import Main from "./components/pages/main/Main.tsx";
import Contacts from "./components/pages/contacts/Contacts.tsx";

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
                {path: "contacts", element: <Contacts/>},
                {path: "*", element: <h2>404 Not Found</h2>},
            ],
        },
    ]);

    return <RouterProvider router={router}/>;
}

export default App;
