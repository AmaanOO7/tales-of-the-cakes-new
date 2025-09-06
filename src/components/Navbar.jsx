import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to='/' className="text-2xl font-bold text-pink-600">Tales of the Cake</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-pink-600">Home</Link>
            <Link to="/menu" className="hover:text-pink-600">Menu</Link>
            <Link to="/about" className="hover:text-pink-600">About</Link>
            <Link to="/contact" className="hover:text-pink-600">Contact</Link>
          </div>
          <button className="md:hidden text-pink-600" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-pink-50 px-4 py-3 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link to="/menu" onClick={() => setOpen(false)} className="block">Menu</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block">About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
        </div>
      )}
    </nav>
  )
}
