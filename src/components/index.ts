// 把components下的组件进行全局注册
// 通过插件的方式
import ImageView from './ImgView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin = {
    install(app:any){
        // app.component('组件名字'，组件配置对象)
        app.component('XTXSku',Sku)
        app.component('XTXImgView',ImageView)
    }
}