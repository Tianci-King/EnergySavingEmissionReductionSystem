import * as exp from "constants";
import {defineStore} from "pinia";
import {ref} from "vue";

const adviceStore = defineStore(
    "advice", () => {
        const advice1 = ref([
            "介绍分析方法 1",
            "介绍分析方法 2"
        ]);

        const advice2 = ref([
            "介绍分析方法 3",
            "介绍分析方法 4"
        ]);

        const advice3 = ref([
            "介绍分析方法 5",
            "介绍分析方法 6"
        ]);

        const setAdvice1 = (advice: string[]) => {
            advice1.value = advice;
        }

        const setAdvice2 = (advice: string[]) => {
            advice2.value = advice;
        }

        const setAdvice3 = (advice: string[]) => {
            advice3.value = advice;
        }

        return {
            advice1,advice2,advice3,
            setAdvice1,setAdvice2,setAdvice3
        }
    }, {
        persist: true
    }
);

export default adviceStore;