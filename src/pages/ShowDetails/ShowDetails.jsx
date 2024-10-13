import { Helmet } from "react-helmet";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData, useParams } from "react-router-dom";


function ShowDetails() {
    const doctors = useLoaderData();
    const { id } = useParams();
    const doctor = doctors.find(doctor=>doctor.id === id);
    const { doctor_Image, doctor_name, price, facilities, short_title, description, Status, Area,location } = doctor;
  return (
      <div>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Show Details</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <div className="w-[60%] mx-auto border my-5">
              <img className="bg-base-200 mb-4 w-full" src={doctor_Image} />
              <div className="p-5">
                  <h2 className="md:text-2xl text-xl font-semibold ">{doctor_name}</h2>
                  <h3 className="font-semibold text-sm md:text-xl py-1">Price : {price}</h3>
                  <p className="font-semibold py-1">Status:
                      <span > {Status}</span>
                  </p>
                  <p className="font-semibold py-1 text-sm">Title:
                      <span className="text-gray-500 font-normal"> {short_title}</span>
                  </p>
                  <p className="font-semibold py-1 text-sm">Description:
                    <span className="text-gray-500 font-normal"> {description}</span>
                  </p>
                  <p>
                      <span
                          className="font-semibold flex items-center gap-2">Facilities
                          <IoIosArrowDown
                        className="font-semibold mt-1" /></span>
                      {
                          facilities.map(facilitie => <li className="text-gray-500">{facilitie}</li>)
                      }
                  </p>
                  <p className="flex items-center justify-between font-semibold pt-2">
                      <span>Area :
                          <span> {Area}</span>
                      </span> 
                      <span className="flex items-center gap-1">
                          <FaLocationDot />Locataion :
                          <span> {location}</span>
                      </span>
                  </p>             
              </div>      
          </div>   
    </div>
  )
}

export default ShowDetails
