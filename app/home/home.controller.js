(function() {
	'use strict';
	angular
		.module('app')
		.controller('HomeController', HomeController);
	HomeController.$inject = ['$http', 'toastr'];

	function HomeController($http, toastr) {
		var vm = this;
		vm.callMovieApi = callMovieApi;
		vm.movies = [];

		///////////////

		function callMovieApi(movie) {
			$http
				.get('http://www.omdbapi.com/?t='+movie+'&apikey=af6e6978')
				.then(function(response) {
				vm.movieData = response.data;
				console.log(vm.movieData);
				vm.movies.push({
					title: vm.movieData.Title,
					image: vm.movieData.Poster,
					year: vm.movieData.Year,
					link: vm.movieData.imdbID});


				})
				.catch(function(error) {
					toastr.error('That is not a movie!');
				});
		}
	}
})();