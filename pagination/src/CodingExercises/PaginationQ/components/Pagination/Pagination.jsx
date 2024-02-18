import React from 'react';
import styles from './Pagination.module.css'
const Pagination = (props) => {
    return (
        <div className={styles.pagination}>
        <button onClick={() => props.onPageChange(props.currentPage - 1)} disabled={props.currentPage === 1}>
          Previous
        </button>
        <span>
          Page {props.currentPage} of {props.totalPages}
        </span>
        <button onClick={() => props.onPageChange(props.currentPage + 1)} disabled={props.currentPage === props.totalPages}>
          Next
        </button>
      </div>
    );
}

export default Pagination