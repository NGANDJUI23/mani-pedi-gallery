
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-nail-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-nail-500 font-medium text-sm tracking-wider uppercase">Get In Touch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-light leading-tight">
            Contact <span className="font-normal">Our Team</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have questions about our services or want to book an appointment? 
            We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white rounded-full p-3 shadow-sm">
                <Phone className="h-5 w-5 text-nail-500" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-muted-foreground">(237) 6 20 92 84 46</p>
                <p className="text-muted-foreground">(237) 6 56 72 44 40</p>
                <p className="text-muted-foreground">Mon-Fri: 9am - 7pm</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white rounded-full p-3 shadow-sm">
                <Mail className="h-5 w-5 text-nail-500" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">lydie@gmail.com</p>
                <p className="text-muted-foreground">evodie@facebook.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white rounded-full p-3 shadow-sm">
                <MapPin className="h-5 w-5 text-nail-500" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-muted-foreground">Nyalla kambo, Douala, Cameroun</p>
                <p className="text-muted-foreground">Japoma, Douala, Cameroun</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-lg p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-nail-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nail-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-nail-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nail-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-nail-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nail-500 focus:border-transparent"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-nail-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nail-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-nail-500 hover:bg-nail-600 text-white font-medium py-3 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-nail-500 focus:ring-offset-2 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
