var divRing = '<div id="r$number" class = "ring $color"></div>';
var divPole = '<div class="pole $number"></div>';
var divSector = '<div id="s$number" class="sector $number"></div>';
var divBigSektor = '<div id="sek $number" class="sectorsAdd $number"></div>'
const color = ['red', 'orange', 'yellow', 'green','lightblue', 'blue', 'purple' ];
var out = document.querySelector('.out');
var steps = 0;
out.textContent = steps;

$(function (){
   console.log('hann');
   addPole();
   addRingsAndSectors();
   setDraggable();
   setDroppable();});

function addPole(){
   for (let i = 1; i < 4; ++i ){
      document.getElementById('p'+ String(i)).innerHTML += divPole.replace('$number', i);

      document.getElementById('p'+ String(i)).innerHTML += divBigSektor.replace('$number', i).replace('$number', i);}}

function addRingsAndSectors() {
   for (let i = 0; i < 7; ++i ){
      //Добавляем секторы перемещения
      document.getElementById('sek 1').innerHTML += divSector.replace('$number','1' + i).replace('$number','1' + i);
      document.getElementById('sek 2').innerHTML += divSector.replace('$number','2' + i).replace('$number','2' + i);
      document.getElementById('sek 3').innerHTML += divSector.replace('$number','3' + i).replace('$number','3' + i);
      
      //Добавляем кольца
      document.getElementById('s'+ '1' + i).innerHTML += divRing.replace('$color', color[i]).replace('$number', i );
      
      //Описываем стили колец
      document.querySelector('.' + color[i]).style.setProperty('background-color',  color[i]);
      document.querySelector('.' + color[i]).style.setProperty('width', 98 + (58 * i) + 'px');}}

function setDraggable() {
   $('.red ').draggable({ containment: ".hann-label", scroll: false });}

function setDroppable() {
   $('.sectorsAdd').droppable({
      drop: function(event, ui){
         var frCoord = ui.draggable.parent().parent().attr('id').substring(4);
         var frCoord2 = ui.draggable.parent().attr('id');
         var toCoord = this.id.substring(4);
         console.log(frCoord,toCoord);
         var div = document.querySelector('#' + ui.draggable.attr('id'))
         var id_el = Number(document.querySelector('#' + ui.draggable.attr('id')).parentElement.id.substring(2));
         console.log(id_el)


         for (let i = 6; i > -1; --i ){
            if (document.getElementById('s'+ toCoord + i).hasChildNodes()==false || document.querySelector('#' + ui.draggable.attr('id')).parentElement == document.getElementById('s'+ toCoord + i)) {
               if ( i == 6 || Number(div.style.width.replace('px', '')) < Number(document.getElementById('s'+ String(toCoord) + (i+1)).childNodes[0].style.width.replace('px', '')) && toCoord != frCoord) {  //console.log(i)
                  div.remove()
                  document.getElementById('s'+ toCoord + i).innerHTML += div.outerHTML
                  document.querySelector('#' + ui.draggable.attr('id')).style.setProperty('top', 0 + 'px');
                  document.querySelector('#' + ui.draggable.attr('id')).style.setProperty('left', 0 + 'px');
                  $('.' + String(document.getElementById('s'+ toCoord + i).childNodes[0].className).substring(5).replace('ui-draggable ui-draggable-handle ui-draggable-dragging', '')).draggable({ containment: ".hann-label", scroll: false });

                  if ( document.getElementById('s'+ toCoord + i).id.substring(2) < 6 && (document.getElementById('s'+ toCoord + (i + 1))).hasChildNodes()){
                     $('.' + String(document.getElementById('s'+ toCoord + (i + 1)).childNodes[0].className).substring(5).replace('ui-draggable ui-draggable-handle ui-draggable-dragging', '')).draggable("disable")}

                  if ( id_el < 6 && (document.getElementById('s'+ frCoord + (id_el + 1))).hasChildNodes()){
                     $('.' + String(document.getElementById('s'+ frCoord + (id_el + 1)).childNodes[0].className).substring(5)).draggable({ containment: ".hann-label", scroll: false });
                     $('.' + String(document.getElementById('s'+ frCoord + (id_el + 1)).childNodes[0].className.substring(5)).replace('ui-draggable ui-draggable-handle ui-draggable-dragging ui-draggable-disabled', '')).draggable("enable")}

                  ++steps
                  out.textContent = steps;

                  break}else{
                     div.style.setProperty('top', 0 + 'px');
                     div.style.setProperty('left', 0 + 'px');
                     $('.' + String(document.querySelector('#' + ui.draggable.attr('id')).className.substring(5)).replace('ui-draggable ui-draggable-handle ui-draggable-dragging', '')).draggable("enable");
                     console.log(String(document.querySelector('#' + ui.draggable.attr('id')).className.substring(5)).replace('ui-draggable ui-draggable-handle ui-draggable-dragging', ''));
                     break}} 
            else {
               div.style.setProperty('top', 0 + 'px');
               div.style.setProperty('left', 0 + 'px');
               $('.' + String(document.querySelector('#' + ui.draggable.attr('id')).className.substring(5)).replace('ui-draggable ui-draggable-handle ui-draggable-dragging', '')).draggable("enable")}}}})}



