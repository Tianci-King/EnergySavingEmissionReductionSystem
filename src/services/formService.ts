import request from "@/services/request.ts";
import apis from "@/services/apis.ts";

interface formType {

}

export default class formService {
    static async submitForm(data: formType) {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "post",
            url: "http://192.168.31.129:30000" + apis.front,
            data: data
        });
    }
}