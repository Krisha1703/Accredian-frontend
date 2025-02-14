# 📝 **Accredian Refer & Earn Landing Page**

This is the **frontend** for the **Refer & Earn landing page** developed using **React JS**, **Tailwind CSS**, **Express**, **Axios**, and **Prisma ORM**. The project incorporates robust **error handling** to manage various user and server issues effectively. Additionally, **Gmail notifications** are integrated to send automated email notifications to referrers after successful referrals. The application is deployed on **Vercel(Frontend)** and **Render (Backend)**, with **MySQL** as the database. 🎯

## 🌟 **Features**

- **Referral Form** 📋: A multi-step form to submit referrals with user details and course selection.
- **Major & Niche Course Selection** 🎓: Dynamic course options based on the selected major.
- **Form Validation** ✅: Input validation using **Zod** schema to ensure accurate data submission.
- **Responsive UI** 📱: Built with **Tailwind CSS** and **Material UI** for a modern and responsive design.
- **Error Handling** ⚠️: Comprehensive error handling for failed submissions, including validation feedback for users and clear alert messages, ensuring a smooth experience even when something goes wrong (e.g., "You cannot refer yourself" or "This course has already been referred to this person").
- **API Integration** 🌐: Backend API built with **Express** and **Prisma ORM**, connected to **MySQL**.
- **Deployment** 🚀: Frontend deployed on **Vercel** and Backend on **Render**.


### Prerequisites  
- Node.js and npm installed  
- MySQL installed locally or cloud-hosted  

## ⚙️ Setup Instructions For Frontend

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Krisha1703/Accredian-frontend.git
   cd Accredian-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables 🌍:**
   - Create a `.env.local` file with the following:
     ```env
     REACT_APP_API_URL=http://localhost:5000/api/referrals

     ```

4. **Run the development server 🚀:**
   ```bash
   npm start
   ```

5. **Build for production ⚡:**
   ```bash
   npm run build
   npm start
   ```

- For **backend** setup, please visit https://github.com/Krisha1703/Accredian-backend.

## 📸 **Screenshots**

- **Refer & Earn Landing Page 🌍:**
  ![Hero Section](/public/screenshots/hero-section.png) 

- **Referral Modal 📦:**
  ![Refer Modal](/public/screenshots/refer-modal.png) 

- **Form Validation ✍️:**
  ![Form Validation](/public/screenshots/zod-validation1.png) 

- **Form Validation 🧑‍💻:**
  ![Form Validation](/public/screenshots/zod-validation2.png) 

- **Referral Error 🧑‍💻:**
  ![Referral Error](/public/screenshots/refer-same-person.png) 

- **Referral Error 🧑‍💻:**
  ![Referral Error](/public/screenshots/refer-yourself.png) 

- **Referral Success 🎉:**
  ![Success](/public/screenshots/success.png)

- **Referral Email Notification 🎉:**
  ![Email Notification](/public/screenshots/refer-email.png)


## 🔧 Technologies Used

- **Frontend**: React, Tailwind CSS, Material UI, Axios  
- **Backend**: Node.js, Express, Prisma ORM, Gmail API
- **Database**: MySQL  
- **Deployment**: Vercel (Frontend), Render (Backend)  


*Happy Referring & Earning! 🎉*

