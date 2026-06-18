function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        
        {/* Column 1: Brand */}
        <div>
          <div className="text-2xl font-bold text-teal-500 mb-4">
            Kid<span className="font-light text-slate-900">rove</span>
          </div>
          <p className="text-slate-600 mb-6 max-w-sm">
            Discover and book the best activities for your kids in the UAE.
          </p>
          <div className="flex gap-4">
            {['f', 't', 'i', 'y', 'in'].map((icon) => (
              <div key={icon} className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 cursor-pointer hover:bg-teal-500 hover:text-white transition">
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Newsletter */}
        <div>
          <h3 className="font-bold text-lg text-slate-900 mb-4">Newsletter</h3>
          <p className="text-slate-600 mb-6">Subscribe for updates on new activities and promotions.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
            <input type="email" placeholder="Enter your email" className="p-3 rounded-lg border border-slate-300 w-full" required />
            <input type="text" placeholder="Your name" className="p-3 rounded-lg border border-slate-300 w-full" required />
            <button type="submit" className="bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between text-sm text-slate-500">
        <p>© 2026 Kidrove. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="cursor-pointer hover:text-slate-900">Privacy Policy</span>
          <span className="cursor-pointer hover:text-slate-900">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;