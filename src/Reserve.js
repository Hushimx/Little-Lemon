import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import "./App.css";
import "./css/ReservePage.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const reservationSchema = Yup.object().shape({
  date: Yup.date().required("Date is required"),
  Time: Yup.string()
    .required("Time is required")
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:mm)"),
  guests: Yup.number(
    "Whoops! That's not quite right. Make sure to use numbers only"
  )
    .required("Hold up! This field is required")
    .min(1, "add at least 1 guest")
    .max(10, "The Maximum number of guests are 10"),
});
function formatDate(date) {
  // new Date().getTime()+1209600
  const afterWeek = new Date(date.getTime() + 604800000);
  return [
    date.toISOString().split("T")[0],
    afterWeek.toISOString().split("T")[0],
  ];
}
const today = new Date();
const formattedDate = formatDate(today);

function Success({ data }) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <div
        className="container-fluid pt-5 d-flex align-items-center justify-content-center flex-column mt-5 "
        style={{
          backgroundColor: "#4a5e57",
          height: "70vh",
          width: "40%",
          borderRadius: "20px",
          marginBottom: "13rem !important",
        }}
      >
        <img className="mb-3" src="/images/success.svg" height={150} alt="" />
        <h1 className="text-center mb-5">Reservation confirmed</h1>
        <p style={{ color: "white" }}>
          Thank you for Reserving at little lemon, See you at{" "}
          {days[new Date(data.date).getDay()]}
        </p>
      </div>
    </>
  );
}
function App() {
  const [ReserveStatus, setReserveStatus] = React.useState({});
  function submitHandler(data) {
    setReserveStatus({ status: true, data: data });
  }
  return (
    <>
      {ReserveStatus.status ? (
        <Success data={ReserveStatus.data} />
      ) : (
        <div
          className="container  pt-5"
          style={{
            marginBottom: "10rem ",
          }}
        >
          <h2>Reserve Table</h2>
          <Formik
            initialValues={{
              date: "",
              Time: "",
              guests: "",
              occastion: "Birthday",
            }}
            validationSchema={reservationSchema}
            onSubmit={submitHandler}
          >
            {({ errors, touched }) => {
              return (
                <Form>
                  <div class="form-floating">
                    <Field
                      name="date"
                      type="date"
                      min={formattedDate[0]}
                      max={formattedDate[1]}
                      className={`form-control ${
                        touched.date && errors.date ? "is-invalid" : ""
                      }`}
                      id="date"
                      placeholder="Date"
                    />
                    <label for="date">Choose date</label>
                    <div
                      id="validationServer03Feedback"
                      class="invalid-feedback d-block ms-1"
                    >
                      {touched.date ? errors.date : ""}
                    </div>
                  </div>
                  <div className="form-floating mt-3">
                    <Field
                      name="Time"
                      className={`form-select ${
                        touched.Time && errors.Time ? "is-invalid" : ""
                      }`}
                      id="Time"
                      aria-label="Floating label select example"
                      component="select"
                    >
                      <option>17:00</option>
                      <option>18:00</option>
                      <option>19:00</option>
                      <option>20:00</option>
                      <option>21:00</option>
                      <option>22:00</option>
                    </Field>
                    <label for="Time">Time </label>
                  </div>
                  <div class="form-floating">
                    <Field
                      name="guests"
                      type="number"
                      className={`form-control ${
                        touched.guests && errors.guests ? "is-invalid" : ""
                      }`}
                      id="guests"
                      placeholder="Guests"
                      min="1"
                      max="10"
                    />
                    <label for="guests" style={{ left: "2px", width: "auto" }}>
                      Guests
                    </label>
                    <div
                      id="validationServer03Feedback"
                      className="invalid-feedback d-block ms-1"
                    >
                      {touched.guests ? errors.guests : ""}
                    </div>
                  </div>

                  <div className="form-floating mt-3 ">
                    <Field
                      name="occastion"
                      className={`form-select ${
                        touched.occastion
                          ? errors.occastion
                            ? "error"
                            : ""
                          : ""
                      }`}
                      id="occastion"
                      component="select"
                      aria-label="Floating label select example"
                    >
                      <option>Birthday</option>
                      <option>Anniversary</option>
                    </Field>
                    <label for="occastion">Occasion</label>
                    <div
                      id="validationServer03Feedback"
                      class="invalid-feedback d-block ms-1"
                    >
                      {touched.occastion ? errors.occastion : ""}
                    </div>
                  </div>
                  <button
                    className="lemonBtn mt-auto"
                    type="submit"
                    style={{ height: "40px" }}
                  >
                    Make Reservation !
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </>
  );
}
export default App;
