// 封装分类相关数据代码
import {ref,onMounted}from 'vue'
import {getCategoryAPI} from '@/apis/category'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router';


 export function userCategory(){
    const categoryData = ref({});
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)

    categoryData.value = res.result
    }

    onMounted(() => getCategory())


    onBeforeRouteUpdate((to)=>{
    getCategory(to.params.id)

    })

    return{
        categoryData
    }


 }

