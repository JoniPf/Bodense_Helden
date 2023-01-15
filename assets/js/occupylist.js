// let reservationlistapp = new Vue({
//    el: '#occupylist',
parasails.registerPage("occupylist", {
    data: {
        datefrom: "",
        dateto: "",
        reservations: []
    },
    methods: {
        find: function () {
            let origin = window.location.origin
            let url = new URL(origin + '/api/v1/occupy/find2');
            url.searchParams.append("fromdate", this.datefrom);
            url.searchParams.append("todate", this.dateto);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.occupy = data;
                    data.forEach((res) => {
                        console.log(res)
                    })
                })
        }
    }
})