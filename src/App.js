import React, { useState } from "react";
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import { ProtectedRoutes } from "./router/ProtectedRoutes";
import { PublicRoutes } from "./router/PublicRoutes";
import "./app.css";

import { Login } from "./components/login/Login";
import { Form } from "./components/form/Form";
import { History } from "./components/history/History";
import { Chart } from "./components/chart/Chart";

function App() {
  const [uid, setUid] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PublicRoutes uid={uid} />}>
          <Route
            path="/"
            element={<Login setUid={setUid} setUser={setUser} />}
          />
        </Route>
        <Route path="/form" element={<ProtectedRoutes uid={uid} />}>
          <Route path="/form" element={<Form user={user} setUid={setUid} />} />
        </Route>
        <Route path="/history" element={<ProtectedRoutes uid={uid} />}>
          <Route
            path="/history"
            element={<History user={user} setUid={setUid} />}
          />
        </Route>
        <Route path="/chart" element={<ProtectedRoutes uid={uid} />}>
          <Route
            path="/chart"
            element={<Chart user={user} setUid={setUid} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
