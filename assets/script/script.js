const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
    }
  ];

//Вы устроились разработчиком в автомобильную компанию. Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене. Вам нужно:

//создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
class Transport {
    constructor (type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo() {
        return this.type + ' - ' + this.brand
    }
    getPrice() {
        return Intl.NumberFormat('ru-RU',{style: 'currency', currency: 'RUB'}).format(this.price)
    }
}
//создать класс Car, который наследует от Transport. 
class Car extends Transport {
    //Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;
    getDoorsCount(doors) {
        this.doors = doors
        return this.doors
    }
}
//создать класс Bike, который наследует от Transport. 
class Bike extends Transport {
    //Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла. 
    getMaxSpeed(maxSpeed) {
        this.maxSpeed = maxSpeed
        return this.maxSpeed
    }
}


for (let item of data) {
  


  if(item.type !== '') {
    itemType = item.type;
  } 

  if(item.price !== '') {
    itemPrice = item.price;
  }

  if(item.brand !== '') {
    itemBrand = item.brand;
  }

  if(item.doors !== undefined) {
    itemDoors = `двери: ${item.doors}`;
  } else (
    itemDoors = '-'
  )

  if(item.maxSpeed === undefined) {
    itemMaxSpeed = '-'; 
  } else {
    itemMaxSpeed = ` максимальная скорость: ${item.maxSpeed}`; 
  }

  const transport = new Transport(itemType, itemPrice, itemBrand)
  const car = new Car()
  const bike = new Bike()
  console.log(`${transport.getInfo()}, цена: ${transport.getPrice()} , ${car.getDoorsCount(itemDoors)} ${bike.getMaxSpeed(itemMaxSpeed)}`)
  

}




