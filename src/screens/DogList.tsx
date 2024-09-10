// src/components/DogList.js

import { Link } from 'react-router-dom';
import { dogs } from '../data';
import './DogList.css'; // Opcional, para estilos

const DogList = () => {
  return (
    <div className='dog-list'>
      <h1>Lista de Perros</h1>
      <div className='card-container'>
        {dogs.map((dog) => (
          <div className='card' key={dog.id}>
            <h2>{dog.name}</h2>
            <p>Raza: {dog.breed}</p>
            <p>Peso: {dog.weight}</p>
            <Link to={`/dogs/${dog.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;
