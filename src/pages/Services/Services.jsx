import { Helmet } from "react-helmet"
import { CiMedicalCross } from "react-icons/ci"
import { FaBriefcaseMedical, FaCodeBranch, FaFolderPlus, FaLungs, FaUserNurse } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { GiNurseFemale } from "react-icons/gi"
import { MdBloodtype } from "react-icons/md"

function Services() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-3/6 mx-auto py-10 my-10 hover:shadow-2xl transition-all duration-200 ">
        <span className="text-7xl flex justify-center text-blue-300">
          <FaBriefcaseMedical />
        </span>
        <h1 className="md:text-4xl text-2xl font-bold uppercase text-center">Awesome Services</h1>
        <p className="text-center py-1 text-gray-500">Medicinal Service Company puts stock in conveying the most elevated quality administration with quality and sympathy every day.</p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7 py-10 md:px-0 px-10">
        <span className="flex flex-col gap-3 items-center text-7xl p-8 bg-blue-500 text-white cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <GiNurseFemale />
          <h1 className="text-xl font-bold">24/7 Service</h1>
        </span>
        <span className="flex flex-col gap-3 items-center text-7xl p-8 bg-blue-500 text-white cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <FaCodeBranch />
          <h1 className="text-xl font-bold">Cancer Clinic</h1>
        </span>
        <span className="flex flex-col gap-3 items-center text-7xl p-8 bg-blue-500 text-white cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <MdBloodtype />
          <h1 className="text-xl font-bold">Blood Test</h1>
        </span>
        <span className="flex flex-col gap-3 items-center text-7xl p-8 bg-blue-500 text-white cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <FaFolderPlus />
          <h1 className="text-xl font-bold">Medical counselling</h1>
        </span>
        <span className="flex flex-col gap-3 items-center text-7xl p-8 bg-blue-500 text-white cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <CiMedicalCross className="bg-white p-2 rounded-full text-blue-500" />
          <h1 className="text-xl font-bold">Rehabilitatione</h1>
        </span>
        <span className="flex flex-col gap-3 items-center text-7xl p-8 bg-blue-500 text-white cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <FaUserDoctor />
          <h1 className="text-xl font-bold">Qualified Doctors</h1>
        </span>
        <span className="flex flex-col gap-3 items-center text-7xl p-8 bg-blue-500 text-white cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <FaLungs/>
          <h1 className="text-xl font-bold">Heart Institute</h1>
        </span>
        <span className="flex flex-col gap-3 items-center text-7xl py-8 bg-blue-500 text-white cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <FaUserNurse/>
          <h1 className="text-xl font-bold">Medicine Facilities</h1>
        </span>
      </div>
    </div>
  )
}

export default Services
