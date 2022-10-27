import CharacterCard from "./components/CharacterCard";

import data from "./assets/data.json";

import "./styles.css";

function App() {

  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      {/*<h2>Your code here</h2>*/}

      <div className="container">
        {
          data.map( (index) =>{
            return <CharacterCard 
            name={index.name}
            status={index.status}
            image={index.image}
            species={index.species}
            gender={index.gender}
            location={index.location.name}
            url={index.location.url}
            firstIn={index.episode[0]}
            />
          })
        }
      </div>
    </div>
  );
}

export default App;