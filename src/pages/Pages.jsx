import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import UpComing from './UpComing';
import TopRated from './TopRated';
import Detail from './Detail/Detail';

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies/:keyword" element={<Movies/>}/>
        <Route path="/upcoming/" element={<UpComing/>}/>
        <Route path="/toprated" element={<TopRated/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
  )
}

export default Pages