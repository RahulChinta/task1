import { Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import classes from "./Dates.module.css";

const Dates = (props) => {
  const dateValue = new Date();
  const time = dateValue.toLocaleString("default", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = dateValue.toLocaleString("default", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return (
    <Fragment>
      <Nav.Link className={props.className}>{time}</Nav.Link>
      <span className={classes["date-separator"]}>.</span>
      <Nav.Link>{date}</Nav.Link>
    </Fragment>
  );
};

export default Dates;
