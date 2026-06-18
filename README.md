# Workshop Assignment

A full-stack web application featuring a React/TypeScript frontend and a Node.js backend. This project serves as an event or workshop landing page, complete with sections for event details, FAQs, and a functional registration/enquiry form.

## 🛠️ Tech Stack

**Frontend:**
* React
* TypeScript
* Vite (Build Tool)
* Axios (HTTP Client)

**Backend:**
* Node.js
* Express.js
* Mongoose/MongoDB (Inferred from the `models` directory structure)

## 📁 Project Structure

The repository is divided into two main directories: `backend` and `frontend`.

### Backend
Handles the API routes, database models, and server configuration.
* `src/config/`: Database and environment configuration files.
* `src/controllers/enquiryController.js`: Logic for handling incoming enquiries.
* `src/models/Enquiry.js`: Database schema for the enquiries.
* `src/routes/enquiryRoutes.js`: API route definitions.
* `src/app.js`: Express app setup and middleware configuration.
* `server.js`: Entry point to start the Node server.

### Frontend
The user interface built with React and Vite.
* `src/api/axiosInstance.ts`: Pre-configured Axios instance for making API calls.
* `src/components/`: Contains UI components like `Hero`, `Navbar`, `RegistrationForm`, `Faq`, `ReviewSection`, etc.
* `src/services/enquiryService.ts`: Service functions to communicate with the backend enquiry API.
* `src/App.tsx` & `src/main.tsx`: Root components and application entry points.
* `vite.config.ts`: Configuration for the Vite bundler.


Open a terminal and navigate to the backend directory:
```bash
cd backend
