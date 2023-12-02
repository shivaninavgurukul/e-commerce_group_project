
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./page";
import BookId from "./BookId";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Page />} />
        <Route path="/books/:id" element={<BookId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;