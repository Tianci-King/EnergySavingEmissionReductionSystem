import {defineStore} from "pinia";
import {ref} from "vue";

const mainStore = defineStore(
    "main",
    () => {
        const trade = ref("");

        const setTrade = (value: string) => {
            trade.value = value;
        }

        return {
            trade,
            setTrade,
        }
    }
);