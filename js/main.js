$(document).ready(function(){
    $('.modal').modal();
});

hiding();
var nums = 1;

function hiding() {
	$('#randomizeButton').hide();
	$('#removeButton').hide();
}

function getRandomItem(count) {
	return Math.round(Math.random() * (count - 1) + 1);
}

$('#addButton').click(function(){

	if ($('input[name=item' + nums + ']').val() != "") {
		$('#randomizeButton').show();
		nums++;
		$('<input>').attr({
		    type: 'text',
		    name: 'item' + nums,
		    class: 'col offset-s1 s10 offset-m3 m6'
		}).appendTo('#inputs').focus();
	} else {
		Materialize.toast('Add value!', 4000);
	}
})

$('#randomizeButton').click(function(){

	if ($('input[name=item' + nums + ']').val() == ""){
		$('input[name=item' + nums + ']').remove();
		nums--;
	}
	var name = 'item' + getRandomItem(nums);
	var text = $('input[name=' + name + ']').val();
	$("#answer").text(text);
	$('#removeButton').show();
})

$('#removeButton').click(function(){
	hiding();

	for(; nums != 1; nums--){
		$('input[name=item' + nums + ']').remove();
	}
	$('input[name=item' + nums + ']').val("");
})