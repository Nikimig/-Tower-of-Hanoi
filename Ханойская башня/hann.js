var divRing = '<div class = "ring $color"></div>';
var divPole = '<div class="pole $numder"></div>';
const color = ['red', 'orange', 'yellow', 'green','lite_blue', 'blue', 'purple' ];

$(function (){
   console.log('hann');
   addPole();
   addRings();
   setDraggable();


});

function addPole(){
   $('.one').html('');
   $('.one').append(divPole.replace('$number', '1'));

   $('.two').html('');
   $('.two').append(divPole.replace('$number', '2'));

   $('.three').html('');
   $('.three').append(divPole.replace('$number', '3'));

}

function addRings() {
   $('.one').append(divRing.replace('$color', color[0]));
   $('.one').append(divRing.replace('$color', color[1]));
   console.log(color.push(1))
}

function setDraggable() {
   $('.ring').draggable();
}

function setDroppable() {
   $('.pole-label').droppable({
      drop: function(event, ui){
         var frCoord = ui.draggable.attr('id').substring(1);
         var toCoord = this.id.substring(1);
         console.log(frCoord,toCoord);
      }
   })
}