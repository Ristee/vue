/*function car(name, model, owner, phone, image) {
    return {
        name, model,owner, phone, image
    }
}*/

const car  = (name, model, owner, phone, image) =>({name, model, owner, phone, image});

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+79293456789', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'Kate', 2013, '+7922312421', 'images/modeo.jpg'),
    car('Porsche', 'Panamera', 'Ivan', 2017, '+79293456789', 'images/panamera.jpg')    
]

new Vue({
    el: '#app',
    data: {
        cars: cars
    }
});