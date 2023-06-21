import "./Component CSS/Page3.css"
import Page3_1 from "./Sub Component/Page3_1"
import Page3_2 from "./Sub Component/Page3_2"
import Page3_3 from "./Sub Component/Page3_3"
function Page3() {
  return (
    <div className="slide-page3">
        <Page3_1/>
        <Page3_2/>
        <Page3_3/>
    </div>
  )
}

export default Page3