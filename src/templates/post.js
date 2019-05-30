import {view_publish,delete_Notes} from "../controller/controller-firebase.js"
import{edit_Note,save_Note} from "../templates/accion-post.js"


export const getNotes = () => {
  
  const get_notes = (data)=>{
  const view_note =document.querySelector("#view_note");
  view_note.innerHTML="";
  data.forEach(doc => {
  const publish_note = document.createElement("div");
  publish_note.innerHTML =`
    <div class="col-xs-12 col-lg-12 box-post">
      <div class="col-xs-12 col-lg-12 box-remove">
          <h5 id="publishBy" class="col-xs-9 col-lg-9 h5">Publicado por ${doc.data.publishBy}</h5>
          <div id="deleteNote" class="col-xs-3 col-lg-3 img-remove">
              
              <button id="delete-${doc.id}" >eliminar</button>
          </div>
      </div>
      <div class="col-xs-12 col-lg-12 h5 post">
          <input id="note-${doc.id}" type="text" value="${doc.data.publishText}"/>
      </div>
      <div class="col-xs-12 col-lg-12 h5 edit">
          <img id="like-${doc.id}" src="image/heart.svg" alt="like">
          <img id="edit-${doc.id}" src="image/paper-plane.svg" alt="editar">
          <img class="hide-save" id="save-${doc.id}" src="image/save.svg" alt="guardar">
      </div>
    </div>` ;
  
  const btn_delete =  publish_note.querySelector(`#delete-${doc.id}`);
  btn_delete.addEventListener('click', ()=>{
    delete_Notes(doc.id); console.log("se hizo click")} );

  publish_note.querySelector(`#note-${doc.id}`).readOnly = true;  

  const btn_edit = publish_note.querySelector(`#edit-${doc.id}`);
  btn_edit.addEventListener('click', () => edit_Note(doc.id)); 

  const btn_save = publish_note.querySelector(`#save-${doc.id}`);
  btn_save.addEventListener('click', () => save_Note(doc.id));

  console.log(doc.id, " => ", doc.data); 
  view_note.appendChild(publish_note);
  });
} 
view_publish(get_notes); 
}