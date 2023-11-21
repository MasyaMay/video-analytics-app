import "./App.css";
import VideoPlayerContainer from "./containers/VideoPlayerContainer";
import EventListContainer from "./containers/EventListContainer";

function App() {
  return (
    <div className="container">
      <VideoPlayerContainer />
      <EventListContainer />
    </div>
  );
}

export default App;
