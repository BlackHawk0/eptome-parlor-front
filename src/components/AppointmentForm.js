import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

export default function AppointmentForm() {
  // const dispatch = useDispatch();

  // phone number validator regex
  const numberRegex = /^(?:254|\+254|0)?(7|1?[0-9]{9})$/;

  // booked date regex
  const dateRegex = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/;

  const BookAppointmentSchema = Yup.object().shape({
    customer_name: Yup.string().required("Your Name is required"),
    customer_phonenumber: Yup.string()
      .matches(numberRegex, "Phone Number is not valid")
      .required("Phone Number is required"),
    customer_email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    service_id: Yup.string().required("Service is required"),
    booked_date: Yup.string()
      .matches(dateRegex, "Date must be in DD/MM/YYYY format")
      .required("Appointment date is required"),
  });

  const formik = useFormik({
    initialValues: {
      id: 0,
      customer_name: "",
      customer_phonenumber: "",
      customer_email: "",
      service_id: "",
      booked_date: "",
      created_at: "",
      updated_at: "",
    },
    validationSchema: BookAppointmentSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("VALUES: ", values);
      console.log("in here: ", values);
      const postData = async () => {
        await fetch("https://eptome-parlor-beauty.herokuapp.com/bookings/new", {
          method: "POST",
          body: JSON.stringify({
            id: 5,
            customer_name: "Wambura",
            customer_phonenumber: "1237767890",
            customer_email: "wam@test.com",
            booked_date: "",
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
      };
      postData();
    },
  });

  const { errors, touched, handleSubmit, getFieldProps, values } = formik;
  useEffect(() => {}, []);
  return (
    <div>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                autoComplete="customer_name"
                type="text"
                margin="normal"
                label="Name"
                {...getFieldProps("customer_name")}
                error={Boolean(touched.customer_name && errors.customer_name)}
                helperText={touched.customer_name && errors.customer_name}
              />
              <TextField
                fullWidth
                autoComplete="customer_phonenumber"
                type="text"
                margin="normal"
                label="Phone Number"
                {...getFieldProps("customer_phonenumber")}
                error={Boolean(
                  touched.customer_phonenumber && errors.customer_phonenumber
                )}
                helperText={
                  touched.customer_phonenumber && errors.customer_phonenumber
                }
              />
              <TextField
                fullWidth
                autoComplete="customer_email"
                type="email"
                margin="normal"
                label="Email address"
                {...getFieldProps("customer_email")}
                error={Boolean(touched.customer_email && errors.customer_email)}
                helperText={touched.customer_email && errors.customer_email}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                autoComplete="service_id"
                type="text"
                margin="normal"
                label="Service"
                {...getFieldProps("service_id")}
                error={Boolean(touched.service_id && errors.service_id)}
                helperText={touched.service_id && errors.service_id}
              />
              <TextField
                fullWidth
                autoComplete="booked_date"
                type="text"
                placeholder="DD/MM/YYYY"
                margin="normal"
                label="Booked Date"
                {...getFieldProps("booked_date")}
                error={Boolean(touched.booked_date && errors.booked_date)}
                helperText={touched.booked_date && errors.booked_date}
              />
              <br />
              <Button
                type="submit"
                sx={{
                  color: "#ffffff",
                  alignItems: "right",
                  backgroundColor: "#ED806B",
                  borderRadius: "131px;",
                  display: "flexEnd",
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </div>
  );
}
