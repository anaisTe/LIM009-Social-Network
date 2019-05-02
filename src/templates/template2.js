import{registry} from '../view_controller.js'

export default () => {
  
  const div2 = document.createElement('div');
 const regis=`
 <div>
  <div class="col-xs-12  col-sm-12 col-lg-12 icon-brain">
    <img class="col-xs-12 col-sm-12 col-lg-12 icon0" src="image/brain.png"/>
  </div>
   <div class="col-xs-12 col-sm-12 col-lg-12 log">
     <input id="email" class="col-xs-12 col-lg-12 login_area measure fontsize" type="email"
       placeholder="    Email                                                                              📧">
   </div>
   <div class="col-xs-12 col-sm-12 col-lg-12 log">
     <input id="contraseña" class="col-xs-12 col-lg-12 login_area measure fontsize" type="password"
       placeholder="   Password                                                                          &#128274 ">
   </div> 
   <div class="button">
     <button class="col-xs-6 col-sm-6 col-lg-6 btn fontsize" id="register" type="button">Sumit</button>
   </div>
   </div>`;
   
div2.innerHTML = regis;

const new_user = div2.querySelector('#register');
 new_user.addEventListener('click',registry);

  return div2
}