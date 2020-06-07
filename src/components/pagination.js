import React from 'react';
import article from "./Lp";
import disque from "./disque"

class Paginationtest extends React.Component {
    render () {
        const { cardsPerPage, totalCards, paginate, nextPage, prevPage } = this.props
        const pageNumbers = [];
                        
            for (let i=1; 1 < Math.ceil( totalCards.length / cardsPerPage); i++ ) {
            pageNumbers.push(i);
        }
        return (
            <nav className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="#">Previous</a>
                </li>
                {pageNumbers.map(num => (
                    <li className="page-item" key={num}>
                        <a onClick={() => paginate(num)} href="#" className="page-link">{num}</a>
                    </li>
                )

                )}
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>


            </nav>
        )
    }
}

export default Paginationtest;