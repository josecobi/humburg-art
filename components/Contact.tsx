'use client';

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // For now, just open email client as fallback
      const mailtoLink = `mailto:claudiah1@mac.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="sticky top-0 min-h-screen flex items-center bg-primary-100 overflow-hidden z-10" style={{ scrollSnapAlign: 'start' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8">
                  <span className="text-sm tracking-widest text-primary-600 font-serif">CONTACT</span>
                </div>

                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-8">
                  Let's start a
                  <br />
                  conversation
                </h2>

                <p className="text-lg text-primary-700 mb-12 leading-relaxed">
                  Interested in commissioning a piece, discussing a collaboration,
                  or learning more about my work? I'd love to hear from you.
                </p>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm tracking-widest text-primary-600 font-serif mb-2">
                      EMAIL
                    </h4>
                    <a
                      href="mailto:claudiah1@mac.com"
                      className="text-lg text-primary-900 hover:text-primary-700 transition-colors duration-300 border-b border-primary-300 hover:border-primary-900"
                    >
                      claudiah1@mac.com
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm tracking-widest text-primary-600 font-serif mb-2">
                      PHONE
                    </h4>
                    <a
                      href="tel:+18182812487"
                      className="text-lg text-primary-900 hover:text-primary-700 transition-colors duration-300 border-b border-primary-300 hover:border-primary-900"
                    >
                      +1 818 281 2487
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm tracking-widest text-primary-600 font-serif mb-2">
                      LOCATION
                    </h4>
                    <p className="text-lg text-primary-900">Baltimore, MD</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7">
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
                onSubmit={handleSubmit}
                noValidate
              >
                <div>
                  <label htmlFor="name" className="block text-sm tracking-widest text-primary-600 font-serif mb-3">
                    NAME <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-0 py-3 bg-transparent border-b-2 ${
                      errors.name ? 'border-red-500' : 'border-primary-300'
                    } focus:border-primary-900 focus:outline-none transition-colors duration-300 text-primary-900 placeholder-primary-400`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm tracking-widest text-primary-600 font-serif mb-3">
                    EMAIL <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-0 py-3 bg-transparent border-b-2 ${
                      errors.email ? 'border-red-500' : 'border-primary-300'
                    } focus:border-primary-900 focus:outline-none transition-colors duration-300 text-primary-900 placeholder-primary-400`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm tracking-widest text-primary-600 font-serif mb-3">
                    SUBJECT <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={`w-full px-0 py-3 bg-transparent border-b-2 ${
                      errors.subject ? 'border-red-500' : 'border-primary-300'
                    } focus:border-primary-900 focus:outline-none transition-colors duration-300 text-primary-900 placeholder-primary-400`}
                    placeholder="What is this about?"
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-widest text-primary-600 font-serif mb-3">
                    MESSAGE <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-0 py-3 bg-transparent border-b-2 ${
                      errors.message ? 'border-red-500' : 'border-primary-300'
                    } focus:border-primary-900 focus:outline-none transition-colors duration-300 text-primary-900 placeholder-primary-400 resize-none`}
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-700" role="status">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700" role="alert">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-3 text-primary-900 font-medium text-lg hover:gap-5 transition-all duration-300 group border-b-2 border-primary-900 pb-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'send message'}</span>
                  {!isSubmitting && (
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
