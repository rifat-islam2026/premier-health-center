import { Helmet } from 'react-helmet';
import contactImg from '../../assets/contact.png';

function Contact() {
  return (
      <div>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Contact</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <div className="md:flex flex-row gap-5">
              <div className='md:p-0 p-10'>
                  <h1 className="text-2xl w-full font-extrabold md:pt-10 pt-0 mb-4">Looking for a
                      <span className='text-blue-500'> Certified Doctor?</span>
                  </h1>
                  <p className='mb-7'>We believe in providing the best possible care to all our existing patients and welcome new patients to sample.</p>
                  <form className='w-full'>
                      <input type="text" placeholder="Your Name*" className="input input-bordered w-full mb-3" />
                      <div className='flex gap-3'>
                          <input
                              type="phone"
                              placeholder="Phone"
                              className="input input-bordered input-md w-full max-w-xs" />
                          <input
                              type="email"
                              placeholder="Your Email*"
                              className="input input-bordered input-md w-full max-w-xs" />
                      </div>
                      <textarea
                          placeholder="Message"
                          className="textarea textarea-bordered textarea-lg w-full my-3"></textarea>
                      <span className='flex items-center gap-3 mb-5'>
                          <input type="checkbox" name="terms" className='form-checkbox h-4 w-4 scale-110' />
                          <p>Sign me up to the email list</p>
                     </span>
                      <div className='flex justify-center mb-10'>
                          <button 
                              type='submit'
                              className='btn rounded-full bg-sky-400 hover:bg-sky-300 text-white px-10'>
                              Send request
                          </button>
                        </div>
                  </form>
              </div>
              <img src={ contactImg} className='md:w-[60%] mx-auto' />
          </div>
    </div>
  )
}

export default Contact
