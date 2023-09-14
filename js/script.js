function hitung(){
    var sisi = parseFloat(document.getElementById('sisi').value);
    var luas = sisi * sisi ;
    document.getElementById('text1').textContent = "S x S";
    document.getElementById('text2').textContent = sisi+" x "+sisi;
    document.getElementById('luas').textContent = luas;
  }
  
  function reset(){
    document.getElementById('sisi').value = "";
    document.getElementById('text1').textContent = "";
    document.getElementById('text2').textContent = "";
    document.getElementById('luas').textContent = "";
  }
  
  function hitung1(){
    var sisi1 = parseFloat(document.getElementById('sisi1').value);
    var keliling = 4*sisi1;
    document.getElementById('text3').textContent = "4 x S";
    document.getElementById('text4').textContent = 4+" x "+sisi1;
    document.getElementById('keliling').textContent = keliling;
  }
  
  function reset1(){
    document.getElementById('sisi1').value = "";
    document.getElementById('text3').textContent = "";
    document.getElementById('text4').textContent = "";
    document.getElementById('keliling').textContent = "";
  }