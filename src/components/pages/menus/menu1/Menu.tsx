import "./Menu.css";
import WeekDay from "./WeekDay";

interface Meal {
    name: string;
    image: string;
}

interface Day {
    day: string;
    meals: Meal[];
}

interface MenuProps {
    weekData: Day[];
}

function Menu({ weekData }: MenuProps) {
    return (
        <div className="week__container">
            {weekData.map((day, idx) => (
                <WeekDay key={idx} day={day.day} meals={day.meals} />
            ))}
        </div>
    );
}

export default Menu;