function clearaAll(){
   for (let i = 0; i < 7; ++i ){
      document.querySelector('.'+'ring').remove();}

   for (let i = 0; i < 7; ++i ){
      
      document.getElementById('s'+ '1' + i).innerHTML += divRing.replace('$color', color[i]).replace('$number', i );
      document.querySelector('.' + color[i]).style.setProperty('background-color',  color[i]);
      document.querySelector('.' + color[i]).style.setProperty('width', 98 + (58 * i) + 'px');}

   $('.red ').draggable({ containment: ".hann-label", scroll: false });

   steps = 0;
   out.textContent = steps;}

function auto(){
   var from = 1;
   var too = 2;
   var buf = 3;
   var jfrom = 0;
   var jtoo = 0;
   var jbuf = 0;
   clearaAll();
   $('.red').draggable('destroy')

      function hanoi(n, from, too, buf) {
         if (n === 1) {
            for (let i = 0; i < 7; ++i ){
            if (document.getElementById('s'+ from + i).hasChildNodes() == false){++jfrom};
            if (document.getElementById('s'+ too + i).hasChildNodes() == false){ ++jtoo};
            if (document.getElementById('s'+ buf + i).hasChildNodes() == false){ ++jbuf};}
            var ring = String(document.getElementById('s'+ from + jfrom).childNodes[0].id);
         document.getElementById('s'+ too + (jtoo-1)).innerHTML += document.querySelector('#'+ ring).outerHTML;
         document.getElementById('s'+ from + jfrom).childNodes[0].remove();
         console.log('Премещаем диск: ' + String(document.getElementById(ring).className.substring(5)) + ' c' + ' стержня ' + from + ' на' + ' стержень ' + too );
         jfrom = 0;  jtoo = 0;   jbuf = 0;
            return;}
         
         hanoi(n - 1, from, buf, too);
         for (let i = 0; i < 7; ++i ){
            if (document.getElementById('s'+ from + i).hasChildNodes() == false){++jfrom}
            if (document.getElementById('s'+ too + i).hasChildNodes() == false){ ++jtoo}
            if (document.getElementById('s'+ buf + i).hasChildNodes() == false){ ++jbuf}}
         var ring = String(document.getElementById('s'+ from + jfrom).childNodes[0].id);
         document.getElementById('s'+ too + (jtoo-1)).innerHTML += document.querySelector('#'+ ring).outerHTML;
         document.getElementById('s'+ from + jfrom).childNodes[0].remove();
         console.log('Премещаем диск: ' + String(document.getElementById(ring).className.substring(5)) + ' c' + ' стержня ' + from + ' на' + ' стержень ' + too );
         jfrom = 0;  jtoo = 0;   jbuf = 0;
         hanoi(n - 1, buf, too, from);}

   hanoi(7, from, too, buf);

   $('.red ').draggable({ containment: ".hann-label", scroll: false });}

document.querySelector('.button').onclick = auto;

document.querySelector('.clear_all').onclick = clearaAll;