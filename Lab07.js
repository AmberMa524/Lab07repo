//Client Side Javascript
$(Document).ready(function () {
   var showAbout = false; 
   var showServices = false; 
   var showMenu = false;
   var showContact = false;
  
$("#p1").hide(200);
  
$("#p2").hide(200);
  
$("#p3").hide(200);
  
$("#p4").hide(200);
  
$("#spaceTake").hide(200);
  
$("#spaceTake2").hide(200);
  
$("#spaceTake3").hide(200);
  
  $("#option1").click(function(){

  if(!showServices && !showMenu && !showContact){
      if(!showAbout){
    showAbout = true;
    $("#p1").show(200);
  } else{
    showAbout = false;
    $("#p1").hide(200);
  }
    
  }
});
  
    $("#option2").click(function(){
      
  if(!showAbout && !showMenu && !showContact){ 
      if(!showServices){
    showServices = true;
    $("#p2").show(200);
    $("#spaceTake").show(200);
  } else{
    showServices = false;
    $("#p2").hide(200);
    $("#spaceTake").hide(200);
  }
    
  }
});
  
      $("#option3").click(function(){       
    if(!showAbout && !showServices && !showContact){   
        if(!showMenu){
    showMenu = true;
    $("#p3").show(200);
  } else{
    showMenu = false;
    $("#p3").hide(200);
  }
      
    }
});
  
        $("#option4").click(function(){
      if(!showAbout && !showServices && !showMenu){
         if(!showContact){
    showContact = true;
    $("#p4").show(200);
  } else{
    showContact = false;
    $("#p4").hide(200);
  } 
        
      }
});
  
    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
    $('#spaghetti1').click(function(e) {
      
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list" },
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var p = $("#p6");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                p.html(htmlStr);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p6").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });
  
  /**
  
      $('#spaghetti1').click(function(e) {
        // don't allow the anchor to visit the link
        e.preventDefault();
        $("#p6").html("Date to go here.");
      
    });
    
    */
  
});
