# WD-06: Smart Travel Itinerary Planner & Personalized Trip Builder

## 🏛 Ministry of Tourism, Government of India

### 📜 Background & Organizational Context
The Ministry of Tourism, Government of India promotes domestic and international travel across heritage sites, eco-tourism circuits, spiritual tourism, adventure tourism, and coastal destinations. However, travelers often face difficulty in:
- Planning optimized itineraries
- Balancing budget constraints
- Selecting suitable destinations based on interests
- Managing time efficiently
- Finding region-specific attractions

Existing platforms are often either too generic, over-commercialized, or not personalized. **TripGenie** is a Smart Travel Planning Web Portal that generates personalized itineraries based on user preferences, budget, and duration.

---

### 🚀 Problem Statement
Design and develop a web-based travel planning platform that:
- Collects user travel preferences
- Filters destinations based on interests and budget
- Generates day-wise itinerary suggestions
- Displays cost estimation
- Provides shareable travel plans

---

### ✨ Key Features

#### 🧠 Smart Personalization
- **Mood & Preference-Based Suggestions:** Recommends destinations based on user mood, interests, and past preferences.
- **Conflict Solver (Core Feature ⭐):** Analyzes group preferences and creates a balanced itinerary that satisfies all members.
- **Confusion Resolver:** Suggests the best options when users are unable to decide between multiple choices.

#### 🗺️ Navigation & Planning
- **Live Maps Integration:** Shows real-time locations, routes, and nearby places for easy navigation.
- **Calendar / Holiday Planner:** Helps users plan trips around holidays and long weekends.
- **Advanced Filters:** Filters by budget, category (adventure, trekking), travel type (solo, family), and age group.

#### 🤖 Assistance & Support
- **Guide Chatbot:** Instant assistance and answers to user queries.
- **Hire Guide Option:** Enables booking of local guides.
- **Emergency Support:** Quick access to emergency contacts, hospitals, and help services.

#### 🤝 Collaboration & Sharing
- **Collaboration with Friends:** Multiple users can plan trips together.
- **Shareable Travel Plan:** Easily share itineraries with others.
- **Group Convergence Tracker:** Tracks members traveling from different locations in real-time.

#### 🛠️ Management & Utility
- **Multiple Login System:** Roles for User, Admin, and Guide.
- **Expense Tracker:** Tracks and splits trip expenses among group members.
- **Smart Luggage Checklist:** Packing suggestions based on destination, weather, and duration.
- **Multilanguage Support:** Access the platform in different languages.
- **Reviews Integration:** Displays reviews from trusted platforms.

---

### 📦 Minimum Deliverables (12-Hour Scope)
- [x] Preference form
- [x] Dataset-based recommendation logic
- [x] Itinerary generator
- [x] Cost estimation display
- [x] Responsive UI
- [ ] Map integration (Bonus)

---

### 🛠️ Technology Stack
- **Frontend:** Vite, React, Tailwind CSS
- **Backend:** FastAPI, Python
- **Database:** SQLite (via SQLAlchemy)
- **Design:** Modern, premium UI with smooth animations and glassmorphism.

---

## 👨‍💻 Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "VEGA HACKATHON"
   ```

2. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   python main.py
   ```

3. **Frontend Setup**
   ```bash
   cd ../trip-genie
   npm install
   npm run dev
   ```
