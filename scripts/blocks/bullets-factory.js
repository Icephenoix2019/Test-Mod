const multiLib=require("multi-lib2/wrapper");
const bulletsFactory=multiLib.extend(GenericCrafter,"bullets-factory",
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
      items:["steam-power-armor-piercing-shell/2"]
    },
    craftTime:10
  },
],{},{});
bulletsFactory.dumpToggle=false;
