import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { getAnalytics } from "firebase/analytics";
import firebaseApp from './utility/FirebaseApp';

const analytics = getAnalytics(firebaseApp());

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
