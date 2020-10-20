
var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var inputword;
function encrypt(a, b, word) { 

    var word = document.getElementById("inputText").value.toUpperCase();
    inputword=document.getElementById("inputText").value.toUpperCase();
    if(word == "") {
        swal({
                title: "ACCESS DENIED !!",
                text: "Please, Enter your name..",
                icon: "warning",
                button: "Back :(",
            });
    }
    else {
        swal("REMEMBER !", "Please remember your password for next unlock..");
    }
  var a = 9;
  var last_char = word.charAt(word.length-1);
  var b = alpha.lastIndexOf(last_char);

    for (var i = 0; i < word.length; i++) {

        var alphaIndex = alpha.indexOf(word[i]);

        var troublesome = (a * alphaIndex + b) % alpha.length;
        

        word = word.substring(0, i) + alpha[troublesome] + word.substring(i + 1);
    }
    word=word+last_char;
    document.getElementById("outputText").value = word;
    document.getElementById("inputText").value="";
    
}
    function decrypt(a, b, word) {

var word = document.getElementById("outputText").value.toUpperCase();

  var a = 9;
  var last_char = word.charAt(word.length-1);
  var b = alpha.lastIndexOf(last_char);

        for (var i = 0; i < word.length-1; i++) {
            a %= alpha.length;

            //Bruteforce the modular invert of the a

            for (var j = 1; j < alpha.length; j++) {
                if ((a * j) % alpha.length == 1)
                    var invert = j;
            }

            var alphaIndex = alpha.indexOf(word[i]);

            var troublesome = (invert * (alphaIndex - b)) % alpha.length;
            if (troublesome < 0)
                troublesome += alpha.length;
            word = word.substring(0, i) + alpha[troublesome] + word.substring(i + 1);
        }
        word=word.substring(0,word.length-1);
        document.getElementById("inputText").value = word;
        if(word == "") {
        swal({
                title: "ACCESS DENIED !!",
                text: "Please, Enter your password..",
                icon: "warning",
                button: "Back :(",
            });
    }
    else {
        if(word==inputword){
            swal({
                title: "ACCESS GRANTED !!",
                text: "Welcome back, Enjoy the stay..",
                icon: "success",
                button: "Confirm :)",
            });
        }
        else{
            swal({
                title: "ACCESS DENIED !!",
                text: "Sorry, Please try again..",
                icon: "warning",
                button: "Back :(",
            });
            document.getElementById("inputText").value="";
            document.getElementById("outputText").value="";
        }
    }
        document.getElementById("outputText").value="";
    }

