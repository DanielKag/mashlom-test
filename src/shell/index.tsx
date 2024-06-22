import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Shell() {
    return (
        <>
            <Header />
            <div id="detail">
              <Outlet />
            </div>
           <Footer />
        </>
    )
  }