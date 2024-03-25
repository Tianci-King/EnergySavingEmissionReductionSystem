import * as exp from "constants";
import {defineStore} from "pinia";
import {ref} from "vue";

const adviceStore = defineStore(
    "advice", () => {
        const advice1 = ref([
            "时间序列预测方法是一种利用历史数据来预测未来数值的技术，常见方法包括移动平均法、指数平滑法、自回归移动平均模型（ARMA）、自回归积分移动平均模型（ARIMA）以及机器学习方法等。这些方法适用于不同类型的时间序列数据，并在经济、金融、气象等领域有广泛应用，帮助分析趋势、季节性和周期性变化，以支持决策和规划。"
        ]);

        const advice3 = ref([
            "碳收益画像是指通过对企业、组织或个人在减排行动中所取得的成就和投入的资源进行量化和可视化呈现，以展示其在碳减排方面的表现和价值。该画像通常包括减排量、碳排放强度、节能减排效益等指标，帮助评估碳减排行动的效果和经济效益，同时也有助于传达企业的环保责任和可持续发展理念。碳收益画像的建立有助于提升公众对碳减排行动的认知和理解，推动更多参与者采取环保举措，共同应对气候变化挑战。"
        ]);

        const advice2 = ref([
            "碳排放路径桑基图是一种用于可视化碳排放流向和转化路径的图表。在桑基图中，桑基条的宽度代表了能量或碳排放的流量，从而清晰展示了不同环节之间的相互关系和转化情况。这种图表通常用于展示能源系统中能量的转化过程和碳排放的分布，有助于分析碳排放的来源、去向以及在各个环节之间的变化情况。通过碳排放路径桑基图，人们可以更直观地理解碳排放的复杂流动和转化关系，为制定减排策略和优化能源利用提供重要参考。"
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