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
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овощной", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Запечённый картофель с индейкой", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Вівторок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Середа",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Четвер",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "П'ятниця",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Субота",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Неділя",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    }
];

export const slimFit: Day[] = [
    {
        day: "Понеділок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Вівторок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Середа",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Четвер",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "П'ятниця",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Субота",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Неділя",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    }
];

export const fitBalance: Day[] = [
    {
        day: "Понеділок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Вівторок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Середа",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Четвер",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "П'ятниця",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Субота",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Неділя",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    }
];

export const balanceEnergy: Day[] = [
    {
        day: "Понеділок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Вівторок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Середа",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Четвер",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "П'ятниця",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Субота",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Неділя",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    }
];

export const activeEnergy: Day[] = [
    {
        day: "Понеділок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Вівторок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Середа",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Четвер",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "П'ятниця",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Субота",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Неділя",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    }
];

export const muscleGain: Day[] = [
    {
        day: "Понеділок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Вівторок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Середа",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Четвер",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "П'ятниця",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Субота",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Неділя",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    }
];

export const massBuilder: Day[] = [
    {
        day: "Понеділок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Вівторок",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Середа",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Четвер",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "П'ятниця",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Субота",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    },
    {
        day: "Неділя",
        meals: [
            { meal: "Сніданок", dish: "Овсяноблины с фруктами", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Полудень", dish: "Банановая Запеканка", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Обід", dish: "Куряча грудка з рисом", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Салати", dish: "Овочевий салат", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
            { meal: "Вечеря", dish: "Риба на пару", image: "https://bonduelle.ru/760x760/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg" },
        ],
    }
];
