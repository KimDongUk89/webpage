import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Screens/Main";
import Main2 from "./components/Screens/Main2";
import SideNav from "./components/UI/SideNav";

import Learner from "./components/Screens/Learner";
import Teacher from "./components/Screens/Teacher";
import Learner_rewrite from "./components/Screens/Learner_rewrite";
import Teacher_rewrite from "./components/Screens/Teacher_rewrite";
import Contract_rewrite from "./components/Screens/Contract_rewrite";
import Learner_create from "./components/Screens/Learner_create";
import Teacher_create from "./components/Screens/Teacher_create";
import Lecture_contract from "./components/Screens/Lecture_contract";
import Contract_create from "./components/Screens/Contract_create";


function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* //class="sb-sidenav-toggled" ==> 메뉴 집어넣음 */}

      <div id="layoutSidenav">
        <SideNav />

        <div id="layoutSidenav_content">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/main2" element={<Main2 />} />
            <Route path="/learner" element={<Learner />} />
            <Route path="/learner-rewrite/:id" element={<Learner_rewrite />} />
            <Route path="/teacher-rewrite/:id" element={<Teacher_rewrite />} />
            <Route path="/contract-rewrite/:teacher_code" element={<Contract_rewrite />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/learner-create" element={<Learner_create />} />
            <Route path="/teacher-create" element={<Teacher_create />} />
            <Route path="/contract-create" element={<Contract_create />} />
            <Route path="/lecture-contract" element={<Lecture_contract />} />

            {/* <Route path="*" element={<EmptyPage />} /> */}
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
