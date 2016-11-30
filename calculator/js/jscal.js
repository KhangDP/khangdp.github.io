for(let i=0;i<$('button').length;i++){
  $('button')[i].addEventListener('click',function(){
    if($('button')[i].innerHTML=="C"){
      cle();
    } else if($('button')[i].innerHTML=="Del"){
      del();
    } else if($('button')[i].innerHTML=="!"){
      result.value +="fac(";
    } else if ($('button')[i].innerHTML=="="){
      equ();
    } else if($('button')[i].innerHTML=="Change theme"){
      change();
    }else{
      result.value += $('button')[i].innerHTML;
    }
  });
}

function fac(n){
  var g = 1;
  if(n<=1) return 1;
  else{ for(var i=1;i<=n;i++)
  g = g*i ;
  }
  return g;
}

function cle(){
  result.value ="";
}

function del(){
  result.value = result.value.substr(0,result.value.length-1);
}

function equ(){
  result.value = eval(result.value);
}

function change(){
  $('table').css('backgroundColor','green');
}