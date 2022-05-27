import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import UserCard from "../UserCard/UserCard";
import { useEffect } from "react";
import { useState } from "react";


function App() {

  const [people, setPeople] = useState({
    start: []
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => setPeople({ start: result }))
  }, [])

  return (
    <Routes>
      <Route path={'/'} element={<Layout />} >
        <Route index element={<MainPage users={people.start} />} />
        <Route path={'user'} >
          <Route path=":id" element={<UserCard users={people.start} />} />
        </Route>
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App;
