import logo from './logo.svg';
import './App.css';

function App() {
  const name = "윤예림";
  const email = "yerim629";
  const age = 25;

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> 아주대학교
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>
        <h3>본인 소개 페이지</h3>
      </header>
      <main>
        <div>
          <ul>
            <li>이름: <span>{name}</span></li>
            <li>이메일: <span>{email}</span></li>
            <li>나이: <span>{age}</span></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
