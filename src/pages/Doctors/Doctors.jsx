import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

function Doctors() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    },[])
  return (
    <div>
          <h1 className="text-3xl font-bold text-center pt-5">Top Doctors to Book
          </h1>
          <p className="sm:w-1/3 text-center text-sm pt-2 mb-3 mx-auto">Simply browse through our extensive list of trusted doctors.</p>
          <div className="grid grid-cols-2  md:grid-cols-3 gap-10 p-5">
              {
                  doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
              }
         </div>
    </div>
  )
}

export default Doctors
