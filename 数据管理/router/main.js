import router from '@/router'
const vm=new Vue({
    render: h => h(App),
    router,
}).$mount('#app')