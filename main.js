function initMap() {
  const myLatLng = { lat: 44.0128, lng: 20.9114 };
  const myLatLng2 = { lat: 43.8914, lng: 20.3502 };
  const myLatLng3 = { lat: 43.3209, lng: 21.8958 };
  const myLatLng4 = { lat: 44.6380, lng: 21.6773 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Kragujevac",
  });
  new google.maps.Marker({
    position: myLatLng2,
    map,
    title: "Cacak",
  });
   new google.maps.Marker({
    position: myLatLng3,
    map,
    title: "Nis",
  });
    new google.maps.Marker({
    position: myLatLng4,
    map,
    title: "Golubac",
  });
  
  
}


$(document).ready(function(){
  $(".name").on("click", function() {
  name_list = []
  $("#myTable tr").hide()
  var flag = 1
  $("input:checkbox[name=name]:checked").each(function(){
  		flag = 0;
    	var value = $(this).val().toLowerCase();
      	$("#myTable tr").filter(function() {
            if($(this).text().toLowerCase().indexOf(value) > -1)
        		$(this).show()
    	});
 	 });
    if(flag == 1)
    	$("#myTable tr").show()
  });

  $('.gradient').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

});

