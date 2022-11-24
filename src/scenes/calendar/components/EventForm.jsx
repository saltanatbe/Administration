import { Box, Button, TextField, useTheme, useMediaQuery } from "@mui/material";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { tokens } from "../../../theme";

const EventForm = ({ event, onSubmit }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const formik = useFormik({
    initialValues: {
      title: event.title,
      "Start time": event.selected.startStr,
      "End time": event.selected.endStr,
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("required"),
      "Start time": yup.date().required("required"),
      "End time": yup.date().required("required"),
    }),
    onSubmit: (value, actions) => {
      console.log(value["Start time"]);
      console.log(value["End time"]);

      onSubmit(value.title, value["Start time"], value["End time"]);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      position="fixed"
      zIndex="2"
      top={event.y}
      p="5px"
      borderRadius="3px"
      left={event.x}
      width="220px"
      backgroundColor={colors.primary[700]}
    >
      <Formik
        onSubmit={formik.handleSubmit}
        values={formik.values}
        validationSchema={formik.validationSchema}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box
            display="grid"
            gap="2px"
            gridTemplateColumns="repeat(4,1fr)"
            gridTemplateRows="repeat(3,0.75fr)"
          >
            {Object.keys(formik.initialValues).map((key, index) => {
              return (
                <TextField
                  fullWidth
                  variant="filled"
                  type={key === "title" ? "text" : "datetime-local"}
                  size="small"
                  label={key}
                  defaultValue={formik.values[key]}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name={key}
                  error={!!formik.touched[key] && !!formik.errors[key]}
                  sx={{
                    gridColumn: "span 4",
                    fontSize: "12px",
                  }}
                  InputProps={{
                    style: {
                      fontSize: "12px",
                    },
                  }}
                ></TextField>
              );
            })}
          </Box>
          <Box display="flex" justifyContent="end" mt="5px">
            <Button type="submit" color="secondary" variant="contained">
              Create event
            </Button>
          </Box>
        </form>
      </Formik>
    </Box>
  );
};

export default EventForm;
