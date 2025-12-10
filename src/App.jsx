import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routers from "./routers/routers";
import SideBar from "./components/Sidebar/Sidebar";
import { SideBarProvider } from "./contexts/SideBar";
function App() {
  return (
    <>
   <SideBarProvider>
     <SideBar/>
    <BrowserRouter>
      <Routes>
        {routers.map((item, index) => {
          return (
            <Route key={index} path={item.path} element={<item.Component />} />
          );
        })}
      </Routes>
    </BrowserRouter>
   </SideBarProvider>
    </>
  );
}

export default App;
