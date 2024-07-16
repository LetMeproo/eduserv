// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9NQHqbVnPEXJYtHxb1TTq5sEyz4_oNh0",
    authDomain: "logen-example.firebaseapp.com",
    projectId: "logen-example",
    storageBucket: "logen-example.appspot.com",
    messagingSenderId: "20788949770",
    appId: "1:20788949770:web:842b68dab07852e1b640f3"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to show message
function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}

// Check if user is already signed in
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, redirect to homepage
        window.location.href = 'homepage.html';
    }
});

// Login button click event
const loginButton = document.getElementById('login');
loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    alert ("حسابك غير موجود ")
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Try to sign in user with provided credentials
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in successfully, redirect to homepage
        const user = userCredential.user;
        window.location.href = 'homepage.html';
    })
    .catch((error) => {
        if (error.code === 'auth/user-not-found') {
            showMessage('User not found. Please register first.');
        } else {
            const errorCode = error.code;
            const errorMessage = error.message;
            showMessage(errorMessage);
        }
    });
});

// Register button click event
const registerButton = document.getElementById('register');
registerButton.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // User created successfully, redirect to homepage
        const user = userCredential.user;
        window.location.href = 'succes.html';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage(errorMessage);
    });
});
