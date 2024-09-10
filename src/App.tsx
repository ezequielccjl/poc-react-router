import { Route, BrowserRouter, Routes } from 'react-router-dom';
import DogDetail from './screens/DogDetail';
import DogList from './screens/DogList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DogList />} />
        <Route path='/dogs/:perroId' element={<DogDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
