    var i=0;
    var img = [];
    var time = 2000;
  
    img[0]='images/image1.jpeg';
    img[1]='images/image2.jpeg';
    img[2]='images/image3.webp';
    img[3]='images/image4.webp';
    img[4]='images/image5.jpeg';
  
    function changeImg(){
      document.slide.src=img[i];
      if(i<img.length-1){
        i++;
      }else{
        i=0;
      }
      setTimeout("changeImg()",time);
    }
    window.onload=changeImg;