import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import DetailMovie from "./page/DetailMovie/DetailMovie";
import Header from "./component/Header/Header";
import Layout from "./template/Layout";
import Register from "./page/Home/Register/Register";
import OrderTickket from "./page/OrderTicket/OrderTicket";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route
            path="/movie/:id"
            element={
              <Layout>
                <DetailMovie />
              </Layout>
            }
          />
          <Route
            path="/datve/:maLichChieu"
            element={
              <Layout>
                <OrderTickket />
              </Layout>
            }
          />

          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
