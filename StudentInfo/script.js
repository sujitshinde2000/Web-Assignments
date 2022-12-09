var studentList = new Array();
$(document).ready(function(){
    //$("#result-holder").hide();
    //studentList.push({name:"sanket",age:24,roll:80,stream:"Instrumentation"});
    //button listners
    $('#add-student-button').click(addStudent);
    $('#show-details').click(showRecord);
    $('#clear-details').click(hideRecord);
});
function addStudent(){
    //get vals
    var student_name = $("#student-name").val();
    var age = $("#student-age").val();
    var roll = $("#student-roll").val();
    var stream = $("#student-stream").val();
    if(isNaN(parseInt(age)) || isNaN(parseInt(roll)) || student_name.length<3 || stream.length<1){
        alert("Please Enter Proper Values");
        return;
    }
    //add to array
    studentList.push({name:student_name,age:parseInt(age),roll:parseInt(roll),stream:stream});
    //reset vals
    $("#student-name").val("");
    $("#student-age").val("");
    $("#student-roll").val("");
    $("#student-stream").val("");
    //
    alert("Added Student Details.");
}
function showRecord(){
    var htmlContent = `<table class="table">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Roll No.</th>
            <th>Stream</th>
        <tr>
    `;
    for (let index = 0; index < studentList.length; index++) {
        htmlContent+=`
            <tr>
                <td>${studentList[index].name}</td>
                <td>${studentList[index].age}</td>
                <td>${studentList[index].roll}</td>
                <td>${studentList[index].stream}</td>
            <tr>
        `;
    }
    htmlContent = htmlContent+`</table>`;
    console.log(htmlContent);
    $("#result-holder").html(htmlContent);
    $("#result-holder").show();
    document.getElementById("result-holder").scrollIntoView();
    
    $('#clear-details').addClass("btn-danger");
    $('#clear-details').removeClass("btn-secondary");
}
function hideRecord(){
    
    $('#clear-details').removeClass("btn-danger");
    $('#clear-details').addClass("btn-secondary");
    $("#result-holder").hide();
}