parasails.registerPage("reservationapp", {
    data: {
        // Date chossen by user
        date: null,
        // Arrays filled by ajax request: which plcaes are occupied, which are available?
        allPlaces: [],
        freePlaces: [],
        blockedPlaces: new Set(),
        place: 0,
        // Mode: Select places or select date?
        selectPlaces: false,
    },
    methods: {
        reset: function () {
            this.selectPlaces = false;
            this.date = null;
        },

        selectPlace: function(placenumber) {
            this.place = placenumber;
        },

        find: function () {
            let origin = window.location.origin
            let url = new URL(origin + '/api/v1/occupy/find');
            url.searchParams.append("date", this.date);

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.blockedPlaces = new Set();
                    data.forEach((id) => {
                        console.log("Add blocked place "+id)
                        this.blockedPlaces.add(""+id);
                    })
                    this.freePlaces=[];
                    this.allPlaces=[];
                    for (let i=1;i<11;i++) {
                        this.allPlaces.push(i);
                        console.log("Check for "+i)
                        if (!this.blockedPlaces.has(""+i)) {
                            this.freePlaces.push(i)
                        }
                    }
                    this.selectPlaces = true;
                })
            
        },

        reserve: function () {
            console.log("Reserve: "+this.place)
            const formData = {
                date: this.date,
                places: [ this.place ],
                _csrf: window.SAILS_LOCALS._csrf
            }
            const body = JSON.stringify(formData);
            const postForm = (body) => {
                return fetch('/api/v1/occupy/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body
                });
            }
            postForm(body)
                .then(res => res.json())
                .then(data => {
                    console.log("AJAX: Result -->")
                    let id = data.id;
                    window.location = "/occupy/" + id;
                })
        }
    }
})