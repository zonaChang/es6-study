import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import DynamicRouter from '@/pages/dynamicRouter/DynamicRouter';
import DynamicMoreParams from '@/pages/dynamicRouter/DynamicMoreParams';
import Image from "@/pages/innerRouter/Image";
import Title from "@/pages/innerRouter/Title";
import InnerRouter from "@/pages/innerRouter/InnerRouter";
import ScriptRouter from "@/pages/scriptRouter/ScriptRouter";
import OriginPage from "@/pages/scriptRouter/OriginPage";
import NamePage from "@/pages/namedRouterView/NamePage";
import NameOriginPage from "@/pages/namedRouterView/NameOriginPage";
import NameView from "@/pages/namedRouterView/NameView";

Vue.use(Router)

export default new Router({

  // hash, history
  mode:"history", //指定路由的格式， 默认为hash格式（路径中带有#）； 指定为history则表示使用传统的url格式
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    },{
      // 动态参数（:参数名）
      path:"/goods/:name",
      name:"DynamicRouter",
      component: DynamicRouter
    },{
      // 多参数动态路由
      path:"/goods/:name/:type",
      name:"DynamicMoreParams",
      component: DynamicMoreParams
    },{
      path:"/router/inner",
      name:"InnerRouter",
      component:InnerRouter,
      //子组件为一个数组
      children:[
        {
          // 子组件path不能以"/"开头， 否则为跟目录下的title
          path:"title",
          name:"Title",
          component:Title
        },{
          // 子组件path不能以"/"开头， 否则为跟目录下的title
          path:"image",
          name:"Image",
          component:Image
        }
      ]
    },{
      path:"/scriptRouter",
      name:"ScriptRouter",
      component:ScriptRouter
    },{
      path:"/originPage",
      name:"OriginPage",
      component:OriginPage
    },{
      path:"/name/namePage/:type",
      name:"NamePagea",
      component:NamePage
    },{
      path:"/name/nameOriginPage",
      name:"NameOriginPagea",
      component:NameOriginPage
    },{
      path:"/name/nameViewx",
      name:"NameView",
      components:{
        default:NameView,
        title:Title,
        image:Image,
      }
      // component: NameView
    }
  ]
})
