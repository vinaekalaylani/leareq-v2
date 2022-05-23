import Calendar from "react-calendar";
import "./calendar.css";

export default function CalendarComp({ leaves }) {
  const setClass = (date) => {
    const dateobj =
      leaves &&
      leaves.find((x) => {
        return (
          date.getDay() === new Date(x.dateFrom).getDay() &&
          date.getMonth() === new Date(x.dateFrom).getMonth() &&
          date.getDate() === new Date(x.dateFrom).getDate()
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
