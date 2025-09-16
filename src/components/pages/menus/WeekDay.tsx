import { useRef, useState } from "react";
import "./WeekDay.css";
import type {Meal} from "../../../data/weekData.ts";

interface Props {
    day: string;
    meals: Meal[];
}

function WeekDay({ day, meals }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeMeal, setActiveMeal] = useState(0);

    const handleScroll = (index: number) => {
        setActiveMeal(index);
        if (scrollRef.current) {
            const child = scrollRef.current.children[index] as HTMLElement;
            child.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    };

    return (
        <section className="day__section">
            <h2 className="day__title">{day}</h2>

            <div className="meal__buttons">
                {meals.map((meal, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleScroll(idx)}
                        className={`meal__btn ${idx === activeMeal ? "active" : ""}`}
                    >
                        {meal.meal}
                    </button>
                ))}
            </div>

            <div className="meal__gallery" ref={scrollRef}>
                {meals.map((meal, idx) => (
                    <div key={idx} className="meal__item">
                        <p>{meal.dish}</p>
                        <img src={meal.image} alt={meal.meal} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WeekDay;
