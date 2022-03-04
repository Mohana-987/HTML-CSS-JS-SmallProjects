var valueSel = {
                "FrontEnd" : ["HTML", "CSS", "JavaScript", "Angular"],
                "Backend" : ["PHP", "MySQL", "Laravel", "MongoDB"],
                "FullStack":["HTML&CSS","JS","FLUTTER","PHP","MongoDB"]
            }
window.onload = function(){
    var courseSel = document.getElementById("course");
    var techSel = document.getElementById("technology");
    for(var x in valueSel){
        courseSel.options[courseSel.options.length] = new Option(x, x);
    }
    courseSel.onchange = function() {
        techSel.length = 1;
        var z = valueSel[this.value];
        for (var i = 0; i < z.length; i++) {
            techSel.options[techSel.options.length] = new Option(z[i], z[i]);
        }
    }
}
function checkV(){
    var fm = document.forms["myForm"];
    document.getElementById('table').style.display = "block";
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var name = row.insertCell(0);
    var email = row.insertCell(1);
    var phonno = row.insertCell(2);
    var gender = row.insertCell(3);
    var course = row.insertCell(4);
    var technology = row.insertCell(5);
    var address = row.insertCell(6);
    var nm = fm["name"].value;
    var eml = fm["email"].value;
    var phone = fm["phn_no"].value;
    var gen = fm["gender"].value;
    var crse = fm["course"].value;
    var tech = fm["technology"].value;
    var add = fm["address"].value;
    name.innerHTML = nm;
    email.innerHTML = eml;
    phonno.innerHTML = phone;
    gender.innerHTML = gen;
    course.innerHTML = crse;
    technology.innerHTML = tech;
    address.innerHTML = add;
    return false;                                                                                                                   
}