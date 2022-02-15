import Link from "next/link"

export default function Footer(params) {
    return (
        <>

            <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" className="hover:underline" target="_blank">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
                    <li>
                        <Link href={'/about'}>
                            <a className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
                        </Link>

                    </li>
                </ul>
            </footer>

        </>
    )
}