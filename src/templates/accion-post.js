export const edit_Note = (id) => {
    document.querySelector(`#note-${id}`).readOnly = false;
    document.querySelector(`#like-${id}`).style.display = 'none';
    document.querySelector(`#edit-${id}`).style.display = 'none';
    document.querySelector(`#save-${id}`).className += 'show-save';
   } 
   
export const save_Note = (id) => {
    document.querySelector(`#note-${id}`).readOnly = true;
    document.querySelector(`#like-${id}`).style.display = 'block';
    document.querySelector(`#edit-${id}`).style.display = 'block';
    document.querySelector(`#save-${id}`).className += 'hide-save';
    const note_updated = document.querySelector(`#note-${id}`).value;
    firebase.firestore().collection("notes").doc(id).update({
      publishText: note_updated
    });
   }