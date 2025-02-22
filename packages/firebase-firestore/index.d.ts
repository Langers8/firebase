import { ICollectionReference, IDocumentReference, IFieldPath, IFieldValue, IGeoPoint, IQuery, ITimestamp, IWriteBatch, SetOptions, DocumentData, GetOptions, IDocumentSnapshot, IQuerySnapshot, SnapshotListenOptions, WhereFilterOp, DocumentFieldType, ISnapshotMetadata, IDocumentChange, IQueryDocumentSnapshot, DocumentChangeType, ITransaction, ISettings, IFirestore } from './common';

export { SetOptions, DocumentData, GetOptions, WhereFilterOp };

import { FirebaseApp } from '@nativescript/firebase-core';

export declare class Transaction implements ITransaction {
	delete<T extends DocumentData = DocumentData>(documentRef: DocumentReference): Transaction;

	get<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>): Promise<DocumentSnapshot<T>>;

	update<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: Partial<{ [K in keyof T]: T[K] | FieldValue }>): Transaction;
	update<T extends DocumentData = DocumentData, K extends keyof T = string>(documentRef: DocumentReference<T>, field: K | FieldPath, value: T[K], moreFieldsAndValues: any[]): Transaction;
	update(documentRef: any, field: any, value?: any, moreFieldsAndValues?: any): Transaction;

	set<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: T, options?: SetOptions): Transaction;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class SnapshotMetadata implements ISnapshotMetadata {
	readonly fromCache: boolean;
	readonly hasPendingWrites: boolean;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class DocumentSnapshot<T extends DocumentData = DocumentData> implements IDocumentSnapshot<T> {
	readonly exists: boolean;

	readonly id: string;

	readonly metadata: SnapshotMetadata;

	readonly ref: DocumentReference;

	data(): any;

	get<fieldType extends DocumentFieldType>(fieldPath: string | number | FieldPath): fieldType;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class DocumentChange implements IDocumentChange {
	readonly doc: QueryDocumentSnapshot;

	readonly newIndex: number;

	oldIndex(): number;

	readonly type: DocumentChangeType;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class Query<T extends DocumentData = DocumentData> implements IQuery<T> {
	endAt(snapshot: DocumentSnapshot<T>): Query;
	endAt(fieldValues: FieldValue[]): Query;
	endAt(fieldValues: DocumentSnapshot<T> | FieldValue[]): Query;

	endBefore(snapshot: DocumentSnapshot<T>): Query;
	endBefore(fieldValues: FieldValue[]): Query;
	endBefore(fieldValues: DocumentSnapshot<T> | FieldValue[]): Query;

	get(options?: GetOptions): Promise<QuerySnapshot>;

	limit(limit: number): Query;

	limitToLast(limitToLast: number): Query;

	onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: QuerySnapshot) => void });
	onSnapshot(options: SnapshotListenOptions, observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: QuerySnapshot) => void });
	onSnapshot(onNext: (snapshot: QuerySnapshot) => void, onError?: (error: Error) => void, onCompletion?: () => void);
	onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: QuerySnapshot) => void, onError?: (error: Error) => void, onCompletion?: () => void);

	orderBy(fieldPath: keyof DocumentData | FieldPath, directionStr: 'asc' | 'desc' = 'asc'): Query;

	startAfter(snapshot: DocumentSnapshot<T>): Query;
	startAfter(fieldValues: FieldValue[]): Query;

	startAt(snapshot: DocumentSnapshot<T>): Query;
	startAt(fieldValues: FieldValue[]): Query;

	where(fieldPath: FieldPath | keyof DocumentData, opStr: WhereFilterOp, value: any): Query;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class QueryDocumentSnapshot<T extends DocumentData = DocumentData> extends DocumentSnapshot<T> implements IQueryDocumentSnapshot<T> {
	data(): any;

	get<fieldType extends DocumentFieldType>(fieldPath: string | number | FieldPath): fieldType;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class QuerySnapshot implements IQuerySnapshot {
	readonly docs: QueryDocumentSnapshot[];

	readonly empty: boolean;

	readonly metadata: SnapshotMetadata;

	readonly query: Query;

	readonly size: number;

	docChanges(options?: SnapshotListenOptions): DocumentChange[];

	forEach(callback: (result: QueryDocumentSnapshot, index: number) => void, thisArg?: any): void;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class CollectionReference<T extends DocumentData = DocumentData> extends Query<T> implements ICollectionReference<T> {
	readonly id: string;

	readonly parent: DocumentReference;

	readonly path: string;

	add(data: T): Promise<DocumentReference<T>>;

	doc(documentPath?: string): DocumentReference;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class DocumentReference<T extends DocumentData = DocumentData> implements IDocumentReference<T> {
	readonly firestore: Firestore;

	readonly id: string;

	readonly parent: CollectionReference;

	readonly path: string;

	collection(collectionPath: string): CollectionReference;

	delete(): Promise<void>;

	get(options?: GetOptions): Promise<DocumentSnapshot<T>>;

	onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: DocumentSnapshot<T>) => void });
	onSnapshot(options: SnapshotListenOptions, observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: DocumentSnapshot<T>) => void });
	onSnapshot(onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void);
	onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void);

	set(data: T, options?: SetOptions): Promise<void>;

	update(data: Partial<{ [K in keyof T]: FieldValue | T[K] }>): Promise<void>;
	update(field: FieldPath | keyof T, value: any, moreFieldsAndValues: any[]): Promise<void>;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class FieldPath implements IFieldPath {
	constructor(...fieldNames: string[]);

	documentId(): FieldPath;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class FieldValue implements IFieldValue {
	arrayRemove(elements: any[]): FieldValue;

	arrayUnion(elements: any[]): FieldValue;

	delete(): FieldValue;

	increment(n: number): FieldValue;

	serverTimestamp(): FieldValue;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export class GeoPoint implements IGeoPoint {
	constructor(latitude: number, longitude: number);

	readonly latitude: number;

	readonly longitude: number;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export class Timestamp implements ITimestamp {
	constructor(seconds: number, nanoseconds: number);

	readonly nanoseconds: number;

	readonly seconds: number;

	static fromDate(date: Date): Timestamp;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class WriteBatch implements IWriteBatch {
	commit(): Promise<void>;

	delete(documentRef: DocumentReference): WriteBatch;

	set(documentRef: DocumentReference, data: DocumentData, options?: SetOptions): WriteBatch;

	update<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: Partial<{ [K in keyof T]: T[K] | FieldValue }>): WriteBatch;
	update<T extends DocumentData = DocumentData, K extends keyof T = string>(documentRef: DocumentReference<T>, field: K | FieldPath, value: FieldValue | T[K], moreFieldAndValues: any[]): WriteBatch;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class Settings implements ISettings {
	cacheSizeBytes: number;

	host: string;

	ignoreUndefinedProperties: boolean;

	persistence: boolean;

	ssl: boolean;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class Firestore implements IFirestore {
	constructor(app?: FirebaseApp);

	useEmulator(host: string, port: number);

	batch(): WriteBatch;

	collection(collectionPath: string): CollectionReference;

	clearPersistence(): Promise<void>;

	collectionGroup(collectionId: string): Query;

	disableNetwork(): Promise<void>;

	doc(documentPath: string): DocumentReference;

	enableNetwork(): Promise<void>;

	runTransaction(updateFunction: (transaction: Transaction) => Promise<any>): Promise<any>;

	settings: Settings;

	terminate(): Promise<void>;

	waitForPendingWrites(): Promise<void>;

	readonly android: any;
	readonly ios: any;
	readonly native: any;

	readonly app: FirebaseApp;
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseFirestore { }
}

export interface FirebaseFirestore {
	static firestore(app?: FirebaseApp): Firestore;
}
