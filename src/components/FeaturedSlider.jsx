import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const featuredCakes = [
  {
    id: 1,
    name: 'Vanilla Story Cake',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Chocolate Chronicle',
    img: 'https://images.unsplash.com/photo-1599785209707-df39cfb4b59d?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Strawberry Fable',
    img: 'https://images.unsplash.com/photo-1608198093002-ad4e0054849d?auto=format&fit=crop&w=800&q=60',
  },
]

export default function FeaturedSlider() {
  return (
    <div className="my-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Cakes</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {featuredCakes.map((cake) => (
          <SwiperSlide key={cake.id}>
            <div className="bg-white shadow-md rounded-2xl overflow-hidden">
              <img src={cake.img} alt={cake.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{cake.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
