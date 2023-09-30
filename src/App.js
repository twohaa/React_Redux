import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";
// import Counter from './components/Counter';
// import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>React-Redux</h1>
      {/* <br/>
      <Counter />
      <br/>
      <Todos />
      <br/> */}
      <CounterView />
      <br/>
      <PostsView />
    </div>
  );
}

export default App;
