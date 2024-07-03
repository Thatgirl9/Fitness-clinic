import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface ExerciseCalendarProps {
  exercise: string;
}

const ExerciseCalendar: React.FC<ExerciseCalendarProps> = ({ exercise }) => {
  const [value, onChange] = useState<Value | null>(new Date());

  useEffect(() => {
    if (value instanceof Date) {
      const storeExerciseDate = async () => {
        try {
          await axios.post("/api/exercises", { date: value, exercise });
        } catch (error) {
          console.error("Error storing exercise date:", error);
        }
      };
      storeExerciseDate();
    }
  }, [value, exercise]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <div className="calendar-modal text-bg-primary">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default ExerciseCalendar;
