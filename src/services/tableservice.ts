import apis from "@/services/apis.ts";
import request from "@/services/request.ts"

export default class tableService {
    static async table() {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "get",
            url: "http://192.168.31.92:30000" + apis.table,
        });
    }

    static async chart() {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "get",
            url: "http://192.168.31.92:30000" + apis.chart,
        });
    }

    static async detect() {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "get",
            url: "http://192.168.31.92:30000" + apis.detect,
        });
    }
    
    static async card() {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "post",
            url: "http://192.168.31.92:30000" + apis.card,
        });
    }
}