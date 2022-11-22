import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

const Profile = () => {
  const phoneRegExp =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const isNoneMobile = useMediaQuery("(min-width:600px");

  const formik = useFormik({
    initialValues: {
      "First Name": "",
      "Last Name": "",
      Email: "",
      Contact: "",
      "Address 1": "",
      "Address 2": "",
    },
    validationSchema: yup.object().shape({
      "First Name": yup.string().required("required"),
      "Last Name": yup.string().required("required"),
      Email: yup.string().email("Invalid email").required("required"),
      Contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("required"),
      "Address 1": yup.string().required("required"),
      "Address 2": yup.string().required("required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box m="20px">
      <Header title="Profile form" subtitle="Form for profile creation" />
      <Formik
        onSubmit={formik.handleSubmit}
        values={formik.values}
        validationSchema={formik.validationSchema}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNoneMobile ? undefined : "span 4" },
            }}
          >
            {Object.keys(formik.initialValues).map((key, index) => {
              return (
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label={key}
                  value={formik.values[key]}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name={key}
                  error={!!formik.touched[key] && !!formik.errors[key]}
                  helperText={formik.touched[key] && formik.errors[key]}
                  sx={{ gridColumn: "span 4" }}
                ></TextField>
              );
            })}
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create new user
            </Button>
          </Box>
        </form>
      </Formik>
    </Box>
  );
};

export default Profile;
