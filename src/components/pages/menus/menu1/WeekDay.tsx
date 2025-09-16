import { useRef } from "react";
import "./WeekDay.css";

interface Meal {
    name: string;
    image: string;
}

interface Props {
    day: string;
    meals: Meal[];
}

function WeekDay({ day, meals }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = (index: number) => {
        if (scrollRef.current) {
            const child = scrollRef.current.children[index] as HTMLElement;
            child.scrollIntoView({ behavior: "smooth", inline: "center" });
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
                        className="meal__btn"
                    >
                        {meal.name}
                    </button>
                ))}
            </div>

            <div className="meal__gallery" ref={scrollRef}>
                {meals.map((meal, idx) => (
                    <div key={idx} className="meal__item">
                        <img src={meal.image} alt={meal.name} />
                        <p>{meal.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WeekDay;
