import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from "./Layout.tsx";
import Main from "./components/pages/main/Main.tsx";
import Contacts from "./components/pages/contacts/Contacts.tsx";
import Menu from "./components/pages/menus/menu1/Menu.tsx";

const weekData = [
    {
        day: "Понеділок",
        meals: [
            { name: "Сніданок", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { name: "Полудень", image: "/images/mon-snack.jpg" },
            { name: "Обід", image: "/images/mon-lunch.jpg" },
            { name: "Салати", image: "/images/mon-salad.jpg" },
            { name: "Вечеря", image: "/images/mon-dinner.jpg" },
        ],
    },
    {
        day: "Вівторок",
        meals: [
            { name: "Сніданок", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { name: "Полудень", image: "/images/tue-snack.jpg" },
            { name: "Обід", image: "/images/tue-lunch.jpg" },
            { name: "Салати", image: "/images/tue-salad.jpg" },
            { name: "Вечеря", image: "/images/tue-dinner.jpg" },
        ],
    },
    {
        day: "Середа",
        meals: [
            { name: "Сніданок", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { name: "Полудень", image: "/images/tue-snack.jpg" },
            { name: "Обід", image: "/images/tue-lunch.jpg" },
            { name: "Салати", image: "/images/tue-salad.jpg" },
            { name: "Вечеря", image: "/images/tue-dinner.jpg" },
        ],
    },
    {
        day: "Четвер",
        meals: [
            { name: "Сніданок", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { name: "Полудень", image: "/images/tue-snack.jpg" },
            { name: "Обід", image: "/images/tue-lunch.jpg" },
            { name: "Салати", image: "/images/tue-salad.jpg" },
            { name: "Вечеря", image: "/images/tue-dinner.jpg" },
        ],
    },
    {
        day: "П'ятниця",
        meals: [
            { name: "Сніданок", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { name: "Полудень", image: "/images/tue-snack.jpg" },
            { name: "Обід", image: "/images/tue-lunch.jpg" },
            { name: "Салати", image: "/images/tue-salad.jpg" },
            { name: "Вечеря", image: "/images/tue-dinner.jpg" },
        ],
    },
    {
        day: "Субота",
        meals: [
            { name: "Сніданок", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { name: "Полудень", image: "/images/tue-snack.jpg" },
            { name: "Обід", image: "/images/tue-lunch.jpg" },
            { name: "Салати", image: "/images/tue-salad.jpg" },
            { name: "Вечеря", image: "/images/tue-dinner.jpg" },
        ],
    },
    {
        day: "Неділя",
        meals: [
            { name: "Сніданок", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { name: "Полудень", image: "/images/tue-snack.jpg" },
            { name: "Обід", image: "/images/tue-lunch.jpg" },
            { name: "Салати", image: "/images/tue-salad.jpg" },
            { name: "Вечеря", image: "/images/tue-dinner.jpg" },
        ],
    },
];

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Main/>},
                {path: "menu1", element: <Menu weekData={weekData}/>},
                {path: "menu2", element: <Menu weekData={weekData}/>},
                {path: "menu3", element: <Menu weekData={weekData}/>},
                {path: "menu4", element: <Menu weekData={weekData}/>},
                {path: "menu5", element: <Menu weekData={weekData}/>},
                {path: "menu6", element: <Menu weekData={weekData}/>},
                {path: "menu7", element: <Menu weekData={weekData}/>},
                {path: "menu8", element: <Menu weekData={weekData}/>},
                {path: "contacts", element: <Contacts/>},
                {path: "*", element: <h2>404 Not Found</h2>},
            ],
        },
    ]);

    return <RouterProvider router={router}/>;
}

export default App;
