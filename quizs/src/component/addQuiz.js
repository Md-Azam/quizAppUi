import React, { useState, useEffect } from "react";
import { loadallCat } from "../urls/categoryApi";
import {
  Container,
  Card,
  CardBody,
  Input,
  Form,
  Label,
  Button,
  Row,
  Col,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addQuizApi } from "../urls/QuizApi";

const AddQuiz = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [totalquestion, setTotalquestion] = useState("");
  const [marks, setMarks] = useState("");
  const [cid, setCid] = useState(0);
  console.log(cid);

  const [loadAllcategories, setLoadAllcategories] = useState([]);
  useEffect(() => {
    loadallCat()
      .then((data) => {
        console.log(data);
        setLoadAllcategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const createQuizs = () => {
    addQuizApi(cid, {
      title: title,
      description: description,
      totalquestion: totalquestion,
      marks: marks,
    })
      .then((res) => {
        setTitle(title);
        setDescription(description);
        setTotalquestion(totalquestion);
        setMarks(marks);
        console.log(res);
        toast.success("Quiz Added Successfully");
        // window.alert("floor created  successfully");
      })
      .catch((error) => {
        console.log(title, description, totalquestion, marks);
        console.log("quiz not created");
        toast.warning("Failed to add quiz");
        // window.alert("floor creation  failed");
      });
  };
  return (
    <div>
      <h2>Add Quiz</h2>
      <div className="row justify-content-left pt-5">
        <div className="col-sm-6">
          <div className="card p-4">
            <Label for="category">User Type</Label>
            <div className="container">
              <span>
                <div className="form-group">
                  <label>Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter UserRole"
                  />
                  <button
                    style={{ margin: "12px" }}
                    type="button"
                    className="btn btn-success mt-4"
                  >
                    OK
                  </button>
                </div>
              </span>
            </div>
            <h1 className="text-center mb-3">Add Quiz </h1>
            <div className="my-3">
              <Label for="category">Quiz Caregory</Label>
              <Input
                type="select"
                id="title"
                placeholder="Enter Category"
                className="rounded-0"
                name="title"
                onChange={(e) => setCid(e.target.value)}
                defaultValue={0}
              >
                <option disabled value={0}>
                  --Select Category--
                </option>

                {loadAllcategories.map((category) => (
                  <option value={category.cid} key={category.cid}>
                    {category.title}
                  </option>
                ))}
              </Input>
            </div>

            
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                onChange={(e) => setTitle(e.target.value)}
                id="title"
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
                id="description"
              />
            </div>

            <div className="form-group">
              <label>Total Question:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter No.Of Question"
                onChange={(e) => setTotalquestion(e.target.value)}
                id="totalquestion"
              />
            </div>

            <div className="form-group">
              <label>Total Marks:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter No.Of Question"
                onChange={(e) => setMarks(e.target.value)}
                id="marks"
              />
            </div>

            <button
              type="button"
              onClick={createQuizs}
              className="btn btn-success mt-4"
            >
              Add Quiz
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Container className="mb-2 p-4">
          <Button color="primary" size="lg" href="/addQuestion">
            Click to AddQuestion
          </Button>

          <Button color="primary" size="lg" href="/">
 Back to Home Page
          </Button>
        </Container>

       
        
    </div>
  );
};

export default AddQuiz;
