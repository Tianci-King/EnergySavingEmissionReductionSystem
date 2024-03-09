import request from "@/services/request.ts";

interface formType {

}

export default class formService {
    static async submitForm(data: formType) {
        return request({
            "headers": {
                "Content-Type": "application/json",
            },
            method: "post",
            url: "/api/submitForm",
            data: data
        });
    }
}