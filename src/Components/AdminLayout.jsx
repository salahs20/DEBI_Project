import React from 'react'
import HeaderAdmin from './Component/HeaderAdmin'
import DashBoard from './Pages/Admin/DashBoard'
import { Route, Routes } from 'react-router-dom'


const AdminLayout = () => {
  return (
    <div>

        <HeaderAdmin/>
        <Routes>
          <Route path="/" element={<DashBoard/>}/>
        </Routes>
        
      


    </div>
  )
}

export default AdminLayout
