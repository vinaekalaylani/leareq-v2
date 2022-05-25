import Calendar from "react-calendar";
import "./calendar.css";

export default function CalendarComp({ leaves }) {
  const setClass = (date) => {
    const dateobj =
      leaves &&
      leaves.find((el) => {
        return (
          date.getDay() === new Date(el.date).getDay() &&
          date.getMonth() === new Date(el.date).getMonth() &&
          date.getDate() === new Date(el.date).getDate()
        );
      });

    if (dateobj) {
      if (dateobj.status === 0) {
        return "bg-blue text-white";
      } else if (dateobj.status === 1) {
        return "bg-success text-white";
      } else if (dateobj.status === 2) {
        return "bg-red text-white";
      }
    } else {
      return "";
    }
  };

  return (
    <Calendar
      tileClassName={({ activeStartDate, date, view }) => setClass(date)}
    />
  );
}
