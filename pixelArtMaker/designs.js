//$("#submit").removeAttr("disabled");

function submitted() {
    var k = $("#inputHeight").val();
    var l = $("#inputWeight").val();
    removed();
    console.log(parseInt(k), typeof (k));
    if (parseInt(k) <= 100 && parseInt(l) < 20) {
        $("span.error").hide();

        makeGrid(k, l);
        console.log("got strucked here");
    } else {
        console.log("excedded")
        $("span.error").show();
        $("span.error").text("Don't waste My Time. Don't enter Width >100 || Height > 20 ").attr("style", "color:blue");
    }

}

function removed() {
    var toRemove = $("table").find("tr");
    console.log("in remove room");
    //addMessege = $(".error");
    if (toRemove.length > 0) {
        toRemove.remove();
        $("span.error").text("Done !!!").attr("style", "color:green");

    } else {

        console.log("not found");
        $("span.error").text("Nothing is There to Reset").attr("style", "color:red");
        //addMessege.delay(20);
        //setTimeout(5,addMessege.text("Nothing is There to Reset").attr("style","color:red"));
        //console.log(addMessege.text());
        //addMessege.empty();
    }
}
//$("body").attr("style", "color:"+got);
//$("table tr:nth-last-child(1)").attr("style","background-color:"+got);

//$("#test").css("color",color);

function makeGrid(x, y) {
    var i;
    var j;
    for (i = 0; i < parseInt(x); i++) {
        $("<tr id='row'></tr>").appendTo("#pixelCanvas");
        for (j = 0; j < parseInt(y); j++) {
            //console.log("hi");
            $("<td id='col'> </td>").appendTo("table tr:last");
            //var para = document.createElement("tr");
            //var node = document.createTextNode("td")
            //para.appendChild(node);
            //document.getElementById("grid").innerHTML = "<tr> <td> </td></tr>";
        }
    }

};
var color;
$("table").on('click','td',function () {
    var oldColor, pickedColor;

    pickedColor = $("#colorPicker").val();

    oldColor = $(this).css("background-color");

    console.log('old', oldColor);


    console.log('picked', pickedColor);

    if (oldColor == "rgb(255, 255, 255)" || oldColor == "rgba(0, 0, 0, 0)") {
        console.log("here", oldColor);
        $(this).css("background-color", pickedColor);
    } else {
        $(this).css("background-color", "rgb(255, 255, 255)");
    }

});
