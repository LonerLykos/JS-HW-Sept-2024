// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

{

    function User(name, surname, email, phone, id) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.id = id;
    }
    let users = [
        new User('Tom', 'Hardy', 'tom_hardy@gmail.com', '+123456789', 2),
        new User('Ryan', 'Reynolds', 'ryan_renolds@gmail.com', '+123456789',1),
        new User('Will', 'Smith', 'will_smith@gmail.com', '+123456789', 3),
        new User('Dwayne', 'Johnson', 'dwayne_johnson@gmail.com', '+123456789', 4),
        new User('Robert', 'Downey', 'robert_downey_jr@gmail.com', '+123456789', 6),
        new User('Gwyneth', 'Paltrow', "gwyneth_paltrow@gmail.com", "+123456789", 5),
        new User('Ava', 'Adams', 'ava_adams@gmail.com', '+123456789', 7),
        new User('Charlie', 'Deville', 'charlie_deville@gmail.com', '+123456789', 9),
        new User('Angelina', 'Kravchenko', 'AHreJluHA_Kravchenko@gmail.com', '+123456789', 10),
        new User('Olek', 'Tay', 'olek_tay@gmail.com', '+123456789', 8),
    ];
    console.log(users);

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    const userFilter = users.filter((user) => (user.id % 2 === 0));
    console.log(userFilter);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
    const sortUsers = users.sort((a, b) => (a.id - b.id));
    console.log(sortUsers);
}

console.log(' ')

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

{
    class Client{

        constructor(id, name, surname, email, phone, ...order) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }
    }

    let clients = [
        new Client(1, 'Tom', 'Tom', 'tom@gmail.com', '+12345', 'eggs', 'milk'),
        new Client(2, 'Max', 'Max', 'max@gmail.com', '+12345', 'pepper'),
        new Client(3, 'Tom', 'Max', 'tom_max@gmail.com', '+1231232', 'potatoes', 'lorem', 'pens', 'candies', 'corn'),
        new Client(4, 'Max', 'Tom', 'max_tom@gmail.com', '+123454535', 'chery', 'cows', 'corn','grass'),
        new Client(5, 'Vasya', 'vasya', 'vasya@gmail.com', '+1264564345', 'eggs',  'potatoes'),
        new Client(6, 'Zoe', 'Zoe', 'zoe@gmail.com', '+123997845', 'pepper', 'candies', 'corn'),
        new Client(7, 'Tim', 'Tom', 'tim@gmail.com', '+154242345', 'pepper', 'kokos', 'bread'),
        new Client(8, 'Sveta', 'Met', 'sveta@gmail.com', '+129789745', 'potatoes', 'lorem', 'corn'),
        new Client(9, 'DSA', 'yutu', 'dsa@gmail.com', '+123645645', 'watermalon', 'milk', 'cats', 'candies', 'corn'),
        new Client(10, 'kokos', 'abrikos', 'kokos@gmail.com', '+12345', 'pepper', 'apples', 'kokos', 'cows'),
    ];
    console.log(clients);

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
    let sortClients = clients.sort((a, b) => (a.order.length - b.order.length));
    console.log(sortClients);
}

console.log(' ')

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

{
    function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.drive = function (){
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
        this.info = function (){
            for (const key in this) {
                console.log(`${key} : ${this[key]}`);
            }
        };
        this.upMaxSpeed = function (boosterSpeed){
            if (boosterSpeed > 0) this.maxSpeed = maxSpeed + boosterSpeed;
        };
        this.newYear = function (year) {
            if (year > this.year) {
                this.year = year;
            }
        };
        this.newDriver = function (driver) {
            if (driver) this.driver = driver;
        };
    }

    let car = new Car('Lamborghini Veneno','AUDI AG', 2013, 350, '6.5 L')
    console.log(car);
    car.drive();
    car.info();
    car.upMaxSpeed(15);
    car.newYear(2015);
    car.newDriver({driver: 'Tom', age: 25});
    console.log(car);
}

console.log(' ')

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

{
    class Car2{
        constructor
        (model, manufacturer, year, maxSpeed, engineCapacity){
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engineCapacity = engineCapacity;
        }

        drive () {
             console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
        };
        info () {
            for (const key in this) {
                console.log(`${key} : ${this[key]}`);
            }
        };
        upMaxSpeed (boosterSpeed){
            if (boosterSpeed > 0) this.maxSpeed = this.maxSpeed + boosterSpeed;
        };
        newYear (year) {
            if (year > this.year) {
                this.year = year;
            }
        };
        newDriver (driver) {
            if (driver) this.driver = driver;
        };

    }

    let car2 = new Car2('Lamborghini Veneno','AUDI AG', 2013, 350, '6.5 L')
    console.log(car2);
    car2.drive();
    car2.info();
    car2.upMaxSpeed(15);
    car2.newYear(2015);
    console.log(car2);
    car2.newDriver({driver: 'Tom', age: 25});
}

console.log(' ')

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


{
    function Cinderella (name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

    let cinderellas = [
        new Cinderella('Zoe', 27, 27),
        new Cinderella('Tay', 28, 28),
        new Cinderella('May', 31, 37),
        new Cinderella('China', 34, 36),
        new Cinderella('Minni', 19, 45),
        new Cinderella('Vicky', 25, 34),
        new Cinderella('Max', 28, 40),
        new Cinderella('Cinderella Eva', 29, 30),
        new Cinderella('Min', 30, 39),
        new Cinderella('Vicky', 25, 31),
    ]

    console.log(cinderellas);

    class Prince {
        constructor(name, age, shoeSize) {
            this.name = name;
            this.age = age;
            this.shoeSize = shoeSize;
        }
    }

    let prince = new Prince('Prince Adam', 35, 30);

    console.log(prince);

    for (const cinderella of cinderellas) {
        if (cinderella.footSize === prince.shoeSize) {
            console.log(`${cinderella.name} will be a match for ${prince.name}`)
        }
    }

    //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

    let findCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize);
    if (findCinderella) {
        console.log(`${findCinderella.name} will be a match for ${prince.name}`)
    }

}

console.log(' ')

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach
{
    Array.prototype.myForEach = function (callback) {
       const yourArray = this;
        for (let item of yourArray) {
            if (typeof item === 'number') {
                item = item + ' ';
                callback(item);
            }
        }
    };
    [1, 2, 3, 4, 5].myForEach((item) => console.log(item, typeof item));

}
//Через Array.prototype. створити власний filter
{
    Array.prototype.myFilter = function (predicate) {
        const arr =[];
        for (let item of this) {
            if (predicate(item)){
                arr.push('item' + item);
            }
        }
        return arr;
    };

    let numbers = [1, 2, 3, 4, 5];
    let filter = numbers.myFilter(function (item) {
        return item % 2 === 1;
    });
    console.log(filter);

}