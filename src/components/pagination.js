import React from "react";
import article from "./Lp";
import epArticle from "./EP";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class PaginationDistro extends React.Component {
    render() {
        const { cardsPerPage, format, paginate } = this.props;

        const pageNumbers = [];
        if (format === "LP") {
            for (
                let i = 1;
                i < Math.ceil(article.length / cardsPerPage + 1);
                i++
            ) {
                pageNumbers.push(i);
            }
        } else {
            for (
                let j = 1;
                j < Math.ceil(epArticle.length / cardsPerPage + 1);
                j++
            ) {
                pageNumbers.push(j);
            }
        }

        return (
            <div className="mx-auto mt-3 mb-3">
                <Pagination size="lg" aria-label="Page navigation example">
                    {pageNumbers.map((num) => (
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => paginate(num)}
                                tag={Link}
                                to={`/${format}:${num}`}
                            >
                                {num}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                </Pagination>
            </div>
        );
    }
}

export default PaginationDistro;
