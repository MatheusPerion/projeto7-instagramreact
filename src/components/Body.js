import Stories from "./Stories.js";
import Posts from "./Posts"
import SideBar from "./SideBar"
export default function Body() {
    return (
        <div className="Body">
            <div className="left">
                <Stories/>
                <Posts/>
            </div>
            <SideBar></SideBar>
        </div>
    )
}