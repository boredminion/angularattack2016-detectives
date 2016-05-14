System.config({
	map : {
		'@angular' : 'node_modules/@angular',
		'rxjs' : 'node_modules/rxjs'
	},
	packages : {
		'@angular/core' : { main : 'index.js' },
		'@angular/compiler' : { main : 'index.js' },
		'@angular/common' : { main : 'index.js' },
		'@angular/platform-browser' : { main : 'index.js' },
		'@angular/platform-browser-dynamic' : { main : 'index.js' }
	},
	defaultJSExtensions : true
});
System.import('app/bootstrap-web');