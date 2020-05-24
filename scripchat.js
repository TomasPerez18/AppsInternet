// codigo de conexion a firebase
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAOjJh5tLTxrrSMMcmzg10hQLHAPJInAjk",
    authDomain: "chatapp-2a11f.firebaseapp.com",
    databaseURL: "https://chatapp-2a11f.firebaseio.com",
    projectId: "chatapp-2a11f",
    storageBucket: "chatapp-2a11f.appspot.com",
    messagingSenderId: "157134947168",
    appId: "1:157134947168:web:3304e879a09e45931a5405",
    measurementId: "G-PCW5869LNL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); 

  const db = firebase.firestore();  

  function renderChat(doc){
      let div = document.createElement('div');
      let divc = document.createElement('div');
      let divtp = document.createElement('div');
      let divcn = document.createElement('div');
      let divbr = document.createElement('div');
      let divtd = document.createElement('div');
      let divcon = document.createElement('div');
      let divs = document.createElement('div');
      div.setAttribute('class',"row");
      div.setAttribute('data-id', doc.id);
      divc.setAttribute('class', "content");
      divtp.setAttribute('class', "top-row");
      divcn.setAttribute('class', "chatname");
      divtd.setAttribute('class', "timedate");
      divbr.setAttribute('class', "bottom-row")
      divcon.setAttribute('class', "contactname");
      divs.setAttribute('class', "status");

      div.appendChild(divc);
      divc.appendChild(divtp);
      divc.appendChild(divbr);
      divtp.appendChild(divcn);
      divtp.appendChild(divtd);
      divbr.appendChild(divcon);
      divbr.appendChild(divs);
      //to.textContent = doc.data().to;
      //message.textContent = doc.data().message;
      divcn.textContent = doc.data().from;
      divcon.textContent = doc.data().message;
      divtd.textContent = doc.data().timestamp.toDate().toLocaleString();
      divs.textContent = "1"

      document.querySelector("body").appendChild(div);
  }

db.collection('chat').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderChat(doc);
    });
});

//------------------------------------------------------------
//Funcion para duplicar el div copy
function duplicate(){
    var str_html='';
   var deb =document.querySelector('.copy').innerHTML;
   str_html+=deb;
   console.log(str_html) //grabar en consola
   document.querySelector('body').innerHTML += str_html;

}
//funcion para activar efecto en tab de chat
function activetab(){
var tabestados = document.querySelectorAll('#bottom-line');
for (var i = 0; i<tabestados.length; i++){
tabestados[i].style.borderBottom = '3px solid green';
//console.log(tabestados[i]);
}
tabestados[0].style.borderBottom = '3px solid white';

};
//funcion para activar efecto en tab de estados
function activeestados(){
    var tabestados = document.querySelectorAll('#bottom-line');
    for (var i = 0; i<tabestados.length; i++){
    tabestados[i].style.borderBottom = '3px solid green';
    //console.log(tabestados[i]);
    }
    tabestados[1].style.borderBottom = '3px solid white';
    
};
//funcion para activar efecto en tab de llamadas
function activellamadas(){
    var tabestados = document.querySelectorAll('#bottom-line');
    for (var i = 0; i<tabestados.length; i++){
    tabestados[i].style.borderBottom = '3px solid green';
    //console.log(tabestados[i]);
    }
    tabestados[2].style.borderBottom = '3px solid white';
    
};
//funcion para ocultar el contenido de los chats    
function ocultarChats(){
    var chat = document.querySelectorAll('.copy');

        for(var i=0; i<chat.length; i++){
            chat[i].style.display="none";
        }
  } 

  //muestra el conetnido del div de chats
  function mostrarChats(){
    var showc = document.querySelectorAll('.copy');

        for(var i=0; i<showc.length; i++){
            showc[i].style.display="block";
        }
} 
// oculta el contenido de los estados
function ocultarEstados(){
    var chat = document.querySelectorAll('.estado');

        for(var i=0; i<chat.length; i++){
            chat[i].style.display="none";
        }
  } 

   //muestra el conetnido del div de estados
  function mostrarEstados(){
    var showc = document.querySelectorAll('.estado');

        for(var i=0; i<showc.length; i++){
            showc[i].style.display="block";
        }
} 

function ocultarLlamadas(){
    var chat = document.querySelectorAll('.llamada');

        for(var i=0; i<chat.length; i++){
            chat[i].style.display="none";
        }
  } 

  //Esta función muestra el DIV Chats
  function mostrarLlamadas(){
    var showc = document.querySelectorAll('.llamada');

        for(var i=0; i<showc.length; i++){
            showc[i].style.display="block";
        }
} 
//ejectuta las funciones necesarias unicamente para mostrar el contenido del tab de chat
function showonlychat(){
    activetab();
    mostrarChats();
    ocultarLlamadas();
    ocultarEstados();
}
//ejectuta las funciones necesarias unicamente para mostrar el contenido del tab de estados
function showonlyestados(){
    activeestados();
    ocultarChats();
    ocultarLlamadas();
    mostrarEstados();
}
//ejectuta las funciones necesarias unicamente para mostrar el contenido del tab de llamadas
function showonlyLlamadas(){
    activellamadas();
    mostrarLlamadas();
    ocultarChats();
    ocultarEstados();
}

//funcion scroll para pantalla
/*
function scrollfunction(){
    var header;
    header =  document.querySelector('.header');
    var menu;
    menu =  document.querySelector('.menu');
    var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
      // downscroll code
      header.style.position = '';
      header.style.top = null;
      menu.style.top = 0;
   } else {
      // upscroll code
      header.style.position = 'sticky';
      header.style.top = 0;
      menu.style.top = "40px";
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}; */