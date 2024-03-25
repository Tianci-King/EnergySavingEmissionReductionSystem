import apis from "@/services/apis.ts";
import request from "@/services/request.ts"

export default class tableService {
    static async table1() {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "get",
            url: "http://192.168.31.129:30000" + apis.table1,
        });
    }

    static async table2() {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "get",
            url: "http://192.168.31.129:30000" + apis.table2,
        });
    }

    static async chart() {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "get",
            url: "http://192.168.31.129:30000" + apis.chart,
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
    
    static async card2(data) {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "post",
            url: "http://192.168.31.129:30000" + apis.card,
            data: data
        });
    }

    static async robot(data) {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "post",
            url: "http://192.168.31.129:30000" + apis.robot,
            data: data
        });
    }
}