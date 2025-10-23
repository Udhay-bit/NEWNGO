# NGO Directory - React Version

A modern React application for discovering and managing NGOs, built with Firebase backend.

## 🚀 Features

- **Browse NGOs** - Search and filter NGOs by category
- **Admin Dashboard** - Manage NGOs and review feedback
- **Firebase Integration** - Real-time database and authentication
- **Chatbot Support** - Botpress chatbot integration
- **Responsive Design** - Works on all devices
- **Modern UI** - Dark theme with professional styling

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Firebase** - Backend services (Auth, Firestore, Hosting)
- **CSS3** - Modern styling with custom properties

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🔧 Configuration

Update `src/firebase-config.js` with your Firebase project credentials:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  // ... other config
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── NGOList.jsx         # Main NGO listing page
│   ├── NGOCard.jsx         # Individual NGO card
│   ├── Admin.jsx           # Admin dashboard
│   ├── NGOForm.jsx         # Add/edit NGO form
│   ├── NGOTable.jsx        # NGO management table
│   ├── FeedbackForm.jsx    # User feedback form
│   ├── FeedbackList.jsx    # Admin feedback view
│   └── Chatbot.jsx         # Botpress integration
├── firebase-config.js      # Firebase configuration
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy with default settings

### Firebase Hosting
```bash
npm run build
firebase deploy
```

## 🔑 Features Comparison

| Feature | Vanilla JS | React |
|---------|------------|-------|
| **State Management** | Manual DOM updates | React hooks |
| **Component Reusability** | Limited | High |
| **Code Organization** | File-based | Component-based |
| **Developer Experience** | Basic | Excellent |
| **Bundle Size** | Smaller | Larger (but optimized) |
| **Learning Curve** | Easy | Moderate |

## 🎯 Benefits of React Version

- **Component-based architecture** - Better code organization
- **State management** - Automatic UI updates
- **Developer tools** - React DevTools support
- **Ecosystem** - Access to React libraries
- **Scalability** - Easier to add new features
- **Type safety** - Can add TypeScript easily

## 🔄 Migration from Vanilla

The React version maintains the same functionality as the vanilla version but with:
- Better code organization
- Improved maintainability
- Enhanced developer experience
- Modern React patterns
- Component reusability
