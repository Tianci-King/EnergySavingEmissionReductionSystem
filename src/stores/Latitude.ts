import {defineStore} from "pinia";
import {ref} from "vue";

const latitudeStore = defineStore(
    "latitude",
    () => {
        const data1 = ref([
            {
                kind: '燃煤',
                consumption: 100,
                CarbonEmissions: 100,
                CarbonEmissionsFactors: 100,
                MethaneEmissions: 100,
                MethaneEmissionsFactors: 100,
                NitrousOxideEmissions: 100,
                NitrousOxideEmissionsFactors: 100,
            },
            {
                kind: '燃油',
                consumption: 100,
                CarbonEmissions: 100,
                CarbonEmissionsFactors: 100,
                MethaneEmissions: 100,
                MethaneEmissionsFactors: 100,
                NitrousOxideEmissions: 100,
                NitrousOxideEmissionsFactors: 100,
            },
            {
                kind: '天然气',
                consumption: 100,
                CarbonEmissions: 100,
                CarbonEmissionsFactors: 100,
                MethaneEmissions: 100,
                MethaneEmissionsFactors: 100,
                NitrousOxideEmissions: 100,
                NitrousOxideEmissionsFactors: 100,
            },
            {
                kind: '其他',
                consumption: 100,
                CarbonEmissions: 100,
                CarbonEmissionsFactors: 100,
                MethaneEmissions: 100,
                MethaneEmissionsFactors: 100,
                NitrousOxideEmissions: 100,
                NitrousOxideEmissionsFactors: 100,
            }
        ]);

        const setLatitude1 = (data: any) => {
            data1.value = data;
        };

        return {
            data1,
            setLatitude1,
        };
    },
    {
        persist: true,
    }
);

export default latitudeStore;