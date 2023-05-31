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

import { addQuestionApi,loadallQuiz } from "../urls/QuizApi";

const AddQuestion = () => {
  const [content, setContent] = useState("");
  const [answer, setAnswer] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4,setOption4] = useState("");
  const [quiz,setQuiz]  = useState({});
  const [quizId,setQuizId] = useState(0);
  console.log(quizId);

  const [allQuizes, setAllQuizes] = useState([]);
  useEffect(() => {
    loadallQuiz()
      .then((data) => {
        console.log(data);
        setAllQuizes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const createQuestion = () => {
    addQuestionApi({
      content: content,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      answer: answer,
      quiz: {
quizId: quizId
      }

    })
      .then((res) => {
        setContent(content);
        setOption1(option1);
        setOption2(option2);
        setOption3(option3);
        setOption4(option4);
        setAnswer(answer);
setQuiz(quiz)
        console.log(res);
        toast.success("Question Added Successfully");
        // window.alert("floor created  successfully");
      })
      .catch((error) => {
       
        console.log("question not created");
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
            </div>
            <h1 className="text-center mb-3">Add Question </h1>
            <div className="my-3">
              <Label for="category">Quiz Title</Label>
              <Input
                type="select"
                id="title"
                placeholder="Enter Category"
                className="rounded-0"
                name="title"
                onChange={(e) => setQuizId(e.target.value)}
                defaultValue={0}
              >
                <option disabled value={0}>
                  --Select Category--
                </option>

                {allQuizes.map((category) => (
                  <option value={category.quizId} key={category.quizId}>
                    {category.title}
                  </option>
                ))}
              </Input>
            </div>
            <div className="form-group">
              <label>Content:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Content"
                onChange={(e) => setContent(e.target.value)}
                id="content"
              />
            </div>

            <div className="form-group">
              <label>Option1:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Option1"
                onChange={(e) => setOption1(e.target.value)}
                id="option1"
              />
            </div>

            <div className="form-group">
              <label>Option2:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Option2"
                onChange={(e) => setOption2(e.target.value)}
                id="option2"
              />
            </div>

            <div className="form-group">
              <label>Option3:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Option3"
                onChange={(e) => setOption3(e.target.value)}
                id="option3"
              />
            </div>

            <div className="form-group">
              <label>option4:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Option4"
                onChange={(e) => setOption4(e.target.value)}
                id="option4"
              />
            </div>

            <div className="form-group">
              <label>Answer:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Answer"
                onChange={(e) => setAnswer(e.target.value)}
                id="answer"
              />
            </div>

            <button
              type="button"
              onClick={createQuestion}
              className="btn btn-success mt-4"
            >
              Add Quiz
            </button>
          </div>
          <Container className="mb-2 p-4">
          <Button color="primary" size="lg" href="/attemptQuiz">
            Click to Attemt Quiz of Your choice
          </Button>
        </Container>

        <Container className="mb-2 p-4">
          <Button color="primary" size="lg" href="/addQuiz">
 Back to Add Quiz
          </Button>
        </Container>
        </div>
        <ToastContainer />
      </div>
    
  );
};

export default AddQuestion;
