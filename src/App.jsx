import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ViewNote from "./Pages/ViewNote";
import CreateNote from "./Pages/CreateNote";
import EditNote from "./Pages/EditNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/create"
          element={<CreateNote />}
        />
        <Route
          path="/:id"
          element={<ViewNote />}
        />
        <Route
          path="/:id/edit"
          element={<EditNote />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
