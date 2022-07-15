// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf0K5fJbGUU8Mul2vSnYYKYg3xi_MeEIU",
    authDomain: "kwitter-project-class-94.firebaseapp.com",
    databaseURL: "https://kwitter-project-class-94-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-class-94",
    storageBucket: "kwitter-project-class-94.appspot.com",
    messagingSenderId: "284145918206",
    appId: "1:284145918206:web:52dd1bca9a3e3f2f3005af"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function addroom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"add room name"
});
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
