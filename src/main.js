import Vue from 'vue'
import VueRouter from 'vue-router'
import LightBootstrap from './light-bootstrap-main'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Firebase
import * as firebaseui from 'firebaseui'
import firebase from 'firebase'
import auth from 'firebase'
import vuefire from 'vuefire'

// Plugins
import App from './App.vue'

// router setup
import routes from './routes/routes'

// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(BootstrapVue)
Vue.use(firebaseui)
Vue.use(firebase)
Vue.use(auth)
Vue.use(vuefire)
Vue.use(require('vue-moment'))

var config = {
  apiKey: "AIzaSyC27wM4IhcA2cTj4oYd8CN-6h82QC9-6To",
  authDomain: "posturemom-app.firebaseapp.com",
  databaseURL: "https://posturemom-app.firebaseio.com",
  projectId: "posturemom-app",
  storageBucket: "posturemom-app.appspot.com",
  messagingSenderId: "1075720467108"
};
firebase.initializeApp(config);
const settings = {
  timestampsInSnapshots: true
};
const firestore = firebase.firestore();
firestore.settings(settings);

Vue.config.productionTip = false

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
