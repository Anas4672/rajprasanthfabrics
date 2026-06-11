export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <span className="font-serif text-3xl font-bold text-white mb-6 block">
              Raj Prasanth
            </span>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Premium handmade fabric products crafted with care, sustainability, and unparalleled tailoring expertise. Based in Tamil Nadu, India.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-primary">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#collection" className="text-gray-400 hover:text-white transition-colors">Collection</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-primary">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Raj Prasanth Handmade Fabric Products. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
