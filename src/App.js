import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyMusic from "./components/MyMusic";
import About from "./components/About";
import MusicDetails from "./components/MusicDetails";

const music = [
  {
    id: 0,
    name: "Gods Plan",
    artist: "Drake",
    genre: "rap",
  },
  {
    id: 1,
    name: "Hello",
    artist: "Adele",
    genre: "soul",
  },
  {
    id: 2,
    name: "Teenage Fever",
    artist: "Drake",
    genre: "pop music",
  },
  {
    id: 3,
    name: "Work",
    artist: "Rihanna",
    genre: "hip pop",
  },
  {
    id: 4,
    name: "No Role Model",
    artist: "J Cole",
    genre: "rap",
  },
];

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about/" element={<About />}></Route>
        <Route path="/mymusic" element={<MyMusic music={music} />}></Route>
        <Route
          path="/mymusic/:id"
          element={<MusicDetails music={music} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
