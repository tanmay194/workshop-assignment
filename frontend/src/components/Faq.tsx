function FAQ() {
  const faqs = [
    { q: "Are any physical kits or components required for this online workshop?", a: "No hardware purchase is mandatory! We will use advanced web-based graphical simulators to emulate and program real robotics workflows online." },
    { q: "What happens if a student misses a live online interactive session?", a: "Don't worry! Full recorded playbacks of every instructional session along with resource files are updated directly inside the student dashboard within 24 hours." },
    { q: "Will a certificate be awarded upon completion of the course timeline?", a: "Yes! Every student receives an official branded course completion certificate signed by Kidrove instructors upon submitting their final project." }
  ];

  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold text-center mb-8 text-slate-900">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-5 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-5 rounded-lg border-l-4 border-blue-500 border border-slate-200 shadow-sm">
            <h4 className="m-0 mb-2 text-base text-slate-800 font-bold">Q: {faq.q}</h4>
            <p className="m-0 text-sm text-slate-600 leading-relaxed">A: {faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;