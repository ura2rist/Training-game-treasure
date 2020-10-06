function getRandNumb(size){
	return Math.floor(Math.random() * size);
}

function getDistance(event, target){
	let diffX = event.offsetX - target.x,
		diffY = event.offsetY - target.y;
		return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

function getDistHint(dist){
	if(dist < 10){
		return 'Горишь!';
	}else if(dist < 20){
		return 'Очень горячо!';
	}else if(dist < 30){
		return 'Горячо!';
	}else if(dist < 40){
		return 'Тепло!';
	}else if(dist < 50){
		return 'Холодно!';
	}else if(dist < 60){
		return 'Очень холодно!';
	}else if(dist < 70){
		return 'Замерзаешь!';
	}
}

let width = 800,
	height = 800,
	clicks = 0,
	target = {
		x: getRandNumb(width),
		y: getRandNumb(height)
	};

$('#map').click(function(event){
	clicks++;
	let dist = getDistance(event, target),
		distHint = getDistHint(dist);
	console.log(dist);
	console.log(distHint);
	$('#distance').text(distHint);

	if(dist < 8){
		alert('Клад найден!')
	}
});