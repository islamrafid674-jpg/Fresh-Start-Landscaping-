import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img 
                src="https://i.imgur.com/WkysPmG.png" 
                alt="Fresh Start Landscaping Logo" 
                className="h-12 w-auto object-contain" 
              />
            </a>
            <p className="max-w-sm mb-6">
              Professional residential and commercial landscaping, lawn care, and seasonal cleanups in Philadelphia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-green-600 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-green-600 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-green-600 transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-green-600 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-green-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-600 transition-colors">Lawn Care</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Spring Cleanup</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Trimming</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Mulch Installation</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Snow Removal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Fresh Start Landscaping. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
