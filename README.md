# Pet-project: Messenger

![chat_rev](https://github.com/user-attachments/assets/41f41707-37a7-4e8d-9343-a7f65077cc2c)

# Overview

This is a small chat application designed to communicate with other chat participants in real time thanks to WebSocket. The application is written in simple JavaScript and uses Parcel to efficiently build modules and ensure high performance.

## Features

- **User Online Status Indicator**: Easily see the current status of users:
  - 🔴 - Offline
  - 🟡 - Connecting
  - 🟢 - Online
- **Compact Settings Menu**:
  - Change your nickname quickly and easily.
  - View registration details, including the information provided during sign-up.
- **Login and Logout Functionality**: Seamlessly enter and exit the chat environment.
- **Message Differentiation**: Clear visual distinction between messages from the user and other participants in the chat.

## How to Use
![chat_UTH](https://github.com/user-attachments/assets/62aa37c3-3768-4b2d-bec3-4d0382df2e27)
1. **Complete Initial Registration**:
   - Provide the required information to register for the chat service.
2. **Receive Access Code**:
   - A unique access code will be sent to the email address you provided during registration.
3. **Join the Chat**:
   - Use the access code to log in and start chatting with others.

Congratulations, you are now part of the chat community! Engage and communicate effortlessly in this intuitive and lightweight chat application.

## Installation

To get started with the application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/johnbeelow/chat-js.git
   ```

2. Navigate to the project directory:
   ```bash
   cd chat-js/src
   ```

3. Install Parcel for module bundling:
   ```bash
   npm install --save-dev parcel
   ```

4. Install the required libraries:
   ```bash
   npm install date-fns --save
   npm i js-cookie
   ```

Now the application is ready to use! To start it, use Parcel:
```bash
npx parcel index.html 
