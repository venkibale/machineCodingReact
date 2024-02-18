import React, { useState } from 'react';
import classes from './PaginationQ.module.css';
import { FOODS } from './data/data.js';
import Table from './components/Table/Table.jsx';

const PaginationQ = (props) => {
    const ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = FOODS.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className={classes.pagination_container}>
            <Table data={paginatedData} currentPage={currentPage} totalPages={Math.ceil(FOODS.length / ITEMS_PER_PAGE)} onPageChange={handlePageChange} ></Table>
        </div>
    );
}

export default PaginationQ