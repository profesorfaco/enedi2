         <footer>
            <p>Taller: Visualización de Datos <strong>(<?php print (date('d-m-Y'));?>)</strong> <span class="float-right">Bajo una <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional</a></span></p>
         </footer>
      </div>
      <!-- /container -->
      <!-- Este es el orden: primero jQuery, luego Popper.js, y al final Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
     
     <script src="js/jquery.tabletoCSV.js" type="text/javascript" charset="utf-8"></script>
     <script>
        $(function(){
            $("#export").click(function(){
                $("#export_table").tableToCSV();
            });
        });
    </script>
   
   </body>
</html>