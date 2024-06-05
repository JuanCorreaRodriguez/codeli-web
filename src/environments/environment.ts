export const environment = {
  production: true,
  CLIENT_ID: '1029574811512-00h0vcritf4eno87uf4sg2rgveai0lbe.apps.googleusercontent.com',
  API_KEY: "AIzaSyAO1u9AouCQ_NUD33AIKprtMfQ5lZ1hy2A",
  firebaseConfig: {
    apiKey: "AIzaSyDS9GRIm4TRkzRHcnwt4FmVorw4RXW99O0",
    authDomain: "codeli-studio.firebaseapp.com",
    projectId: "codeli-studio",
    storageBucket: "codeli-studio.appspot.com",
    messagingSenderId: "1029574811512",
    appId: "1:1029574811512:web:3a1aea217636210272328d",
    measurementId: "G-LZR7H00WTY"
  },
  schedule: [
    {day: 1, start: "9:00 AM", end: "6:00 PM"},  // MON
    {day: 2, start: "9:00 AM", end: "6:00 PM"},  // THU
    {day: 3, start: "9:00 AM", end: "6:00 PM"},  // WEB
    {day: 4, start: "9:00 AM", end: "6:00 PM"},  // THU
    {day: 5, start: "9:00 AM", end: "6:00 PM"},  // FRI
    {day: 6, start: "11:00 AM", end: "1:00 PM"},  // SAT
  ],
  url: [
    {
      "local": "https://localhost:4200/",
      "production": "https://codeli-studio.com/"
    }
  ]
};
