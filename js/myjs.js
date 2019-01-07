var items = document.getElementsByClassName('item');
var points = document.getElementsByClassName('point');
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');
var index = 0;
var goIndex = function(){
	for(var i=0; i<items.length; i++){
		items[i].className = 'item';
		points[i].className = 'point';
	}
	items[index].className = 'item active';
	points[index].className = 'point active';
}
var goNext = function(){
	index++;
	index%=items.length;
	goIndex();
}
var goPre = function(){
	index--;
	if(index<0){
		index = items.length-1;
	}
	goIndex();
}
goNextBtn.addEventListener('click', function(){
	goNext();
});
goPreBtn.addEventListener('click', function(){
	goPre();
})
for(var i=0; i<points.length; i++){
	points[i].addEventListener('click', function(){
		var pointIndex = this.getAttribute('data-index');
		index = pointIndex;
		goIndex();
	})
}