export interface Meal {
    meal: string;   // Приём пищи (Сніданок, Обід и т.д.)
    dish: string;   // Название блюда
    image: string;  // Ссылка на картинку
}

export interface Day {
    day: string;    // День недели
    meals: Meal[];
}

export const slimControl: Day[] = [
    {
        day: "Понеділок",
        meals: [
            { meal: "Сніданок", dish: "Вівсянка з фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Йогурт з горіхами", image: "/images/mon-snack.jpg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "/images/mon-lunch.jpg" },
            { meal: "Салати", dish: "Овочевий салат", image: "/images/mon-salad.jpg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "/images/mon-dinner.jpg" },
        ],
    },
    {
        day: "Вівторок",
        meals: [
            { meal: "Сніданок", dish: "Сирники з медом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Фруктовий салат", image: "/images/tue-snack.jpg" },
            { meal: "Обід", dish: "Гречка з овочами", image: "/images/tue-lunch.jpg" },
            { meal: "Салати", dish: "Салат Цезар", image: "/images/tue-salad.jpg" },
            { meal: "Вечеря", dish: "Запечена індичка", image: "/images/tue-dinner.jpg" },
        ],
    },
];

export const slimFit: Day[] = [
    {
        day: "Понеділок",
        meals: [
            { meal: "Сніданок", dish: "Вівсянка з фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Йогурт з горіхами", image: "/images/mon-snack.jpg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "/images/mon-lunch.jpg" },
            { meal: "Салати", dish: "Овочевий салат", image: "/images/mon-salad.jpg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "/images/mon-dinner.jpg" },
        ],
    },
    {
        day: "Вівторок",
        meals: [
            { meal: "Сніданок", dish: "Сирники з медом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Фруктовий салат", image: "/images/tue-snack.jpg" },
            { meal: "Обід", dish: "Гречка з овочами", image: "/images/tue-lunch.jpg" },
            { meal: "Салати", dish: "Салат Цезар", image: "/images/tue-salad.jpg" },
            { meal: "Вечеря", dish: "Запечена індичка", image: "/images/tue-dinner.jpg" },
        ],
    },
];
