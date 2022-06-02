// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdssLy-pDDxtfr5BgiFwWBDvNmmFK3q_k",
    authDomain: "letschat-web-app---four.firebaseapp.com",
    databaseURL: "https://letschat-web-app---four-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app---four",
    storageBucket: "letschat-web-app---four.appspot.com",
    messagingSenderId: "897242043262",
    appId: "1:897242043262:web:3c3faea9fa325e9d8d992f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();