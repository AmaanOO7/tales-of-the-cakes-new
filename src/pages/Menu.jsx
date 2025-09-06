const cakes = [
  { id:1, name:'Vanilla Story Cake', price:'₹1,200', desc:'Light sponge, vanilla buttercream, edible flowers', img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60' },
  { id:2, name:'Chocolate Chronicle', price:'₹1,500', desc:'Rich chocolate sponge, ganache, fresh berries', img:'https://images.unsplash.com/photo-1612197520144-4a23d3b09390?auto=format&fit=crop&w=800&q=60' },
  { id:3, name:'Berry Bliss Cake', price:'₹1,400', desc:'Vanilla sponge with mixed berry compote and cream', img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=60' }
]

export default function Menu(){
  return (
    <div className="text-center mt-6 px-4">
      <h1 className="text-3xl font-bold text-pink-700 mb-6 animate-fadeIn">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cakes.map((cake, i) => (
          <div key={cake.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl animate-fadeIn" style={{animationDelay: `${i*0.15}s`}}>
            <img src={cake.img} alt={cake.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-pink-700">{cake.name}</h2>
              <p className="text-gray-600 mt-2">{cake.desc}</p>
              <p className="text-pink-600 font-bold mt-2">{cake.price}</p>
              <button className="mt-4 w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transform hover:scale-105 transition duration-200">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
