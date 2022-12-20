import React from 'react';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

const Home = () => {
  return (
    <main>
      <SearchForm/>
      <CocktailList/>
    </main>
  )
}

export default Home