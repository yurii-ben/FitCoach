# FitCoach Mobile App

A modern fitness coaching mobile application built with React Native and Expo.

## 🚀 Features

- Cross-platform mobile app (iOS & Android)
- Modern UI/UX design
- Real-time fitness tracking
- Personalized coaching experience
- Secure data storage

## 🛠️ Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation (Expo Router)
- AsyncStorage for local data persistence
- React Native Reanimated for smooth animations
- React Native Gesture Handler for touch interactions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Studio (for Android development)

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd fit-coach-mobile-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Run on your preferred platform:
```bash
# For iOS
npm run ios
# For Android
npm run android
# For web
npm run web
```

## 📱 Available Scripts

- `npm start` - Starts the Expo development server
- `npm run android` - Starts the app on Android emulator
- `npm run ios` - Starts the app on iOS simulator
- `npm run web` - Starts the app in web browser

## 📁 Project Structure

```
fit-coach-mobile-app/
├── app/              # Main application screens and navigation
├── assets/           # Images, fonts, and other static assets
├── contexts/         # React Context providers
├── src/              # Source code and components
├── .expo/            # Expo configuration
└── node_modules/     # Dependencies
```

## 🔧 Configuration

The app uses several configuration files:
- `app.json` - Expo configuration
- `tsconfig.json` - TypeScript configuration
- `babel.config.js` - Babel configuration

## 🔍 Key Features in Detail

### Workout System
- Pre-loaded workout routines with exercises
- Exercise timer with automatic progression
- Workout completion tracking
- Progress visualization

### Dashboard
- Workout statistics (completed workouts, streaks, total minutes)
- Quick action buttons
- Daily workout recommendations
- Performance metrics

### Theme Support
- Light/dark mode toggle
- Persistent theme preference
- Consistent color scheme across all screens

### Data Management
- User stats saved locally with AsyncStorage
- Theme preferences persistence
- Profile information storage
- Workout history tracking
