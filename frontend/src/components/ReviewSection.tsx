function ReviewsSection() {
  const stars = [5, 4, 3, 2, 1];

  return (
    <div className="py-12 px-6 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Aggregate Metrics */}
        <div>
          <h2 className="text-xl font-bold mb-5 text-slate-900">What People Are Saying</h2>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-teal-500 text-2xl">★</span>
            <span className="text-4xl font-extrabold text-slate-900">0.0</span>
            <span className="text-sm text-slate-400">0 reviews</span>
          </div>

          {stars.map((star) => (
            <div key={star} className="flex items-center gap-3 text-sm mb-2 text-slate-600">
              <span className="w-16">{star} stars</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full" />
              <span className="w-12 text-right text-slate-400">0.00%</span>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="flex flex-col gap-6">
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center text-slate-500 text-sm bg-slate-50">
            No public reviews yet. Be the first to leave one!
          </div>

          <div className="border border-blue-200 bg-blue-50 rounded-xl p-8 text-center">
            <p className="mb-4 text-sm text-blue-900 font-medium">Please login to submit a review</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Login to Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsSection;