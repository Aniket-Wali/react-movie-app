import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";

import Loader from './Components/Loader';

const apikey = "8b0354c6";

const MovieDetailsSection = (props) => {
  const [movieData, setMovieData] = useState({});

  const history = useHistory();
  const location = useLocation();

  const { pathname = "" } = location;
  const imdbId = pathname.substr(1);

  const getMovieDetails = async () => {
    try {
      const url = `https://www.omdbapi.com/?apikey=${apikey}&i=${imdbId}`;
      const response = await fetch(url);
      const data = await response.json();

      const { Response, Error, ...result } = data;

      console.log(result);

      if (Response === "True") {
        setMovieData(result);
      } else {
        // setError(Error);
      }
    } catch (error) {
      console.log(error);
      // setMovies([]);
    }
    // setLoading(false);
  };

  useEffect(() => {
    // update the movieData
    getMovieDetails();
  }, []);

  return (
    <div className="d-flex flex-column">
      <Button color="primary m-2 w-25" onClick={() => history.goBack()}>
        Go back
      </Button>

      <div>
        {!movieData.Title && <Loader />}
        <img src={movieData.Poster} alt={movieData.Title} />
        <h1>Title : {movieData.Title}</h1>
        <h1>Year : {movieData.Year}</h1>
        <h1>Actors : {movieData.Actors}</h1>
        <h1>Imdb Rating : {movieData.imdbRating}</h1>
        <h1>Imdb Votes : {movieData.imdbVotes}</h1>
        <h1>Box Office Collection : {movieData.BoxOffice}</h1>
        <h1>Language : {movieData.Language}</h1>
        <h1>Genre : {movieData.Genre}</h1>
      </div>
    </div>
  );
};

export default MovieDetailsSection;
