import Card from "./card";
import React from "react";
import { useEffect, useState } from "react";




const Home = () => {
    const [pokemons, setPokemons] = useState([]);


    const getData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1008')
          .then(response => response.json())
          .then(data => {
            const characterUrls = data.results.map(result => result.url);
      
            const characterPromises = characterUrls.map(url => fetch(url));
            Promise.all(characterPromises)
              .then(characterResponses => Promise.all(
                characterResponses.map(response => response.json())
              ))
              .then(characterData => {
                characterData = characterData.map(data => {
                  const types = data.types.map(type => capitalizeType(type.type.name));
                  return { ...data, types };
                });
                setPokemons(characterData);
              })
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      };
      
      const formatId = (id) => {
    
        return id.toString().padStart(3, "0");
      };
      const capitalizeName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
      };
      const capitalizeType = (type) => {
        return type.charAt(0).toUpperCase() + type.slice(1);
      };


    useEffect(() => {
        getData();
    })

    return (
        <div className="carta d-flex justify-content-center">
            <div className="row">   
            {pokemons.map((pokemon) =>
             <div className="col-2 m-4">
                <Card
                    name={pokemon.name}
                    img ={pokemon.sprites.other["official-artwork"].front_default}
                    life ={pokemon.base_experience}
                    attack ={pokemon.stats["0"].base_stat}
                />
                </div>
            )}
            </div>
    
        </div>
    )
} 

export default Home;