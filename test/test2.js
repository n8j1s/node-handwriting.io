var Hw = require('./../index');

var hw = new Hw({apiKey: '02WSERSEC5C23XW3', apiSecret: 'MBEF60EXTT10B0WC'});

hw.getAllHandwritings(function(err, handwritings){
	if (err)
		return console.log(err);

	console.log('hws', handwritings);
});

hw.getHandwriting('31SF81NG00ES', function(err, handwriting){
	if (err)
		return console.log(err);

	console.log('hws', handwriting);
});

var opts = {
	handwriting_color: '#000000',
	handwriting_id: '2D5QW0F80001',
	handwriting_size: '20px',
	height: 'auto',
	line_spacing: '1.2',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
	width: '504px'
};

/*
hw.getPng(opts, function(err, image){
	if (err)
		return console.log(err);

	console.log('img', image);
});
*/

opts = {
	handwriting_color: '#000000',
	handwriting_id: '2D5QW0F80001',
	handwriting_size: '20pt',
	height: '7in',
	line_spacing: '1.2',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
	width: '5in'
};

hw.getPdf(opts, function(err, pdf){
	if (err)
		return console.log(err);

	console.log('pdf', pdf);
});