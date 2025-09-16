import "./Menu.css";
import WeekDay from "./WeekDay.tsx";
import type {Day} from "../../../data/weekData.ts";

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
