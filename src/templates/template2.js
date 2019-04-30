import {registry} from '../view_controller'

export default () => {
  const div = document.createElement('div');
 const regis=`
 <div>
   <div class="col-xs-6 col-lg-6 log">
     <input id="email" class="col-xs-12 col-lg-12 login_area measure fontsize" type="email"
       placeholder="    Email                                                                              📧">
   </div>
   <div class="col-xs-6 col-lg-6 log">
     <input id="contraseña" class="col-xs-12 col-lg-12 login_area measure fontsize" type="password"
       placeholder="   Password                                                                          &#128274 ">
   </div> 
   <div class="button">
     <button class="col-xs-6 col-lg-6 btn fontsize" id="register" type="button">Sumit</button>
   </div>
   </div>`;
   div.innerHTML= regis;
   
   const btnRegis = div.querySelector('#register');
   btnRegis.addEventListener('click',registry);
   return div;
  }