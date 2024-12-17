import React from "react";
import NavBar from "../components/nav";

const machine = () => {
    return(
        <>
            <NavBar />
            <div className="bg-gray">
                <div>
                    <div>
                        <img src="/SAMP/vcs.png" alt="" />
                    </div>
                    <div>
                        <h1>Vertical Continuous Sealer</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default machine;