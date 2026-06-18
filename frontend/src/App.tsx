import { useState } from "react";
import Navbar from "./components/Navbar";
import IntroBanner from "./components/IntroBanner";
import Outcomes from "./components/Outcomes";
import Faq from "./components/Faq";
import RegistrationForm from "./components/RegistrationForm";
import EventOrganizer from "./components/EventOrganiser"; // Added Import
import ReviewsSection from "./components/ReviewSection";
import Footer from "./components/Footer";

function App() {
  const [ticketCount, setTicketCount] = useState(1);
  const basePrice = 2999;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      
      {/* Spacer to prevent overlap with fixed Navbar */}
      <div className="h-20 md:h-24" />

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN: Main Content */}
        <main className="lg:col-span-8 flex flex-col gap-8">
          <IntroBanner />
          <Outcomes />
          <Faq />
        </main>

        {/* RIGHT COLUMN: Sidebar Widgets */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 flex flex-col gap-6">
            
            {/* Ticket Counter Widget */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-slate-600 text-sm">Number of Tickets</h3>
                <span className="font-bold text-blue-800">
                  Total: ₹{(basePrice * ticketCount).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex items-center justify-between border border-slate-200 rounded-lg p-2">
                <button
                  onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                  className="px-4 py-2 hover:bg-slate-100 rounded"
                >
                  -
                </button>
                <span className="font-bold text-lg">{ticketCount}</span>
                <button
                  onClick={() => setTicketCount(ticketCount + 1)}
                  className="px-4 py-2 hover:bg-slate-100 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Registration Form Widget */}
            <RegistrationForm />

            {/* Event Organizer Widget */}
            <EventOrganizer />
          </div>
        </aside>
      </div>

      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;