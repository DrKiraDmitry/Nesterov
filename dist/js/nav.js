function func(){
  var chb= document.getElementsByClassName('MenuMobile');
  if(chb[0].checked)
  {
      document.getElementById('Menu') .style.display='flex';
  }
  else{
     document.getElementById('Menu') .style.display='none';
  }
}
function funct(){
  var chp= document.getElementsByClassName('MenuMobile2');
  if(chp[0].checked)
  {
      document.getElementById('Menu2') .style.display='flex';
  }
  else{
     document.getElementById('Menu2') .style.display='none';
  }
}