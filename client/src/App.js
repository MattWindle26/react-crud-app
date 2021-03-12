import { useState, useEffect } from "react";
import './App.css';
import Axios  from "axios";

function App() {

const [movieName, setMovieName] = useState('');
const [review, setReview] = useState("");
const [movieReviewList, setMovieReviewList] = useState([]);

const [newReview, setNewReview] = useState("");

const submitReview = () => {
  Axios.post('http://localhost:3001/api/insert', {
  movieName: movieName,
  movieReview: review,
  });

  setMovieReviewList([...movieReviewList, { movieName: movieName, movieReview: review }]);

};

const deleteReview = (movie) => {
  Axios.delete(`http://localhost:3001/api/delete/${movie}`);
}

  // const updateReview = () =>{
  //   console.log("FIRED");
  // }

const updateReview = (movie) => {
  console.log(movie);
  console.log(newReview)
  Axios.put('http://localhost:3001/api/update', {
    movieName: movie,
    movieReview: newReview,
  });
  setNewReview("");
};



useEffect(() => {
  Axios.get('http://localhost:3001/api/get').then((response) => {
    setMovieReviewList(response.data);
  });
}, []);

  return (
    <div className="App container"> 
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
        <button type="submit" onClick={() => {submitReview()}} >Send</button>
      </form>

        {movieReviewList && movieReviewList.map((data) => {
        return ( 

          <div className="card" key={data.id}>
              <div className="card-body">
                <h5 className="card-title">{data.movieName}</h5>
                <p className="card-text">{data.movieReview}</p>
                <button className="btn btn-primary" onClick={() => {deleteReview(data.movieName)}} >Delete</button>
                <br></br>
                <input 
                type="text" 
                name="" 
                id=""
                onChange={(e) => {
                setNewReview(e.target.value)
                }}
                />
              <button className="btn btn-primary" onClick={ () => {updateReview(data.movieName) }} >Update</button>
              </div>
          </div>


        )
      })}

    </div>
  );
}

export default App;
