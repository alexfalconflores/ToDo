import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/index.jsx';

const body = document.querySelector('body');
body.style.background = '#2b2b2b'
body.style.height = '97vh';
body.style.color = '#f5f5f5';

function App(props) {
    return (
        <h1>{props.saludo}, {props.nombre}</h1>
    );
}

function withSaludo(saludo) {
    return function WrappedComponentWithSaludo(WrappedComponent) {
        return function ComponenteDeVerdad(props) {
            return (
                <React.Fragment>
                    <WrappedComponent {...props} saludo={saludo} />
                    <h1>Hola, soy el WrappedComponent</h1>
                </React.Fragment>
            )
        }
    }
}

const AppWithSaludo = withSaludo('Hello')(App);

ReactDOM.render(
    <AppWithSaludo nombre="Juanito" />,
    // <App saludo="Buenas" nombre="Alex" />,
    document.getElementById('root')
);