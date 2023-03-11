import EventItem from "./event-item";

import classes from "../../styles/event-list.module.css";

const EventList = (props) => {
  // console.log(props);

  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((item) => {
        return (
          <EventItem
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.location}
            date={item.date}
            image={item.image}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
