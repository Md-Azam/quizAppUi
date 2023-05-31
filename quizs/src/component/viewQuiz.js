import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import AddProduct from './AddQuiz';
import {
  Container,
  Card,
  CardBody,
  Input,
  Form,
  Label,
  Row,
  Col,
} from "reactstrap";
import { loadallQuiz } from "../urls/QuizApi";
const AttemtQuiz = ({ type }) => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState(false);
  const [count, setCount] = useState(0);
  const [types, setType] = useState("");
  const [item, setItem] = useState(null);
  const [quizId, setQuizId] = useState(0);
  console.log(quizId);
  const [loadAllQuiz, setLoadAllQuiz] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    loadallQuiz()
      .then((data) => {
        console.log(data);
        setLoadAllQuiz(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  //     useEffect(() => {
  //         axios.get(`http://localhost:7009/question/byQuiz/${quizId}`).then((res) => {
  //             console.log(res);
  //             setData(res.data);
  //         }).catch((err) => {
  //             console.log(err);
  //         })
  //     }, [status]);
  const toggle = () => {
    setStatus(!status);
  };
  const nextQuiz = () => {
    setNum(num + 1);
  };
  const prev = () => {
    setNum(num - 1);
  };
  const update = (id) => {};
  const handleSubmit = () => {};

  const fetchByQuizTitle = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7009/question/byQuiz/9`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };

  useEffect(() => {
    fetchByQuizTitle();
  }, []); // console.log(count)
  return (
    <div className="container">
      <div className="my-3">
        <Label for="category">Select Quiz Title You want</Label>
        <Input
          type="select"
          id="title"
          placeholder="Enter Category"
          className="rounded-0"
          name="title"
          // onChange={(e) => setQuizId(e.target.value)}
          defaultValue={0}
        >
          <option disabled value={0}>
            --Select Category--
          </option>

          {loadAllQuiz.map((category) => (
            <option value={category.quizId} key={category.quizId}>
              {category.title} {category.quizId}
            </option>
          ))}
        </Input>
      </div>
      <div>
        <h1>Search By QuizName</h1>
        <div>
          <input
            type="text"
            placeholder="Enter quiz id"
            value={quizId}
            onChange={(e) => setQuizId(e.target.value)}
          />
        </div>
      </div>
       
      {/*             {type === 'admin' ? <AddProduct toggle={toggle} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} types={types} item={item} /> : (<></>)} */}
      <h4>Score : {count}</h4>
                 {" "}
      {data.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h5>
            Question No: {num + 1}of {data.length}
          </h5>
          <h3>
            {data[num].id}.{data[num].question} {" "}
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                setType("edit");
                setOpen(true);
                setItem(data[num]);
              }}
            >
              Edit
            </Button>
             {" "}
            <Button variant="contained" color="error" size="small">
              Delete
            </Button>
          </h3>
          <h3>{data[num].content}</h3>
          <input
            type="checkbox"
            value={data[num].option1}
            onChange={(e) =>
              e.target.value === data[num].answer ? setCount(count + 1) : ""
            }
          />
          {data[num].option1}
          <br />
          <input
            type="checkbox"
            value={data[num].option2}
            onChange={(e) =>
              e.target.value === data[num].answer ? setCount(count + 1) : ""
            }
          />
          {data[num].option2}
          <br />
          <input
            type="checkbox"
            value={data[num].option3}
            onChange={(e) =>
              e.target.value === data[num].answer ? setCount(count + 1) : ""
            }
          />
          {data[num].option3}
          <br />
          <input
            type="checkbox"
            value={data[num].option4}
            onChange={(e) =>
              e.target.value === data[num].answer ? setCount(count + 1) : ""
            }
          />
          {data[num].option4}
          <br />
        </>
      )}
                 {" "}
      {data.length === num + 1 ? (
        <>
          <Button onClick={prev}>Back</Button>{" "}
          <Button
            onClick={handleSubmit}
            size="small"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </>
      ) : (
        <>
          {num === 0 ? (
            <></>
          ) : (
            <Button
              onClick={prev}
              size="small"
              variant="contained"
              color="primary"
            >
              Back
            </Button>
          )}
           {" "}
          <Button
            onClick={nextQuiz}
            size="small"
            variant="contained"
            color="primary"
          >
            Next
          </Button>{" "}
        </>
      )}
               {" "}
      <div>
      <Container className="mb-2 p-4">
          <Button color="primary" size="lg" variant="contained" href="/addQuestion">
            Previous Page
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default AttemtQuiz;
