// normalize.css 不带反斜杠，优先从src取，否则从node_modules
import 'normalize.css';
import './style.scss';
// import styles from './style.module.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        low code
      </header>
    </div>
  );
}

export default App;
