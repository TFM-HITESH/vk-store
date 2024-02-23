import Link from 'next/link'

import MainNav from '@/components/main-nav'
import Container from '@/components/ui/container'
import NavbarActions from '@/components/navbar-actions'
import getCategories from '@/actions/get-categories'

const Navbar = async () => {
    const categories = await getCategories()

    return (
        <div className="border-b py-4">
        <Container>
            <header className="flex flex-col sm:flex-row items-center justify-between">
                
                <div className="flex items-center"> {/* Add a container for the logo and text */}
                        <img src="/vicuna_logo.jpg" alt="Logo" className="w-24 h-24 mr-2" /> {/* Adjust the path and size of the logo */}
                        <Link href="/" className="text-purple-900 font-bold text-3xl mb-2 sm:mb-0">
                            VICUNA KOUTURE
                        </Link>
                    </div>
                
                <nav className="flex flex-col sm:flex-row items-center gap-4 text-black-500 font-semibold">
                    {/* <Link href="" className="hover:underline hover:text-purple-900 transition duration-300 ease-in-out mb-2 sm:mb-0">
                        Home
                    </Link>
                    <Link href="" className="hover:underline hover:text-purple-900 transition duration-300 ease-in-out mb-2 sm:mb-0">
                        Features
                    </Link>
                    <Link href="" className="hover:underline hover:text-purple-900 transition duration-300 ease-in-out mb-2 sm:mb-0">
                        Contact
                    </Link>
                    <Link
                        className="transition-all duration-300 transform hover:scale-110 bg-purple-900 rounded-full text-white px-6 py-2 hover:underline mb-2 sm:mb-0"
                        href="/design-shop"
                    >
                        Design/Shop
                    </Link>
                    <Link
                        className="transition-all duration-300 transform hover:scale-110 bg-purple-900 rounded-full text-white px-6 py-2 hover:underline mb-2 sm:mb-0"
                        href="/login"
                    >
                        Login
                    </Link> */}
                    <div className="transition-all duration-300 transform hover:scale-110 bg-purple-900 rounded-full text-white px-6 py-2 hover:underline mb-2 sm:mb-0">
                    <MainNav data={categories}  />
                    </div>
                    
                <NavbarActions />
                </nav>
            </header>
           
        </Container>
    </div>
    )
}

export default Navbar