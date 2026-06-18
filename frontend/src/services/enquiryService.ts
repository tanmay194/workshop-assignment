import API from '../api/axiosInstance';

// Define standard TypeScript structures for your form payload
export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}


export const sendEnquiry = async (formData: EnquiryData) => {
  const response = await API.post('/enquiry', formData);
  return response.data;
};