import Useroutput from "./Component/Useroutput"
import Userinput from "./Component/Userinput"
import "./App.css"

const App = () => {
  const output1 = "THE SKY IS YOUR LIMIT"
  const output2 = "WONDERFULL WORLD"
  const output3 = "BLUE SKIES"
  
  return (
    <div className="parent">
    {/* returing userinput */}
    <Userinput/>


      {/*returning useroutput  */}
     
    <Useroutput partOne={output1} />
    <Useroutput partTwo={output2} />
    <Useroutput part3={output3}/>
    
    </div>
  )
}

export default App



