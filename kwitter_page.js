var firebaseConfig = {
    apiKey: "AIzaSyCxVAzpDpqM9M42oeKDlgy8JrfhQWaAI3Y",
    authDomain: "let-s-chat-web-app-ee8a5.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-ee8a5-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-ee8a5",
    storageBucket: "let-s-chat-web-app-ee8a5.appspot.com",
    messagingSenderId: "764005102573",
    appId: "1:764005102573:web:3f49a080d4bfd25e01ede4",
    measurementId: "G-ZDC8B44RXE"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = "";
  room_name = "";

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
  }