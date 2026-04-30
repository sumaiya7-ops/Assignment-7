# 👥 KeenKeeper — Keep Your Friendships Alive

## 📌 Project Description

KeenKeeper is a responsive web application designed to help users maintain and track meaningful friendships.
It allows users to monitor communication habits, log interactions, and visualize relationship activity through a clean and modern interface.

---

## 🚀 Live Features

* 🧑 View all friends in a card-based layout
* 📊 Track friendship status (On-track, Almost due, Overdue)
* 📅 See how many days since last contact
* ⚡ Quick Check-In (Call, Text, Video)
* 📜 Timeline to view interaction history
* 🔍 Filter timeline by interaction type
* 📊 Analytics with Pie Chart (Recharts)
* 🔔 Toast notification on interaction
* 💾 Data saved using localStorage
* ❌ Custom 404 page for invalid routes

---

## 🖥️ Pages

* 🏠 Home Page
* 👤 Friend Details Page
* 📜 Timeline Page
* 📊 Stats (Analytics) Page
* 🚫 404 Not Found Page

---

## 🛠️ Technologies Used

* React.js
* React Router DOM
* Tailwind CSS
* Recharts
* React Hot Toast
* LocalStorage

---

## ⚙️ Key Functionalities

### 🔹 Interaction Logging

Users can log interactions:

* 📞 Call
* 💬 Text
* 🎥 Video

Each action:

* Adds a new entry to the timeline
* Shows a toast notification
* Updates stats automatically

---

### 🔹 Timeline Filtering

Users can filter interactions by:

* All
* Call
* Text
* Video

---

### 🔹 Analytics

* Displays interaction distribution using a Pie Chart
* Helps users understand their communication habits

---

## 📱 Responsive Design

The application works on all screen sizes:

* Mobile 📱
* Tablet 📟
* Desktop 💻

---

## 📂 Data Source

Friend data is stored in a local JSON file (`friends.json`) with realistic information such as:

* Name
* Email
* Tags
* Status
* Contact goal
* Next due date

---

## 🔄 Data Persistence

Timeline data is stored in **localStorage**, so:

* Data is not lost after page reload
* User interactions remain saved

---

## ⚠️ Additional Features

* Loading spinner while fetching data
* Clean UI based on Figma design
* Smooth navigation using React Router
* Custom error handling (404 page)

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/your-username/keenkeeper.git
cd keenkeeper
npm install
npm run dev
```

---

## 🌐 Live Link

👉 Add your deployed link here (Vercel/Netlify)

---

## 👨‍💻 Author

This project was developed as part of an assignment.

---

## ⭐ Conclusion

KeenKeeper makes it easy to stay connected with friends by organizing and visualizing relationship activity in a simple and effective way.
