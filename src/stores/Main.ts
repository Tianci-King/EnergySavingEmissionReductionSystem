import {defineStore} from "pinia";
import {ref} from "vue";

const mainStore = defineStore(
    "main",
    () => {
        const trades = ref("能源行业");

        //石油和天然气开采业 | 农副食品加工业 | 交通运输、仓储及邮电通迅业 | 农林牧渔水利业 | 建筑行业 |黑色金属矿采选业
        const trade = ref("石油和天然气开采业");

        const latitudeList = ref([]);

        const setTrades = (value: string) => {
            trades.value = value;
        }

        const setTrade = (value: string) => {
            trade.value = value;
        }

        const setLatitudeList = (value: any) => {
            latitudeList.value = value;
        }

        return {
            trades,
            setTrades,
            trade,
            setTrade,
            latitudeList,
            setLatitudeList
        }
    },
    {
        persist: true,
    }
);

export default mainStore;