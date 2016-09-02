app.service("accessService", function(){
	//return the service object
	return {
		//modules and their access levels
		mods: [
		       {
		    	name:"ANI",
		    	levels:["Level A","Level B","Level C","Level D","Level E","Level F","Level G","Level H"]
		       },
		       {
		    	   name: "IMEI",
		    	   levels: ["Level I","Level J","Level K","Level L","Level M","Level N","Level O","Level P"]
		       },
		       {
		    	   name: "Messaging",
		    	   levels: ["Level Q","Level R","Level S","Level T","Level U","Level V","Level W","Level X"]
		       },
		       {
		    	   name: "AccessOne",
		    	   levels: ["Level Y","Level Z","Level AA","Level BB","Level CC","Level DD","Level EE","Level FF"]
		       }
		],
		currentModule: this.mods[0],		//current module
		setModule: function(moduleObject){
			currentModule = moduleObject;
		},
		//get every module
		getModules: function(){
			return this.mods;
		},
		//get levels for current module
		getCurrentLevels: function(){
			return this.currentModule.levels;
		}
	};
});