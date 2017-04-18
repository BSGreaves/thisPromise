//Mostly listened, didn't type

$(document).ready(function() {

    var dinoArray = [];

    function writeDOM() {
        ops = ""; //output string
        dinoArray.forEach(function(each) {
            ops += `<p>${each.type}</p>`;
        })
        $("#output").append(ops);
    }

    // $.ajax("./db/dinosaurs1.json")
    // .done(function(data1){
    // 	console.log("data1:", data1.dinosaurs1);
    // 	dinoArray = data1.dinosaurs1;
    // 	//stopped typing so I could pay attention
    // 	writeDOM();
    // })
    // .fail(function(error){console.log("Error:", error)});



    var firstDinoJSON = function() {
        return new Promise(function(resolve, reject) {
            $.ajax("./db/dinosaurs1.json")
                .done(function(data1) {
                    resolve(data1.dinosaurs1);
                })
                .fail(function(error1) {
                    reject(error1);
                });
        })
    }

firstDinoJSON().then(function(jsonData1){
	console.log(jsonData1);
}).catch(function(jsonDataFail1){
	console.log(jsonDataFail1)
})







})