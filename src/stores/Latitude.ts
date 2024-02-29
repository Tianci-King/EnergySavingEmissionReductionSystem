import {defineStore} from "pinia";
import {ref} from "vue";

const latitudeStore = defineStore(
    "latitude",
    () => {
        const data1 = ref([
            {
                kind: '燃煤',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },
            {
                kind: '燃油',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },
            {
                kind: '天然气',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },
            {
                kind: '其他',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            }
        ]);

        const data2 = ref([
            {
                kind: '汽油',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },
            {
                kind: '柴油',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },
            {
                kind: '总计',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },
        ])

        const data3 = ref([
            {
                RawEnergy: '原煤',
                OutputEnergy: '原煤',
                ConversionAndRecovery: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },
            {
                RawEnergy: '洗精煤',
                OutputEnergy: '洗精煤',
                ConversionAndRecovery: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },
            {
                RawEnergy: '其他洗煤',
                OutputEnergy: '其他洗煤',
                ConversionAndRecovery: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },
        ])

        const data4 = ref([{
            kind: '购入电力',
            consumption: '',
            CarbonEmissions: 0,
            CarbonEmissionsFactors: '',
            MethaneEmissions: 0,
            MethaneEmissionsFactors: '',
            NitrousOxideEmissions: 0,
            NitrousOxideEmissionsFactors: '',
        },{
            kind: '购入热力',
            consumption: '',
            CarbonEmissions: 0,
            CarbonEmissionsFactors: '',
            MethaneEmissions: 0,
            MethaneEmissionsFactors: '',
            NitrousOxideEmissions: 0,
            NitrousOxideEmissionsFactors: '',
        },{
            kind: '售出电力',
            money: '',
            CarbonEmissions: 0,
            CarbonEmissionsFactors: '',
            MethaneEmissions: 0,
            MethaneEmissionsFactors: '',
            NitrousOxideEmissions: 0,
            NitrousOxideEmissionsFactors: '',
        },{
            kind: '售出热力',
            money: '',
            CarbonEmissions: 0,
            CarbonEmissionsFactors: '',
            MethaneEmissions: 0,
            MethaneEmissionsFactors: '',
            NitrousOxideEmissions: 0,
            NitrousOxideEmissionsFactors: '',
        },
        ])

        //差旅通勤
        const data5 = ref([{
            kind: '航空',
            money: '',
            CarbonEmissions: 0,
            CarbonEmissionsFactors: ''
        },{
            kind: '高铁',
            money: '',
            CarbonEmissions: 0,
            CarbonEmissionsFactors: ''
        },{
            kind: '火车',
            money: '',
            CarbonEmissions: 0,
            CarbonEmissionsFactors: ''
        },{
            kind: '市内交通费',
            money: '',
            CarbonEmissions: 0,
            CarbonEmissionsFactors: ''
        }
        ]);
        const data6 = ref([{
            kind: '自驾',
            number: '',
            CarbonEmissions: 0,
            CarbonEmissionsFactors: ''
        },{
            kind: '公共交通',
            number: '',
            CarbonEmissions: 0,
            CarbonEmissionsFactors: ''
        }
        ]);

        const data71 = ref([{
            "kind": "光伏",
            "InstalledCapacity(kw)": "",
            "SunshineOperatingHours": "",
            "CarbonEmissions": "",
            "CO2EmissionReduction(t)": 0
        },{
            "kind": "风电",
            "InstalledCapacity(kw)": "",
            "SunshineOperatingHours": "",
            "EmissionFactor": "",
            "CO2EmissionReduction(t)": 0
        }
        ])

        const data72 = ref([{
            "PowerGenerationMethod": "单向发电",
            "AverageTidalDifference(m)": "",
            "ReservoirAverageArea(km)": "",
            "CO2EmissionReduction(t)": ""
        },{
            "PowerGenerationMethod": "双向发电",
            "AverageTidalDifference(m)": "",
            "ReservoirAverageArea(km)": "",
            "CO2EmissionReduction(t)": ""
        }
        ])

        const data81 = ref([{
            "ForestArea": "",
            "AreaStorageCapacity": "",
            "BiomassExpansionFactor": "",
            "VolumeDensity": "",
            "CarbonContentRate": "",
            "CarbonSinkEmissionReduction": 0
        }])

        const data9 = ref([{
            "kind": '化肥使用过程',
            "Name": '消耗量(kg)',
            "Number": '',
            "Emissions": 0,
            "EmissionFactor": ''
        },{
            "kind": '翻耕碳排放',
            "Name": '翻耕面积(km²)',
            "Number": '',
            "Emissions": 0,
            "EmissionFactor": ''
        },{
            "kind": '农业灌溉',
            "Name": '灌溉面积(km²)',
            "Number": '',
            "Emissions": 0,
            "EmissionFactor": ''
        },{
            "kind": '农膜使用',
            "Name": '消耗量(kg)',
            "Number": '',
            "Emissions": 0,
            "EmissionFactor": ''
        },{
            "kind": '农药使用',
            "Name": '消耗量(kg)',
            "Number": '',
            "Emissions": 0,
            "EmissionFactor": ''
        },
        ])

        const setLatitude1 = (data: any) => {
            data1.value = data;
        };

        const setLatitude2 = (data: any) => {
            data2.value = data;

        }

        const setLatitude3 = (data: any) => {
            data3.value = data;
        }

        const setLatitude4 = (data: any) => {
            data4.value = data;
        }

        const setLatitude5 = (data: any) => {
            data5.value = data;
        }

        const setLatitude6 = (data: any) => {
            data6.value = data;
        }

        const setLatitude71 = (data: any) => {
            data71.value = data;
        }
        const setLatitude72 = (data: any) => {
            data72.value = data;
        }

        const setLatitude81 = (data: any) => {
            data81.value = data;
        }

        const setLatitude9 = (data: any) => {
            data9.value = data;
        }

        return {
            data1,
            setLatitude1,
            data2,
            setLatitude2,
            data3,
            setLatitude3,
            data4,
            setLatitude4,
            data5,data6,
            setLatitude5,setLatitude6,
            data71,data72,
            setLatitude71,setLatitude72,
            data81,
            setLatitude81,
            data9,
            setLatitude9
        };
    },
    {
        persist: true,
    }
);

export default latitudeStore;