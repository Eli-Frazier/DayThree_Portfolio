$(document).ready(function () {
    $("#codeMath, #codeFac, #codePal").hide();

    $("#close").click(function () {
        $("#output1").html("");
        $("#output2").html("");
        $("#output3").html("");
        $("#output4").html("");
        $("#output5").html("");

        $("#outputpal").html("");

        $("#outputfac").html("");
    });

    $("#btnCalc").click(function () {
        //gain user input from input boxes
        var num1 = Number($("#num1").val());
        var num2 = Number($("#num2").val());
        var num3 = Number($("#num3").val());
        var num4 = Number($("#num4").val());
        var num5 = Number($("#num5").val());

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
    });

    $("#btnPalindrome").click(function () {
        var userword = $("#word1").val();

        revword = userword.split("").reverse().join("");

        if (userword.toUpperCase() === revword.toUpperCase()) {
            $("#outputpal").html("<b>" + userword + "</b> is a palindrome");
        }
        else {
            $("#outputpal").html("<b>" + userword + "</b> is not a palindrome");
        }
    });

    $("#btnFac").click(function () {
        //gain user input
        var usernum = $("#numfac").val();

        //do the math to find the factorial
        var numFac = usernum;
        for (var loop = usernum - 1; loop >= 1; loop--) {
            numFac = numFac *= loop;
        }

        //output the factorial
        $("#outputfac").html("the factorial of <b> " + usernum + "</b> is <b>" + numFac + "</b>");
    });

    $("#btnFB").click(function () {
        //gain user input
        var numFB = $("#numFB").val();

        //generate the output (somehow)


        //output the factorial
        $("#outputFB").text("PLACEHOLDER TEXT");
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
});
//var revWord = "";
//for (var loop = word.length - 1; loop >= 0; loop--) {
//    revWord += word.substr(loop, 1);
//}