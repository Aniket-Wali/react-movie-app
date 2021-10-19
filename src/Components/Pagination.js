import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { range } from "lodash";

const MoviePagination = (props) => {
  const { page, setPage, numberOfPages } = props;

  const changeCurrentPage = (pageNumber) => {
    setPage(pageNumber);
  };
  return (
    <Pagination>
      <div className="d-flex flex-wrap">
        {range(numberOfPages).map((e, idx) => {
          const currentPageNo = idx + 1;

          return (
            <PaginationItem
              active={currentPageNo === page}
              onClick={() => changeCurrentPage(currentPageNo)}
            >
              <PaginationLink href="#">{currentPageNo}</PaginationLink>
            </PaginationItem>
          );
        })}
      </div>
    </Pagination>
  );
};

export default MoviePagination;
