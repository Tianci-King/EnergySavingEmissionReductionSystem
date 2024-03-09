const EmissionFactors = {
    '原煤': [1.981, 0.021, 0.031], // [CO2, CH4, NO2] 排放因子
    '洗精煤': [2.405, 0.026, 0.04],
    '焦炭': [2.86, 0.028, 0.043],
    '天然气': [21.622, 0.389, 0.039],
    '汽油': [2.925, 0.129, 0.026],
    '煤油': [3.033, 0.129, 0.026],
    '柴油': [3.096, 0.128, 0.026],
    '液化石油气': [3.101, 0.05, 0.005],
    '煤制品': [2.148, 0.018, 0.027],
    '液化天然气': [2.889, 0.051, 0.005],
    '购入电力':[7.843,0.085,0.12],
    '购入热力':[0.12,0.001,0.002],
    '售出电力':[7.843,0.085,0.12],
    '售出热力':[0.12,0.001,0.002],
    '能源加工转换':[3.141,0.09,0.21]
};

// 定义函数计算排放量
function calculateEmission(fuelType, consumption) {
    // 判断字典中是否存在该燃料类型
    if (EmissionFactors.hasOwnProperty(fuelType)) {
        const emissionFactors = EmissionFactors[fuelType];
        //对应的公式，以线性为例
        return emissionFactors.map(factor => factor * consumption);
    } else {
        return '未找到该燃料类型的排放因子';
    }
}

// 定义一个字典，存储各种交通方式对应的排放因子
const EmissionFactors2 = {
    "市内交通费": 0.000019,
    "火车": 0.00054,
    "高铁": 0.000069,
    "航空": 0.000176,
    "自驾":0.000019,
    "公共交通":0.00026
};

// 定义计算排放量的函数
function calculateEmission2(transportation, ticketPrice) {
    // 判断输入的交通方式是否在字典中
    if (EmissionFactors2.hasOwnProperty(transportation)) {
        // 找到对应的排放因子，并计算排放量
        const factor = EmissionFactors2[transportation];
        return factor * ticketPrice;
    } else {
        return "未找到该交通方式的排放因子";
    }
}

// 定义一个字典，存储各种新能源类型对应的排放因子
const EmissionFactors3 = {
    "光伏": 0.01,
    "风电": 0.02,
    "潮汐能": 0.03,
    // 可根据需要添加其他新能源类型及其排放因子
};

// 定义计算排放量的函数
function calculateEmission3(newEnergyType, param1, param2) {
    // 判断输入的新能源类型是否在字典中
    if (EmissionFactors3.hasOwnProperty(newEnergyType)) {
        // 找到对应的排放因子，并计算排放量
        const factor = EmissionFactors3[newEnergyType];
        return (param1 + param2) / factor;
    } else {
        return "未找到该新能源类型的排放因子";
    }
}

// 定义新能源排放因子字典
const EmissionFactors4 = {
    '生物质发电': 0.00074,
    '水电': 0.006,
    '煤层气发电':0.00328,
    '沼气利用':1.3326
};

// 计算新能源排放量的函数
function calculateEmission4(type, electricityUsage) {
    if (EmissionFactors4[type]) {
        const factor = EmissionFactors4[type];
        return factor * electricityUsage;
    } else {
        return '未找到该新能源类型对应的排放因子';
    }
}

// 计算森林碳储量的函数
function calculateForestCarbonStorage(area, storageArea, biomassExpansionFactor, density, carbonRate) {
    const result = (area + storageArea) * biomassExpansionFactor * density / 1000 * carbonRate;
    return result;
}


export {
    EmissionFactors,
    calculateEmission,
    EmissionFactors2,
    calculateEmission2,
    EmissionFactors3,
    calculateEmission3,
    EmissionFactors4,
    calculateEmission4,
    calculateForestCarbonStorage};