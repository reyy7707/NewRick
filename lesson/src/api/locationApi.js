import { instance } from "./inctance";

    export const locationApi = {
        getAlllocation(params) {
            return instance.get(`character`, {params})
        }
    }