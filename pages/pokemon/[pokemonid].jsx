import Image from "next/image";

export const getStaticPaths = async () => {
    const maxDataPoken = 50
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${apiUrl}/?limit=${maxDataPoken}`) // limit data from url
    const data = await res.json() // tranform res in json

    //params
    const paths = data.results.map((pokemon, index) => {
        return {
            params: {
                pokemonid: (index + 1).toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonid

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return {
        props: {
            pokemon: data
        },
    }
}

export default function PokemonID({ pokemon }) {
    return (
        <>
            <div className="h-screen ">
                <div className="flex flex-cols space-y-2 justify-center">
                    <div className="max-w-sm bg-white text-white rounded-lg shadow-md dark:bg-gray-700">
                    <h1 className="flex justify-center">{pokemon.name}</h1>
                    <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width="200" height="200" alt={pokemon.name} />
                    </div>

                </div>


            </div>
        </>
    )
}