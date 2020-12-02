import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styles from "../Styles/pageShop.module.css";

const PaginationDistro = ({ cardsPerPage, articleList, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(articleList.length / cardsPerPage + 1); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="mx-auto mt-3 mb-3">
      <Pagination size="lg" aria-label="Page navigation example">
        {pageNumbers.map((num, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              id={styles.pagination}
              onClick={() => paginate(num)}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
    </div>
  );
};

export default PaginationDistro;
