(function(){
  var t=document.getElementById('toggle'), m=document.getElementById('menu');
  var colours=['tech','digital','events'];

  function set(open){ m.classList.toggle('open',open); t.setAttribute('aria-expanded',open); }
  t.addEventListener('click',function(e){e.stopPropagation();set(!m.classList.contains('open'));});
  document.addEventListener('click',function(){set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});

  // "tech" swaps colour to match the menu item being hovered/focused
  document.querySelectorAll('.menu a').forEach(function(a){
    var c=colours.filter(function(k){return a.classList.contains(k)})[0];
    if(!c) return;
    function on(){ off(); t.classList.add(c); }
    function off(){ t.classList.remove.apply(t.classList,colours); }
    a.addEventListener('mouseenter',on); a.addEventListener('focus',on);
    a.addEventListener('mouseleave',off); a.addEventListener('blur',off);
  });
})();