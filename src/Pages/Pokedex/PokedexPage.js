import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { Container, Selection } from "./PokedexPageStyle";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function PokedexPage() {
  const context = useContext(GlobalContext);
  const { pokedex, removeFromPokedex } = context;

  return (
    <>
      <Header />
      <Container>

        <Selection>
          <div>Meus Pokémons</div>
        </Selection>

        {/* <Flex gap={"16px"} justifyContent={"center"} wrap={"wrap"} > */}
        <div className="card-list">
          {pokedex.map((pokemon) => (
            <PokemonCard
              key={pokemon.data?.name}
              url={`${BASE_URL}/${pokemon.data?.name}`}
              removeFromPokedex={removeFromPokedex}
            />
          ))}
        </div>
        {/* </Flex> */}
      </Container>
    </>
  );
}

export default PokedexPage;
