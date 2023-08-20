import React from 'react'
import Form from './components/Form/Form'
import Datagrid from './components/DataGrid/Datagrid'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checking from './components/checking/checking'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/grid' element={<Datagrid/>}/>
        {/* <Route path='/checking' element={<Checking/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App