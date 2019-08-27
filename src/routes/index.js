import IndexPage from '../components/IndexPage.vue';
import Settings from '../components/Settings.vue';
import LoginPage from '../components/LoginPage.vue';
import Logout from '../components/Logout.vue';
import About from '../components/AboutPage.vue';
import Help from '../components/HelpPage.vue';
import PrivacyPolicy from '../components/PrivacyPolicyPage.vue';

export default[
  {path: '/dashboard', name: 'index', component: IndexPage},
  {path: '/settings', name: 'settings', component: Settings},
  {path: '/', name: 'loginpage', component: LoginPage},
  {path: '/logout', name: 'logout', component: Logout},
  {path: '/about', name: 'about', component: About},
  {path: '/help', name: 'help', component: Help},
  {path: '/privacypolicy', name: 'privacypolicy', component: PrivacyPolicy},
]
