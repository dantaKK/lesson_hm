import { defineStore } from "pinia";
// 关键数据要限制类型
import {ref} from 'vue'

export const useHomeStore = defineStore('home', () => {

    const topBarState=ref([
        {
            title: "充值中心",
            icon: "gold-coin",
            color: "#ffc001",
        },
        // {
        //     title: "天天抽红包",
        //     icon: "invitation",
        //     color: "#ff4444",
        // },
        {
            title: "券红包",
            icon: "coupon",
            color: "#FF69B4",
        },
        
        {
            title: "试用领取",
            icon: "gift",
            color: "#ff4444",
             badge: '试大牌'
        },
        {
            title: "抖音超市",
            icon: "shopping-cart",
            color: "#00FF7F",
        },
        {
            title:"足迹",
            icon:"star",
            color:"#00FF7F"
           
        }
    ])

    const newprodects = ([
        {
            image:''
           
        },
        {
            image:''
        },
        {
            image:''
        }
    ])

    return {
        topBarState,
        newprodects
    }
})