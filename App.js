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

const Title=()=>(<div className="title">
    <h1>Heading</h1>
</div>)
const Funcomponent=()=>{
    return(
        <div className="container">
            {header}
            {jsxhead}
            <Title/>
    <h1>Bhuvana Boston</h1>
</div>
    );
}
root.render(<Funcomponent/>);