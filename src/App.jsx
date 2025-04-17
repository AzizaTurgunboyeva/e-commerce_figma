import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './layout'
import { MainPage } from './pages'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route index element={<MainPage />} />
       
        </Routes>
      </Layout>
    </div>
  );
}

export default App
