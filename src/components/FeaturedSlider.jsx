import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

const featuredCakes = [
  { id:1, name:'Chocolate Delight', img:'https://images.unsplash.com/photo-1612197520144-4a23d3b09390?auto=format&fit=crop&w=800&q=60' },
  { id:2, name:'Vanilla Blossom', img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60' },
  { id:3, name:'Berry Bliss', img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=60' }
]

export default function FeaturedSlider(){ 
  return (
    <div className="mt-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-700 mb-4 text-center">Featured Cakes</h2>
      <Swiper modules={[Navigation]} navigation spaceBetween={20} slidesPerView={1} breakpoints={{640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}}>
        {featuredCakes.map(cake => (
          <SwiperSlide key={cake.id}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
              <img src={cake.img} alt={cake.name} className="w-full h-56 object-cover" />
              <h3 className="text-xl font-semibold text-pink-700 mt-2 p-2">{cake.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
