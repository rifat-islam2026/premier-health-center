import { Helmet } from "react-helmet"
import aboutImg from '../../assets/about.jpg'

function About() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-center text-3xl font-bold pt-10">ABOUT <span className="text-gray-500">US</span></h1>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px] md:p-0 px-10" src={aboutImg} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 md:p-0 px-10">
          <p className="text-sm">Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p className="text-sm">Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <h3 className="text-xl font-bold">Our Vision</h3>
          <p className="text-sm">Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold py-5">WHY <span className="text-gray-500">CHOOSE US</span></h1>
      <div className="flex flex-col md:flex-row mb-24 md:p-0 px-10">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 text-gray-600 cursor-pointer">
          <h2>EFFICIENCY:</h2>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 text-gray-600 cursor-pointer">
          <h2>CONVENIENCE:</h2>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 text-gray-600 cursor-pointer">
          <h2>PERSONALIZATION:</h2>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
      </div>
    </div>
  )
}

export default About
