console.log('Hello World!');

/*

        function changeImage() {
            var image = document.getElementById('myImage');
            if (image.src.match("difimg")) {
                image.src = "css/images/maya1.jpg";
            }
            else {
                image.src = "css/images/maya2.jpg";
            }
        } 
        
      


var imageTracker= 'f';
function changePic() {
    var image = document.getElementById('prova');
    if (imageTracker == 'f') {
        image.src = "css/images/maya2.jpg";
        imageTracker = 't';
    } else {
        image.src = "css/images/maya1.jpg";
        imageTracker = 't';
   
}else {
          image.src = "css/images/maya3.jpg";
    imageTracker = 'j';
    
}
}
        */



function myFunction() {
  var x = document.getElementById("myMenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}   
  

