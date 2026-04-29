import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['Bhubaneswar, Odisha', 'Industrial Estate, Mancheswar', '751010, India']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 7609044522', 'Monday - Friday: 8:30 AM - 6:00 PM']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['sales@margino.in', 'purchase@margino.in', 'partnerships@margino.in']
    },
  ]

  const faqs = [
    {
      question: 'What are your lead times?',
      answer: 'Lead times typically range from 4-8 weeks depending on customization requirements. Rush orders are available upon request.'
    },
    {
      question: 'Do you offer custom engineering solutions?',
      answer: 'Yes, we specialize in custom subsystem development tailored to your specific OEM requirements. Our engineering team can design solutions from scratch.'
    },
    {
      question: 'What are your quality standards?',
      answer: 'We maintain ISO 9001:2015, ISO 4413, and IATF 16949 certifications. All products undergo rigorous quality testing before delivery.'
    },
    {
      question: 'Do you provide technical support?',
      answer: 'Yes, we offer 24/7 technical support and after-sales service for all our products. Our experts are available via phone, email, and on-site support.'
    },
    {
      question: 'What warranty do you offer?',
      answer: 'We provide comprehensive warranties ranging from 1-3 years depending on the product. Extended warranty options are also available.'
    },
    {
      question: 'Can you handle large volume orders?',
      answer: 'Absolutely. We have production capacity to handle bulk orders from OEM partners. Special pricing is available for volume commitments.'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Let's Discuss Your Requirements</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Contact our engineering and procurement team for RFQs, technical discussions, and partnerships
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={idx}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                  whileHover={{ translateY: -5 }}
                >
                  <Icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{info.title}</h3>
                  <ul className="space-y-2 text-slate-600">
                    {info.details.map((detail, i) => (
                      <li key={i} className="text-sm md:text-base">{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-slate-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Send us an Inquiry
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="+91..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="RFQ / Technical Discussion / Partnership"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                placeholder="Describe your requirements, product specifications needed, or partnership interest..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                submitted
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:shadow-lg hover:scale-105'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                <>
                  ✓ Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Inquiry
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 flex-shrink-0 text-accent-400" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Business Hours & Response Time</h3>
                <div className="grid md:grid-cols-2 gap-6 text-white/90">
                  <div>
                    <p className="font-semibold mb-2">Monday - Friday</p>
                    <p>8:30 AM - 6:00 PM IST</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Saturday</p>
                    <p>9:00 AM - 1:00 PM IST</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold mb-2">Response Time</p>
                    <p>Within 24 hours for all inquiries</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-slate-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-primary-400 transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between bg-slate-50 hover:bg-primary-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-slate-900 text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary-600 transition-transform ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedFaq === idx && (
                  <motion.div
                    className="p-6 bg-white border-t-2 border-slate-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.8886097697825!2d85.8245!3d20.2673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7b7b7b7b7b7%3A0x0!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Margino Engineering Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
