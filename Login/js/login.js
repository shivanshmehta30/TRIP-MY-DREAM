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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;

  const onSigning = function(event){
      event.preventDefault();
      event.stopPropagation();
      var email = $("#first-name").val();
      var password = $("#pass").val();
      if(email != "" && password != "")
      {
          var result = firebase.auth().signInWithEmailAndPassword(email,password);
         console.log(result);
         //console.log("dddd");
          result.catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message:"+ errorMessage);
          });

      }
      else
      {
          window.alert("Sorry.Please fill out all fields.");

      }

      
  };
  const logout = (event) => {
    firebase.auth().signOut().then(function(){
        console.log('log out');
        window.location.href = "/Login/login.html";
    });
      
  };

  const resetss=function(event)
  {
    
    event.preventDefault();
    event.stopPropagation();
    var email = $("#email").val();
    if(email!="")
    {
      firebase.auth().sendPasswordResetEmail(email).then(function(){
        window.alert("Email Sent to you please check and reset password");
      }).catch(function(error){
        var errorCode=error.code;
          var errorMessage=error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message:"+ errorMessage);
      });
    }
    else
    {
      window.alert("Enter email id");
    }
  };

  const signUp=function(event)
  {
    event.preventDefault();
    event.stopPropagation();
    var email = $("#email").val();
    var password = $("#pass").val();
    var cpassword=$("#cpass").val();
    if(email != "" && password != "" && cpassword!="")
    {
        if(password==cpassword)
        {
            var result = firebase.auth().createUserWithEmailAndPassword(email,password);
       console.log(result);
       console.log("dddd");
       window.alert("Registered");
        result.catch(function(error){
          var errorCode=error.code;
          var errorMessage=error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message:"+ errorMessage);
        });

        }
        else
        {
            window.alert("Password do not match with confirm password");
        }
    }
    else
    {
        window.alert("Sorry.Please fill out all fields.");
    }

    
  };
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.location.href = "./boaringpage/boardingpage.html";
//     auth.signout().then(() => {
//         console.log('user signed out');
//     });
// });