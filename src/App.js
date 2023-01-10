import './App.css';
import RenderUsersAsOptionsList from "./UserInfo/userinfo";

function App(props) {
  return ([
      <h1>User Information</h1>,
      <form>
                <RenderUsersAsOptionsList></RenderUsersAsOptionsList>
      </form>

  ]);
}

export default App;
