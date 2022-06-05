import React, {useState} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Doctor() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    console.log("form submit");
    e.preventDefault();

    if (name && age && disease && date) {
      const person = {
        name,
        age,
        disease,
        date,
        file,
        contact,
        gender,
        time,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setAge("");
      setDisease("");
      setDate("");
      setFile("");
      setContact("");
      setGender("");
      setTime("");
      var myModalEl = document.getElementById("exampleModal");
      // eslint-disable-next-line no-undef
      var modal = bootstrap.Modal.getInstance(myModalEl);
      modal.hide();
    } else {
      console.log("empty input");
    }
  };
  return (
    <>
      <Navbar />
      <div className="row gx-0 ">
        <div className="col-sm-4 col-md-3 col-lg-2 bg-Main min-vh-100 Sidebar">
          <Sidebar />
        </div>
        <div className="col-sm-8 col-md-9 col-lg-10 p-64 mt-3 W-100">
          <div className="d-flex justify-content-between">
            <h3>Appointments</h3>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Add Appointment
            </button>
          </div>
          {people.length > 0 ? (
            <div className="table-responsive mt-3">
              <table class="table bg-white">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Disease</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">File</th>
                  </tr>
                </thead>
                {people.map((person) => {
                  const {id, name, age, disease, date, file} = person;
                  return (
                    <tbody key={id}>
                      <tr>
                        <th scope="row">{id}</th>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{date}</td>
                        <td>{disease}</td>
                        <td>{file}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          ) : (
            <h5 className="mt-4 ">You have no Appointments</h5>
          )}
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Appointment
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div class="mb-2">
                  <label for="Name" class="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    maxLength={24}
                    id="Name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="mb-2">
                  <label for="Age" class="col-form-label">
                    Age:
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    maxLength={30}
                    id="Age"
                    name="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div class="mb-2">
                  <label for="Disease" class="col-form-label">
                    Disease:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    maxLength={32}
                    id="Disease"
                    name="Disease"
                    value={disease}
                    onChange={(e) => setDisease(e.target.value)}
                  />
                </div>
                <div class="mb-2">
                  <label for="contact" class="col-form-label">
                    Contact:
                  </label>
                  <input
                    type="tel"
                    class="form-control"
                    maxLength={15}
                    id="contact"
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <div class="mb-2">
                  <label for="Appointment Date" class="col-form-label">
                    Appointment Date:
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="Appointment Date"
                    min={new Date().toISOString().split("T")[0]}
                    name="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="time" class="col-form-label">
                    Select Time:
                  </label>
                  <br />
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">09 : 00 AM</option>
                    <option value="1">12 : 00 PM</option>
                    <option value="1">03 : 00 PM</option>
                    <option value="1">06 : 00 PM</option>
                  </select>
                </div>
                <div class="mb-2">
                  <label for="file" class="col-form-label">
                    Choose File:
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="file"
                    name="file"
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                  />
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
