import React, { useState, useEffect, useContext, useReducer } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AppContext } from '../App';
import { Link } from "react-router-dom"
import Dropdown from "./Dropdown";


const Detail = () => {
    const { detailData } = useContext(AppContext);
    const [selected, setSelected] = useState(detailData.status);
    const [needSave, setNeedSave] = useState(true);
    let navigate = useNavigate();

    const handleClick = () => {
        detailData.status = selected;
        setNeedSave(true);
    }

    const handleNotesListClick = () => {
        navigate('/NotesList', { state: { jobid: detailData.id } });
    }

    return (
        <div>
            <div className="list-group">
                {detailData.id ?
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Job Content      :       {detailData.job_content}</li>
                        <li className="list-group-item">First Name       :       {detailData.first_name}</li>
                        <li className="list-group-item">Last Name        :       {detailData.last_name}</li>
                        <li className="list-group-item">Email        :       {detailData.Email}</li>
                        <li className="list-group-item">phone        :       {detailData.phone}</li>
                        <li className="list-group-item">Created        :       {detailData.Created}</li>
                        <li className="list-group-item">
                            <span className='items-in-list'>Status        :
                                <Dropdown selected={selected} setSelected={setSelected} setNeedSave={setNeedSave} />
                            </span>
                        </li>
                        <li className="list-group-item">
                            <span className='items-in-list'>
                                <button type="button" disabled={needSave} className="btn btn-link" onClick={() => handleClick()}>Save</button>
                                <button type="button" className="btn btn-link" onClick={() => handleNotesListClick()}>NotesList</button>
                                <Link to='/'>Go Back</Link>
                            </span>
                        </li>
                    </ul>
                    :
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">No Data</li>
                        <li className="list-group-item"><Link to='/'>Go Back</Link></li>
                    </ul>}
            </div>
        </div>
    );
}

export default Detail;