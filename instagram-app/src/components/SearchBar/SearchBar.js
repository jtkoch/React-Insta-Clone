import React from 'react'
import IGLogo from '../../assets/ig_search_bar.png';
import './SearchBar.scss';

function SearchBar() {
  return (
    <div className="image-wrapper">
      <img src={IGLogo} className="ig-image" />
    </div>
  );
}

export default SearchBar;