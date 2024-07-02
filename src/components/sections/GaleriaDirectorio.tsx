import React, { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
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

  /**
   * Handles the change event of the search input field.
   * Updates the search query state with the lowercase value of the input.
   *
   * @param event - The change event object.
   */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const fuseOptions = {
    includeScore: true,
    threshold: 0.5,
    // Ajusta las keys según las propiedades de tus objetos Store
    keys: ['title'],
  };

  const fuse = useMemo(() => new Fuse(stores, fuseOptions), [stores]);

  /**
   * Returns the filtered stores based on the search query and selected category.
   * If no search query is provided and the selected category is 'Todos', it returns all stores.
   * Otherwise, it performs a search using Fuse.js library and filters the results based on the selected category.
   *
   * @param {string} searchQuery - The search query entered by the user.
   * @param {string} selectedCategory - The selected category to filter the stores.
   * @param {Array<Store>} stores - The array of all stores.
   * @param {Fuse} fuse - The Fuse.js instance used for searching.
   * @returns {Array<Store>} - The filtered stores based on the search query and selected category.
   */
  const filteredStores = useMemo(() => {
    if (!searchQuery && selectedCategory === 'Todos') {
      return stores;
    }

    /**
     * Searches for stores based on the search query or returns all stores if no query is provided.
     * @returns An array of search results, where each result contains an item property representing a store.
     */
    const searchResults = searchQuery
      ? fuse.search(searchQuery)
      : stores.map((store) => ({ item: store }));

    return searchResults
      .map((result) => result.item)
      .filter(
        (store) =>
          selectedCategory === 'Todos' || store.categoria === selectedCategory
      );
  }, [searchQuery, selectedCategory, stores, fuse]);

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
