# How to Logout - Quick Guide

## Step-by-Step Instructions

### 1. Open the Side Menu
- Look for the **hamburger menu icon** (☰) in the top-left corner of any screen
- Click/tap on it to open the side menu

### 2. Find the Logout Button
- The side menu will slide in from the left
- Scroll to the **bottom** of the menu
- You'll see a red "Logout" button with a logout icon (→)

### 3. Click Logout
- Click/tap the "Logout" button
- The app will:
  - Clear your session
  - Remove authentication tokens
  - Reload automatically
  - Show the authentication screen

### 4. You're Logged Out!
- After reload, you'll see the Splash Screen
- Then the Authentication Screen will appear
- You can now sign in again or create a new account

## Where is the Side Menu Available?

The side menu (and logout button) is accessible from these screens:
- ✅ Avatar Welcome Screen
- ✅ Voice Chat Screen
- ✅ Text Chat Screen
- ✅ Your Spaces Screen
- ✅ Discover Screen
- ✅ Flight/Hotel/Cab Details Screens

## Visual Location

```
┌─────────────────────────────┐
│ ☰  WhiteLight      🔔       │  ← Click the hamburger icon (☰)
├─────────────────────────────┤
│                             │
│   [Side Menu Slides In]     │
│                             │
│   🔍 Search                 │
│   ➕ New Chat               │
│                             │
│   🏠 Home                   │
│   🌟 Your Spaces            │
│   🔍 Discover               │
│                             │
│   💬 Recent Chats           │
│   • Handloom Saree          │
│   • Flight Booking          │
│                             │
│   ─────────────────         │
│                             │
│   → Logout  ⚙️ Settings    │  ← Logout button here!
└─────────────────────────────┘
```

## Tips

- **Logout** clears all your session data
- Your avatar selection and chat history will be lost
- Use **Sign In** (not Sign Up) to return to your existing account
- SSO login is faster - just one click!

## Testing All Authentication Flows

After logging out, you can test:

1. **New User Flow:** 
   - Select "Sign Up" tab
   - Create a new account
   
2. **Returning User Flow:** 
   - Select "Sign In" tab
   - Login with existing credentials
   
3. **Auto-Login Flow:**
   - After signing in, just refresh the page
   - You'll be automatically logged in (skip auth screen)
