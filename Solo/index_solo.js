


var firebaseConfig = {
    apiKey: "AIzaSyDbIBi3x2VEjleSkuJmNsKSQ221HpRLrrs",
    authDomain: "tripmydreams-5c0a4.firebaseapp.com",
    databaseURL: "https://tripmydreams-5c0a4.firebaseio.com",
    projectId: "tripmydreams-5c0a4",
    storageBucket: "tripmydreams-5c0a4.appspot.com",
    
    messagingSenderId: "1025397787645",
    appId: "1:1025397787645:web:0edc890047c109fb982794",
    measurementId: "G-5JQMR09073"
  };

  // firebase.initializeApp(firebaseConfig);
 
  

const clickHandler = () =>  {

  var a = document.getElementsByClassName(".md-form .mdb-select .colorful-select .dropdown-primary").value;
  
  console.log(a);
  
  var b = document.getElementsByClassName(".md-form .mdb-select .colorful-select .dropdown-primary").value;
  var c = document.getElementsByClassName("card-title").value;

  var database = firebase.database();

  // var newData = [{
  //  No_of_days : "2-5days",
  //   Budget: "5-25k",
  //   Location : "Ladakh"},
  //   {No_of_days : "7-10days",
  //   Budget: "25-50k",
  //   Location : "Ladakh"},
  //   {
  //     No_of_days : "10-15days",
  //   Budget: "50k-1L",
  //   Location : "Ladakh"
  //   }]

    //console.log(newData[0]);


  console.log('asd');
  console.log(database);
  var ref = database.ref("user");
  var usersRef = ref.child("shibumehta1994");

//  if(document.getElementById("a")){
//   usersRef.push(newData[0]);
//  }
//  if(document.getElementById("b")){
//   usersRef.push(newData[1]);
//  }
//  if(document.getElementById("c")){
//   usersRef.push(newData[2]);
//  }
    
usersRef.set({
  Details: {
    No_of_days: "7-10days",
    Budget: "25-50k",
    Location : "Ladakh"
  }
  
});
console.log(usersRef);

window.open("http://127.0.0.1:8081/Solo/checkout.html","_self")
}
