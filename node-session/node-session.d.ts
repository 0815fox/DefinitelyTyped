// Type definitions for z85
// Project: https://github.com/msealand/z85.node
// Definitions by: 0815fox <https://github.com/0815fox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import {http} from 'http';

declare namespace NodeSession {
	interface IConfig {
		driver?:'file'|'memory'|'database',
		lifetime?:number, //ms
		expireOnClose?:boolean,
		files?:string,
		connection?:boolean,
		table?:string,
		lottery?:[number,number],
		cookie?:string,
		path?:string,
		domain?:string,
		secure?:boolean,
		httpOnly?:boolean,
		encrypt?:boolean
	}
	interface IEncrypter { /* TODO */ }
	interface ISession {
		put(Key:string,Value:any):void;
		push(Path:string,Value:any):void;
		get(Key:string,Default?:any):any;
		pull(Key:string,Default?:any):any;
		all():{[Key:string]:any};
		has(Key:string):boolean;
		forget(Key:string):void;
		flush():void;
		regenerate():void;
		flash(Key:string,Value:any):void;
		reflash():void;
		keep(...keys:string[]):void;
		getToken():string;
		regenerateToken():void;

	}
	interface IncomingMessageWithSession extends http.IncomingMessage {
		session?:ISession;
	}
}

declare class NodeSession {
	startSession(request:http.IncomingMessage,response:http.ServerResponse,cb:()=>void):void;
	constructor(Config?:NodeSession.IConfig,Encrypter?:NodeSession.IEncrypter);
}

export = NodeSession;
