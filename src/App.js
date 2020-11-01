import PhotoCarousel from './components/patScreenStaff/photoCarousel';
import PetTile from './components/petTile';
import Login from './components/login';
import PhotoCarouselClient from "./components/patScreenClient/photoCarousel";


function App() {
  return (
    <div className="App">
        <PhotoCarousel/>
        <PetTile isStuff/>
        <Login/>
        <PhotoCarouselClient/>
    </div>
  );
}

export default App;
