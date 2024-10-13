import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function Doctor({ doctor }) {
    const { doctor_Image, doctor_name, id, price,  facilities  } = doctor;
    return (
        <div className="shadow-md hover:translate-y-[-10px] transition-all duration-500 rounded">
            <img className="bg-base-200 mb-4" src={doctor_Image} />
            <div className="p-5">
                <h2 className="md:text-2xl text-xl font-semibold ">{doctor_name}</h2>
                <h3 className="font-semibold text-sm md:text-xl py-1">Price : {price}</h3>
                <p><span className="font-semibold flex items-center gap-2">Facilities <IoIosArrowDown className="font-semibold mt-1" /></span>
                    {
                        facilities.map(facilitie => <li className="text-gray-500">{facilitie}</li>)
                    }
                </p> 
            </div>
            <button className="btn w-full rounded-none bg-orange-500 hover:bg-success">
                <Link to={id}>Show details</Link>
            </button>
    </div>
  )
}

export default Doctor
