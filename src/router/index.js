import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/homePage.vue';
import LoginPage from '@/components/loginPage.vue';
import UserRegistrationPage from '@/components/userRegPage.vue';
import AdminPage from '@/components/adminPage.vue';
import BlogPage from '@/components/blogPage.vue';
import SoftwareListingPage from '@/components/sListing.vue';
import SoftwareOwnerRegistrationPage from '@/components/sOwnerReg.vue';
import SoftwareUsabilityPage from '@/components/sUsability.vue';
import UserProblemSubmissionPage from '@/components/userProbSub.vue';
import UserProfilePage from '@/components/userProfile.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: UserRegistrationPage },
  { path: '/admin', name: 'AdminPanel', component: AdminPage },
  { path: '/blog', name: 'Blog', component: BlogPage },
  { path: '/software-listing', name: 'SoftwareListing', component: SoftwareListingPage },
  { path: '/software-owner-registration', name: 'SoftwareOwnerRegistration', component: SoftwareOwnerRegistrationPage },
  { path: '/software-usability', name: 'SoftwareUsability', component: SoftwareUsabilityPage },
  { path: '/submit-problem', name: 'SubmitProblem', component: UserProblemSubmissionPage },
  { path: '/user-profile', name: 'UserProfile', component: UserProfilePage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
