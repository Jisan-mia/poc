import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
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
        path: '/login-register',
        name: 'LoginRegister',
        component: () => import('@/views/LoginRegister.vue'),
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
            layout: AppLayout
        }
    },
    {
        path: '/exam-pack',
        name: 'Exam_Pack',
        component: lazyLoadExam('Exam_Pack'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/exam-pack/:packTitle',
        name: 'ExamUnpack',
        component: lazyLoadExam('ExamUnpack'),
        props: true,
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/exam/:examId',
        name: 'ExamPage',
        component: lazyLoadExam('ExamPage'),
        props: true,
    },
    
    {
        path: '/reporting',
        name: 'Reporting',
        component: lazyLoadExam('Reporting'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/reporting/:examId',
        name: 'SpecificExamReport',
        component: lazyLoadExam('SpecificExamReport'),
        meta: {
            layout: AppLayout
        }
    },

    {
        path: '/edit-profile',
        name: 'EditProfile',
        component: lazyLoadExam('EditProfile'),
        meta: {
            layout: AppLayout
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

export default router