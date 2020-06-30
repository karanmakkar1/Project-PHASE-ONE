
 
     //let button = document.querySelector("button");
     
     //button.onclick = addtomyroutine;
    /*  let textentry = document.querySelector("input");
 let AddtoList = document.querySelector('input + input');
 let body = document.querySelector('body'); */






 function addtomyroutine()
  {
    

    let txt = document.getElementById('txt').value,
     newactivityNode = document.getElementById("newactivity"),
     liNode = document.createElement("Li"),
     textNode = document.createTextNode(txt);

     liNode.appendChild(textNode);
     newactivityNode.appendChild(liNode);
     
    
    }

    
       function deleteLI() {
         let myactivities = document.getElementById("new activity")
         let body = document.querySelector('body');
          myactivities[txt].parentNode.removeChild(myactivities[txt]);

          deleteLI.textcontent = 'delete';
          deleteLI.onclick = addtomyroutine;
          newactivityNode.appendChild(myactivities);
    }