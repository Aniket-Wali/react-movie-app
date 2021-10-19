import MoviePagination from "../Components/Pagination";
import { useHistory } from "react-router-dom";

//  Movies Rows
const MovieRow = ({ movieData }) => {
  const history = useHistory();

  const goToMovieDetails = () => {
    history.push(`/${movieData.imdbID}`);
  };

  return (
    <tr>
      <td
        style={{
          color: "blue",
          cursor: "pointer"
        }}
        onClick={goToMovieDetails}
      >
        {movieData.imdbID}
      </td>
      <td>{movieData.Title}</td>
      <td>{movieData.Year}</td>
      <td>
        <a href={movieData.Poster} target="_blank" rel="noreferrer">
          Poster
        </a>
      </td>
    </tr>
  );
};

// Table
const Table = (props) => {
  const { tableData, loading, page, setPage, numberOfPages } = props;

  if (loading) {
    return <></>;
  }

  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Year</th>
            <th> Poster URL </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, idx) => {
            return <MovieRow movieData={data} key={idx} />;
          })}
        </tbody>
      </table>
      <MoviePagination
        page={page}
        setPage={setPage}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};

export default Table;
