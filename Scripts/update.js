// JavaScript Document
 <!--
      var data = new Date(document.lastModified);
      var tydzien = data.getDay();
      var dzien = data.getDate();
      var miesiac = data.getMonth();
      var rok = (data.getFullYear ? data.getFullYear() : data.getYear());
      var dni = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
      var miesiace = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
      if (data != 0) document.write(dni[tydzien] + ",&nbsp;" + dzien + "&nbsp;" + miesiace[miesiac] + "&nbsp;" + rok);
      else document.write("Data nieznana!");
      //-->sunday
