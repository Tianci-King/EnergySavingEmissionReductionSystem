import {defineStore} from "pinia";
import {ref} from "vue";

const analysisStore = defineStore(
    "analysis", () => {
        const selectKey = ref("1");

        const data = ref([
            {
                decision: 1,
                technicalBenefit: 1,
                economiesOfScale: 1,
                comprehensiveBenefits: 1,
                validity: "DEA强有效",
                Kind: "规模报酬固定"
            },
        ]);

        const radarData = ref({
            indicator: [
                { name: '2023-1', max: 1 },
                { name: '2023-2', max: 1 },
                { name: '2023-3', max: 1 },
                { name: '2023-4', max: 1 },
                { name: '2023-5', max: 1 },
            ],
            data: [
                {
                    value: [0.9,0.7,0.2,0.4,0.1],
                    name: '技术效益'
                },
                {
                    value: [0.3, 0.7, 0.1, 0.9, 0.5],
                    name: '规模效益'
                },
                {
                    value: [0.2, 0.8, 0.4, 0.6, 0.1],
                    name: '综合效益'
                },
            ]
        });

        //预测
        const detectData = ref({
            legendData: ["固定燃烧","移动燃烧","电热间排放","能源加工转换","差旅通勤","新能源减排","土地利用碳汇","农林牧渔业"],
            xAxisData: [1,2,3,4,5,6,7,8,9,10],
            value: [
                [7, 12, 27, 22, 15, 9, 29, 20, 6, 26],
                [10, 25, 18, 7, 29, 14, 23, 16, 5, 30],
                [28, 6, 15, 20, 9, 26, 11, 17, 22, 13],
                [28, 6, 15, 20, 9, 26, 11, 17, 22, 13],
                [28, 6, 15, 20, 9, 26, 11, 17, 22, 13],
                [28, 6, 15, 20, 9, 26, 11, 17, 22, 13],
                [28, 6, 15, 20, 9, 26, 11, 17, 22, 13],
                [28, 6, 15, 20, 9, 26, 11, 17, 22, 13]
            ]
    });

        const setSelectkey = (value: string) => {
            selectKey.value = value;
        }

        const setData = (value: any) => {
            data.value = value;
        }

        const setRadarData = (value: any) => {
            radarData.value = value;
        }

        const setDetectData = (value: any) => {
            detectData.value = value;

        }

        return {
            selectKey,
            setSelectkey,
            data,
            setData,
            radarData,
            setRadarData,
            detectData,
            setDetectData,
        }
    },
    {
        persist: true,
    }
);

export default analysisStore;