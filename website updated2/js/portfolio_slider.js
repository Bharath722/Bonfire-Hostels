$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			

			{
			'title' : 'Bornfire Agra',
			'description'   : 'The one and only place where you can get all the amenties at your budget',
			'thumbnail' : ['img/hostel/thumb/h2.jpg', 'img/hostel/thumb/2501.jpg', 'img/hostel/thumb/2502.jpg', 'img/hostel/thumb/2503.jpg','img/hostel/thumb/1.jpg','img/hostel/thumb/2.jpg','img/hostel/thumb/3.jpg','img/hostel/thumb/a (1).jpg','img/hostel/thumb/a (2).jpg','img/hostel/thumb/a (3).jpg','img/hostel/thumb/a (4).jpg','img/hostel/thumb/a (5).jpg'],
			'large' : ['img/hostel/big/h1.jpg', 'img/hostel/big/5001.jpg', 'img/hostel/big/5002.jpg', 'img/hostel/big/5003.jpg','img/hostel/big/1.jpg','img/hostel/big/2.jpg','img/hostel/big/3.jpg','img/hostel/thumb/a (1).jpg','img/hostel/thumb/a (2).jpg','img/hostel/thumb/a (3).jpg','img/hostel/thumb/a (4).jpg','img/hostel/thumb/a (5).jpg'],
			'button_list'   :
			[
			{ 'title':'Book Now', 'url' : 'http://live.ipms247.com/booking/book-rooms-bonfirehotels' },
			{ 'title':'View More', 'url':'agra.html'}
			],
			'tags'  : ['Agra','All']
			}
			
		]
	});
});