# WhiteLight Authentication Flows

## Overview
The application now supports three complete authentication scenarios with a comprehensive SSO-enabled auth system.

## User Flows

### 1. New User - Sign Up & Registration
**Flow:** Splash Screen (17s) → Auth Screen (Sign Up) → Avatar Selection → Avatar Welcome → Voice Chat

**Experience:**
- User sees the Matrix-style splash screen
- After 17 seconds, presented with the authentication screen
- User clicks "Sign Up" tab
- User can choose:
  - **SSO Options:** Google, Apple, or Microsoft (one-click signup)
  - **Email Signup:** Provide name, email, and password
- Upon successful signup, credentials are stored in localStorage
- User proceeds to Avatar Selection screen
- Selects an avatar (Emma, Alex, Noah, Roamie, or creates custom avatar)
- Moves to Avatar Welcome screen and begins using the app

### 2. Returning User - Login
**Flow:** Splash Screen (17s) → Auth Screen (Sign In) → Avatar Selection → Avatar Welcome → Voice Chat

**Experience:**
- User sees the Matrix-style splash screen
- After 17 seconds, presented with the authentication screen
- "Sign In" tab is selected by default
- User can choose:
  - **SSO Options:** Google, Apple, or Microsoft (one-click login)
  - **Email Login:** Provide email and password
  - **Forgot Password:** Click to recover password
- Upon successful login, credentials are stored in localStorage
- User proceeds directly to Avatar Selection screen
- Previous avatar selection is remembered if available
- Continues to their personalized experience

### 3. Returning User - Already Logged In
**Flow:** Splash Screen (17s) → Avatar Selection → Avatar Welcome → Voice Chat

**Experience:**
- User sees the Matrix-style splash screen
- System checks localStorage for existing auth token and user data
- If found, user is authenticated automatically
- After 17 seconds, user goes directly to Avatar Selection screen
- No authentication screen shown
- Seamless continuation of previous session
- User can start chatting immediately

## Logout Functionality

**Location:** Side Menu (accessible from hamburger menu icon)

**How to Logout:**
1. Open the side menu by clicking the hamburger icon (three horizontal lines)
2. Scroll to the bottom of the menu
3. Click the red "Logout" button (with logout icon)
4. App will:
   - Clear authentication tokens from localStorage
   - Clear user data from localStorage
   - Reload the application
   - Show authentication screen on next load

**Testing All Three Flows:**
- **To test Flow 1 (New User):** Clear browser data or use incognito mode
- **To test Flow 2 (Login):** Logout, then sign in again
- **To test Flow 3 (Already Logged In):** Just refresh the page or reopen the app

## Authentication Features

### SSO Providers
- **Google:** Full Google account integration
- **Apple:** Apple ID sign-in
- **Microsoft:** Microsoft account integration

### Email Authentication
- Email/password signup and login
- Show/hide password toggle
- Password recovery option
- Form validation

### Security Features
- Tokens stored in localStorage
- User data persistence
- Automatic session management
- Clean logout process

### UI/UX Features
- Smooth animations and transitions
- Beautiful gradient background with animated orbs
- Toggle between Sign In and Sign Up
- Responsive form design
- Loading states during authentication
- Error handling (simulated)

## Technical Implementation

**Key Components:**
- `/components/AuthScreen.tsx` - Main authentication UI
- `/components/AuthOrAvatarSelection.tsx` - Wrapper that handles auth check
- `localStorage` keys:
  - `whitelight_auth_token` - Authentication token
  - `whitelight_user` - User profile data (email, name, authMethod)

**State Management:**
- Authentication state managed by `AuthOrAvatarSelection` component
- Automatic auth check on component mount
- Clean separation of concerns

**Logout Handler:**
- Added to `MobileApp` component in `/App.tsx`
- Integrated with `AvatarSideMenu` component
- Clears all auth data and reloads app
