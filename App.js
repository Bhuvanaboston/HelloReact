import React from 'react';
import ReactDOM from 'react-dom/client';

const assignment3ce = React.createElement('div', { className: 'title' }, [
  React.createElement('h1', {}, 'Hello'),
  React.createElement('h2', {}, 'Bhuvana'),
  React.createElement('h3', {}, 'Boston'),
]);

const assignment3jsx = (
  <div className="title">
    <h1>Hello</h1>
    <h2>Bhuvana</h2>
    <h3>Boston</h3>
  </div>
);

const Assignment3fc = () => {
  return (
    <div className="title">
      <h1>Hello</h1>
      <h2>Bhuvana</h2>
      <h3>Boston</h3>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
/*const jsxhead = (<>
<h1>Helloo</h1>
<div className="container">
    <h2>Bhuvana Boston</h2>
</div>`
</>);*/

/*const Title=()=>(<div className="title">
    <h1>Heading</h1>
</div>)*/
/*const Funcomponent=()=>{
    return(
        <div className="container">
            {header}
            {jsxhead}
            <Title/>
    <h1>Bhuvana Boston</h1>
</div>
    );
}*/
root.render(<Assignment3fc />);
