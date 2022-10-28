function testCellPhoneNumber(str)
{
    if(!str.length)
        alert("Номер мобільного телефону задано некоректно");
    var cellPhoneTemplate = new RegExp("8?((063)|(093))[0-9]{7}");
    str = str.replace(cellPhoneTemplate,"");
    if(str != "")
        alert("Номер мобільного телефону задано некоректно");
}