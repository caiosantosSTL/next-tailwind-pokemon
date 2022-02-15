import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'
import styles from '../styles/Home.module.css'

export async function getStaticProps(params) {
  const maxDataPoken = 50
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${apiUrl}/?limit=${maxDataPoken}`) // limit data from url
  const data = await res.json() // tranform res in json

  //show all
  data.results.forEach((item, index) => {
    item.id = index + 1 // the api data begin from 1
  })

  return {
    props: {
      pokemons: data.results,
    }
  }

}

export default function Home({ pokemons }) {
  return (
    <div>

      {/* get all data */}

      <div className='flex flex-cols flex-wrap justify-center'>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>



    </div>
  )
}
