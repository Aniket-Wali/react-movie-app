import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { range } from "lodash";

const MoviePagination = (props) => {
  const { page, setPage, numberOfPages } = props;

  const changeCurrentPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const createPageArrayToShow = () => {
    if (page <= 3) {
      return range(1, page + 4);
    } else if (page >= numberOfPages - 2) {
      return range(numberOfPages - 4, numberOfPages + 1);
    } else {
      return range(page - 2, page + 3);
    }
  };

  const onClickPrevious = () => {
    if (page > 0) setPage(page - 1);
  };

  const onClickNext = () => {
    if (page < numberOfPages) setPage(page + 1);
  };

  const onClickFirst = () => {
    setPage(1);
  };

  const onClickLast = () => {
    setPage(numberOfPages);
  };

  return (
    <Pagination>
      <div className="d-flex flex-wrap">
        <PaginationItem onClick={onClickFirst}>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem onClick={onClickPrevious}>
          <PaginationLink previous href="#" />
        </PaginationItem>
        {createPageArrayToShow().map((e) => {
          const currentPageNo = e;

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
      <PaginationItem onClick={onClickNext}>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem onClick={onClickLast}>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
};

export default MoviePagination;
