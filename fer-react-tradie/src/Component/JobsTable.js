import { useState, useContext } from 'react';
import { AppContext } from '../App';

const JobsTable = ({ filterData }) => {
    const { setData, transferToDetail } = useContext(AppContext)
    const [order, setOrder] = useState('ASC');

    const sorting = (col) => {
        if (order == 'ASC') {
            const sortedData = [...filterData].sort((a, b) => {
                return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
            })
            setData(sortedData);
            setOrder("DESC");
        }
        if (order == 'DESC') {
            const sortedData = [...filterData].sort((a, b) => {
                return b[col].toLowerCase() > a[col].toLowerCase() ? 1 : -1;
            })
            setData(sortedData);
            setOrder('ASC');
        }
    }

    return (<div className="container">
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th onClick={() => sorting("job_content")}>Job Content</th>
                    <th onClick={() => sorting("first_name")}>First Name</th>
                    <th onClick={() => sorting("last_name")}>Last Name</th>
                    <th onClick={() => sorting("email")}>Email</th>
                    <th onClick={() => sorting("phone")}>Phone</th>
                    <th onClick={() => sorting("status")}>Status</th>
                    <th onClick={() => sorting("created")}>Created</th>
                </tr>
            </thead>
            <tbody>
                {filterData.map((d) => (
                    <tr key={d.id} onClick={() => transferToDetail({ detailData: d })}>
                        <td>{d.job_content}</td>
                        <td>{d.first_name}</td>
                        <td>{d.last_name}</td>
                        <td>{d.email}</td>
                        <td>{d.phone}</td>
                        <td>{d.status}</td>
                        <td>{d.created}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default JobsTable;