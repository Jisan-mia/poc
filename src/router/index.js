import { computed } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex';
import AppLayout from '../layouts/AppLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import store from '../store';
const lazyLoadExam = (view) => () => import(`@/views/Exam Management/${view}.vue`);
const lazyLoadLogin = (view) => () => import(`@/views/Login Register/${view}.vue`);

const routes = [
    // general routes
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
    { 
        path: "/:pathMatch(.*)*", 
        name: 'PageNotFound',
        component: () => import('@/components/ui/PageNotFound.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: lazyLoadLogin('Login'),
        meta: {
            layout: AuthLayout
        }
    },
    
    {
        path: '/logout',
        name: 'Logout',
        component: () => import('@/views/Logout.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: lazyLoadLogin('Register'),
        meta: {
            layout: AuthLayout
        }
    },

    // student routes 
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: lazyLoadExam('Dashboard'),
        meta: {
            layout: AppLayout, 
            requireLogin: true
        }
    },
    {
        path: '/exam-pack',
        name: 'Exam_Pack',
        component: lazyLoadExam('Exam_Pack'),
        meta: {
            layout: AppLayout, 
            requireLogin: true
        }
    },
    {
        path: '/exam-pack/:packId',
        name: 'ExamUnpack',
        component: lazyLoadExam('ExamUnpack'),
        props: true,
        meta: {
            layout: AppLayout, 
            requireLogin: true
        }
    },
    {
        path: '/exam/:id',
        name: 'ExamPage',
        component: lazyLoadExam('ExamPage'),
        props: true,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/result/:examId',
        name: 'ViewDownloadComp',
        component: lazyLoadExam('ViewDownloadComp'),
        meta: {
            layout: AppLayout, 
            requireLogin: true
        }
    },
    
    {
        path: '/reporting',
        name: 'Reporting',
        component: lazyLoadExam('Reporting'),
        meta: {
            layout: AppLayout, 
            requireLogin: true
        }
    },
    {
        path: '/reporting/:examId',
        name: 'SpecificExamReport',
        component: lazyLoadExam('SpecificExamReport'),
        meta: {
            layout: AppLayout, 
            requireLogin: true
        }
    },
    

    {
        path: '/edit-profile',
        name: 'EditProfile',
        component: lazyLoadExam('EditProfile'),
        meta: {
            layout: AppLayout, 
            requireLogin: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     const isAuthenticated = false;
//     const loginViews = () => to.name === 'Login' || to.name === 'Register' || to.name === 'LoginRegister'
//     if (!loginViews() && !isAuthenticated) next({ name: 'LoginRegister' })
//     else next()
// })

router.beforeEach((to, from, next) => {
    const isAuthenticated = computed(() => store.state.userState.user.isAuthenticated)
    
    if (to.matched.some(record => record.meta.requireLogin) && !isAuthenticated.value) {
        next('/')
    } else {
        next()
    }
})

export default router