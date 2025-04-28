const baseurl = "https://dr-restapi.azurewebsites.net"; // Replace with your API URL



Vue.createApp({
    data() {
        return {
           records: [], 
           
        }
    },
    methods: {

        GetAllRecords() {
            this.GetAllRecords(baseurl);
        }
        // Add your methods here
    }
}).mount("#app");