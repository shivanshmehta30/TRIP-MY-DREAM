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

// Material Select Initialization
$(document).ready(function() {
$('.mdb-select').materialSelect();
});

$("div[id^='myModal']").each(function(){
  
  var currentModal = $(this);
  
  //click next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
  });
  
  //click prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
  });

});
