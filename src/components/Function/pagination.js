import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationDistro = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalCards.length / cardsPerPage + 1); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="mx-auto mt-3 mb-3">
      <Pagination size="lg" aria-label="Page navigation example">
        {pageNumbers.map((num) => (
          <PaginationItem>
            <PaginationLink onClick={() => paginate(num)}>{num}</PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
    </div>
  );
};

export default PaginationDistro;
