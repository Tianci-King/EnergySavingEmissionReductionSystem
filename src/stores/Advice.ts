import * as exp from "constants";
import {defineStore} from "pinia";
import {ref} from "vue";

const adviceStore = defineStore(
    "advice", () => {
        const advice1 = ref([
            "介绍分析方法 1",
            "介绍分析方法 2"
        ]);

        const setAdvice1 = (advice: string[]) => {
            advice1.value = advice;
        }

        return {
            advice1,
            setAdvice1
        }
    }
);

export default adviceStore;