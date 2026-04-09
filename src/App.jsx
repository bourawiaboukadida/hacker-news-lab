import './App.css';

const stories = [
  {
    title: 'React',
    url: 'https://react.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Vite',
    url: 'https://vite.dev/',
    author: 'Evan You',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function List() {
  return (
    <>
      {stories.map((item) => (
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span> {item.author} </span>
          <span> {item.num_comments} </span>
          <span> {item.points} </span>
        </div>
      ))}
    </>
  );
}
function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}
function Header() {
  return <h1>Hacker News</h1>;
}
function App() {
  return (
    <div>
      <h1>Hacker News</h1>
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;