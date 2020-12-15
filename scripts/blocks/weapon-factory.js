const multiLib=require("multi-lib2/wrapper");
const weaponFactory=multiLib.extend(GenericCrafter,"weapon-factory",
[
  {
    input:{
      items:["copper/2","coal/1"],
      power: 2
    },
    output:{
      items:["icemod-copperround/2"]
    },
    craftTime:15
  },
  {
    input:{
      items:["icemod-tin/2","coal/1"],
      power: 2
    },
    output:{
      items:["icemod-tinround/2"]
    },
    craftTime:10
  },
],{    
setBars() {
        this.super$setBars();
        //initialize
        this.bars.remove("liquid");
},{});
weaponFactory.dumpToggle=false;
