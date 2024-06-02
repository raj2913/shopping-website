const firebaseConfig = {
  apiKey: "AIzaSyCk_kuwNoK7FtLsDyAggwmzA4hK5FdsNr0",
  authDomain: "contactform-2d236.firebaseapp.com",
  databaseURL: "https://contactform-2d236-default-rtdb.firebaseio.com",
  projectId: "contactform-2d236",
  storageBucket: "contactform-2d236.appspot.com",
  messagingSenderId: "456012479236",
  appId: "1:456012479236:web:2cf1916f90d5bf4d0b2e51",
  measurementId: "G-0R4NE0XCWC"
};
firebase.initializeApp(firebaseConfig);
var cont=firebase.database().ref('contactform');
document.getElementById('contact') .addEventListener("submit",submitform);

function submitform(e)
{
  e.preventDefault();
  var name=getElementVal("name");
  var email=getElementVal('email');
  var msg=getElementVal('msg');

  savemsg(name,email,msg);
  document.querySelector('.sent').style.display="block";

  setTimeout(() => {
      document.querySelector(".sent").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contact").reset();
  }
const savemsg=(name,email,msg) =>{
  var newcontact=cont.push();
  newcontact.set(
      {
          name:name,
          email:email,
          msg:msg,
      }
  );

};

const getElementVal=(id) => {
  return document.getElementById(id).value;
};