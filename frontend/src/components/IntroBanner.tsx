function IntroBanner() {
  const badges = ['📅 JUN 25 - JUN 29', '🌐 ONLINE MODE', '👶 8-14 YEARS', '💻 CODING CAMP'];
  const tags = ['#robotics', '#ai for kids', '#summer workshop', '#coding blocks'];

  const highlightItems = [
    { label: 'Age Group', value: '8-14 Years', icon: '👶' },
    { label: 'Duration', value: '4 Weeks', icon: '⏳' },
    { label: 'Mode', value: 'Online (Live Classes)', icon: '🌐' },
    { label: 'Course Fee', value: '₹2,999', icon: '💰' },
    { label: 'Start Date', value: '15 July 2026', icon: '📅' }
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Primary Banner Title Card */}
      <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex flex-wrap gap-2 mb-6">
          {badges.map((badge) => (
            <span key={badge} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
              {badge}
            </span>
          ))}
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-6">AI & Robotics Summer Workshop</h1>
        
        <div className="relative my-6">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80" 
            alt="AI & Robotics Summer Workshop Banner" 
            className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        <p className="text-slate-600 leading-relaxed mb-6">
          Create an exciting motion-controlled automation game using smart logical technologies. 
          Students will learn how programs detect structural changes, build interactive software blocks, 
          and explore real-world applications of smart computing technology. No prior coding experience required.
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => <span key={tag} className="text-blue-600 font-medium text-sm">{tag}</span>)}
        </div>
      </section>

      {/* Highlights Grid Section */}
      <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Workshop Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {highlightItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 border border-slate-100 rounded-lg bg-slate-50">
              <span className="text-2xl mb-2">{item.icon}</span>
              <span className="text-xs font-semibold text-slate-500">{item.label}</span>
              <span className="text-sm font-bold text-slate-900">{item.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default IntroBanner;