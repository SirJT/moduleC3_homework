


МОя

class ElectricalEquipment {
    constructor(name, capasity) {
      this.name = name;
      this. capasity =  capasity;
      this.isOn = false;
    }
  
  
  //  прибор  включенный в розетку
    isOn () {
      console.log(this.name + " is On!");
        this.isOn = true;
    }
  
  //  прибор  выключеный из розетки
    isOff () {
      console.log(this.name + " is Off!");
        this.isOn = false;
    }
  }
  
  // чайник
  class Kettle extends ElectricalEquipment {
    
    constructor(name, color, capasity, material ) {
      super(name, capasity)
      this.name = name;
      this.color = color;
      this.capasity = capasity;
      this.isOn = false;
      this.material = material;
    }
  }
  
  Kettle.prototype = new ElectricalEquipment();
  
  // Часы
  class DigitalWatch extends ElectricalEquipment {
    constructor(name, color, capasity, form ) {
      super(name, capasity)
      this.name = name;
      this.color = color;
      this.capasity = capasity;
      this.form = form;
      this.isOn = true;
    }
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
  
 
  console.log(tableKettle)
  console.log(homeDigitalWatch)