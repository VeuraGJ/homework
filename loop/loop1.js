   var tb="<table>";
        for(var i=1;i<10;i++){
            tb+="<tr>";
            for(var j=1;j<=i;j++){
                tb+="<td>"+i+"*"+j+"="+(i*j)+"</td>";
            }
            tb+="</tr>";
        }
        tb+="</table>";
        document.write(tb);