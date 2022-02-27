import Image from "next/image"
import Link from "next/link"


export default function Card({ pokemon }) { // get props
    return(
        <>
            <div className="max-w-sm bg-gray-800 text-white rounded-lg 
            border-gray-200 shadow-md dark:bg-gray-700 dark:border-yellow-400 border-2 space-y-2 p-2 m-2">
                <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width="120" height="120" alt={pokemon.name} />
                <p>{pokemon.id}</p>
                <h3>{pokemon.name}</h3>

                <Link href={`/pokemon/${pokemon.id}`}>
                    <p className="hover:bg-red-400 delay-75 p-1 rounded-sm cursor-pointer text-white">More info</p>
                </Link>
            </div>
        </>
    )
}