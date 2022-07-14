import { useState, useEffect, createContext } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import JobsTable from "./Component/JobsTable";
import Search from "./Component/Search";
import MockData from './MOCK_DATA.json'
import Detail from './Component/Detail';
import NotesList from "./Component/Notes/NotesList";

export const AppContext = createContext(null);

function App() {
  const [data, setData] = useState(MockData);
  const [searchText, setSearchText] = useState('');
  const [detailData, setDetailData] = useState('');
  const [notes, setNotes] = useState([]);
  let navigate = useNavigate();

  const transferToDetail = (d) => {
    setDetailData(d.detailData);
    navigate('/Detail');
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ setData, searchText, setSearchText, transferToDetail, detailData, notes, setNotes }}>
        <Routes>
          <Route path="/" element={
            <>
              <Search />
              <JobsTable filterData={[...data].filter((d) => d.job_content.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))} />
            </>
          } />
          <Route path='/Detail' element={<Detail />} />
          <Route path='/NotesList' element={<NotesList />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;