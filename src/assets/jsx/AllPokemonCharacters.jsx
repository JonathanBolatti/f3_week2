
import pokemonData from "../../assets/static/pokemons.json"
import DescriptionPokemon from "./DescriptionPokemon";

function AllPokemonCharacters() {
    const tipos = Object.keys(pokemonData);

    return (
        <>
            <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>Personajes Pokemon</h1>
            {tipos.map((tipo) => (
                <div
                    key={tipo}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "50px",
                        justifyContent: "center",
                        marginBottom: "50px",
                    }}
                >
                    {pokemonData[tipo].map((pokemon) => (
                        <DescriptionPokemon key={pokemon.id} {...pokemon} type={tipo} />
                    ))}
                </div>
            ))}
        </>
    );
}

export default AllPokemonCharacters;