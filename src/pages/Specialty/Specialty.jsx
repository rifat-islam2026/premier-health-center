import speciality1 from '../../assets/speciality1.png'
import speciality2 from '../../assets/speciality2.png'
import speciality3 from '../../assets/speciality3.png'
import speciality4 from '../../assets/speciality4.png'
import speciality5 from '../../assets/speciality5.png'
import speciality6 from '../../assets/speciality6.png'

function Specialty() {
  return (
    <div className="py-10 text-center text-gray-500">
      <h1 className="text-3xl font-bold text-black">Find by Speciality </h1>
      <p className="sm:w-1/3 text-center text-sm mx-auto mt-2">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        <div className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img className='mb-2 w-16 sm:w-24' src={speciality1} />
          <p>General physician</p>
        </div>
        <div className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img className='mb-2 w-16 sm:w-24' src={speciality2} />
          <p>Gynecologist</p>
        </div>
        <div className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img className='mb-2 w-16 sm:w-24' src={speciality3} />
          <p>Dermatologist</p>
        </div>
        <div className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img className='mb-2 w-16 sm:w-24' src={speciality4} />
          <p>Pediatricians</p>
        </div>
        <div className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img className='mb-2 w-16 sm:w-24' src={speciality5} />
          <p>Neurologist</p>
        </div>
        <div className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img className='mb-2 w-16 sm:w-24' src={speciality6} />
          <p>Gastroenterologist</p>
        </div>
      </div>
    </div>
  )
}

export default Specialty
