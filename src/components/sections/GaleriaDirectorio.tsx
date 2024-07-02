import React, { useState } from 'react';
import DirectorioItem from '@components/common/DirectorioItem';
import type { Store } from 'src/data/stores';

const CATEGORY_COLORS = {
  Restaurantes: 'bg-red-500',
  Ropa: 'bg-blue-500',
  Electronicos: 'bg-green-500',
  Salud: 'bg-yellow-500',
  Entretenimiento: 'bg-purple-500',
  Otros: 'bg-gray-500',
};

interface Props {
  className: string;
  stores: Store[];
}

const GaleriaDirectorio: React.FC<Props> = ({ className, stores }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredStores = stores.filter(
    (store) =>
      (selectedCategory === 'Todos' || store.categoria === selectedCategory) &&
      store.title.toLowerCase().includes(searchQuery)
  );

  return (
    <section className={className}>
      <div className='container'>
        <div className='mb-4'>
          <input
            type='text'
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder='Buscar por nombre...'
            className='p-2 border rounded mb-4'
          />
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className='p-2 border rounded'
          >
            <option value='Todos'>Todos</option>
            {Object.keys(CATEGORY_COLORS).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div
          className='grid grid-cols-2 gap-px
                     md:grid-cols-3
                     lg:grid-cols-4
                     xl:grid-cols-5'
        >
          {filteredStores.map((store) => (
            <DirectorioItem
              color={CATEGORY_COLORS[store.categoria] || 'bg-gray-500'}
              {...store}
              key={store.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaDirectorio;
