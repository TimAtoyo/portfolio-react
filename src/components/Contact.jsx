import React from 'react';
import './Contact.css'
import {useEffect, useState} from "react";

export default function Contact() {
  
  const initForm =  {
    name: '',
    email: '',
    message: '',
  }

  // Use state
  const [formData, setFormData] = useState(initForm)
  
// Handle change 
     const handleChange = e => {
    const { name, value } = e.target
    setFormData({
        ...formData, 
        [name]: value
    })
}

const [errors, setErrors] = useState({})
const validate = (formData) => {
    let formErrors = {}
    if(!formData.name){
        formErrors.name = "Name required"
    }
    if(!formData.email){
        formErrors.email = "Email required"
    } 
    if(!formData.message){
        formErrors.message = "Message is required"
    }
    return formErrors
}

const [isSubmitted, setIsSubmitted] = useState(false)

const handleSubmit = e => {
    setErrors(validate(formData))
    setIsSubmitted(true)
    e.preventDefault();

}
    const encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    }

  useEffect(() => {
      if(Object.keys(errors).length === 0 && isSubmitted){

          fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "portfolio-contact", ...formData })
          })
          .then(() => alert("Success!"))
          .then(() => setIsSubmitted(false))
          .then(() => setFormData({name: "", email: "",  message: ""}))
          .catch(error => alert(error))
      }
  }, [errors, formData, isSubmitted])

  

  return (
    <section  className="relative">
      <div className="container px-5 py-10  flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-400 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Wolverhampton,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-400 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Wolverhampton <br />
                United Kingdom
              </p>
            </div>
            <div className="lg:w-1/3 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                timothy.atoyo@email.com
              </a>
  
            </div>
          </div>
        </div>
        <form
         onSubmit={handleSubmit}
          method='POST' 
          name="portfolio-contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col  w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-400 sm:text-4xl text-3xl mb-1 font-medium title-font text-left">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 text-left">
            Lets connect and get you the results you deserve!
          </p>
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400 text-left">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full bg-gray-200 rounded border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400 text-left">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full bg-gray-200 rounded border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
              {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400 text-left">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="w-full bg-gray-200 rounded border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
              {errors.message && <p>{errors.message}</p>}
          </div>
          <button
            type="submit"
            
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

