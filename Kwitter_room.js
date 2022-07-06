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

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();



function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}