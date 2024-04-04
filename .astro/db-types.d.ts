// This file is generated by Astro DB
declare module 'astro:db' {
	export const Config: import("@astrojs/db/runtime").Table<
		"Config",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Config","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Config","primaryKey":false,"optional":false}},"email":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"email","collection":"Config","primaryKey":false,"optional":false}},"date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"date","collection":"Config","default":{"__serializedSQL":true,"sql":"CURRENT_TIMESTAMP"}}}}
	>;
	export const Author: import("@astrojs/db/runtime").Table<
		"Author",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Author","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Author","primaryKey":false,"optional":false}},"email":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"email","collection":"Author","primaryKey":false,"optional":false}},"date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"date","collection":"Author","default":{"__serializedSQL":true,"sql":"CURRENT_TIMESTAMP"}}}}
	>;
	export const Content: import("@astrojs/db/runtime").Table<
		"Content",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Content","primaryKey":true}},"authorId":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"authorId","collection":"Content","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Author","primaryKey":true}}}},"alias":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"alias","collection":"Content","primaryKey":false,"optional":false}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Content","primaryKey":false,"optional":false}},"body":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"body","collection":"Content","primaryKey":false,"optional":false}},"published":{"type":"boolean","schema":{"optional":false,"unique":false,"deprecated":false,"name":"published","collection":"Content","default":false}},"metadata":{"type":"json","schema":{"optional":true,"unique":false,"deprecated":false,"name":"metadata","collection":"Content"}},"date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"date","collection":"Content","default":{"__serializedSQL":true,"sql":"CURRENT_TIMESTAMP"}}}}
	>;
}
