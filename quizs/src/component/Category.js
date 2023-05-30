import React,{useState} from 'react';
import { toast } from "react-toastify";
import {
    Container,
    Card,
    CardBody,
    Input,
    Form,
    Label,
    Button,Row,Col
  } from "reactstrap";
import { saveCategory } from '../urls/categoryApi';
const Category = () => {

    const [category, setCategory] = useState({
        title: "",
        description: "",
      });

    //fields change handle function .
  const fieldChangeHandle = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  //Upload  function  .
  const createCategory = (event) => {
    event.preventDefault();
    console.log(category);

    //submit call starts here .
    saveCategory(category)
      .then((data) => {
        console.log(data);

        console.log(category);
        setCategory({
         title: "",
         description: "",
        });
        toast.success("Product Uploaded with Information!!");
      })
      .catch((error) => {
        alert("upload failed");
      });
  };
  return (
    <div className="wrapper">
    <Container>
      <Container className="mb-2 p-4">
        <Button color="primary" size="lg" href="/view">
          Click to Watch All Products
        </Button>
      </Container>
      <Card className="shadow-sm border-1 mt-2 border-radius-2">
        <CardBody>
          <h3>
            <strong>Form for Add products </strong>
          </h3>
          <Form onSubmit={createCategory}>
            <div>
              <Label for="title"> title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter Category title here"
                className="rounded-2"
                name="title"
                onChange={fieldChangeHandle}
              />
            </div>
            <div>
              <Label for="type">Description </Label>
              <Input
                type="text"
                id="description"
                placeholder="Enter type"
                className="rounded-2"
                name="description"
                onChange={fieldChangeHandle}
              />
            </div>

            <Container className="text-center ">
                <Button className="rounded-2 mb-2" color="primary">
                  {" "}
                  Submit
                </Button>
              </Container>
            </Form>
            </CardBody>
            </Card>
            </Container>
            </div>
  )
}

export default Category