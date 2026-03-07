import { motion } from 'motion/react';
import { Sparkles, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const links = {
  product: [
    { name: 'Modules', href: '/curriculum' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'For Schools', href: '/about' },
    { name: 'For Parents', href: '/parents' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/help' },
  ],
  resources: [
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/discord' },
    { name: 'AI Safety', href: '/safety' },
    { name: 'Parent Guide', href: '/parents/guide' },
  ],
};

const socials = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Youtube', href: '#' },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer id="contact" className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div className="flex items-center gap-2 mb-4" whileHover={{ scale: 1.05 }}>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">claymind</span>
            </motion.div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Bridging the gap between theoretical and practical AI education for kids aged 6-15.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-colors text-sm font-medium"
                >
                  {social.name[0]}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="max-w-md">
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest AI education insights and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors border-none cursor-pointer text-white"
              >
                <Mail className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 claymind. All rights reserved.</p>
          <div className="flex gap-6">
            <motion.button
              onClick={() => navigate('/privacy')}
              whileHover={{ scale: 1.05 }}
              className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0"
            >
              Privacy Policy
            </motion.button>
            <motion.button
              onClick={() => navigate('/terms')}
              whileHover={{ scale: 1.05 }}
              className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0"
            >
              Terms of Service
            </motion.button>
            <motion.button
              onClick={() => navigate('/safety-policy')}
              whileHover={{ scale: 1.05 }}
              className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0"
            >
              Cookie Policy
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
