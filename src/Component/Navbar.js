import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState('VND')

  const toggleCurrency = () => setIsCurrencyOpen(!isCurrencyOpen)

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency)
    setIsCurrencyOpen(false)
  }

  return (
    <nav className="bg-yellow-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-blue-900">Monito</h1>
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-blue-900 hover:text-blue-700">Home</a></li>
              <li><a href="#" className="text-blue-900 hover:text-blue-700">Category</a></li>
              <li><a href="#" className="text-blue-900 hover:text-blue-700">About</a></li>
              <li><a href="#" className="text-blue-900 hover:text-blue-700">Contact</a></li>
            </ul>
            <div className="flex space-x-2">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search something here"
                  className="pl-10 pr-4 py-2 w-full border rounded-full"
                />
              </div>
              <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Join the community
              </button>
              <div className="relative">
                <button
                  onClick={toggleCurrency}
                  className="bg-yellow-100 text-blue-900 px-4 py-2 rounded-full hover:bg-yellow-200 flex items-center border border-black"
                >
                  {selectedCurrency}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isCurrencyOpen && (
                  <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <button
                        onClick={() => selectCurrency('VND')}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                      >
                        VND
                      </button>
                      <button
                        onClick={() => selectCurrency('USDT')}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                      >
                        USDT
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            className="md:hidden bg-transparent border-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><a href="#" className="text-blue-900 hover:text-blue-700 block py-2">Home</a></li>
              <li><a href="#" className="text-blue-900 hover:text-blue-700 block py-2">Category</a></li>
              <li><a href="#" className="text-blue-900 hover:text-blue-700 block py-2">About</a></li>
              <li><a href="#" className="text-blue-900 hover:text-blue-700 block py-2">Contact</a></li>
            </ul>
            <div className="mt-4 space-y-2">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search something here"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                />
              </div>
              <button className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Join the community
              </button>
              <button
                onClick={toggleCurrency}
                className="w-full bg-yellow-100 text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-200 flex items-center justify-center border border-black"
              >
                {selectedCurrency}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCurrencyOpen && (
                <div className="mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => selectCurrency('VND')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      VND
                    </button>
                    <button
                      onClick={() => selectCurrency('USDT')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      USDT
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}