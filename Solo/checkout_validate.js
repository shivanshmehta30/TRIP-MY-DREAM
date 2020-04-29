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

(function() {
  'use strict';

  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
