import React from "react";
import ReactDOM from "react-dom/client";

const header=React.createElement("h1",{},"Bhuvana Boston");
const root=ReactDOM.createRoot(document.getElementById("root"));
const jsxhead = (<>
<h1>Helloo</h1>
<div className="container">
    <h2>Bhuvana Boston</h2>
</div>
</>);
root.render(jsxhead);