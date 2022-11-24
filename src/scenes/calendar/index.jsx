import {
  Box,
  useTheme,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import FullCalendar, { CalendarApi, formatDate } from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventForm from "./components/EventForm";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [eventSelected, setEventSelected] = useState({
    show: false,
    selected: {},
  });

  const [mousePos, setMousePos] = useState({});
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleDateClick = (selectInfo) => {
    console.log(selectInfo.startStr);
    console.log(selectInfo.endStr);
    // console.log(value["End time"]);
    setEventSelected({
      x: mousePos.x,
      y: mousePos.y,
      show: true,
      selected: selectInfo,
    });
    // console.log(mousePos);
  };

  const onSubmit = (title, startTime, endTime) => {
    let calendarApi = eventSelected.selected.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: `${eventSelected.selected.datetStr}-${title}`,
        title: title,
        start: startTime,
        end: endTime,
        // allDay: eventSelected.selected.allDay,
      });
    }
    setEventSelected({ show: false, selected: {} });
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="View your calendar" />
      <Box display="flex" justifyContent="center">
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => {
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev, next today",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth,",
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => {
              setCurrentEvents(events);
              // console.log(events);
            }}
            initialEvents={[
              { id: "1234", title: "event1", date: "2020-11-24" },
            ]}
          />
        </Box>
      </Box>
      {!!eventSelected.show && (
        <EventForm event={eventSelected} onSubmit={onSubmit}></EventForm>
      )}
    </Box>
  );
};

export default Calendar;
