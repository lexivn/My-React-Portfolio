import ReactDom from 'react-dom/client';
import App from './App';
// Integreting Ract-Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
// Importing the Sass file to customize the Bootstrap
// import '../src/index.scss';

const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(<App/>)