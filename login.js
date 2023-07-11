  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCrueC5ZyxvYwTd821Jh2FjZgymb_F8EPQ",
    authDomain: "signup-61bb8.firebaseapp.com",
    projectId: "signup-61bb8",
    storageBucket: "signup-61bb8.appspot.com",
    messagingSenderId: "1063608895434",
    appId: "1:1063608895434:web:42bb4bf9bade6326623133"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();


  document.getElementById("sig").addEventListener('click', () => {
    //   const auth = getAuth();
    var email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        alert("signUp succeefully")
        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert("verification code sent")
          });
        const user = userCredential.user;
        
        setTimeout(() => {
          window.location.href = "./first.html"
        }, 3000);

      })
      .catch((error) => {
        alert("You entering something wrong in input field")
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  })

    // siiiiiiiiiiiiiiiiiiiiiiiiigggggggggggggnnnnn   innnnnnnnnnnnnnnnnnnnnnnnn

    document.getElementById("btn").addEventListener('click', () => {
        var email5 = document.getElementById("Email1").value;
        var password5 = document.getElementById("password1").value;
  
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email5, password5)
          .then((userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified == true) {
              window.location.href = "./quiz.html"
            }
            else {
              alert("plz check your email and verify")
            }
          })
          .catch((error) => {
            alert("singup first")
            window.location.href = "./singup.html"
            const errorCode = error.code;
            const errorMessage = error.message;
          })
      });
    


      document.getElementById("goog").addEventListener("click", (e) => {
  
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            window.location.href = './quiz.html'
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
  
      })
  
