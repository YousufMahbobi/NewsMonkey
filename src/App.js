import "./App.css";
import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(10)
  const 
  apikey = env.process.REACT_APP_News_APIKey;
  const pageSize = 5;
  const country = "us";
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  country={country}
                  key="general"
                  pageSize={pageSize}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  country={country}
                  key="business"
                  pageSize={pageSize}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  country={country}
                  key="entertainment"
                  pageSize={pageSize}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  country={country}
                  key="health"
                  pageSize={pageSize}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  country={country}
                  key="science"
                  pageSize={pageSize}
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  country={country}
                  key="sports"
                  pageSize={pageSize}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  country={country}
                  key="technology"
                  pageSize={pageSize}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
}
export default App