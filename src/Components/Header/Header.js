import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { goToHomePage, goToPokedex } from '../../router/coordinates'
import Pokemon from "../../assets/images/pokemon.png"
import Pokedex from '../../assets/images/pokedex.svg'
import Excluir from "../../assets/images/excluir.svg"
import { Container, Image, Button, Button1, Button2 } from './HeaderStyle'
import { GlobalContext } from '../../contexts/GlobalContext'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const context = useContext(GlobalContext)
  const [pokemonDetails,setPokemonDetails] =useState({})
  const {addToPokedex, pokedex, removeFromPokedex} = context

  const getPokemon = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${params.pokemonName}`)
      setPokemonDetails(response)
      console.log(response)
    } catch (error) {
      console.log(error)

    }
  }
  useEffect(()=>{
    getPokemon()
    console.log(params)
  },[params])

  const threeHeaders = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Button onClick={() => goToPokedex(navigate)}><img src={Pokedex}></img></Button>
            <Image src={Pokemon}></Image>
          </>

        )
      case "/pokedex":
        return (
          <>
            <Button2 onClick={() => goToHomePage(navigate)}>Todos Pokémons</Button2>
            <Image src={Pokemon}></Image>
          </>

        )
      case `/details/${params.pokemonName}`:
        
            return (
              <>
                <Button2 onClick={() => goToHomePage(navigate)}>Todos Pokémons</Button2>
                <Image src={Pokemon}></Image>
                {pokedex.find((pokemon)=> pokemon.data?.name===params.pokemonName)?
                <Button onClick={()=> removeFromPokedex(pokemonDetails)}><img src={Excluir}></img></Button>:
                <Button1 onClick={()=> addToPokedex(pokemonDetails)}>Captura Pokemon</Button1>}
              </>
            )
      default:
        return (
          <Button onClick={() => goToHomePage(navigate)}>Página Inicial</Button>
        )
    }
  }

  return (

    <Container>
      {threeHeaders()}

    </Container>

  )
}

export default Header