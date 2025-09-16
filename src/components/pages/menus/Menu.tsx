import "./Menu.css";
import WeekDay from "./WeekDay.tsx";
import type {Day} from "../../../data/weekData.ts";

interface MenuProps {
    type: string
    weekData: Day[];
}

function Menu({type, weekData}: MenuProps) {
    return (
        <div className="week__container">
            <h1>{type}</h1>
            {weekData.map((day, idx) => (
                <WeekDay key={idx} day={day.day} meals={day.meals}/>
            ))}
        </div>
    );
}

export default Menu;
