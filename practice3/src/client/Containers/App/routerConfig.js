import Shop from './components/shop'
import Info from './components/info'
const routers = [
    {
        path:'/shop',
        name:"购物",
        component:Shop,
        exact:false,
    },
    {
        path:'/info',
        name:"消息",
        component:Info,
        exact:false,
    },
]
export default routers;