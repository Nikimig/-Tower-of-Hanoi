var divRing = '<div id="r$number" class = "ring $color"></div>';
var divPole = '<div class="pole $numder"></div>';
var divSector = '<div id="s$number" class="sectors $number"></div>'
const color = ['red', 'orange', 'yellow', 'green','liteblue', 'blue', 'purple' ];
width_ring = 58
$(function (){
   console.log('hann');
   addPole();
   addSectors();
   addRings();
   setDraggable();
   setDroppable();



});

function addPole(){
   document.getElementById('p1').innerHTML += divPole.replace('$number', '1');
   document.getElementById('p2').innerHTML += divPole.replace('$number', '2');
   document.getElementById('p3').innerHTML += divPole.replace('$number', '3');}

function addSectors(){
   for (let i = 0; i < 7; ++i ){
         document.getElementById('p1').innerHTML += divSector.replace('$number', i).replace('$number', i)
         //document.getElementById('s'+ String(i)).style.setProperty('margin-top', String(172+(70*(i+1))) + 'px');
         document.getElementById('p2').innerHTML += divSector.replace('$number', i).replace('$number', i)
         document.getElementById('p3').innerHTML += divSector.replace('$number', i).replace('$number', i)
}}

function addRings() {
   for (let i = 0; i < 7; ++i ){
   //$('.one').append(divRing.replace('$color', color[0])); это код для jqerry
      document.getElementById('s' + i).innerHTML += divRing.replace('$color', color[i]).replace('$number', i );
      console.log(document.querySelector('.' + color[i]));
      document.querySelector('.' + color[i]).style.setProperty('background-color',  color[i]);
      document.querySelector('.' + color[i]).style.setProperty('width', 98 + (width_ring * i) + 'px');
}}

function setDraggable() {
   $('.ring').draggable();
}

function setDroppable() {
   $('.pole-label').droppable({
      drop: function(event, ui){
         var frCoord = document.getElementById('p1').id
         var toCoord = this.id;
         console.log(frCoord,toCoord);
         console.log()
      }
   })
}