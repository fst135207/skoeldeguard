'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    unternehmen: "",
    anzahlGeraete: "",
    nachricht: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every((value) => value.trim() !== "")
    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reset = () => {
    setFormData({
      vorname: "",
      nachname: "",
      email: "",
      telefon: "",
      unternehmen: "",
      anzahlGeraete: "",
      nachricht: "",
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)
    fetch("https://formsubmit.co/ajax/bhainirav772@gmail.com", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        Vorname: formData.vorname,
        Nachname: formData.nachname,
        Email: formData.email,
        Telefon: formData.telefon,
        Unternehmen: formData.unternehmen,
        AnzahlGeraete: formData.anzahlGeraete,
        Nachricht: formData.nachricht,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true)
          setShowThanks(true)
          reset()
          setTimeout(() => {
            setShowThanks(false)
            setLoader(false)
          }, 5000)
        }
        reset()
        setLoader(false)
      })
      .catch((error) => {
        setLoader(false)
        console.log(error.message)
      })
  }

  return (
    <section id="contact" className="px-4 bg-gray-50 relative py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="text-sm text-gray-400 tracking-widest mb-2">
            Der erste Schritt zu Ihrer Lösung
          </div>
          <h1 className="text-4xl lg:text-4xl font-bold text-red-500 mb-8">
            So können Sie uns erreichen
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Kontaktinfos */}
          <div className="lg:w-1/3 w-full">
            <Card className="mb-8 lg:mb-0">
              <CardContent className="p-6">
                <div className="grid gap-6">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-navyblue mb-1">Telefon</h4>
                      <p className="text-gray-600">+41 78 747 25 10</p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-navyblue mb-1">Email</h4>
                      <p className="text-gray-600">info@svoeldguard.ch</p>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-navyblue mb-1">Adresse</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Ihe de Hood vo Ostermundige, Coop Pronto odr so
                        <br />
                        odr SEEEEEDORRF
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Formular */}
          <div className="flex-1">
            <div className="relative border border-navyblue/10 px-6 py-2 rounded-2xl bg-white shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-wrap w-full m-auto justify-between">
                <div className="sm:flex gap-6 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="vorname" className="pb-3 inline-block text-base font-medium">
                      VORNAME
                    </label>
                    <input
                      id="vorname"
                      type="text"
                      name="vorname"
                      value={formData.vorname}
                      onChange={handleChange}
                      className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0"
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="nachname" className="pb-3 inline-block text-base font-medium">
                      NACHNAME
                    </label>
                    <input
                      id="nachname"
                      type="text"
                      name="nachname"
                      value={formData.nachname}
                      onChange={handleChange}
                      className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0"
                    />
                  </div>
                </div>
                <div className="sm:flex gap-6 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="email" className="pb-3 inline-block text-base font-medium">
                      EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0"
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="telefon" className="pb-3 inline-block text-base font-medium">
                      TELEFON
                    </label>
                    <input
                      id="telefon"
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0"
                    />
                  </div>
                </div>
                <div className="sm:flex gap-6 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="unternehmen" className="pb-3 inline-block text-base font-medium">
                      UNTERNEHMEN
                    </label>
                    <input
                      id="unternehmen"
                      type="text"
                      name="unternehmen"
                      value={formData.unternehmen}
                      onChange={handleChange}
                      className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0"
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="anzahlGeraete" className="pb-3 inline-block text-base font-medium">
                      ANZAHL GERÄTE
                    </label>
                    <input
                      id="anzahlGeraete"
                      type="number"
                      name="anzahlGeraete"
                      value={formData.anzahlGeraete}
                      onChange={handleChange}
                      className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0"
                    />
                  </div>
                </div>
                <div className="w-full mx-0 my-2.5 flex-1">
                  <label htmlFor="nachricht" className="text-base inline-block font-medium">
                    IHRE NACHRICHT
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    value={formData.nachricht}
                    onChange={handleChange}
                    rows={6}
                    className="w-full mt-2 rounded-2xl px-5 py-3 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0"
                  ></textarea>
                </div>
                <div className="mx-0 my-2.5 w-full">
                  <button
                    type="submit"
                    disabled={!isFormValid || loader}
                    className={`border leading-none px-6 text-lg font-medium py-4 rounded-full flex items-center gap-2
                         ${
                           !isFormValid || loader
                             ? "bg-primary/15 text-beach cursor-not-allowed"
                             : "bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer"
                         }`}
                  >
                    SENDEN
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>
              {showThanks && (
                <div className="text-white bg-primary rounded-full px-4 text-lg mb-4.5 mt-3 absolute flex items-center gap-2">
                  Formular ausgefüllt. Wir werden Sie bald kontaktieren.
                  <div className="w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm