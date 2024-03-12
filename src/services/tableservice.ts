import apis from "@/services/apis.ts";
import request from "@/services/request.ts"

export default class tableService {
    static async table(data) {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "get",
            url: "http://192.168.31.129:30000" + apis.table,
            data: data
        });
    }

    static async chart(data) {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "get",
            url: "http://192.168.31.129:30000" + apis.chart,
            data: data
        });
    }

    static async detect() {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "get",
            url: "http://192.168.31.129:30000" + apis.detect,
        });
    }
}