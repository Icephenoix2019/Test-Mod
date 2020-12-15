const multiLib=require("multi-lib2/wrapper");
const weaponsFactory=multiLib.extend(GenericCrafter,"weapons-factory",
[
  {
    input:{
      items:["copper/2","coal/1"],
      power:0
    },
    output:{
      items:["icemod-copperround/2"]
    },
    craftTime:15
  },
  {
    input:{
      items:["icemod-tin/2","coal/1"],
      power:0
    },
    output:{
      items:["icemod-tinround/2"]
    },
    craftTime:10
  },
],{},{});
weaponsFactory.dumpToggle=false;
