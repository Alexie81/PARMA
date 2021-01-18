function submit() {
    if(document.getElementById("textfeed").value.trim() == ""){
        swal({
            title: 'Error',
            text: 'Va rugam sa introduceti text in textbox, pentru a trimite feedback !',
            icon: 'error'
          });
    } else {
        swal({
            title: 'Succes',
            text: 'Va multumim pentru feedback !',
            icon: 'success'
          });
          document.getElementById("textfeed").value = "";
        }
    }