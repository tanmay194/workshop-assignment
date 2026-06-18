function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Socials */}
        <div className="space-y-4">
          <div className="text-2xl font-bold text-slate-900">
            Kid<span className="text-teal-500">rove</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Discover and book the best activities for your kids in the UAE.
          </p>
          <div className="flex gap-3">
            {/* Replace '#' with actual links */}
            <a href="#" className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center text-white">f</a>
            <a href="#" className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center text-white">t</a>
            <a href="#" className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center text-white">in</a>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-teal-600">About Us</a></li>
            <li><a href="#" className="hover:text-teal-600">Blog</a></li>
            <li><a href="#" className="hover:text-teal-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-teal-600">FAQs</a></li>
            <li><a href="#" className="hover:text-teal-600">Partner with Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4">Categories</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-teal-600">Afterschool Activities</a></li>
            <li><a href="#" className="hover:text-teal-600">Arts and Crafts</a></li>
            <li><a href="#" className="hover:text-teal-600">Baby & Toddler</a></li>
            <li><a href="#" className="hover:text-teal-600">Birthday Deals</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Newsletter</h4>
          <p className="text-xs text-slate-500 mb-4">
            Subscribe to our newsletter for updates on new activities and promotions.
          </p>
          <form className="space-y-3">
            <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded text-sm" />
            <input type="text" placeholder="Your name" className="w-full p-2 border rounded text-sm" />
            <button className="w-full bg-pink-300 text-white py-2 rounded font-medium text-sm hover:bg-pink-400">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex justify-between text-sm text-slate-500">
        <p>© 2026 Kidrove. All rights reserved.</p>
        <div className="space-x-6">
          <a href="#" className="hover:text-slate-900">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;