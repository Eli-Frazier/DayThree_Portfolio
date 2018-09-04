$(document).ready(function () {
    $("#codeMath, #codeFac, #codePal, #codeFB").hide();

    $("#close").click(function () {
        $("#output1").html("");
        $("#output2").html("");
        $("#output3").html("");
        $("#output4").html("");
        $("#output5").html("");

        $("#outputpal").html("");

        $("#outputfac").html("");

        $("#outputFB").html("");
    });

    $("#btnCalc").click(function () {
            //gain user input from input boxes
            var num1 = Number($("#num1").val());
            var num2 = Number($("#num2").val());
            var num3 = Number($("#num3").val());
            var num4 = Number($("#num4").val());
            var num5 = Number($("#num5").val());

        //SweetAlert pop-up
        if (num1 === "" || num2 === "" || num3 === "" || num4 === "" || num5 == "") {
            swal("Oh No!", "it seems you forgot to enter the data :(", "error");
        }
        else {          
            //perform calculations
            var sum = num1 + num2 + num3 + num4 + num5
            var min = Math.min(num1, num2, num3, num4, num5);
            var max = Math.max(num1, num2, num3, num4, num5);
            var mean = sum / 5
            var product = num1 * num2 * num3 * num4 * num5

            //show the output from the calculations
            $("#output1").html("the <b> sum </b> of your numbers is <b>" + sum + "</b>");
            $("#output2").html("the <b> mean </b> of your numbers is <b>" + mean + "</b>");
            $("#output3").html("the <b> product </b> of your numbers is <b>" + product + "</b>");
            $("#output4").html("the <b> maximum </b> of your numbers is <b>" + max + "</b>");
            $("#output5").html("the <b> minimum </b> of your numbers is <b>" + min + "</b>");
        }
        
    });

    $("#btnPalindrome").click(function () {
        var userword = $("#word1").val();

        if (userword === "") {
            swal("Oh No!", "it seems you forgot to enter the data :(", "error");
        }
        else {
            revword = userword.split("").reverse().join("");

            if (userword.toUpperCase() === revword.toUpperCase()) {
                $("#outputpal").html("<b>" + userword + "</b> is a palindrome");
            }
            else {
                $("#outputpal").html("<b>" + userword + "</b> is not a palindrome");
            }
        }
    });

    $("#btnFac").click(function () {
        //gain user input
        var usernum = $("#numfac").val();

        if (usernum === "") {
            swal("Oh No!", "it seems you forgot to enter the data :(", "error");
        }
        else {
            //do the math to find the factorial
            if (usernum === "0") {
                var numfac = 1
            }
            else {
                var numFac = usernum;
                for (var loop = usernum - 1; loop >= 1; loop--) {
                    numFac = numFac *= loop;
                }
            }
            //output the factorial
            $("#outputfac").html("the factorial of <b> " + usernum + "</b> is <b>" + numFac + "</b>");
        }
    });

    $("#btnFB").click(function () {
        //gain user input
        var fizz = $("#fizz").val();
        var buzz = $("#buzz").val();

        if (fizz === "" || buzz === "") {
            swal("Oh No!", "it seems you forgot to enter the data :(", "error");
        }
        else {
            //generate the output
            //if a number (1-100) is a multiple of the fizz number, display fizz (loop % fizz = 0)
            //elseif the number is a multiple of the buzz number, display buzz (loop % buzz = 0)
            //elseif the number is a multiple of both, display fizzbuzz (loop % fiiz and buzz = 0)
            //else, display the number
            var outputarray = [];
            for (var loop = 1; loop <= 100; loop++) {

                if (loop % fizz === 0 && loop % buzz === 0) {
                    outputarray.push("<span class='BoldPurple'>FizzBuzz</span>")
                }
                else if (loop % fizz === 0) {
                    outputarray.push("<span class='BoldRed'>Fizz</span>")
                }
                else if (loop % buzz === 0) {
                    outputarray.push("<span class='BoldBlue'>Buzz</span>")
                }
                else {
                    outputarray.push(loop)
                }
            }
        }

        //output the factorial
        $("#outputFB").html(outputarray.join(", "));
    });

    $("#toggleMath").click(function () {
        $("#codeMath").toggle();
        $("#toggleMath").toggleClass('fa-toggle-on');
    });

    $("#toggleFac").click(function () {
        $("#codeFac").toggle();
        $("#toggleFac").toggleClass('fa-toggle-on');
    });

    $("#togglePal").click(function () {
        $("#codePal").toggle();
        $("#togglePal").toggleClass('fa-toggle-on');
    });

    $("#toggleFB").click(function () {
        $("#codeFB").toggle();
        $("#toggleFB").toggleClass('fa-toggle-on');
    });

});
//var revWord = "";
//for (var loop = word.length - 1; loop >= 0; loop--) {
//    revWord += word.substr(loop, 1);
//}