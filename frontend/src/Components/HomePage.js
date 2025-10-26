import React,{useState,useEffect}from 'react';
import '../App.css';

function HomePage() {
const [searchTerm, setSearchTerm] = useState('');
const [countries, setCountries] = useState([]);
const [filteredCountries, setFilteredCountries] = useState([]);

const handleSearch = (event) => {
    event.preventDefault();
    const filtered = countries.filter(country =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
}

useEffect(() => {
  fetch("http://localhost:5001/api/countries")
    .then((res) => res.json())
    .then((data) => {
      setCountries(data);
      setFilteredCountries([]);// initialize filtered list
    })
    .catch((err) => console.error("Error fetching countries:", err));
}, []);


 return(
  <div className="HomePage">
   <h1 className="HomePage-header">
        Country Search
   </h1>
   <form className="search-bar" onSubmit={handleSearch}>
        <input 
            type="text" 
            placeholder="Search for a country..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button type="submit" >Search</button>
   </form>
   <ul className="country-list">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <li key={index}>{country}</li>
          ))
        ) : (
          <li>No countries found.</li>
        )}
      </ul>
   </div>
 );
}
export default HomePage;