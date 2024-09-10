// src/components/DogDetail.js
import { useParams } from 'react-router-dom';
import { dogs } from '../data';

const DogDetail = () => {
  const { perroId } = useParams();
  const dog = dogs.find((d) => d.id === parseInt(perroId));

  if (!dog) {
    return <h2>Perro no encontrado</h2>;
  }

  return (
    <div className='card-container'>
      <div className='card' key={dog.id}>
        <h2>{dog.name}</h2>
        <p>Raza: {dog.breed}</p>
        <p>Peso: {dog.weight}</p>
      </div>
    </div>
  );
};

export default DogDetail;
