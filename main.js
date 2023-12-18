
class car {
    constructor (brand, model, year, condition) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.condition = condition;


        getInfo(){
            return`jeg er en ${brand} og en ${model}. jeg er fra år ${year}, og jeg er i ${condition} stand`;
        }

    }

}


myCar = [];

const car1 = new car('Volvo', 'v18', 1998, 'god')


console.log(car1)

