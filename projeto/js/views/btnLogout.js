import {logout} from '../storage/login-usuario.js'

const btnLogout = document.querySelector('#btnLogout');

btnLogout.addEventListener('click', ()=> logout());