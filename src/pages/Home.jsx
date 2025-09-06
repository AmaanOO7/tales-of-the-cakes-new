import FeaturedSlider from '../components/FeaturedSlider'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1604152135912-04a6c6f1df7a?auto=format&fit=crop&w=1200&q=80')", backgroundAttachment: 'fixed'}}>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 animate-fadeIn">Tales of the Cake 🎂</h1>
        <p className="text-lg sm:text-xl text-white mb-6 animate-fadeIn delay-200">Delicious cakes for your sweetest moments</p>
        <Link to="/menu"><button className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-600 transform hover:scale-105 transition animate-fadeIn delay-400">Explore Our Menu</button></Link>
      </div>

      <FeaturedSlider />
      <Testimonials />
    </div>
  )
}
