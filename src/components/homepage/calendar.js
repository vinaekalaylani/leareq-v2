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
        return "pending";
      } else if (dateobj.status === 1) {
        return "approved";
      } else if (dateobj.status === 2) {
        return "rejected";
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
