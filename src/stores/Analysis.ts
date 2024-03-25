import {defineStore} from "pinia";
import {ref} from "vue";

const analysisStore = defineStore(
    "analysis", () => {
        const sum = ref();
        const setSum = (value: any) => {
            sum.value = value;
        }

        const selectKey = ref("1");

        //统计
        const cardData = ref([
            {
                sum: 13640,
                abovePeer: "高于同行",
                percent: 30
              },
              {
                sum: 10250,
                abovePeer: "低于同行",
                percent: -30
              },
              {
                sum: 560,
                abovePeer: "与同行持平",
                percent: 0
              },
              {
                sum: 13640,
                abovePeer: "高于同行",
                percent: 30
              },
        ]);

        const data1 = ref({
            pieData: [
                { value: 0, name: '固定燃烧' },
                { value: 0, name: '移动燃烧' },
                { value: 0, name: '电热间排放' },
                { value: 0, name: '能源加工转换' },
                { value: 0, name: '差旅通勤' },
                { value: 0, name: '农林牧鱼业'}
            ]
        });

        const data2 = ref({
            optionData: [
            //    '总计排放',
            //     '固定燃烧',
            //     '移动燃烧',
            //     '电热间排放',
            //     '能源加工转换',
            //     '差旅通勤',
            //     '农林牧渔业',
            //     '新能源减排',
            //     '土地利用碳汇'
            ],
            barData:  []//[3100, 1200, 300, 200, 900, 300, 200, 100, 100]
        });

        const data31 = ref({
            pieData: [
            //     { value: 7, name: '能源加工转换' },
            //     { value: 21, name: '工艺排放' },
            //     { value: 12, name: '移动燃烧' },
            //     { value: 60 , name: '固定燃烧' }
            ]
        });

        const data32 = ref({
            pieData: [
            //     { value: 12, name: '电热间排放' },
            //     { value: 15, name: '差旅通勤' }
            ]
        });

        const data33 = ref({
            pieData: [
            //     { value: 49, name: '新能源减排' },
            //     { value: 51, name: '土地利用碳汇' },
            ]
        });

        //DEA
        const data = ref({
            projections: []
        });
        
        const dataTable = ref([]);

        const radarData = ref({
            indicator: [
                { name: '', max: 1 },
                { name: '', max: 1 },
                { name: '', max: 1 },
                { name: '', max: 1 },
                { name: '', max: 1 },
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

        const radarData2 = ref({
            indicator: [
                { name: '', max: 1 },
                { name: '', max: 1 },
                { name: '', max: 1 },
                { name: '', max: 1 },
                { name: '', max: 1 },
            ],
            data: [
                {
                    value: [0.9,0.7,0.2,0.4,0.1],
                    name: ''
                },
                {
                    value: [0.3, 0.7, 0.1, 0.9, 0.5],
                    name: ''
                },
                {
                    value: [0.2, 0.8, 0.4, 0.6, 0.1],
                    name: ''
                },
            ]
        });

        //预测
        const detectData = ref({  //
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

        const sankeyData = ref({  //桑基图
            "data": [
                {
                    "name": "柴油"
                },
                {
                    "name": "通勤差旅"
                },
                {
                    "name": "生产过程直接排放"
                },
                {
                    "name": "焦炭"
                },
                {
                    "name": "天然气"
                },
                {
                    "name": "固定燃烧"
                },
                {
                    "name": "电力热力"
                },
                {
                    "name": "原煤"
                },
                {
                    "name": "能源加工转换"
                },
                {
                    "name": "精洗煤"
                },
                {
                    "name": "汽油"
                },
                {
                    "name": "工艺排放"
                },
                {
                    "name": "移动燃烧"
                }
            ],
            "links": [
                {
                    "source": "生产过程直接排放",
                    "target": "固定燃烧",
                    "value": 1100
                },
                {
                    "source": "生产过程直接排放",
                    "target": "移动燃烧",
                    "value": 730
                },
                {
                    "source": "生产过程直接排放",
                    "target": "能源加工转换",
                    "value": 680
                },
                {
                    "source": "生产过程直接排放",
                    "target": "电力热力",
                    "value": 630
                },
                {
                    "source": "生产过程直接排放",
                    "target": "通勤差旅",
                    "value": 530
                },
                {
                    "source": "生产过程直接排放",
                    "target": "固定燃烧",
                    "value": 1630
                },
                {
                    "source": "生产过程直接排放",
                    "target": "移动燃烧",
                    "value": 680
                },
                {
                    "source": "生产过程直接排放",
                    "target": "工艺排放",
                    "value": 1080
                },
                {
                    "source": "固定燃烧",
                    "target": "原煤",
                    "value": 530
                },
                {
                    "source": "固定燃烧",
                    "target": "精洗煤",
                    "value": 1630
                },
                {
                    "source": "固定燃烧",
                    "target": "焦炭",
                    "value": 680
                },
                {
                    "source": "固定燃烧",
                    "target": "天然气",
                    "value": 1080
                },
                {
                    "source": "移动燃烧",
                    "target": "汽油",
                    "value": 1003
                },
                {
                    "source": "移动燃烧",
                    "target": "柴油",
                    "value": 4000
                },
                {
                    "source": "移动燃烧",
                    "target": "原煤",
                    "value": 120
                }
            ]
        })

        const pieOption = ref({ //碳排放成本收益画像
            legend: {
                padding:30,
                bottom:9,
                borderRadius:50
            },
            series: [
                {
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '40%'],
                    label: {
                        position: 'inner',
                        fontSize: 14
                    },
                    emptyCircleStyle:{
                        color: 'rgb(123, 206, 238)'
                    },
                    labelLine: {
                        show: false
                    },
                    data: []
                },
                {
                    type: 'pie',
                    radius: ['45%', '60%'],
                    padAngle: 5,
                    itemStyle: {
                        borderRadius: "50%",
                    },
                    data: [
                        { value: 71900, name: '碳排放成本'},
                        { value: 84000, name: '碳汇收益'},
                        { value: 12100, name: '碳成本净值' },
                    ]
                }

            ]
        })

        const setSelectkey = (value: string) => {
            selectKey.value = value;
        }

        const setData = (value: any) => {
            data.value = value;
        }

        const setRadarData = (value: any) => {
            radarData.value = value;
        }

        const setRadarData2 = (value: any) => {
            radarData2.value = value;
        }

        const setDetectData = (value: any) => {
            detectData.value = value;

        }

        const setSankeyData = (value: any) => {
            sankeyData.value = value;
        }

        const setData1 = (value: any) => {
            data1.value = value;
        }

        const setData2 = (value: any) => {
            data2.value = value;
        }

        const setData31 = (value: any) => {
            data31.value = value;
        }

        const setData32 = (value: any) => {
            data32.value = value;
        }

        const setData33 = (value: any) => {
            data33.value = value;
        }

        const setPieOption = (value: any) => {
            pieOption.value = value;
        }

        const setCardData = (value: any) => {
            cardData.value = value;
        }

        const setDataTable = (value: any) => {
            dataTable.value = value;
        }

        return {
            selectKey,
            setSelectkey,
            data,
            setData,
            radarData,radarData2,
            setRadarData,setRadarData2,
            detectData,
            setDetectData,
            data1,
            setData1,
            data2,
            setData2,
            data31,data32,data33,
            setData31,setData32,setData33,
            sankeyData,
            setSankeyData,
            pieOption,
            setPieOption,
            cardData,
            setCardData,
            sum,setSum,
            dataTable,setDataTable
        }
    },
    {
        persist: true,
    }
);

export default analysisStore;