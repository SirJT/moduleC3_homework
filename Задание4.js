


МОя


function ElectricalEquipment(name, capasity) {
    this.name = name;
    this. capasity =  capasity;
    this.isOn = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalEquipment.prototype.isOn = function() {
    console.log(this.name + " is On!");
    this.isOn = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalEquipment.prototype.isOff = function() {
    console.log(this.name + " is Off!");
    this.isOn = false;
};

// Прибор 1
function Kettle(name, color, capasity, material ) {
    this.name = name;
    this.color = color;
    this.capasity = capasity;
    this.isOn = false;
    this.material = material;
}

Kettle.prototype = new ElectricalEquipment();

// Прибор 2
function DigitalWatch (name, color, capasity, form ) {
    this.name = name;
    this.color = color;
    this.capasity = capasity;
    this.form = form;
    this.isOn = true;
}

DigitalWatch.prototype = new ElectricalEquipment();

// экземпляр Kettle
const tableKettle = new Kettle("DEXP", "Black", "1000Watt" , "Metal");

// экземпляр DigitalWatch
const homeDigitalWatch = new DigitalWatch("Panasonic", "silver", "10watt", "square");

// отключить DigitalWatch из розетки
homeDigitalWatch.isOff();

// отключить Kettle из розетки
tableKettle.isOff();

// результат
console.log(tableKettle)
console.log(homeDigitalWatch)