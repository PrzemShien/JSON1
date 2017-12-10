'use strict';

var JSONpc = '{"pracownicy": [{"firstName": "Piotr", "lastName": "Kania"}, {"firstName": "Krzysztof", "lastName": "Nowak"}, {"firstName": "Manuel", "lastName": "Kowalski"}], "dostawcy": [{"firstName": "Krystyna", "lastName": "Nowak"}, {"firstName": "Anna", "lastName": "Nowakowska"}, {"firstName": "Marzena", "lastName": "Kowal"}]}';

var JSONserver = JSON.parse(JSONpc);
var tab1 = "<table>\n<tr>\n<th>";
var tabTH = "</th>\n</tr>\n"
var rowT = "<tr>\n";
var rowTend = "</tr>\n";
var tabCell = "<td>";
var tabCellend = "</td>\n";
var tab1end = "</table>";
    tab1 +=  "Pracownicy" + tabTH;
JSONserver.pracownicy.forEach(function(t, index){
    tab1 += rowT + tabCell + t.firstName + tabCellend + tabCell + t.lastName + tabCellend + rowTend;
    console.log(tab1);
});
tab1 += tab1end;

var tab2 = "<table>\n<tr>\n<th>";
tab2 += "Dostawcy" + tabTH;
JSONserver.dostawcy.forEach(function(t, ind){
    tab2 += rowT + tabCell + t.firstName + tabCellend + tabCell + t.lastName + tabCellend + rowTend;
    console.log(tab2);
});
    tab2 += tab1end;
document.getElementById('tabela').innerHTML = tab1;
document.getElementById('tabela2').innerHTML = tab2;
