import React from 'react';
import styles from './Table.module.css'
import Pagination from '../Pagination/Pagination';
const Table = (props) => {
    return (
    <>
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                    <th>#</th>
                    <th>Food</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {props.data.map((item, index) => (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}$</td>
                    </tr>
                    )
                )}
            </tbody>
      </table>
      <Pagination currentPage={props.currentPage} totalPages={props.totalPages} onPageChange={props.onPageChange}></Pagination>
    </>
        
    );
}

export default Table