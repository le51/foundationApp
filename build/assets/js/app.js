(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .controller('HomeController', HomeController)
    .controller('PostController', PostController)
    .filter('trusted', ['$sce', function ($sce) {
		  return function(url) {
		      return $sce.trustAsResourceUrl(url);
		  };
		}])
    .run(run)
  ;

  HomeController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
  PostController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
  
  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: 'app2'
    });

    $locationProvider.hashPrefix('');
  }

function PostController($scope, $stateParams, $state, $controller) {
	angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
	// Your code...
		$scope.posts = [
			{
				'id': 1,
				'media': 'https://www.youtube.com/embed/ZaCddFHubrg',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			},
			{
				'id': 2,
				'media': 'https://www.youtube.com/embed/ZaCddFHubrg',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			},
			{
				'id': 3,
				'media': 'https://www.youtube.com/embed/ZaCddFHubrg',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			},
			{
				'id': 4,
				'media': 'https://www.youtube.com/embed/ZaCddFHubrg',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			}
		];
	}	

	function HomeController($scope, $stateParams, $state, $controller) {
	angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
	// Your code...
		$scope.posts = [
			{
				'id': 1,
				'media': 'http://placehold.it/30x30',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			},
			{
				'id': 2,
				'media': 'http://placehold.it/30x30',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			},
			{
				'id': 3,
				'media': 'http://placehold.it/30x30',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			},
			{
				'id': 4,
				'media': 'http://placehold.it/30x30',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			},
			{
				'id': 5,
				'media': 'http://placehold.it/30x30',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			},
			{
				'id': 6,
				'media': 'http://placehold.it/30x30',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			},
			{
				'id': 7,
				'media': 'http://placehold.it/30x30',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			},
			{
				'id': 8,
				'media': 'http://placehold.it/30x30',
				'title': 'Cady Heron',
				'intro': '<p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>'
			}
		];
	}

  function run() {
    FastClick.attach(document.body);
  }

})();
