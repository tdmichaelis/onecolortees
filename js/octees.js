var app = angular.module('octees');

app.controller('products', function($scope, $timeout) {

	$scope.products = [
					{
						"id": 001,
						"title": "One Color Tees Original T-shirt",
						"price": "$9.99",
						"class": "#portfolioModal1",
						"images": [
									{
										"src": "",
										"description": ""
									},
									{
										"src": "",
										"description": ""
									},
									{
										"src": "",
										"description": ""
									}
								]
					}, 
					{
						"id": 002,
						"title": "One Color Tees Original T-shirt",
						"price": "$9.99",
						"class": "#portfolioModal2",
						"images": [
									{
										"src": "",
										"description": ""
									},
									{
										"src": "",
										"description": ""
									},
									{
										"src": "",
										"description": ""
									}
								]
					}, 
					{
						"id": 003,
						"title": "One Color Tees Original T-shirt",
						"price": "$9.99",
						"class": "#portfolioModal3",
						"images": [
									{
										"src": "",
										"description": ""
									},
									{
										"src": "",
										"description": ""
									},
									{
										"src": "",
										"description": ""
									}
								]
					}];
})