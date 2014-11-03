$scope.books = [];
$http.get('/api/book').success(function(data){
	$scope.books=data;
})