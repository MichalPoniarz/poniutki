// JavaScript Document
 <!--
      var data = new Date(document.lastModified);
      var tydzien = data.getDay();
      var dzien = data.getDate();
      var miesiac = data.getMonth();
      var rok = (data.getFullYear ? data.getFullYear() : data.getYear());
      var dni = new Array("niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota");
      var miesiace = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia");
      if (data != 0) document.write(dni[tydzien] + ",&nbsp;" + dzien + "&nbsp;" + miesiace[miesiac] + "&nbsp;" + rok);
      else document.write("Data nieznana!");
      //-->