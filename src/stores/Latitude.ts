import {defineStore} from "pinia";
import {ref} from "vue";

const latitudeStore = defineStore(
    "latitude",
    () => {
        const data1 = ref([
            {
                kind: '原煤',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },
            {
                kind: '洗精煤',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },
            {
                kind: '焦炭',
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
            },{
                kind: '汽油',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },{
                kind: '煤油',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },{
                kind: '柴油',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },{
                kind: '液化石油气',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },{
                kind: '煤制品',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },{
                kind: '液化天然气',
                consumption: '',
                CarbonEmissions: 0,
                CarbonEmissionsFactors: '',
                MethaneEmissions: 0,
                MethaneEmissionsFactors: '',
                NitrousOxideEmissions: 0,
                NitrousOxideEmissionsFactors: '',
            },{
                kind: '总计',
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
                RawEnergy: '',
                OutputEnergy: '',
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

        const data51 = ref([
            {
                type: 'CO₂逃逸排放',
                co2Emissions: 0, // replace with actual value
                ch4Emissions: 0, // replace with actual value
                n2oEmissions: 0, // replace with actual value
            },
            {
                type: 'CH₄逃逸排放',
                co2Emissions: 0, // replace with actual value
                ch4Emissions: 0, // replace with actual value
                n2oEmissions: 0, // replace with actual value
            },
            {
                type: 'CO₂回收',
                co2Emissions: 0, // replace with actual value
                ch4Emissions: 0, // replace with actual value
                n2oEmissions: 0, // replace with actual value
            },
            {
                type: 'CH₄回收',
                co2Emissions: 0, // replace with actual value
                ch4Emissions: 0, // replace with actual value
                n2oEmissions: 0, // replace with actual value
            },
            {
                type: '其他',
                co2Emissions: 0, // replace with actual value
                ch4Emissions: 0, // replace with actual value
                n2oEmissions: 0, // replace with actual value
            },
        ]);

        //差旅通勤
        const data61 = ref([{
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
        const data62 = ref([{
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
            "InstalledCapacity": "",
            "SunshineOperatingHours": "",
            "CarbonEmissions": 0,
            "CarbonEmissionsFactors": ""
        },{
            "kind": "风电",
            "InstalledCapacity": "",
            "SunshineOperatingHours": "",
            "CarbonEmissions": 0,
            "CarbonEmissionsFactors": ""
        }
        ])
        const data72 = ref([{
            PowerGenerationMethod: '',
            AverageTidalDifference: '',
            AverageReservoirArea: '',
            CO2EmissionReduction: 0
        }
        ])
        const data73 = ref([
            {
                GridConnectedPower: '',
                MarginalEmissionFactorPower: '',
                MarginalEmissionFactorCapacity: '',
                CO2EmissionReduction: 0
            }
        ]);
        const data74 = ref([
            {
                HeatingArea: '',
                HeatLoadCoefficient: '',
                AnnualHeatingTime: '',
                ConversionFactor: '',
                HeatDistributionLoss: '',
                EmissionFactor: '',
                NetThermalEfficiency: '',
                CO2EmissionReduction: 0
            }
        ]);
        const data75 = ref([
            {
                GridConnectedPower: '',
                UnitEmissionFactorCO2: '',
                EmissionReduction: 0
            }
        ]);
        const data76 = ref([
            {
                GridConnectedPower: '',
                UnitEmissionFactorCO2: '',
                EmissionReduction: 0
            }
        ]);
        const data77 = ref([
            {
                GridConnectedPower: '',
                UnitEmissionFactorCO2: '',
                EmissionReduction: 0
            }
        ]);
        const data78 = ref([
            {
                InstalledCapacity: '',
                UnitEmissionFactorCO2: '',
                EmissionReduction: 0
            }
        ]);
        const data79 = ref([
            {
                Type: '煤制氢燃料汽车',
                CumulativeMileage: '',
                DieselReductionFactor: '',
                NaturalGasReductionFactor: '',
                CO2ReductionDiesel: 0,
                CO2ReductionNaturalGas: 0
            },
            {
                Type: '蒸汽甲烷转化（SMR）制氢',
                CumulativeMileage: '',
                DieselReductionFactor: '',
                NaturalGasReductionFactor: '',
                CO2ReductionDiesel: 0,
                CO2ReductionNaturalGas: 0
            },
            {
                Type: '风电电解水制氢',
                CumulativeMileage: '',
                DieselReductionFactor: '',
                NaturalGasReductionFactor: '',
                CO2ReductionDiesel: 0,
                CO2ReductionNaturalGas: 0
            },
            {
                Type: '太阳能电解水制氢',
                CumulativeMileage: '',
                DieselReductionFactor: '',
                NaturalGasReductionFactor: '',
                CO2ReductionDiesel: 0,
                CO2ReductionNaturalGas: 0
            },
            {
                Type: '电网电力电解水制氢',
                CumulativeMileage: '',
                DieselReductionFactor: '',
                NaturalGasReductionFactor: '',
                CO2ReductionDiesel: 0,
                CO2ReductionNaturalGas: 0
            }
        ]);

        const data81 = ref([{
            "ForestArea": "",
            "AreaStorageCapacity": "",
            "BiomassExpansionFactor": "",
            "VolumeDensity": "",
            "CarbonContentRate": "",
            "CarbonSinkEmissionReduction": 0
        }])
        const data82 = ref([
            {"Type": "草地", "Name": "高覆盖度草地", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0},
            {"Type": "草地", "Name": "中覆盖度草地", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0},
            {"Type": "草地", "Name": "低覆盖度草地", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0},
            {"Type": "湿地", "Name": "河渠湿地", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0},
            {"Type": "湿地", "Name": "湖泊湿地", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0},
            {"Type": "湿地", "Name": "水库坑塘湿地", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0},
            {"Type": "湿地", "Name": "滩涂湿地", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0},
            {"Type": "湿地", "Name": "滩地未利用地", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0},
            {"Type": "未利用地", "Name": "未利用地", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0}
        ])
        const data83 = ref([
            {"Type": "水稻", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0},
            {"Type": "小麦", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0},
            {"Type": "大豆", "Area": "", "CarbonSinkCoefficient": "", "CarbonSinkEmissionReduction": 0},
        ])
        const data84 = ref([
            {
                Technology: '生物能碳捕获与封存（BECCS）技术',
                ProjectPowerGeneration: '',
                EmissionReductionPotential: '',
                CarbonSinkEmissionReduction: 0
            },
            {
                Technology: '富氧燃烧+CO2驱油封存',
                ProjectPowerGeneration: '',
                EmissionReductionPotential: '',
                CarbonSinkEmissionReduction: 0
            },
            {
                Technology: '富氧燃烧+CO2咸水层封存',
                ProjectPowerGeneration: '',
                EmissionReductionPotential: '',
                CarbonSinkEmissionReduction: 0
            },
            {
                Technology: '整体煤气化联合循环+CO2强化采油',
                ProjectPowerGeneration: '',
                EmissionReductionPotential: '',
                CarbonSinkEmissionReduction: 0
            },
            {
                Technology: '整体煤气化联合循环+CO2深部咸水层封存',
                ProjectPowerGeneration: '',
                EmissionReductionPotential: '',
                CarbonSinkEmissionReduction: 0
            },
            {
                Technology: '燃烧后捕集+CO2强化采油',
                ProjectPowerGeneration: '',
                EmissionReductionPotential: '',
                CarbonSinkEmissionReduction: 0
            },
            {
                Technology: '燃烧后捕集+CO2深部咸水层封存',
                ProjectPowerGeneration: '',
                EmissionReductionPotential: '',
                CarbonSinkEmissionReduction: 0
            }
        ]);

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

        const setLatitude51 = (data: any) => {
            data51.value = data;
        }

        const setLatitude61 = (data: any) => {
            data61.value = data;
        }

        const setLatitude62 = (data: any) => {
            data62.value = data;
        }

        const setLatitude71 = (data: any) => {
            data71.value = data;
        }
        const setLatitude72 = (data: any) => {
            data72.value = data;
        }
        const setLatitude73 = (data: any) => {
            data73.value = data;
        }
        const setLatitude74 = (data: any) => {
            data74.value = data;
        }
        const setLatitude75 = (data: any) => {
            data75.value = data;
        }
        const setLatitude76 = (data: any) => {
            data76.value = data;
        }
        const setLatitude77 = (data: any) => {
            data77.value = data;
        }
        const setLatitude78 = (data: any) => {
            data78.value = data;
        }
        const setLatitude79 = (data: any) => {
            data79.value = data;
        }

        const setLatitude81 = (data: any) => {
            data81.value = data;
        }
        const setLatitude82 = (data: any) => {
            data82.value = data;
        }
        const setLatitude83 = (data: any) => {
            data83.value = data;
        }
        const setLatitude84 = (data: any) => {
            data84.value = data;
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
            data51,
            setLatitude51,
            data61,data62,
            setLatitude5: setLatitude61,setLatitude6: setLatitude62,
            data71,data72,data73,data74,data75,data76,data77,data78,data79,
            setLatitude71,setLatitude72,setLatitude73,setLatitude74,setLatitude75,setLatitude76,setLatitude77,setLatitude78,setLatitude79,
            data81,data82,data83,data84,
            setLatitude81,setLatitude82,setLatitude83,setLatitude84,
            data9,
            setLatitude9
        };
    },
    {
        persist: true,
    }
);

export default latitudeStore;