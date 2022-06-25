import { Header } from "./components/Header"
import { SectionFour } from "./components/SectionFour"
import { SectionOne } from "./components/SectionOne"
import { SectionTree } from "./components/SectionTree"
import { SectionTwo } from "./components/SectionTwo"

function App(){
  return(
    <div>
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <SectionTree/>
      <SectionFour/>
    </div>
  )
}

export default App