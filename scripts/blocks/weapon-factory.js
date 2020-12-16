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
    craftTime:30
  },
  {
    input:{
      items:["icemod-tin/2","coal/1"],
      power: 2
    },
    output:{
      items:["icemod-tinround/2"]
    },
    craftTime:20
  },
  {
    input:{
      items:["blast-compound/1","titanium/2","coal/1"],
      power: 4
    },
    output:{
      items:["icemod-explosiveround/2"]
    },
    craftTime:40
  },
  {
    input:{
      items:["icemod-magic/1","metaglass/2","coal/1"],
      power: 2
    },
    output:{
      items:["icemod-hominground/2"]
    },
    craftTime:20
  },
  {
    input:{
      items:["icemod-poison/1","metaglass/2","coal/1"],
      power: 2
    },
    output:{
      items:["icemod-poisonround/2"]
    },
    craftTime:30
  },
],{},{});
weaponFactory.dumpToggle=false;
