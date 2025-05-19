 
import { BrowserRouter } from "react-router-dom"
import RoutingComponent from "./router/RoutingComponent"
import StudentForm from "./student/StudentForm"
import TestPage from "./student/StudentTestPage"
import StudentResultPage from "./student/StudentResultPage"
import InstructionsPage from "./student/StudentInstruction"

 
function App() {
 
  return (
    <>
 
 {/* <StudentResultPage /> */}

   <BrowserRouter>
  
  <RoutingComponent />
  </BrowserRouter>    

  {/* <InstructionsPage /> */}

{/* <TestPage /> */}

  {/* <Stud/entForm /> */}
      </>
  )
}

export default App
