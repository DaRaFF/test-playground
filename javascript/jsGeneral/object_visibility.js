console.log("--- object_visibility ---");

var Auto = function(startBenzin) {
	//constructor
        //public variable
	this.benzinStand = startBenzin;

        //private variable
        var anzahlRaeder = 4;

        //global variable
        globalBlubb = 17;


        //public function
	this.schaueBenzin = function() {
            return "Der Benzinstand beträgt "+this.benzinStand+" Liter";
	};

        //private function
	var gasGeben = function() {
		this.benzinStand--;
	};
};


// eine funktion ausführen, ohne dass die funktion oder die variablen darin global sind
// funktion und variablen verschwinden nach der Ausführung
( function(){
    var golf = new Auto(5);
    console.log(golf.schaueBenzin());
    var a=5;
 })();


console.log("--- object_visibility end ---");
