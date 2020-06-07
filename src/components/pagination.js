import React from 'react';
import article from "./Lp";
import disque from "./disque"
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Paginationtest extends React.Component {
    render () {        
        const pageNumbers = ["1", "2", "3", "4", "5"];        
        return (    
            <Pagination size="lg" aria-label="Page navigation example">
                <PaginationItem>
                     <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous tag={Link} to={`/LP/:${pageNumbers.toString - "1"}`} />
                </PaginationItem>
                {pageNumbers.map(num => (
                    <PaginationItem>
                        <PaginationLink tag={Link} to={`/LP/:${num}`}>{num}</PaginationLink>
                    </PaginationItem>
                )
                )}
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>           
        );
    }
}

export default Paginationtest;