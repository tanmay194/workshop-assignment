import { useState } from 'react';
import { sendEnquiry } from '../services/enquiryService';
import type { EnquiryData } from '../services/enquiryService';

function RegistrationForm() {
  const [formData, setFormData] = useState<EnquiryData>({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Validate phone: only allow numbers and cap at 10 digits
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Strict length check before submission
    if (formData.phone.length !== 10) {
      setIsError(true);
      setResponseMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    setResponseMessage('');
    setIsError(false);

    try {
      const data = await sendEnquiry(formData);
      
      if (data.success) {
        setIsError(false);
        setResponseMessage(data.message || "Enquiry submitted successfully!");
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          setResponseMessage('');
        }, 5000);
      }
    } catch (error: any) {
      setIsError(true);
      setResponseMessage(error.response?.data?.message || "Something went wrong sending registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm">
      <h2 className="text-3xl font-bold text-center mb-2.5 text-slate-900">Secure Your Seat</h2>
      <p className="text-center text-slate-500 text-sm mb-8">Fill out the registration details below.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">Parent/Student Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter full name" required className="p-3 rounded-md border border-slate-300 bg-slate-50 text-base outline-none focus:border-blue-500" />
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" required className="p-3 rounded-md border border-slate-300 bg-slate-50 text-base outline-none focus:border-blue-500" />
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter 10-digit mobile number" required className="p-3 rounded-md border border-slate-300 bg-slate-50 text-base outline-none focus:border-blue-500" />
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">Message / Queries (Optional)</label>
          <textarea name="message" value={formData.message || ''} onChange={handleChange} placeholder="Prior coding experience details..." rows={3} className="p-3 rounded-md border border-slate-300 bg-slate-50 resize-y text-base outline-none focus:border-blue-500" />
        </div>
        
        <button type="submit" disabled={loading} className="p-3.5 bg-blue-600 text-white rounded-md text-base font-semibold cursor-pointer mt-2.5 hover:bg-blue-700 disabled:bg-blue-400 transition-colors">
          {loading ? 'Processing Registration...' : 'Submit Registration'}
        </button>
      </form>

      {responseMessage && (
        <div className={`mt-6 p-3.5 rounded-md text-sm text-center font-semibold ${isError ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-sky-50 text-sky-700 border border-sky-100'}`}>
          {responseMessage}
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;