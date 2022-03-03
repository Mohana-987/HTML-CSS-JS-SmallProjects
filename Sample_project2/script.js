function ValidateForm(){
    let arr = document.forms["Registration_Form"];
    let x = arr["password"].value;
    let y = arr["re-enter_password"].value;
    if(x == y){
        //document.write("Successfully Registered");
        var myWindow = window.open("", "_self");
        myWindow.document.write("<h1 style='text-align:center'>Registration Sucessfull.</h1>");
    }
    else{
        //alert("Password and Re-enter Password should be same");
        document.getElementById('msg').style.color = "red";
        document.getElementById('msg').innerHTML = "Password not matching";
        return false;
    }
}