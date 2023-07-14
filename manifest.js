export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","image/1.png","image/10.png","image/11.png","image/12.png","image/13.png","image/14.png","image/15.png","image/16.png","image/2.png","image/3.png","image/4.png","image/5.png","image/6.png","image/7.png","image/8.png","image/9.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.64f8e372.js","app":"_app/immutable/entry/app.360c4291.js","imports":["_app/immutable/entry/start.64f8e372.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.148e283d.js","_app/immutable/entry/app.360c4291.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.7cf2deec.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
