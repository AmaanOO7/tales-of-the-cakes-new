import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
      className="fixed bottom-6 right-6 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition">
      ↑
    </button>
  )
}
