# **Sign Language Recognition for Deaf and Dumb**

- Our sign language recognition project involved creating a custom dataset, preprocessing images, training a model, integrating with React, and hosting with Firebase. 

- The result is a real-time sign language recognition application that recognizes a variety of sign language gestures.

- Our Model is trained for 26 alphabets and 16 words of ASL and which are commonly used in general communication.

## Features

- Real-Time Recognition

- Easy-to-Use Interface

- Adaptive Learning

- High Accuracy

- Real Time User Progress Data

## Tech Stack

**Front-end:**

- React
- Redux

**Back-end:**

- Firebase (for hosting, authentication, and storage)

**Machine Learning Framework:**

- MediaPipe

**NPM Packages:**

- @mediapipe/drawing_utils
- @mediapipe/hands
- @mediapipe/tasks-vision
- @redux-devtools/extension
- chart.js
- firebase
- js-cookie
- react-chartjs-2
- react-icons
- react-redux
- react-router-dom
- react-toastify
- react-webcam
- redux
- redux-thunk
- uuid


## Project Details

- **Dataset Link:** [Sign_Dataset](https://drive.google.com/drive/folders/1LUUknqqRNHAmIZYrcgo-4n2HrM37uFa3?usp=share_link)

- **Gesture Recogition Documentation:** [Mediapipe](https://developers.google.com/mediapipe/solutions/vision/gesture_recognizer)

- **The Model Training File is located in root folder**


## Steps to set up the project

- **Clone the repository**
  ```bash
  git clone https://github.com/shauryagupta045/Sign-Language-Detection
  ```

- **Install dependencies**
  ```bash
  npm install
  ```

- **Set up Environment Variables**
  Create a `.env.local` file in the root directory and add your Firebase configuration:
  ```env
  REACT_APP_FIREBASE_API_KEY=your_api_key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
  REACT_APP_FIREBASE_PROJECT_ID=your_project_id
  REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  REACT_APP_FIREBASE_MESSAGE_ID=your_messaging_sender_id
  REACT_APP_FIREBASE_APP_ID=your_app_id
  REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
  ```

- **Start the application**
  ```bash
  npm start
  ```


## Acknowledgements

- [React](https://react.dev/)
- [mediapipe](https://developers.google.com/mediapipe)
- [Firebase](https://firebase.google.com/)
- [NPM](https://www.npmjs.com/)


## Support

For support, contact

- email: guptashaurya0728@gmail.com
- LinkedIn: [Shaurya Gupta](www.linkedin.com/in/shaurya-guptaa)
