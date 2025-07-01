import React, { useState } from 'react'
import { Sms, Call, Location, Clock, Send } from 'iconsax-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const contactInfo = [
    {
      icon: Location,
      title: "Our Location",
      details: ["Port Harcourt, Nigeria", "Serving globally: UK, USA, and beyond"],
      color: "bg-green"
    },
    {
      icon: Sms,
      title: "Email Us",
      details: ["info@grascope.com", "support@grascope.com"],
      color: "bg-primary"
    },
    {
      icon: Call,
      title: "Call Us",
      details: ["+234 (0) 123 456 7890", "+234 (0) 987 654 3210"],
      color: "bg-green"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend: By appointment"],
      color: "bg-primary"
    }
  ]

  const services = [
    "Innovative Solutions",
    "Industry Expertise", 
    "Tailored Services",
    "Operational Efficiency",
    "Sustainable Growth",
    "General Inquiry"
  ]

  const faqs = [
    {
      question: "How do you approach new projects?",
      answer: "We begin with a comprehensive discovery phase to understand your business challenges, followed by strategy development, implementation, and ongoing optimization."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve diverse industries including technology, healthcare, finance, manufacturing, education, retail, energy, transportation, and real estate."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we serve clients globally with established partnerships in Nigeria, UK, USA, and expanding to other regions."
    },
    {
      question: "What makes your solutions unique?",
      answer: "Our solutions are tailored to each client's specific needs, combining innovative technology with industry expertise and sustainable growth principles."
    }
  ]

  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-dark-grey max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss how our innovative solutions can help optimize your operations and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-3xl bg-grey hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent size="32" color="#ffffff" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-dark-grey">{detail}</p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-dark-grey mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-light-grey focus:border-green focus:outline-none transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-light-grey focus:border-green focus:outline-none transition-colors duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-light-grey focus:border-green focus:outline-none transition-colors duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-light-grey focus:border-green focus:outline-none transition-colors duration-200"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-light-grey focus:border-green focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-light-grey focus:border-green focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-green text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size="20" />
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Why Choose <span className="gradient-text">Grascope?</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Proven Track Record</h4>
                      <p className="text-dark-grey text-sm">100+ successful projects delivered across multiple industries and countries.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Tailored Solutions</h4>
                      <p className="text-dark-grey text-sm">Every solution is customized to meet your specific business needs and challenges.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Global Expertise</h4>
                      <p className="text-dark-grey text-sm">International experience with local understanding across Nigeria, UK, USA, and beyond.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">24/7 Support</h4>
                      <p className="text-dark-grey text-sm">Continuous support and optimization to ensure long-term success.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-green/20 to-primary/20 rounded-3xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Location size="48" color="#159b48" />
                  <h4 className="text-xl font-bold text-primary mt-4 mb-2">Port Harcourt, Nigeria</h4>
                  <p className="text-dark-grey">Serving clients globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-dark-grey">
              Common questions about our services and how we work with clients.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-grey rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-dark-grey leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact