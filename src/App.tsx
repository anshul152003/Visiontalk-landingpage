import { motion } from 'framer-motion';
import { Video, Users, Globe2, Shield, ArrowRight, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      {/* Hero Section */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Video className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">VisionTalk</span>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors"
          >
            <a href="https://proud-stingray-43.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fvision-talk-lac.vercel.app%2F">Get Started</a>
          </motion.button>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-20 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Connect, Collaborate, and Create Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-12"
          >
            Experience crystal-clear video meetings with advanced collaboration tools that bring your team closer than ever before.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
            >
              <a href="https://proud-stingray-43.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fvision-talk-lac.vercel.app%2F">Start Meeting Now</a>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-medium hover:bg-indigo-50 transition-colors"
            >
              <a href="https://proud-stingray-43.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fvision-talk-lac.vercel.app%2F">Schedule a Meeting</a>
              
            </motion.button>
          </motion.div>
        </div>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=2000&q=80"
              alt="VisionTalk Interface"
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-12 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Team Collaboration</h3>
            <p className="text-gray-600">Work together seamlessly with intuitive tools designed for modern teams.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe2 className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Global Connectivity</h3>
            <p className="text-gray-600">Connect with anyone, anywhere with our reliable global infrastructure.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
            <p className="text-gray-600">End-to-end encryption and advanced security features keep your meetings private.</p>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 italic mb-6">"VisionTalk has transformed how our global team collaborates. The video quality and features are unmatched."</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" alt="Sarah Chen" className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4">
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-gray-500">CTO, TechGlobal Inc</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 italic mb-6">"The security features and reliability make VisionTalk our go-to platform for client meetings."</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80" alt="Mark Thompson" className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4">
                  <p className="font-semibold">Mark Thompson</p>
                  <p className="text-sm text-gray-500">Director, Innovate Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="bg-indigo-600 rounded-3xl px-8 py-16">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to transform your meetings?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams who have already elevated their collaboration experience with VisionTalk.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-medium hover:bg-indigo-50 transition-colors"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Video className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-bold">VisionTalk</span>
              </div>
              <p className="text-gray-400 mb-6">
                Transforming virtual collaboration with cutting-edge video conferencing technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-indigo-400" />
                  <span className="text-gray-400">support@visiontalk.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-indigo-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                  <span className="text-gray-400">123 Innovation Drive<br />San Francisco, CA 94107</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 VisionTalk. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;