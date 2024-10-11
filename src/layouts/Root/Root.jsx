import { Outlet } from "react-router-dom"
import Footer from "../../pages/Footer/Footer"
import Header from "../../pages/Header/Header"

function Root() {
    return (
        <div className="font-poppins">
            <Header />
            <div className="max-w-6xl mx-auto"><Outlet /></div>
            <Footer />
        </div>
    )
}

export default Root
