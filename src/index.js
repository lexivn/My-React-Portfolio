import ReactDom from 'react-dom/client';
import App from './App';
import '../src/index.css';

const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(<App/>)