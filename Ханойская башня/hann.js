var divRing = '<div id="r$number" class = "ring $color"></div>';
var divPole = '<div class="pole $number"></div>';
var divSector = '<div id="s$number" class="sector $number"></div>';
const color = ['red', 'orange', 'yellow', 'green','lightblue', 'blue', 'purple' ];

$(function (){
   console.log('hann');
   addPole();
   addRingsAndSectors()
   setDraggable();
   setDroppable();

});

function addPole(){
   document.getElementById('p1').innerHTML += divPole.replace('$number', '1')
   document.getElementById('p2').innerHTML += divPole.replace('$number', '2')
   document.getElementById('p3').innerHTML += divPole.replace('$number', '3')

   document.getElementById('p1').innerHTML += '<div id="sek $number" class="sectorsAdd $number"></div>'.replace('$number', '1').replace('$number', '1');
   document.getElementById('p2').innerHTML += '<div id="sek $number" class="sectorsAdd $number"></div>'.replace('$number', '2').replace('$number', '2');
   document.getElementById('p3').innerHTML += '<div id="sek $number" class="sectorsAdd $number"></div>'.replace('$number', '3').replace('$number', '3');
}

function addRingsAndSectors() {
   for (let i = 0; i < 7; ++i ){
      //Добавляем секторы перемещения
      document.getElementById('sek 1').innerHTML += divSector.replace('$number','1' + i).replace('$number','1' + i) 
      document.getElementById('sek 2').innerHTML += divSector.replace('$number','2' + i).replace('$number','2' + i)
      document.getElementById('sek 3').innerHTML += divSector.replace('$number','3' + i).replace('$number','3' + i)
      
      //Добавляем кольца
      document.getElementById('s'+ '2' + i).innerHTML += divRing.replace('$color', color[i]).replace('$number', i );
      //console.log(document.querySelector('.' + color[i]));
      
      //Описываем стили колец
      document.querySelector('.' + color[i]).style.setProperty('background-color',  color[i]);
      document.querySelector('.' + color[i]).style.setProperty('width', 98 + (58 * i) + 'px');

}}

function setDraggable() {
   $('.red ').draggable({ containment: ".hann-label", scroll: false });
   }

function setDroppable() {
   $('.sectorsAdd').droppable({
      drop: function(event, ui){
         var frCoord = ui.draggable.parent().parent().attr('id').substring(4);
         var frCoord2 = ui.draggable.parent().attr('id');
         var toCoord = this.id.substring(4);
         console.log(frCoord,toCoord);
         //console.log(('.' + String(document.getElementById('s'+ '2' + 2).childNodes[0].className).substring(5)))
         //console.log(Number(document.querySelector('#' + ui.draggable.attr('id')).parentElement.id.substring(2)))
         //console.log($('.' + String(document.getElementById('s'+ '2' + 2).childNodes[0].className).substring(5)))
         //$('.' + String(document.getElementById('s'+ '2' + 2).childNodes[0].className).substring(5)).draggable({ containment: ".hann-label", scroll: false });
         //document.getElementById(toCoord).innerHTML += document.querySelector('#' + ui.draggable.attr('id'))
         let div = document.querySelector('#' + ui.draggable.attr('id'))
         let id_el = Number(document.querySelector('#' + ui.draggable.attr('id')).parentElement.id.substring(2));
         console.log(id_el)
         console.log


         if ( id_el < 6 && (document.getElementById('s'+ frCoord + (id_el + 1))).hasChildNodes()){
            $('.' + String(document.getElementById('s'+ frCoord + (id_el + 1)).childNodes[0].className).substring(5)).draggable({ containment: ".hann-label", scroll: false });
            $('.' + String(document.getElementById('s'+ frCoord + (id_el + 1)).childNodes[0].className.substring(5)).replace('ui-draggable ui-draggable-handle ui-draggable-dragging ui-draggable-disabled', '')).draggable("enable")
            //console.log('.' + String(document.getElementById('s'+ frCoord + (id_el + 1)).childNodes[0].className.substring(5)).replace('ui-draggable ui-draggable-handle ui-draggable-dragging ui-draggable-disabled', ''))
         }


         for (let i = 6; i > -1; --i ){
            if (document.getElementById('s'+ toCoord + i).hasChildNodes()==false || document.querySelector('#' + ui.draggable.attr('id')).parentElement == document.getElementById('s'+ toCoord + i)) {
                  //console.log(i)
                  div.remove()
                  document.getElementById('s'+ toCoord + i).innerHTML += div.outerHTML
                  document.querySelector('#' + ui.draggable.attr('id')).style.setProperty('top', 0 + 'px');
                  document.querySelector('#' + ui.draggable.attr('id')).style.setProperty('left', 0 + 'px');
                  //console.log(String(document.getElementById('s'+ toCoord + i).childNodes[0].className).substring(5));
                  $('.' + String(document.getElementById('s'+ toCoord + i).childNodes[0].className).substring(5).replace('ui-draggable ui-draggable-handle ui-draggable-dragging', '')).draggable({ containment: ".hann-label", scroll: false });

                  if ( document.getElementById('s'+ toCoord + i).id.substring(2) < 6 && (document.getElementById('s'+ toCoord + (i + 1))).hasChildNodes()){
                     $('.' + String(document.getElementById('s'+ toCoord + (i + 1)).childNodes[0].className).substring(5).replace('ui-draggable ui-draggable-handle ui-draggable-dragging', '')).draggable("disable")}
      
                  
               break} else {
                  document.querySelector('#' + ui.draggable.attr('id')).style.setProperty('top', 0 + 'px');
                  document.querySelector('#' + ui.draggable.attr('id')).style.setProperty('left', 0 + 'px');
            }}

}
}                     
)}
