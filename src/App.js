import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import pagesJSON from "./info.json";
import PageUI from "./components/PageUI/PageUI";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          {pagesJSON.pages?.map((page, i) => (
            <Route
              key={`page-${i}`}
              path={`/${page.slug}`}
              element={<PageUI active={i} page={page} />}
            />
          ))}

          {/* handles "/" path to redirect back to the industries page */}
          <Route path="/" element={<Navigate replace to="/industries" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
