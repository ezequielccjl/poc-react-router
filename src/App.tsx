import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DogDetail from './screens/DogDetail';
import DogList from './screens/DogList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DogList />} />
        <Route path='/dogs/:perroId' element={<DogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
