import { BASE_URL } from './baseUrl'
import axios from 'axios';

export const addQuizApi = (cId, quizData) => {
    // const http = BaseConfig()
    return axios
      .post(BASE_URL+`/quiz/savequiz/${cId}`, quizData)
      .then((response) => {
        console.log(quizData);
        return response.data;
      })
      .catch((error) => {
        console.log(quizData);
        window.alert("data not posted");
      });
  };

  //load All quiz
export const loadallQuiz =()=> {
    return axios.get(BASE_URL+`/quiz/`).then((respone) => {
        return respone.data;
      });
}

  
//Add question to quiz
  export const addQuestionApi = (questionData) => {
    // const http = BaseConfig()
    return axios
      .post(BASE_URL+`/question`, questionData)
      .then((response) => {
        console.log(questionData);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        console.log(questionData);
        window.alert("data not posted");
      });
  };
