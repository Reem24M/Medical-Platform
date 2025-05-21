// import image6 from '../../../assets/image6.svg';
import Star from '../../../assets/Star1.svg'
import '../../../index.css'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#e5f0f0] overflow-hidden">
      {/* SVG background as an image */}
      <img
        src={Star}
        alt="star background"
        className="absolute top-0 left-0 w-[500px] h-[500px] z-0 "
      />

  
    </div>
  )
}
