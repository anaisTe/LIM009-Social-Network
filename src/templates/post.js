import {delete_Notes,new_note_edit } from '../controller/controller-firebase.js'

export const getNotes = () => {
  // getNotesFirestore()
 
    firebase.firestore().collection("notes")
    .onSnapshot((querySnapshot) => {
      let publish_note="";
    querySnapshot.forEach(function(doc) {
      
      const view_note =document.querySelector("#view_note");
      //document.queryrySelector("#publishBy").innerHTML = doc.data().publishBy;
      //document.querySelector("#note").innerHTML = doc.data().publishText;
     publish_note +=`
      <div class="col-xs-12 col-lg-12 box-post">
        <div class="col-xs-12 col-lg-12 box-remove">
            <h5 id="publishBy" class="col-xs-9 col-lg-9 h5">Publicado por ${doc.data().publishBy}</h5>
            <div id="deleteNote" class="col-xs-3 col-lg-3 img-remove">
                
                <button id="delete-${doc.id}" >eliminar</button>
            </div>
        </div>
        <div class="col-xs-12 col-lg-12 h5 post">
            <input id="note-${doc.id}" type="text" value="${doc.data().publishText}"/>
        </div>
        <div class="col-xs-12 col-lg-12 h5 edit">
            <img id="like-${doc.id}" src="image/heart.svg" alt="like">
            <img id="edit-${doc.id}" src="image/paper-plane.svg" alt="editar">
            <img class="hide-save" id="save-${doc.id}" src="image/save.svg" alt="guardar">
        </div>
      </div>` ;
    view_note.innerHTML=publish_note;   
    
    const btn_delete = document.querySelector(`#delete-${doc.id}`);
    btn_delete.addEventListener('click', ()=>{
      delete_Notes(doc.id); console.log("se hizo click")} );

    document.querySelector(`#note-${doc.id}`).readOnly = true;  

    const btn_edit = document.querySelector(`#edit-${doc.id}`);
    btn_edit.addEventListener('click', (id) => {
      view_note.querySelector(`#note-${id}`).readOnly = false;
      view_note.querySelector(`#like-${id}`).style.display = 'none';
      view_note.querySelector(`#edit-${id}`).style.display = 'none';
      view_note.querySelector(`#save-${id}`).className += 'show-save';
    });    

    const btn_save = document.querySelector(`#save-${doc.id}`);
    btn_save.addEventListener('click', (id) => {
      view_note.querySelector(`#note-${id}`).readOnly = true;
      view_note.querySelector(`#like-${id}`).style.display = 'block';
      view_note.querySelector(`#edit-${id}`).style.display = 'block';
      view_note.querySelector(`#save-${id}`).className += 'hide-save';
    new_note_edit ();
  });    
    console.log(doc.id, " => ", doc.data());
    
  });
  })
 }

 
  

  
