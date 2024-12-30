export default function Header( ){
    return(
        <header className="py-6  fixed top-0 left-0 w-full shadow-lg z-20 bg-gradient-to-r bg-white ">
          <div className="container mx-auto flex justify-between items-center px-6">
            {/* Website Title */}
            <h1 className="text-2xl font-bold  text-indigo-900">A<span className="text-purple-900">I</span></h1>
  
            {/* Navigation Links */}
            <nav className="space-x-6">
              <a
                href="/"
                className="text-black hover:text-violet-800 transition duration-200"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-black hover:text-violet-800 transition duration-200"
              >
                About
              </a>
              {/* <Link href={"/contact"}> */}
              <a
                href="/contact"
                className="text-black hover:text-violet-800 transition duration-200"
              >
                Contact
              </a>
              {/* </Link> */}
            </nav>
          </div>
        </header>
    )
}