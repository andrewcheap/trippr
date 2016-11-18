angular.module('myApp', ['ui.bootstrap'])
	.controller('TripprController', function ($scope, DateService) {

		$scope.departureDate;
		$scope.returnDate;

		$scope.setInitialDates = function() {
			$scope.departureDate = new Date();
			$scope.returnDate = new Date();
			DateService.addDates($scope.departureDate, $scope.returnDate);
		}

		$scope.setInitialDates();

		$scope.popupDepartureCalendar = {
			opened: false
		}

		$scope.openDepartureCalendar = function() {
			$scope.popupDepartureCalendar.opened = true;
		}

		$scope.popupReturnCalendar = {
			opened: false
		}

		$scope.openReturnCalendar = function() {
			$scope.popupReturnCalendar.opened = true;
		}

		$scope.dateOptionsDeparture = {
			formatYear: 'yy',
			maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
			minDate: new Date(),
			startingDay: 1
		};

		// Watch the departureDate.  
		$scope.$watch('departureDate', function() {

			// We check change the returnDate to be on or after the departureDate.
			if($scope.returnDate < $scope.departureDate) {
				$scope.returnDate = $scope.departureDate;
			}

			// We update the return date options so that
			// the user cannot select a date before the departure date.
			$scope.dateOptionsReturn = {
				formatYear: 'yy',
				maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
				minDate: $scope.departureDate,
				startingDay: 1
			};
			DateService.addDates($scope.departureDate, $scope.returnDate);
		});

		$scope.$watch('returnDate', function() {
			DateService.addDates($scope.departureDate, $scope.returnDate);
		});

	})
	.controller('SearchController', function ($scope, $http, AirportService) {
		$scope.airportObject = undefined;

		$http({
			method: 'GET',
			url: 'js/airports.json'
		}).then(function successCallback(response) {
				$scope.airports = response.data;
		}, function errorCallback(response) {
			console.log("failed to get js/airports.json");
		});

		$scope.$watch('airportObject', function() {
			AirportService.addInfo($scope.airportObject);
		})
		
	})
	.controller('SubmitController', function ($scope, $http, DateService, AirportService) {		
		$scope.flightData;

		$scope.submitData = function() {
			$scope.travelDates = DateService.getDates();
			$scope.departureDate = $scope.travelDates.dep;
			$scope.returnDate = $scope.travelDates.ret;
			$scope.airportObject = AirportService.getInfo();
			$scope.airportCode = $scope.airportObject.code;
			console.log($scope.airportCode);
		};

		var url = "http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/BOS-sky/anywhere/2016-11-07/2016-11-14?apiKey=tr801784330681113040128314526342";

		$http({
			method: 'GET',
			url: url,
		}).then(function successCallback(response) {
			$scope.flightData = response;
			console.log($scope.flightData);
		}, function errorCallback(response) {
			console.log("failed to get " + url)
		});


	})
	.service('DateService', function() {
		var dates = {};

		return {
			addDates: addDates,
			getDates: getDates
		}

		function addDates(dep, ret) {
			dates.dep = dep;
			dates.ret = ret;
		}

		function getDates() {
			return dates;
		}
	})
	.service('AirportService', function() {
		
		var airportObj = {};
		
		return {
			addInfo: addInfo,
			getInfo: getInfo
		}

		function addInfo(airportInfo) {
			airportObj = airportInfo;
		}

		function getInfo() {
			console.log("getInfo");
			return airportObj;
		}
	})
