import { Routes, Route } from "react-router-dom"
import Homepage from "../../Pages/Homepage"
import Cuaca from "../../Pages/Cuaca"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/homepage" element={<Homepage/>}></Route>
            <Route path="/cuaca" element={<Cuaca/>}></Route>
        </Routes>
    );
}

export default AppRoutes