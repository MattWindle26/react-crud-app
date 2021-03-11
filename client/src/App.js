import { useState, useEffect } from "react";
import './App.css';
import Axios  from "axios";

function App() {

const [movieName, setMovieName] = useState('');
const [review, setReview] = useState("");
const [movieReviewList, setMovieReviewList] = useState([]);

const submitReview = (e) => {
  console.log("submit");
  Axios.post('http://localhost:3001/api/insert', {
  movieName: movieName,
  movieReview: review,
  }).then(() => {
    alert("Successfull");
  })
};


useEffect(() => {
  Axios.get('http://localhost:3001/api/get').then((response) => {
    setMovieReviewList(response.data)
  });
}, []);

  return (
    <div className="App"> 
      <form action="">
        <label htmlFor="">Movie Name</label>
        <input 
          type="text" 
          name="movieName" 
          onChange={(e) => {
          setMovieName(e.target.value);
          }} 
        />
        <label htmlFor="">Movie review</label>
        <input 
          type="text" 
          name="movieReview" 
          onChange={(e) => { 
          setReview(e.target.value);
          }} 
        />
        <button type="submit" onClick={submitReview} >Send</button>
      </form>

      <ul>
      {movieReviewList.map((data) => {
        return ( 
          <li key={data.id}>
          <p>Movie Name : {data.movieName}</p>
          <p>Review: {data.movieReview}</p>
          </li>
        )
      })}
      </ul>

    </div>
  );
}

export default App;
