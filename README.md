Y'all App Challenge Base
Welcome to the Y'all App coding challenge! This repository contains a streamlined version of our codebase that provides you with the essential structure to complete the challenge.
Challenge Overview
You'll be implementing a phone authentication flow that includes:

A splash screen with the Y'all logo
A phone number input screen for authentication
A verification code screen (bonus)

Project Structure
HeyYallNativeExpo/
├── app/
│   ├── assets/               # Logo and essential icons
│   ├── components/
│   │   ├── onboarding/       # Onboarding UI components
│   │   ├── ui/               # Core UI components
│   │   └── verification/     # Authentication components
│   ├── layout/               # Layout templates
│   ├── navigation/           # Navigation configuration
│   ├── screens/
│   │   ├── Splash/           # Splash screen (to be implemented)
│   │   ├── Onboarding/       # Phone input screen (to be implemented)
│   │   └── Verification/     # Code verification screen (bonus)
│   └── theme/                # Tamagui theme configuration
└── shared/
    ├── hooks/                # Custom React hooks
    └── services/
        ├── api/              # API client configuration
        └── firebase/         # Firebase authentication services
Getting Started

Install the dependencies:

npm install

Start the development server:

npx expo start
Development Process
Your workflow should include:

Analyze the Design First: Start by reviewing the Figma designs and identifying client-side vs. server-side responsibilities before writing any code
Implement the Splash Screen: Create the splash screen with the Y'all logo and transition logic
Build the Phone Input Screen: Implement the UI for phone number input and connect to Firebase
Handle Verification (Bonus): Implement the code verification screen if time permits

Firebase Authentication Testing
This project is set up with Firebase phone authentication for testing in Expo:

Firebase configuration is already set up in the project
expo-firebase-recaptcha is integrated to handle the verification flow
Test phone numbers are configured in Firebase for development
You can test without sending actual SMS messages

When implementing phone authentication:

Use FirebaseRecaptchaVerifierModal from expo-firebase-recaptcha
Handle user input validation on the client side
Implement proper loading and error states
Connect to Firebase to initiate verification

Challenge Requirements
1. Splash Screen

Implement a splash screen with the Y'all logo and branding
The screen should automatically transition to the phone input screen after 2 seconds
Match the design from the provided Figma mockups

2. Phone Number Input Screen

Create a phone input screen with proper formatting
Implement validation for the phone number
Connect to Firebase authentication when the "Confirm" button is tapped
Include the Terms of Service text at the bottom
Display appropriate loading state during authentication

3. Verification Code Screen (Bonus)

Implement the verification code input screen
Handle code verification using Firebase
Show success/failure states
Include "resend code" functionality

Design Specifications

Primary Background: Dark blue (#001729)
Button Color: Bright blue (#0087E0)
Logo Colors: Pink/Coral (#FF6978) and Light Blue (#00A8E8)
Text: White (#FFFFFF)
Secondary Text: Light gray (#AAAAAA)

Evaluation Criteria

Adherence to Design: How well your implementation matches the Figma designs
Code Quality: Organization, readability, and maintainability
Functionality: Proper implementation of the authentication flow
Error Handling: How gracefully your app handles errors
Client/Server Understanding: Appropriate separation of client and server responsibilities
Bonus Points: Implementation of the verification code screen

Submission
When you're finished, please:

Ensure your code runs without errors
Be prepared to walk through your implementation
Explain your design decisions and how you approached client-side vs. server-side responsibilities

Good luck, and we look forward to seeing your implementation!
