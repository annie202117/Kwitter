
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBaMzl7ZqsGj4VUXDYUS2mfwsXIER-eeic",
      authDomain: "kwitter-e39ee.firebaseapp.com",
      projectId: "kwitter-e39ee",
      storageBucket: "kwitter-e39ee.appspot.com",
      messagingSenderId: "678709286764",
      appId: "1:678709286764:web:68b45dd6da6a6461148549"
    };

    // Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name -" + Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
   
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) 
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.Location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "kwitter.html";
}

