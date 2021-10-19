import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { Button, Input, Alert } from "reactstrap";

import Loader from "../Components/Loader";
import Table from "../ListSection";

const MainSection = () => {
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "8b0354c6";
  const limit = 10;

  useEffect(() => {
    if (!isEmpty(searchText)) searchMovies();
  }, [page]);

  const searchMovies = async () => {
    if (isEmpty(searchText)) {
      setError("Search Text cannot be Empty!!");
      return;
    }

    setLoading(true);
    setError(null);
    setMovies([]);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&page=${page}&s=${searchText}`
      );
      const data = await response.json();
      const { Response, Search: results, totalResults, Error } = data;
      console.log(Error);

      if (Response === "True") {
        setMovies(results);
        setTotalRecords(totalResults);
        setNumberOfPages(Math.floor(totalResults / limit));
      } else setError(Error);
    } catch (error) {
      console.log(error);
      setMovies([]);
    }
    setLoading(false);
  };

  const searchOnChange = (e) => {
    console.log("input box value : ", e.target.value);
    setSearchText(e.target.value);
  };

  const searchMovieHandler = () => {
    setPage(1);
    searchMovies();
  };

  const onClickReset = () => {
    setMovies([]);
    setSearchText("");
    setError(null);
  };

  return (
    <main className="container mt-3">
      {error && <Alert color="danger">{error}</Alert>}
      {/* <SearchSection /> */}
      <section>
        <Input
          type="text"
          name="searchText"
          id="searchText"
          placeholder="Search a movie..."
          value={searchText}
          onChange={searchOnChange}
        />

        <div className="m-2">
          <Button color="primary" onClick={searchMovieHandler}>
            Search
          </Button>{" "}
          <Button color="warning" onClick={onClickReset}>
            Reset
          </Button>
        </div>
      </section>
      <section>
        {isEmpty(movies) ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            {loading ? <Loader /> : <h1>Data not available</h1>}
          </div>
        ) : (
          <>
            {loading && <Loader />}
            {isEmpty(movies) ? (
              <></>
            ) : (
              <span>
                <h6>Stats</h6>
                <p>Total Records : {totalRecords}</p>
                <p>
                  Page Number : {page}/{numberOfPages}
                </p>
              </span>
            )}

            <Table
              tableData={movies}
              loading={loading}
              page={page}
              setPage={setPage}
              numberOfPages={numberOfPages}
            />
          </>
        )}
      </section>
    </main>
  );
};

export default MainSection;
