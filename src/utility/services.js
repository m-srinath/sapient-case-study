import axios from "axios";

export const Services = {
    callApi: function (dataset) {
        const requestData = this.getOptions(dataset);
        return axios(requestData).then(response => {
            console.log(response.data);
            return response.data;
        }).catch(error => {
            console.log(error);
        });
    },

    getOptions: function (dataset) {
        let header = {
            "Content-Type": "application/json"
        }

        if (dataset.method === "GET") {
            return {
                method: "get",
                url: dataset.url,
                header: header
            }
        } else if (dataset.method === "POST") {
            return {
                method: "post",
                url: dataset.url,
                header: header,
                data: dataset.body
            }
        } else if (dataset.method === "PUT") {
            return {
                method: "put",
                url: dataset.url,
                header: header,
                data: dataset.body
            }
        } else if (dataset.method === "DELETE") {
            return {
                method: "delete",
                url: dataset.url,
                header: header,
                data: dataset.body
            }
        }
    }


}