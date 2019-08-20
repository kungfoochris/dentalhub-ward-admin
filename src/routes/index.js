import IndexPage from '../components/IndexPage.vue';
import Settings from '../components/Settings.vue';
import LoginPage from '../components/LoginPage.vue';
import Logout from '../components/Logout.vue';

export default[
  {path: '/dashboard', name: 'index', component: IndexPage},
  {path: '/settings', name: 'settings', component: Settings},
  {path: '/', name: 'loginpage', component: LoginPage},
  {path: '/logout', name: 'logout', component: Logout},
]
