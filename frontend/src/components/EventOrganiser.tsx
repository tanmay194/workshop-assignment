function EventOrganiser() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-6">
      <h3 className="font-semibold text-slate-900 mb-4">Event Organizer</h3>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">
          KR
        </div>
        <div>
          <h4 className="font-bold text-slate-800">Kidrove Academy</h4>
          <p className="text-sm text-slate-500">Verified Organizer</p>
        </div>
      </div>
      <button className="w-full mt-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium transition">
        Contact Organizer
      </button>
    </div>
  );
}
export default EventOrganiser;