import { deserialize, Firebase, FirebaseApp } from '@nativescript/firebase-core';
import { HttpMethod, IHttpMetric, IPerformance, ITrace } from './common';


Firebase.performance = ()=>{
    return new Performance();
}


function toHttpMethod(method: HttpMethod): FIRHTTPMethod {
	switch (method) {
		case HttpMethod.CONNECT:
			return FIRHTTPMethod.CONNECT;
		case HttpMethod.DELETE:
			return FIRHTTPMethod.DELETE;
		case HttpMethod.GET:
			return FIRHTTPMethod.GET;
		case HttpMethod.HEAD:
			return FIRHTTPMethod.HEAD;
		case HttpMethod.OPTIONS:
			return FIRHTTPMethod.OPTIONS;
		case HttpMethod.PATCH:
			return FIRHTTPMethod.PATCH;
		case HttpMethod.POST:
			return FIRHTTPMethod.POST;
		case HttpMethod.PUT:
			return FIRHTTPMethod.PUT;
		case HttpMethod.TRACE:
			return FIRHTTPMethod.TRACE;
	}
}
export class HttpMetric implements IHttpMetric {
	#native: FIRHTTPMetric;
	static fromUrlMethod(url: string, method: HttpMethod) {
		if (url && method) {
			const result = new HttpMetric();
			result.#native = FIRHTTPMetric.alloc().initWithURLHTTPMethod(NSURL.URLWithString(url), toHttpMethod(method));
			return result;
		}
		return null;
	}
	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}

	getAttribute(attribute: string): string {
		return this.native.valueForAttribute(attribute);
	}
	getAttributes(): { [key: string]: string } {
		return deserialize(this.native.attributes);
	}
	putAttribute(attribute: string, value: string): void {
		this.native.setValueForAttribute(value, attribute);
	}
	removeAttribute(attribute: string): void {
		this.native.removeAttribute(attribute);
	}
	setHttpResponseCode(code: number): void {
		this.native.responseCode = code;
	}
	setRequestPayloadSize(bytes: number): void {
		this.native.requestPayloadSize = bytes;
	}
	setResponseContentType(contentType: string): void {
		this.native.responseContentType = contentType;
	}
	setResponsePayloadSize(bytes: number): void {
		this.native.responsePayloadSize = bytes;
	}
	start() {
		this.native.start();
	}
	stop() {
		this.native.stop();
	}
}

export class Trace implements ITrace {
	#native: FIRTrace;
	static fromNative(trace: FIRTrace) {
		if (trace instanceof FIRTrace) {
			const result = new Trace();
			result.#native = trace;
			return result;
		}
		return null;
	}
	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}

	getAttribute(attribute: string): string {
		return this.native.valueForAttribute(attribute);
	}
	getMetric(metricName: string): number {
		return this.native.valueForIntMetric(metricName);
	}
	getMetrics(): { [key: string]: number } {
		return deserialize(this.native.attributes);
	}
	incrementMetric(metricName: string, incrementBy: number): void {
		this.native.incrementMetricByInt(metricName, incrementBy);
	}
	putAttribute(attribute: string, value: string): void {
		this.native.setValueForAttribute(attribute, value);
	}
	putMetric(metricName: string, value: number): void {
		this.native.setIntValueForMetric(value, metricName);
	}
	removeMetric(metricName: string): void {
		this.native.removeAttribute(metricName);
	}
	start() {
		this.native.start();
	}
	stop() {
		this.native.stop();
	}
}

export class Performance implements IPerformance {
	#native: FIRPerformance;
	#app: FirebaseApp;
	get isPerformanceCollectionEnabled(): boolean {
		return this.native.dataCollectionEnabled;
	}

	set isPerformanceCollectionEnabled(value) {
		this.native.dataCollectionEnabled = value;
        this.native.instrumentationEnabled = value;
	}

	newHttpMetric(url: string, httpMethod: HttpMethod): HttpMetric {
		return HttpMetric.fromUrlMethod(url, httpMethod);
	}
	newTrace(identifier: string): Trace {
		return Trace.fromNative(this.native.traceWithName(identifier));
	}

	startTrace(identifier: string): Trace {
		const trace = Trace.fromNative(this.native.traceWithName(identifier));
		trace.start();
		return trace;
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.native.app);
		}
		return this.#app;
	}
}
