

const car  = (name, model, owner, year, phone, image) =>({name, model, owner, year, phone, image});

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+79293456789', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'Kate', 2013, '+7922312421', 'images/mondeo.jpg'),
    car('Porsche', 'Panamera', 'Ivan', 2017, '+79293456789', 'images/panamera.jpg')    
];

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectedIndex: 0,
        phoneVisibility: false,
        search: ''
    },
    methods: {
        selectCar: function(index) {
            this.car = cars[index];
            this.selectedIndex = index;
        },
        showPhone: function() {
            this.hidePhone = false;
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone';
        },
        filteredCars() {
            var self = this;
            const filtered = this.cars.filter(function(car) {
                return car.name.toLowerCase().indexOf(self.search.toLowerCase()) > -1;
            });
            return filtered;
        }
    }
});