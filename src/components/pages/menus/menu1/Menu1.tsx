import "./Menu1.css";
import WeekDay from "./WeekDay";

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

function Menu1() {
    return (
        <div className="week__container">
            {weekData.map((day, idx) => (
                <WeekDay key={idx} day={day.day} meals={day.meals} />
            ))}
        </div>
    );
}

export default Menu1;
