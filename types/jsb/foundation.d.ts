/** @module Foundation */
// Generated from JSExport registrations. Do not edit by hand.
// Source revision: 7cbc638e59df. Platform-conditional declarations are a union.

/** Native instance exported as `NSArray`.
 */
interface NSArray {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  sortedArrayUsingDescriptors(_sortDescriptors: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  objectAtIndex(_index: number): unknown;
  /** Exported member.*/
  arrayByAddingObject(_anObject: unknown): unknown[] | null;
  /** Exported member.*/
  arrayByAddingObjectsFromArray(_otherArray: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  componentsJoinedByString(_separator: string | null): string | null;
  /** Exported member.*/
  containsObject(_anObject: unknown): boolean;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
  /** Exported member.*/
  descriptionWithLocaleIndent(_locale: unknown, _level: number): string | null;
  /** Exported member.*/
  firstObjectCommonWithArray(_otherArray: unknown[] | null): unknown;
  /** Exported member.*/
  getObjectsRange(_objects: NativePointer, _range: NSRange): void;
  /** Exported member.*/
  indexOfObject(_anObject: unknown): number;
  /** Exported member.*/
  indexOfObjectInRange(_anObject: unknown, _range: NSRange): number;
  /** Exported member.*/
  indexOfObjectIdenticalTo(_anObject: unknown): number;
  /** Exported member.*/
  indexOfObjectIdenticalToInRange(_anObject: unknown, _range: NSRange): number;
  /** Exported member.*/
  isEqualToArray(_otherArray: unknown[] | null): boolean;
  /** Exported member.*/
  firstObject(): unknown;
  /** Exported member.*/
  lastObject(): unknown;
  /** Exported member.*/
  objectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  reverseObjectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  sortedArrayHint(): NSData | null;
  /** Exported member.*/
  sortedArrayUsingFunctionContext(_comparator: NativePointer, _context: NativePointer | null): unknown[] | null;
  /** Exported member.*/
  sortedArrayUsingFunctionContextHint(_comparator: NativePointer, _context: NativePointer | null, _hint: NSData | null): unknown[] | null;
  /** Exported member.*/
  sortedArrayUsingSelector(_comparator: NativeSelector): unknown[] | null;
  /** Exported member.*/
  subarrayWithRange(_range: NSRange): unknown[] | null;
  /** Exported member.*/
  writeToFileAtomically(_path: string | null, _useAuxiliaryFile: boolean): boolean;
  /** Exported member.*/
  writeToURLAtomically(_url: NSURL | null, _atomically: boolean): boolean;
  /** Exported member.*/
  makeObjectsPerformSelector(_aSelector: NativeSelector): void;
  /** Exported member.*/
  makeObjectsPerformSelectorWithObject(_aSelector: NativeSelector, _argument: unknown): void;
  /** Exported member.*/
  objectsAtIndexes(_indexes: NSIndexSet | null): unknown[] | null;
  /** Exported member.*/
  objectAtIndexedSubscript(_idx: number): unknown;
  /** Exported member.*/
  enumerateObjectsUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateObjectsWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateObjectsAtIndexesOptionsUsingBlock(_s: NSIndexSet | null, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  indexOfObjectPassingTest(_predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexOfObjectWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexOfObjectAtIndexesOptionsPassingTest(_s: NSIndexSet | null, _opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexesOfObjectsPassingTest(_predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesOfObjectsWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesOfObjectsAtIndexesOptionsPassingTest(_s: NSIndexSet | null, _opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  sortedArrayUsingComparator(_cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  sortedArrayWithOptionsUsingComparator(_opts: number, _cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  indexOfObjectInSortedRangeOptionsUsingComparator(_obj: unknown, _r: NSRange, _opts: number, _cmp: NSComparator): number;
  /** Exported member.*/
  getObjects(_objects: NativePointer): void;
  /** Exported member.*/
  valueForKey(_key: string | null): unknown;
  /** Exported member.*/
  setValueForKey(_value: unknown, _key: string | null): void;
  /** Exported member.*/
  addObserverToObjectsAtIndexesForKeyPathOptionsContext(_observer: unknown, _indexes: NSIndexSet | null, _keyPath: string | null, _options: number, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverFromObjectsAtIndexesForKeyPathContext(_observer: unknown, _indexes: NSIndexSet | null, _keyPath: string | null, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverFromObjectsAtIndexesForKeyPath(_observer: unknown, _indexes: NSIndexSet | null, _keyPath: string | null): void;
  /** Exported member.*/
  addObserverForKeyPathOptionsContext(_observer: unknown, _keyPath: string | null, _options: number, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPathContext(_observer: unknown, _keyPath: string | null, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPath(_observer: unknown, _keyPath: string | null): void;
  /** Exported member.*/
  pathsMatchingExtensions(_filterTypes: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  filteredArrayUsingPredicate(_predicate: NSPredicate | null): unknown[] | null;
}
/** Native class object for {@link NSArray}.*/
interface NSArrayClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): unknown[] | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): unknown[] | null;
  /** Exported member.*/
  alloc(): unknown[] | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  array(): unknown[] | null;
  /** Exported member.*/
  arrayWithObject(_anObject: unknown): unknown[] | null;
  /** Exported member.*/
  arrayWithObjectsCount(_objects: NativePointer, _cnt: number): unknown[] | null;
  /** Exported member.*/
  arrayWithObjects(_firstObj: unknown): unknown[] | null;
  /** Exported member.*/
  arrayWithArray(_array: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  arrayWithContentsOfFile(_path: string | null): unknown;
  /** Exported member.*/
  arrayWithContentsOfURL(_url: NSURL | null): unknown;
}
/** Host-injected native class object.*/
declare var NSArray: NSArrayClass;

/** Native instance exported as `NSAttributedString`.
 */
interface NSAttributedString {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  string(): string | null;
  /** Exported member.*/
  attributesAtIndexEffectiveRange(_location: number, _range: NSRangePointer): Record<string, unknown> | null;
  /** Exported member.*/
  length(): number;
  /** Exported member.*/
  attributeAtIndexEffectiveRange(_attrName: string | null, _location: number, _range: NSRangePointer): unknown;
  /** Exported member.*/
  attributedSubstringFromRange(_range: NSRange): NSAttributedString | null;
  /** Exported member.*/
  attributesAtIndexLongestEffectiveRangeInRange(_location: number, _range: NSRangePointer, _rangeLimit: NSRange): Record<string, unknown> | null;
  /** Exported member.*/
  attributeAtIndexLongestEffectiveRangeInRange(_attrName: string | null, _location: number, _range: NSRangePointer, _rangeLimit: NSRange): unknown;
  /** Exported member.*/
  isEqualToAttributedString(_other: NSAttributedString | null): boolean;
  /** Exported member.*/
  enumerateAttributesInRangeOptionsUsingBlock(_enumerationRange: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateAttributeInRangeOptionsUsingBlock(_attrName: string | null, _enumerationRange: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  dataFromRangeDocumentAttributesError(_range: NSRange, _dict: Record<string, unknown> | null, _error: NSError | null): NSData | null;
  /** Exported member.*/
  fileWrapperFromRangeDocumentAttributesError(_range: NSRange, _dict: Record<string, unknown> | null, _error: NSError | null): NSFileWrapper | null;
  /** Exported member.*/
  size(): CGSize;
  /** Exported member.*/
  drawAtPoint(_point: CGPoint): void;
  /** Exported member.*/
  drawInRect(_rect: CGRect): void;
  /** Exported member.*/
  drawWithRectOptionsAttributesContext(_rect: CGRect, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): void;
  /** Exported member.*/
  boundingRectWithSizeOptionsAttributesContext(_size: CGSize, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): CGRect;
  /** Exported member.*/
  drawWithRectOptionsContext(_rect: CGRect, _options: number, _context: NSStringDrawingContext | null): void;
  /** Exported member.*/
  boundingRectWithSizeOptionsContext(_size: CGSize, _options: number, _context: NSStringDrawingContext | null): CGRect;
}
/** Native class object for {@link NSAttributedString}.*/
interface NSAttributedStringClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSAttributedString | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSAttributedString | null;
  /** Exported member.*/
  alloc(): NSAttributedString | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  attributedStringWithAttachment(_attachment: NSTextAttachment | null): NSAttributedString | null;
}
/** Host-injected native class object.*/
declare var NSAttributedString: NSAttributedStringClass;

/** Native instance exported as `NSCharacterSet`.
 */
interface NSCharacterSet {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  characterIsMember(_aCharacter: number): boolean;
  /** Exported member.*/
  bitmapRepresentation(): NSData | null;
  /** Exported member.*/
  invertedSet(): NSCharacterSet | null;
  /** Exported member.*/
  longCharacterIsMember(_theLongChar: number): boolean;
  /** Exported member.*/
  isSupersetOfSet(_theOtherSet: NSCharacterSet | null): boolean;
  /** Exported member.*/
  hasMemberInPlane(_thePlane: number): boolean;
}
/** Native class object for {@link NSCharacterSet}.*/
interface NSCharacterSetClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSCharacterSet | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSCharacterSet | null;
  /** Exported member.*/
  alloc(): NSCharacterSet | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  URLUserAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLPasswordAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLHostAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLPathAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLQueryAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLFragmentAllowedCharacterSet(): unknown;
  /** Exported member.*/
  controlCharacterSet(): unknown;
  /** Exported member.*/
  whitespaceCharacterSet(): unknown;
  /** Exported member.*/
  whitespaceAndNewlineCharacterSet(): unknown;
  /** Exported member.*/
  decimalDigitCharacterSet(): unknown;
  /** Exported member.*/
  letterCharacterSet(): unknown;
  /** Exported member.*/
  lowercaseLetterCharacterSet(): unknown;
  /** Exported member.*/
  uppercaseLetterCharacterSet(): unknown;
  /** Exported member.*/
  nonBaseCharacterSet(): unknown;
  /** Exported member.*/
  alphanumericCharacterSet(): unknown;
  /** Exported member.*/
  decomposableCharacterSet(): unknown;
  /** Exported member.*/
  illegalCharacterSet(): unknown;
  /** Exported member.*/
  punctuationCharacterSet(): unknown;
  /** Exported member.*/
  capitalizedLetterCharacterSet(): unknown;
  /** Exported member.*/
  symbolCharacterSet(): unknown;
  /** Exported member.*/
  newlineCharacterSet(): unknown;
  /** Exported member.*/
  characterSetWithRange(_aRange: NSRange): unknown;
  /** Exported member.*/
  characterSetWithCharactersInString(_aString: string | null): unknown;
  /** Exported member.*/
  characterSetWithBitmapRepresentation(_data: NSData | null): unknown;
  /** Exported member.*/
  characterSetWithContentsOfFile(_fName: string | null): unknown;
}
/** Host-injected native class object.*/
declare var NSCharacterSet: NSCharacterSetClass;

/** Native instance exported as `NSCountedSet`.
 */
interface NSCountedSet {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  sortedArrayUsingDescriptors(_sortDescriptors: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  valueForKey(_key: string | null): unknown;
  /** Exported member.*/
  setValueForKey(_value: unknown, _key: string | null): void;
  /** Exported member.*/
  addObserverForKeyPathOptionsContext(_observer: unknown, _keyPath: string | null, _options: number, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPathContext(_observer: unknown, _keyPath: string | null, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPath(_observer: unknown, _keyPath: string | null): void;
  /** Exported member.*/
  filteredSetUsingPredicate(_predicate: NSPredicate | null): NSSet | null;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  member(_object: unknown): unknown;
  /** Exported member.*/
  objectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  allObjects(): unknown[] | null;
  /** Exported member.*/
  anyObject(): unknown;
  /** Exported member.*/
  containsObject(_anObject: unknown): boolean;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
  /** Exported member.*/
  intersectsSet(_otherSet: NSSet | null): boolean;
  /** Exported member.*/
  isEqualToSet(_otherSet: NSSet | null): boolean;
  /** Exported member.*/
  isSubsetOfSet(_otherSet: NSSet | null): boolean;
  /** Exported member.*/
  makeObjectsPerformSelector(_aSelector: NativeSelector): void;
  /** Exported member.*/
  makeObjectsPerformSelectorWithObject(_aSelector: NativeSelector, _argument: unknown): void;
  /** Exported member.*/
  setByAddingObject(_anObject: unknown): NSSet | null;
  /** Exported member.*/
  setByAddingObjectsFromSet(_other: NSSet | null): NSSet | null;
  /** Exported member.*/
  setByAddingObjectsFromArray(_other: unknown[] | null): NSSet | null;
  /** Exported member.*/
  enumerateObjectsUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateObjectsWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  objectsPassingTest(_predicate: NativeBlock | null): NSSet | null;
  /** Exported member.*/
  objectsWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): NSSet | null;
  /** Exported member.*/
  addObject(_object: unknown): void;
  /** Exported member.*/
  removeObject(_object: unknown): void;
  /** Exported member.*/
  addObjectsFromArray(_array: unknown[] | null): void;
  /** Exported member.*/
  intersectSet(_otherSet: NSSet | null): void;
  /** Exported member.*/
  minusSet(_otherSet: NSSet | null): void;
  /** Exported member.*/
  removeAllObjects(): void;
  /** Exported member.*/
  unionSet(_otherSet: NSSet | null): void;
  /** Exported member.*/
  setSet(_otherSet: NSSet | null): void;
  /** Exported member.*/
  filterUsingPredicate(_predicate: NSPredicate | null): void;
  /** Exported member.*/
  countForObject(_object: unknown): number;
}
/** Native class object for {@link NSCountedSet}.*/
interface NSCountedSetClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSCountedSet | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSCountedSet | null;
  /** Exported member.*/
  alloc(): NSCountedSet | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  set(): NSCountedSet | null;
  /** Exported member.*/
  setWithObject(_object: unknown): NSCountedSet | null;
  /** Exported member.*/
  setWithObjectsCount(_objects: NativePointer, _cnt: number): NSCountedSet | null;
  /** Exported member.*/
  setWithObjects(_firstObj: unknown): NSCountedSet | null;
  /** Exported member.*/
  setWithSet(_set: NSSet | null): NSCountedSet | null;
  /** Exported member.*/
  setWithArray(_array: unknown[] | null): NSCountedSet | null;
  /** Exported member.*/
  setWithCapacity(_numItems: number): NSCountedSet | null;
}
/** Host-injected native class object.*/
declare var NSCountedSet: NSCountedSetClass;

/** Native instance exported as `NSData`.
 */
interface NSData {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  length(): number;
  /** Exported member.*/
  bytes(): NativePointer | null;
  /** Exported member.*/
  getBytesLength(_buffer: NativePointer | null, _length: number): void;
  /** Exported member.*/
  getBytesRange(_buffer: NativePointer | null, _range: NSRange): void;
  /** Exported member.*/
  isEqualToData(_other: NSData | null): boolean;
  /** Exported member.*/
  subdataWithRange(_range: NSRange): NSData | null;
  /** Exported member.*/
  writeToFileAtomically(_path: string | null, _useAuxiliaryFile: boolean): boolean;
  /** Exported member.*/
  writeToURLAtomically(_url: NSURL | null, _atomically: boolean): boolean;
  /** Exported member.*/
  writeToFileOptionsError(_path: string | null, _writeOptionsMask: number, _errorPtr: NSError | null): boolean;
  /** Exported member.*/
  writeToURLOptionsError(_url: NSURL | null, _writeOptionsMask: number, _errorPtr: NSError | null): boolean;
  /** Exported member.*/
  rangeOfDataOptionsRange(_dataToFind: NSData | null, _mask: number, _searchRange: NSRange): NSRange;
  /** Exported member.*/
  enumerateByteRangesUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  getBytes(_buffer: NativePointer | null): void;
  /** Exported member.*/
  base64Encoding(): string | null;
}
/** Native class object for {@link NSData}.*/
interface NSDataClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSData | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSData | null;
  /** Exported member.*/
  alloc(): NSData | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  data(): unknown;
  /** Exported member.*/
  dataWithStringEncoding(_string: string | null, _encoding: number): unknown;
  /** Exported member.*/
  dataWithBytesLength(_bytes: NativePointer | null, _length: number): unknown;
  /** Exported member.*/
  dataWithBytesNoCopyLength(_bytes: NativePointer | null, _length: number): unknown;
  /** Exported member.*/
  dataWithBytesNoCopyLengthFreeWhenDone(_bytes: NativePointer | null, _length: number, _b: boolean): unknown;
  /** Exported member.*/
  dataWithContentsOfFileOptionsError(_path: string | null, _readOptionsMask: number, _errorPtr: NSError | null): unknown;
  /** Exported member.*/
  dataWithContentsOfURLOptionsError(_url: NSURL | null, _readOptionsMask: number, _errorPtr: NSError | null): unknown;
  /** Exported member.*/
  dataWithContentsOfFile(_path: string | null): unknown;
  /** Exported member.*/
  dataWithContentsOfURL(_url: NSURL | null): unknown;
  /** Exported member.*/
  dataWithData(_data: NSData | null): unknown;
  /** Exported member.*/
  dataWithContentsOfMappedFile(_path: string | null): unknown;
}
/** Host-injected native class object.*/
declare var NSData: NSDataClass;

/** Native instance exported as `NSDate`.
 */
interface NSDate {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  timeIntervalSinceReferenceDate(): number;
  /** Exported member.*/
  timeIntervalSinceDate(_anotherDate: Date | null): number;
  /** Exported member.*/
  timeIntervalSinceNow(): number;
  /** Exported member.*/
  timeIntervalSince1970(): number;
  /** Exported member.*/
  addTimeInterval(_seconds: number): unknown;
  /** Exported member.*/
  dateByAddingTimeInterval(_ti: number): unknown;
  /** Exported member.*/
  earlierDate(_anotherDate: Date | null): Date | null;
  /** Exported member.*/
  laterDate(_anotherDate: Date | null): Date | null;
  /** Exported member.*/
  compare(_other: Date | null): number;
  /** Exported member.*/
  isEqualToDate(_otherDate: Date | null): boolean;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
}
/** Native class object for {@link NSDate}.*/
interface NSDateClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): Date | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): Date | null;
  /** Exported member.*/
  alloc(): Date | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  timeIntervalSinceReferenceDate(): number;
  /** Exported member.*/
  date(): Date | null;
  /** Exported member.*/
  dateWithTimeIntervalSinceNow(_secs: number): Date | null;
  /** Exported member.*/
  dateWithTimeIntervalSinceReferenceDate(_ti: number): Date | null;
  /** Exported member.*/
  dateWithTimeIntervalSince1970(_secs: number): Date | null;
  /** Exported member.*/
  dateWithTimeIntervalSinceDate(_secsToBeAdded: number, _date: Date | null): Date | null;
  /** Exported member.*/
  distantFuture(): unknown;
  /** Exported member.*/
  distantPast(): unknown;
}
/** Host-injected native class object.*/
declare var NSDate: NSDateClass;

/** Native instance exported as `NSDateComponents`.
 */
interface NSDateComponents {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  calendar(): NSCalendar | null;
  /** Exported member.*/
  timeZone(): NSTimeZone | null;
  /** Exported member.*/
  era(): number;
  /** Exported member.*/
  year(): number;
  /** Exported member.*/
  month(): number;
  /** Exported member.*/
  day(): number;
  /** Exported member.*/
  hour(): number;
  /** Exported member.*/
  minute(): number;
  /** Exported member.*/
  second(): number;
  /** Exported member.*/
  nanosecond(): number;
  /** Exported member.*/
  week(): number;
  /** Exported member.*/
  weekday(): number;
  /** Exported member.*/
  weekdayOrdinal(): number;
  /** Exported member.*/
  quarter(): number;
  /** Exported member.*/
  weekOfMonth(): number;
  /** Exported member.*/
  weekOfYear(): number;
  /** Exported member.*/
  yearForWeekOfYear(): number;
  /** Exported member.*/
  isLeapMonth(): boolean;
  /** Exported member.*/
  setCalendar(_cal: NSCalendar | null): void;
  /** Exported member.*/
  setTimeZone(_tz: NSTimeZone | null): void;
  /** Exported member.*/
  setEra(_v: number): void;
  /** Exported member.*/
  setYear(_v: number): void;
  /** Exported member.*/
  setMonth(_v: number): void;
  /** Exported member.*/
  setDay(_v: number): void;
  /** Exported member.*/
  setHour(_v: number): void;
  /** Exported member.*/
  setMinute(_v: number): void;
  /** Exported member.*/
  setSecond(_v: number): void;
  /** Exported member.*/
  setNanosecond(_value: number): void;
  /** Exported member.*/
  setWeek(_v: number): void;
  /** Exported member.*/
  setWeekday(_v: number): void;
  /** Exported member.*/
  setWeekdayOrdinal(_v: number): void;
  /** Exported member.*/
  setQuarter(_v: number): void;
  /** Exported member.*/
  setWeekOfMonth(_w: number): void;
  /** Exported member.*/
  setWeekOfYear(_w: number): void;
  /** Exported member.*/
  setYearForWeekOfYear(_y: number): void;
  /** Exported member.*/
  setLeapMonth(_lm: boolean): void;
  /** Exported member.*/
  date(): Date | null;
}
/** Native class object for {@link NSDateComponents}.*/
interface NSDateComponentsClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSDateComponents | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSDateComponents | null;
  /** Exported member.*/
  alloc(): NSDateComponents | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
}
/** Host-injected native class object.*/
declare var NSDateComponents: NSDateComponentsClass;

/** Native instance exported as `NSDateFormatter`.
 */
interface NSDateFormatter {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  stringForObjectValue(_obj: unknown): string | null;
  /** Exported member.*/
  attributedStringForObjectValueWithDefaultAttributes(_obj: unknown, _attrs: Record<string, unknown> | null): NSAttributedString | null;
  /** Exported member.*/
  editingStringForObjectValue(_obj: unknown): string | null;
  /** Exported member.*/
  getObjectValueForStringErrorDescription(_obj: unknown, _string: string | null, _error: string | null): boolean;
  /** Exported member.*/
  isPartialStringValidNewEditingStringErrorDescription(_partialString: string | null, _newString: string | null, _error: string | null): boolean;
  /** Exported member.*/
  isPartialStringValidProposedSelectedRangeOriginalStringOriginalSelectedRangeErrorDescription(_partialStringPtr: string | null, _proposedSelRangePtr: NSRangePointer, _origString: string | null, _origSelRange: NSRange, _error: string | null): boolean;
  /** Exported member.*/
  getObjectValueForStringRangeError(_obj: unknown, _string: string | null, _rangep: NativePointer | null, _error: NSError | null): boolean;
  /** Exported member.*/
  stringFromDate(_date: Date | null): string | null;
  /** Exported member.*/
  dateFromString(_string: string | null): Date | null;
  /** Exported member.*/
  dateFormat(): string | null;
  /** Exported member.*/
  dateStyle(): number;
  /** Exported member.*/
  setDateStyle(_style: number): void;
  /** Exported member.*/
  timeStyle(): number;
  /** Exported member.*/
  setTimeStyle(_style: number): void;
  /** Exported member.*/
  locale(): NSLocale | null;
  /** Exported member.*/
  setLocale(_locale: NSLocale | null): void;
  /** Exported member.*/
  generatesCalendarDates(): boolean;
  /** Exported member.*/
  setGeneratesCalendarDates(_b: boolean): void;
  /** Exported member.*/
  formatterBehavior(): number;
  /** Exported member.*/
  setFormatterBehavior(_behavior: number): void;
  /** Exported member.*/
  setDateFormat(_string: string | null): void;
  /** Exported member.*/
  timeZone(): NSTimeZone | null;
  /** Exported member.*/
  setTimeZone(_tz: NSTimeZone | null): void;
  /** Exported member.*/
  calendar(): NSCalendar | null;
  /** Exported member.*/
  setCalendar(_calendar: NSCalendar | null): void;
  /** Exported member.*/
  isLenient(): boolean;
  /** Exported member.*/
  setLenient(_b: boolean): void;
  /** Exported member.*/
  twoDigitStartDate(): Date | null;
  /** Exported member.*/
  setTwoDigitStartDate(_date: Date | null): void;
  /** Exported member.*/
  defaultDate(): Date | null;
  /** Exported member.*/
  setDefaultDate(_date: Date | null): void;
  /** Exported member.*/
  eraSymbols(): unknown[] | null;
  /** Exported member.*/
  setEraSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  monthSymbols(): unknown[] | null;
  /** Exported member.*/
  setMonthSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  shortMonthSymbols(): unknown[] | null;
  /** Exported member.*/
  setShortMonthSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  weekdaySymbols(): unknown[] | null;
  /** Exported member.*/
  setWeekdaySymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  shortWeekdaySymbols(): unknown[] | null;
  /** Exported member.*/
  setShortWeekdaySymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  AMSymbol(): string | null;
  /** Exported member.*/
  setAMSymbol(_string: string | null): void;
  /** Exported member.*/
  PMSymbol(): string | null;
  /** Exported member.*/
  setPMSymbol(_string: string | null): void;
  /** Exported member.*/
  longEraSymbols(): unknown[] | null;
  /** Exported member.*/
  setLongEraSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  veryShortMonthSymbols(): unknown[] | null;
  /** Exported member.*/
  setVeryShortMonthSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  standaloneMonthSymbols(): unknown[] | null;
  /** Exported member.*/
  setStandaloneMonthSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  shortStandaloneMonthSymbols(): unknown[] | null;
  /** Exported member.*/
  setShortStandaloneMonthSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  veryShortStandaloneMonthSymbols(): unknown[] | null;
  /** Exported member.*/
  setVeryShortStandaloneMonthSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  veryShortWeekdaySymbols(): unknown[] | null;
  /** Exported member.*/
  setVeryShortWeekdaySymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  standaloneWeekdaySymbols(): unknown[] | null;
  /** Exported member.*/
  setStandaloneWeekdaySymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  shortStandaloneWeekdaySymbols(): unknown[] | null;
  /** Exported member.*/
  setShortStandaloneWeekdaySymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  veryShortStandaloneWeekdaySymbols(): unknown[] | null;
  /** Exported member.*/
  setVeryShortStandaloneWeekdaySymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  quarterSymbols(): unknown[] | null;
  /** Exported member.*/
  setQuarterSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  shortQuarterSymbols(): unknown[] | null;
  /** Exported member.*/
  setShortQuarterSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  standaloneQuarterSymbols(): unknown[] | null;
  /** Exported member.*/
  setStandaloneQuarterSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  shortStandaloneQuarterSymbols(): unknown[] | null;
  /** Exported member.*/
  setShortStandaloneQuarterSymbols(_array: unknown[] | null): void;
  /** Exported member.*/
  gregorianStartDate(): Date | null;
  /** Exported member.*/
  setGregorianStartDate(_date: Date | null): void;
  /** Exported member.*/
  doesRelativeDateFormatting(): boolean;
  /** Exported member.*/
  setDoesRelativeDateFormatting(_b: boolean): void;
}
/** Native class object for {@link NSDateFormatter}.*/
interface NSDateFormatterClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSDateFormatter | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSDateFormatter | null;
  /** Exported member.*/
  alloc(): NSDateFormatter | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  localizedStringFromDateDateStyleTimeStyle(_date: Date | null, _dstyle: number, _tstyle: number): string | null;
  /** Exported member.*/
  dateFormatFromTemplateOptionsLocale(_tmplate: string | null, _opts: number, _locale: NSLocale | null): string | null;
  /** Exported member.*/
  defaultFormatterBehavior(): number;
  /** Exported member.*/
  setDefaultFormatterBehavior(_behavior: number): void;
}
/** Host-injected native class object.*/
declare var NSDateFormatter: NSDateFormatterClass;

/** Native instance exported as `NSDecimalNumber`.
 */
interface NSDecimalNumber {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  getValue(_value: NativePointer | null): void;
  /** Exported member.*/
  objCType(): NativePointer | null;
  /** Exported member.*/
  nonretainedObjectValue(): unknown;
  /** Exported member.*/
  pointerValue(): NativePointer | null;
  /** Exported member.*/
  isEqualToValue(_value: NSValue | null): boolean;
  /** Exported member.*/
  rangeValue(): NSRange;
  /** Exported member.*/
  CGPointValue(): CGPoint;
  /** Exported member.*/
  CGSizeValue(): CGSize;
  /** Exported member.*/
  CGRectValue(): CGRect;
  /** Exported member.*/
  CGAffineTransformValue(): CGAffineTransform;
  /** Exported member.*/
  UIEdgeInsetsValue(): UIEdgeInsets;
  /** Exported member.*/
  UIOffsetValue(): UIOffset;
  /** Exported member.*/
  CATransform3DValue(): CATransform3D;
  /** Exported member.*/
  charValue(): number;
  /** Exported member.*/
  unsignedCharValue(): number;
  /** Exported member.*/
  shortValue(): number;
  /** Exported member.*/
  unsignedShortValue(): number;
  /** Exported member.*/
  intValue(): number;
  /** Exported member.*/
  unsignedIntValue(): number;
  /** Exported member.*/
  longValue(): number;
  /** Exported member.*/
  unsignedLongValue(): number;
  /** Exported member.*/
  longLongValue(): number;
  /** Exported member.*/
  unsignedLongLongValue(): number;
  /** Exported member.*/
  floatValue(): number;
  /** Exported member.*/
  doubleValue(): number;
  /** Exported member.*/
  boolValue(): boolean;
  /** Exported member.*/
  integerValue(): number;
  /** Exported member.*/
  unsignedIntegerValue(): number;
  /** Exported member.*/
  stringValue(): string | null;
  /** Exported member.*/
  compare(_decimalNumber: number | null): number;
  /** Exported member.*/
  isEqualToNumber(_number: number | null): boolean;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
  /** Exported member.*/
  decimalNumberByAdding(_decimalNumber: number | null): number | null;
  /** Exported member.*/
  decimalNumberByAddingWithBehavior(_decimalNumber: number | null, _behavior: unknown): number | null;
  /** Exported member.*/
  decimalNumberBySubtracting(_decimalNumber: number | null): number | null;
  /** Exported member.*/
  decimalNumberBySubtractingWithBehavior(_decimalNumber: number | null, _behavior: unknown): number | null;
  /** Exported member.*/
  decimalNumberByMultiplyingBy(_decimalNumber: number | null): number | null;
  /** Exported member.*/
  decimalNumberByMultiplyingByWithBehavior(_decimalNumber: number | null, _behavior: unknown): number | null;
  /** Exported member.*/
  decimalNumberByDividingBy(_decimalNumber: number | null): number | null;
  /** Exported member.*/
  decimalNumberByDividingByWithBehavior(_decimalNumber: number | null, _behavior: unknown): number | null;
  /** Exported member.*/
  decimalNumberByRaisingToPower(_power: number): number | null;
  /** Exported member.*/
  decimalNumberByRaisingToPowerWithBehavior(_power: number, _behavior: unknown): number | null;
  /** Exported member.*/
  decimalNumberByMultiplyingByPowerOf10(_power: number): number | null;
  /** Exported member.*/
  decimalNumberByMultiplyingByPowerOf10WithBehavior(_power: number, _behavior: unknown): number | null;
  /** Exported member.*/
  decimalNumberByRoundingAccordingToBehavior(_behavior: unknown): number | null;
}
/** Native class object for {@link NSDecimalNumber}.*/
interface NSDecimalNumberClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): number | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): number | null;
  /** Exported member.*/
  alloc(): number | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  valueWithBytesObjCType(_value: NativePointer | null, _type: NativePointer | null): NSValue | null;
  /** Exported member.*/
  valueWithObjCType(_value: NativePointer | null, _type: NativePointer | null): NSValue | null;
  /** Exported member.*/
  valueWithNonretainedObject(_anObject: unknown): NSValue | null;
  /** Exported member.*/
  valueWithPointer(_pointer: NativePointer | null): NSValue | null;
  /** Exported member.*/
  valueWithRange(_range: NSRange): NSValue | null;
  /** Exported member.*/
  valueWithCGPoint(_point: CGPoint): NSValue | null;
  /** Exported member.*/
  valueWithCGSize(_size: CGSize): NSValue | null;
  /** Exported member.*/
  valueWithCGRect(_rect: CGRect): NSValue | null;
  /** Exported member.*/
  valueWithCGAffineTransform(_transform: CGAffineTransform): NSValue | null;
  /** Exported member.*/
  valueWithUIEdgeInsets(_insets: UIEdgeInsets): NSValue | null;
  /** Exported member.*/
  valueWithUIOffset(_insets: UIOffset): NSValue | null;
  /** Exported member.*/
  valueWithCATransform3D(_t: CATransform3D): NSValue | null;
  /** Exported member.*/
  numberWithChar(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedChar(_value: number): number | null;
  /** Exported member.*/
  numberWithShort(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedShort(_value: number): number | null;
  /** Exported member.*/
  numberWithInt(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedInt(_value: number): number | null;
  /** Exported member.*/
  numberWithLong(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedLong(_value: number): number | null;
  /** Exported member.*/
  numberWithLongLong(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedLongLong(_value: number): number | null;
  /** Exported member.*/
  numberWithFloat(_value: number): number | null;
  /** Exported member.*/
  numberWithDouble(_value: number): number | null;
  /** Exported member.*/
  numberWithBool(_value: boolean): number | null;
  /** Exported member.*/
  numberWithInteger(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedInteger(_value: number): number | null;
  /** Exported member.*/
  decimalNumberWithMantissaExponentIsNegative(_mantissa: number, _exponent: number, _flag: boolean): number | null;
  /** Exported member.*/
  decimalNumberWithString(_numberValue: string | null): number | null;
  /** Exported member.*/
  decimalNumberWithStringLocale(_numberValue: string | null, _locale: unknown): number | null;
  /** Exported member.*/
  zero(): number | null;
  /** Exported member.*/
  one(): number | null;
  /** Exported member.*/
  minimumDecimalNumber(): number | null;
  /** Exported member.*/
  maximumDecimalNumber(): number | null;
  /** Exported member.*/
  notANumber(): number | null;
  /** Exported member.*/
  setDefaultBehavior(_behavior: unknown): void;
  /** Exported member.*/
  defaultBehavior(): unknown;
}
/** Host-injected native class object.*/
declare var NSDecimalNumber: NSDecimalNumberClass;

/** Native instance exported as `NSDictionary`.
 */
interface NSDictionary {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  valueForKey(_key: string | null): unknown;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  objectForKey(_aKey: unknown): unknown;
  /** Exported member.*/
  keyEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  allKeys(): unknown[] | null;
  /** Exported member.*/
  allKeysForObject(_anObject: unknown): unknown[] | null;
  /** Exported member.*/
  allValues(): unknown[] | null;
  /** Exported member.*/
  descriptionInStringsFileFormat(): string | null;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
  /** Exported member.*/
  descriptionWithLocaleIndent(_locale: unknown, _level: number): string | null;
  /** Exported member.*/
  isEqualToDictionary(_otherDictionary: Record<string, unknown> | null): boolean;
  /** Exported member.*/
  objectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  objectsForKeysNotFoundMarker(_keys: unknown[] | null, _marker: unknown): unknown[] | null;
  /** Exported member.*/
  writeToFileAtomically(_path: string | null, _useAuxiliaryFile: boolean): boolean;
  /** Exported member.*/
  writeToURLAtomically(_url: NSURL | null, _atomically: boolean): boolean;
  /** Exported member.*/
  keysSortedByValueUsingSelector(_comparator: NativeSelector): unknown[] | null;
  /** Exported member.*/
  getObjectsAndKeys(_objects: NativePointer, _keys: NativePointer): void;
  /** Exported member.*/
  objectForKeyedSubscript(_key: unknown): unknown;
  /** Exported member.*/
  enumerateKeysAndObjectsUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateKeysAndObjectsWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  keysSortedByValueUsingComparator(_cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  keysSortedByValueWithOptionsUsingComparator(_opts: number, _cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  keysOfEntriesPassingTest(_predicate: NativeBlock | null): NSSet | null;
  /** Exported member.*/
  keysOfEntriesWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): NSSet | null;
  /** Exported member.*/
  removeObjectForKey(_aKey: unknown): void;
  /** Exported member.*/
  setObjectForKey(_anObject: unknown, _aKey: unknown): void;
  /** Exported member.*/
  addEntriesFromDictionary(_otherDictionary: Record<string, unknown> | null): void;
  /** Exported member.*/
  removeAllObjects(): void;
  /** Exported member.*/
  removeObjectsForKeys(_keyArray: unknown[] | null): void;
  /** Exported member.*/
  setDictionary(_otherDictionary: Record<string, unknown> | null): void;
  /** Exported member.*/
  setObjectForKeyedSubscript(_obj: unknown, _key: unknown): void;
  /** Exported member.*/
  initWithCapacity(_numItems: number): Record<string, unknown> | null;
  /** Exported member.*/
  fileSize(): number;
  /** Exported member.*/
  fileModificationDate(): Date | null;
  /** Exported member.*/
  fileType(): string | null;
  /** Exported member.*/
  filePosixPermissions(): number;
  /** Exported member.*/
  fileOwnerAccountName(): string | null;
  /** Exported member.*/
  fileGroupOwnerAccountName(): string | null;
  /** Exported member.*/
  fileSystemNumber(): number;
  /** Exported member.*/
  fileSystemFileNumber(): number;
  /** Exported member.*/
  fileExtensionHidden(): boolean;
  /** Exported member.*/
  fileHFSCreatorCode(): number;
  /** Exported member.*/
  fileHFSTypeCode(): number;
  /** Exported member.*/
  fileIsImmutable(): boolean;
  /** Exported member.*/
  fileIsAppendOnly(): boolean;
  /** Exported member.*/
  fileCreationDate(): Date | null;
  /** Exported member.*/
  fileOwnerAccountID(): number | null;
  /** Exported member.*/
  fileGroupOwnerAccountID(): number | null;
}
/** Native class object for {@link NSDictionary}.*/
interface NSDictionaryClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): Record<string, unknown> | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): Record<string, unknown> | null;
  /** Exported member.*/
  alloc(): Record<string, unknown> | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  dictionary(): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithObjectForKey(_object: unknown, _key: unknown): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithObjectsForKeysCount(_objects: NativePointer, _keys: NativePointer, _cnt: number): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithObjectsAndKeys(_firstObject: unknown): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithDictionary(_dict: Record<string, unknown> | null): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithObjectsForKeys(_objects: unknown[] | null, _keys: unknown[] | null): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithContentsOfFile(_path: string | null): unknown;
  /** Exported member.*/
  dictionaryWithContentsOfURL(_url: NSURL | null): unknown;
  /** Exported member.*/
  dictionaryWithCapacity(_numItems: number): Record<string, unknown> | null;
  /** Exported member.*/
  sharedKeySetForKeys(_keys: unknown[] | null): unknown;
}
/** Host-injected native class object.*/
declare var NSDictionary: NSDictionaryClass;

/** Native instance exported as `NSEnumerator`.
 */
interface NSEnumerator {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  nextObject(): unknown;
  /** Exported member.*/
  allObjects(): unknown[] | null;
}
/** Native class object for {@link NSEnumerator}.*/
interface NSEnumeratorClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSEnumerator | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSEnumerator | null;
  /** Exported member.*/
  alloc(): NSEnumerator | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
}
/** Host-injected native class object.*/
declare var NSEnumerator: NSEnumeratorClass;

/** Native instance exported as `NSError`.
 */
interface NSError {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  readonly domain: string | null;
  /** Exported member.*/
  readonly code: number;
  /** Exported member.*/
  readonly userInfo: Record<string, unknown> | null;
  /** Exported member.*/
  readonly localizedDescription: string | null;
  /** Exported member.*/
  readonly localizedFailureReason: string | null;
  /** Exported member.*/
  readonly localizedRecoverySuggestion: string | null;
  /** Exported member.*/
  readonly localizedRecoveryOptions: unknown[] | null;
  /** Exported member.*/
  readonly helpAnchor: string | null;
  /** Exported member.*/
  initWithDomainCodeUserInfo(_domain: string | null, _code: number, _dict: Record<string, unknown> | null): NSError | null;
  /** Exported member.*/
  recoveryAttempter(): unknown;
}
/** Native class object for {@link NSError}.*/
interface NSErrorClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSError | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSError | null;
  /** Exported member.*/
  alloc(): NSError | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  errorWithDomainCodeUserInfo(_domain: string | null, _code: number, _dict: Record<string, unknown> | null): unknown;
}
/** Host-injected native class object.*/
declare var NSError: NSErrorClass;

/** Native instance exported as `NSFileHandle`.
 */
interface NSFileHandle {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  readabilityHandler: NativeBlock | null;
  /** Exported member.*/
  writeabilityHandler: NativeBlock | null;
  /** Exported member.*/
  availableData(): NSData | null;
  /** Exported member.*/
  readDataToEndOfFile(): NSData | null;
  /** Exported member.*/
  readDataOfLength(_length: number): NSData | null;
  /** Exported member.*/
  writeData(_data: NSData | null): void;
  /** Exported member.*/
  offsetInFile(): number;
  /** Exported member.*/
  seekToEndOfFile(): number;
  /** Exported member.*/
  seekToFileOffset(_offset: number): void;
  /** Exported member.*/
  truncateFileAtOffset(_offset: number): void;
  /** Exported member.*/
  synchronizeFile(): void;
  /** Exported member.*/
  closeFile(): void;
  /** Exported member.*/
  readInBackgroundAndNotifyForModes(_modes: unknown[] | null): void;
  /** Exported member.*/
  readInBackgroundAndNotify(): void;
  /** Exported member.*/
  readToEndOfFileInBackgroundAndNotifyForModes(_modes: unknown[] | null): void;
  /** Exported member.*/
  readToEndOfFileInBackgroundAndNotify(): void;
  /** Exported member.*/
  acceptConnectionInBackgroundAndNotifyForModes(_modes: unknown[] | null): void;
  /** Exported member.*/
  acceptConnectionInBackgroundAndNotify(): void;
  /** Exported member.*/
  waitForDataInBackgroundAndNotifyForModes(_modes: unknown[] | null): void;
  /** Exported member.*/
  waitForDataInBackgroundAndNotify(): void;
  /** Exported member.*/
  fileDescriptor(): number;
}
/** Native class object for {@link NSFileHandle}.*/
interface NSFileHandleClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSFileHandle | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSFileHandle | null;
  /** Exported member.*/
  alloc(): NSFileHandle | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  fileHandleWithStandardInput(): unknown;
  /** Exported member.*/
  fileHandleWithStandardOutput(): unknown;
  /** Exported member.*/
  fileHandleWithStandardError(): unknown;
  /** Exported member.*/
  fileHandleWithNullDevice(): unknown;
  /** Exported member.*/
  fileHandleForReadingAtPath(_path: string | null): unknown;
  /** Exported member.*/
  fileHandleForWritingAtPath(_path: string | null): unknown;
  /** Exported member.*/
  fileHandleForUpdatingAtPath(_path: string | null): unknown;
  /** Exported member.*/
  fileHandleForReadingFromURLError(_url: NSURL | null, _error: NSError | null): unknown;
  /** Exported member.*/
  fileHandleForWritingToURLError(_url: NSURL | null, _error: NSError | null): unknown;
  /** Exported member.*/
  fileHandleForUpdatingURLError(_url: NSURL | null, _error: NSError | null): unknown;
}
/** Host-injected native class object.*/
declare var NSFileHandle: NSFileHandleClass;

/** Native instance exported as `NSFileManager`.
 */
interface NSFileManager {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  createDirectoryAtPathWithIntermediateDirectoriesAttributes(_path: string | null, _createIntermediates: boolean, _attributes: Record<string, unknown> | null): boolean;
  /** Exported member.*/
  contentsOfDirectoryAtPath(_path: string | null): unknown[] | null;
  /** Exported member.*/
  subpathsOfDirectoryAtPath(_path: string | null): unknown[] | null;
  /** Exported member.*/
  attributesOfItemAtPath(_path: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  attributesOfFileSystemForPath(_path: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  copyItemAtPathToPath(_srcPath: string | null, _dstPath: string | null): boolean;
  /** Exported member.*/
  moveItemAtPathToPath(_srcPath: string | null, _dstPath: string | null): boolean;
  /** Exported member.*/
  fileAttributesAtPathTraverseLink(_path: string | null, _yorn: boolean): Record<string, unknown> | null;
  /** Exported member.*/
  directoryContentsAtPath(_path: string | null): unknown[] | null;
  /** Exported member.*/
  fileSystemAttributesAtPath(_path: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  pathContentOfSymbolicLinkAtPath(_path: string | null): string | null;
  /** Exported member.*/
  createDirectoryAtPathAttributes(_path: string | null, _attributes: Record<string, unknown> | null): boolean;
  /** Exported member.*/
  fileExistsAtPath(_path: string | null): boolean;
  /** Exported member.*/
  isDirectoryAtPath(_path: string | null): boolean;
  /** Exported member.*/
  isReadableFileAtPath(_path: string | null): boolean;
  /** Exported member.*/
  isWritableFileAtPath(_path: string | null): boolean;
  /** Exported member.*/
  isExecutableFileAtPath(_path: string | null): boolean;
  /** Exported member.*/
  isDeletableFileAtPath(_path: string | null): boolean;
  /** Exported member.*/
  contentsEqualAtPathAndPath(_path1: string | null, _path2: string | null): boolean;
  /** Exported member.*/
  displayNameAtPath(_path: string | null): string | null;
  /** Exported member.*/
  componentsToDisplayForPath(_path: string | null): unknown[] | null;
  /** Exported member.*/
  subpathsAtPath(_path: string | null): unknown[] | null;
  /** Exported member.*/
  contentsAtPath(_path: string | null): NSData | null;
}
/** Native class object for {@link NSFileManager}.*/
interface NSFileManagerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSFileManager | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSFileManager | null;
  /** Exported member.*/
  alloc(): NSFileManager | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  defaultManager(): NSFileManager | null;
}
/** Host-injected native class object.*/
declare var NSFileManager: NSFileManagerClass;

/** Native instance exported as `NSFormatter`.
 */
interface NSFormatter {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  stringForObjectValue(_obj: unknown): string | null;
  /** Exported member.*/
  attributedStringForObjectValueWithDefaultAttributes(_obj: unknown, _attrs: Record<string, unknown> | null): NSAttributedString | null;
  /** Exported member.*/
  editingStringForObjectValue(_obj: unknown): string | null;
  /** Exported member.*/
  getObjectValueForStringErrorDescription(_obj: unknown, _string: string | null, _error: string | null): boolean;
  /** Exported member.*/
  isPartialStringValidNewEditingStringErrorDescription(_partialString: string | null, _newString: string | null, _error: string | null): boolean;
  /** Exported member.*/
  isPartialStringValidProposedSelectedRangeOriginalStringOriginalSelectedRangeErrorDescription(_partialStringPtr: string | null, _proposedSelRangePtr: NSRangePointer, _origString: string | null, _origSelRange: NSRange, _error: string | null): boolean;
}
/** Native class object for {@link NSFormatter}.*/
interface NSFormatterClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSFormatter | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSFormatter | null;
  /** Exported member.*/
  alloc(): NSFormatter | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
}
/** Host-injected native class object.*/
declare var NSFormatter: NSFormatterClass;

/** Native instance exported as `NSHTTPURLResponse`.
 */
interface NSHTTPURLResponse {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  initWithURLMIMETypeExpectedContentLengthTextEncodingName(_URL: NSURL | null, _MIMEType: string | null, _length: number, _name: string | null): NSHTTPURLResponse | null;
  /** Exported member.*/
  URL(): NSURL | null;
  /** Exported member.*/
  MIMEType(): string | null;
  /** Exported member.*/
  expectedContentLength(): number;
  /** Exported member.*/
  textEncodingName(): string | null;
  /** Exported member.*/
  suggestedFilename(): string | null;
  /** Exported member.*/
  initWithURLStatusCodeHTTPVersionHeaderFields(_url: NSURL | null, _statusCode: number, _HTTPVersion: string | null, _headerFields: Record<string, unknown> | null): NSHTTPURLResponse | null;
  /** Exported member.*/
  statusCode(): number;
  /** Exported member.*/
  allHeaderFields(): Record<string, unknown> | null;
}
/** Native class object for {@link NSHTTPURLResponse}.*/
interface NSHTTPURLResponseClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSHTTPURLResponse | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSHTTPURLResponse | null;
  /** Exported member.*/
  alloc(): NSHTTPURLResponse | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  localizedStringForStatusCode(_statusCode: number): string | null;
}
/** Host-injected native class object.*/
declare var NSHTTPURLResponse: NSHTTPURLResponseClass;

/** Native instance exported as `NSHashTable`.
 */
interface NSHashTable {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  pointerFunctions(): NSPointerFunctions | null;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  member(_object: unknown): unknown;
  /** Exported member.*/
  objectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  addObject(_object: unknown): void;
  /** Exported member.*/
  removeObject(_object: unknown): void;
  /** Exported member.*/
  removeAllObjects(): void;
  /** Exported member.*/
  allObjects(): unknown[] | null;
  /** Exported member.*/
  anyObject(): unknown;
  /** Exported member.*/
  containsObject(_anObject: unknown): boolean;
  /** Exported member.*/
  intersectsHashTable(_other: NSHashTable | null): boolean;
  /** Exported member.*/
  isEqualToHashTable(_other: NSHashTable | null): boolean;
  /** Exported member.*/
  isSubsetOfHashTable(_other: NSHashTable | null): boolean;
  /** Exported member.*/
  intersectHashTable(_other: NSHashTable | null): void;
  /** Exported member.*/
  unionHashTable(_other: NSHashTable | null): void;
  /** Exported member.*/
  minusHashTable(_other: NSHashTable | null): void;
  /** Exported member.*/
  setRepresentation(): NSSet | null;
}
/** Native class object for {@link NSHashTable}.*/
interface NSHashTableClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSHashTable | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSHashTable | null;
  /** Exported member.*/
  alloc(): NSHashTable | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  hashTableWithOptions(_options: number): unknown;
  /** Exported member.*/
  weakObjectsHashTable(): unknown;
}
/** Host-injected native class object.*/
declare var NSHashTable: NSHashTableClass;

/** Native instance exported as `NSIndexPath`.
 */
interface NSIndexPath {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  readonly row: number;
  /** Exported member.*/
  readonly section: number;
  /** Exported member.*/
  indexPathByAddingIndex(_index: number): NSIndexPath | null;
  /** Exported member.*/
  indexPathByRemovingLastIndex(): NSIndexPath | null;
  /** Exported member.*/
  indexAtPosition(_position: number): number;
  /** Exported member.*/
  length(): number;
  /** Exported member.*/
  getIndexes(_indexes: NativePointer | null): void;
  /** Exported member.*/
  compare(_otherObject: NSIndexPath | null): number;
}
/** Native class object for {@link NSIndexPath}.*/
interface NSIndexPathClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSIndexPath | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSIndexPath | null;
  /** Exported member.*/
  alloc(): NSIndexPath | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  indexPathWithIndex(_index: number): NSIndexPath | null;
  /** Exported member.*/
  indexPathWithIndexesLength(_indexes: NativePointer, _length: number): NSIndexPath | null;
  /** Exported member.*/
  indexPathForRowInSection(_row: number, _section: number): NSIndexPath | null;
  /** Exported member.*/
  indexPathForItemInSection(_item: number, _section: number): NSIndexPath | null;
}
/** Host-injected native class object.*/
declare var NSIndexPath: NSIndexPathClass;

/** Native instance exported as `NSIndexSet`.
 */
interface NSIndexSet {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  isEqualToIndexSet(_indexSet: NSIndexSet | null): boolean;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  firstIndex(): number;
  /** Exported member.*/
  lastIndex(): number;
  /** Exported member.*/
  indexGreaterThanIndex(_value: number): number;
  /** Exported member.*/
  indexLessThanIndex(_value: number): number;
  /** Exported member.*/
  indexGreaterThanOrEqualToIndex(_value: number): number;
  /** Exported member.*/
  indexLessThanOrEqualToIndex(_value: number): number;
  /** Exported member.*/
  getIndexesMaxCountInIndexRange(_indexBuffer: NativePointer | null, _bufferSize: number, _range: NSRangePointer): number;
  /** Exported member.*/
  countOfIndexesInRange(_range: NSRange): number;
  /** Exported member.*/
  containsIndex(_value: number): boolean;
  /** Exported member.*/
  containsIndexesInRange(_range: NSRange): boolean;
  /** Exported member.*/
  containsIndexes(_indexSet: NSIndexSet | null): boolean;
  /** Exported member.*/
  intersectsIndexesInRange(_range: NSRange): boolean;
  /** Exported member.*/
  enumerateIndexesUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateIndexesWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateIndexesInRangeOptionsUsingBlock(_range: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  indexPassingTest(_predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexInRangeOptionsPassingTest(_range: NSRange, _opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexesPassingTest(_predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesInRangeOptionsPassingTest(_range: NSRange, _opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  enumerateRangesUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateRangesWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateRangesInRangeOptionsUsingBlock(_range: NSRange, _opts: number, _block: NativeBlock | null): void;
}
/** Native class object for {@link NSIndexSet}.*/
interface NSIndexSetClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSIndexSet | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSIndexSet | null;
  /** Exported member.*/
  alloc(): NSIndexSet | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  indexSet(): NSIndexSet | null;
  /** Exported member.*/
  indexSetWithIndex(_value: number): NSIndexSet | null;
  /** Exported member.*/
  indexSetWithIndexesInRange(_range: NSRange): NSIndexSet | null;
}
/** Host-injected native class object.*/
declare var NSIndexSet: NSIndexSetClass;

/** Native instance exported as `NSJSONSerialization`.
 */
interface NSJSONSerialization {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
}
/** Native class object for {@link NSJSONSerialization}.*/
interface NSJSONSerializationClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSJSONSerialization | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSJSONSerialization | null;
  /** Exported member.*/
  alloc(): NSJSONSerialization | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  isValidJSONObject(_obj: unknown): boolean;
  /** Exported member.*/
  dataWithJSONObjectOptions(_obj: unknown, _opt: number): NSData | null;
  /** Exported member.*/
  JSONObjectWithDataOptions(_data: NSData | null, _opt: number): unknown;
}
/** Host-injected native class object.*/
declare var NSJSONSerialization: NSJSONSerializationClass;

/** Native instance exported as `NSKeyedArchiver`.
 */
interface NSKeyedArchiver {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  encodeValueOfObjCTypeAt(_type: NativePointer | null, _addr: NativePointer | null): void;
  /** Exported member.*/
  encodeDataObject(_data: NSData | null): void;
  /** Exported member.*/
  decodeValueOfObjCTypeAt(_type: NativePointer | null, _data: NativePointer | null): void;
  /** Exported member.*/
  decodeDataObject(): NSData | null;
  /** Exported member.*/
  versionForClassName(_className: string | null): number;
  /** Exported member.*/
  encodeObject(_object: unknown): void;
  /** Exported member.*/
  encodeRootObject(_rootObject: unknown): void;
  /** Exported member.*/
  encodeBycopyObject(_anObject: unknown): void;
  /** Exported member.*/
  encodeByrefObject(_anObject: unknown): void;
  /** Exported member.*/
  encodeConditionalObject(_object: unknown): void;
  /** Exported member.*/
  encodeValuesOfObjCTypes(_types: NativePointer | null): void;
  /** Exported member.*/
  encodeArrayOfObjCTypeCountAt(_type: NativePointer | null, _count: number, _array: NativePointer | null): void;
  /** Exported member.*/
  encodeBytesLength(_byteaddr: NativePointer | null, _length: number): void;
  /** Exported member.*/
  decodeObject(): unknown;
  /** Exported member.*/
  decodeValuesOfObjCTypes(_types: NativePointer | null): void;
  /** Exported member.*/
  decodeArrayOfObjCTypeCountAt(_itemType: NativePointer | null, _count: number, _array: NativePointer | null): void;
  /** Exported member.*/
  decodeBytesWithReturnedLength(_lengthp: NativePointer | null): NativePointer | null;
  /** Exported member.*/
  setObjectZone(_zone: NSZone | null): void;
  /** Exported member.*/
  objectZone(): NSZone | null;
  /** Exported member.*/
  systemVersion(): number;
  /** Exported member.*/
  allowsKeyedCoding(): boolean;
  /** Exported member.*/
  encodeObjectForKey(_objv: unknown, _key: string | null): void;
  /** Exported member.*/
  encodeConditionalObjectForKey(_objv: unknown, _key: string | null): void;
  /** Exported member.*/
  encodeBoolForKey(_boolv: boolean, _key: string | null): void;
  /** Exported member.*/
  encodeIntForKey(_intv: number, _key: string | null): void;
  /** Exported member.*/
  encodeInt32ForKey(_intv: number, _key: string | null): void;
  /** Exported member.*/
  encodeInt64ForKey(_intv: number, _key: string | null): void;
  /** Exported member.*/
  encodeFloatForKey(_realv: number, _key: string | null): void;
  /** Exported member.*/
  encodeDoubleForKey(_realv: number, _key: string | null): void;
  /** Exported member.*/
  encodeBytesLengthForKey(_bytesp: NativePointer | null, _lenv: number, _key: string | null): void;
  /** Exported member.*/
  containsValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  decodeObjectForKey(_key: string | null): unknown;
  /** Exported member.*/
  decodeBoolForKey(_key: string | null): boolean;
  /** Exported member.*/
  decodeIntForKey(_key: string | null): number;
  /** Exported member.*/
  decodeInt32ForKey(_key: string | null): number;
  /** Exported member.*/
  decodeInt64ForKey(_key: string | null): number;
  /** Exported member.*/
  decodeFloatForKey(_key: string | null): number;
  /** Exported member.*/
  decodeDoubleForKey(_key: string | null): number;
  /** Exported member.*/
  decodeBytesForKeyReturnedLength(_key: string | null, _lengthp: NativePointer | null): NativePointer | null;
  /** Exported member.*/
  encodeIntegerForKey(_intv: number, _key: string | null): void;
  /** Exported member.*/
  decodeIntegerForKey(_key: string | null): number;
  /** Exported member.*/
  requiresSecureCoding(): boolean;
  /** Exported member.*/
  decodeObjectOfClassForKey(_aClass: NativeClass<NativeObject>, _key: string | null): unknown;
  /** Exported member.*/
  decodeObjectOfClassesForKey(_classes: NSSet | null, _key: string | null): unknown;
  /** Exported member.*/
  decodePropertyListForKey(_key: string | null): unknown;
  /** Exported member.*/
  allowedClasses(): NSSet | null;
  /** Exported member.*/
  encodeCGPointForKey(_point: CGPoint, _key: string | null): void;
  /** Exported member.*/
  encodeCGSizeForKey(_size: CGSize, _key: string | null): void;
  /** Exported member.*/
  encodeCGRectForKey(_rect: CGRect, _key: string | null): void;
  /** Exported member.*/
  encodeCGAffineTransformForKey(_transform: CGAffineTransform, _key: string | null): void;
  /** Exported member.*/
  encodeUIEdgeInsetsForKey(_insets: UIEdgeInsets, _key: string | null): void;
  /** Exported member.*/
  encodeUIOffsetForKey(_offset: UIOffset, _key: string | null): void;
  /** Exported member.*/
  decodeCGPointForKey(_key: string | null): CGPoint;
  /** Exported member.*/
  decodeCGSizeForKey(_key: string | null): CGSize;
  /** Exported member.*/
  decodeCGRectForKey(_key: string | null): CGRect;
  /** Exported member.*/
  decodeCGAffineTransformForKey(_key: string | null): CGAffineTransform;
  /** Exported member.*/
  decodeUIEdgeInsetsForKey(_key: string | null): UIEdgeInsets;
  /** Exported member.*/
  decodeUIOffsetForKey(_key: string | null): UIOffset;
  /** Exported member.*/
  encodeCMTimeForKey(_time: CMTime, _key: string | null): void;
  /** Exported member.*/
  decodeCMTimeForKey(_key: string | null): CMTime;
  /** Exported member.*/
  encodeCMTimeRangeForKey(_timeRange: CMTimeRange, _key: string | null): void;
  /** Exported member.*/
  decodeCMTimeRangeForKey(_key: string | null): CMTimeRange;
  /** Exported member.*/
  encodeCMTimeMappingForKey(_timeMapping: CMTimeMapping, _key: string | null): void;
  /** Exported member.*/
  decodeCMTimeMappingForKey(_key: string | null): CMTimeMapping;
  /** Exported member.*/
  initForWritingWithMutableData(_data: NSMutableData | null): NSKeyedArchiver | null;
  /** Exported member.*/
  setDelegate(_delegate: unknown): void;
  /** Exported member.*/
  delegate(): unknown;
  /** Exported member.*/
  setOutputFormat(_format: number): void;
  /** Exported member.*/
  outputFormat(): number;
  /** Exported member.*/
  finishEncoding(): void;
  /** Exported member.*/
  setClassNameForClass(_codedName: string | null, _cls: NativeClass<NativeObject>): void;
  /** Exported member.*/
  classNameForClass(_cls: NativeClass<NativeObject>): string | null;
  /** Exported member.*/
  setRequiresSecureCoding(_b: boolean): void;
}
/** Native class object for {@link NSKeyedArchiver}.*/
interface NSKeyedArchiverClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSKeyedArchiver | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSKeyedArchiver | null;
  /** Exported member.*/
  alloc(): NSKeyedArchiver | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  archivedDataWithRootObject(_rootObject: unknown): NSData | null;
  /** Exported member.*/
  archiveRootObjectToFile(_rootObject: unknown, _path: string | null): boolean;
  /** Exported member.*/
  setClassNameForClass(_codedName: string | null, _cls: NativeClass<NativeObject>): void;
  /** Exported member.*/
  classNameForClass(_cls: NativeClass<NativeObject>): string | null;
}
/** Host-injected native class object.*/
declare var NSKeyedArchiver: NSKeyedArchiverClass;

/** Native instance exported as `NSKeyedUnarchiver`.
 */
interface NSKeyedUnarchiver {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  encodeValueOfObjCTypeAt(_type: NativePointer | null, _addr: NativePointer | null): void;
  /** Exported member.*/
  encodeDataObject(_data: NSData | null): void;
  /** Exported member.*/
  decodeValueOfObjCTypeAt(_type: NativePointer | null, _data: NativePointer | null): void;
  /** Exported member.*/
  decodeDataObject(): NSData | null;
  /** Exported member.*/
  versionForClassName(_className: string | null): number;
  /** Exported member.*/
  encodeObject(_object: unknown): void;
  /** Exported member.*/
  encodeRootObject(_rootObject: unknown): void;
  /** Exported member.*/
  encodeBycopyObject(_anObject: unknown): void;
  /** Exported member.*/
  encodeByrefObject(_anObject: unknown): void;
  /** Exported member.*/
  encodeConditionalObject(_object: unknown): void;
  /** Exported member.*/
  encodeValuesOfObjCTypes(_types: NativePointer | null): void;
  /** Exported member.*/
  encodeArrayOfObjCTypeCountAt(_type: NativePointer | null, _count: number, _array: NativePointer | null): void;
  /** Exported member.*/
  encodeBytesLength(_byteaddr: NativePointer | null, _length: number): void;
  /** Exported member.*/
  decodeObject(): unknown;
  /** Exported member.*/
  decodeValuesOfObjCTypes(_types: NativePointer | null): void;
  /** Exported member.*/
  decodeArrayOfObjCTypeCountAt(_itemType: NativePointer | null, _count: number, _array: NativePointer | null): void;
  /** Exported member.*/
  decodeBytesWithReturnedLength(_lengthp: NativePointer | null): NativePointer | null;
  /** Exported member.*/
  setObjectZone(_zone: NSZone | null): void;
  /** Exported member.*/
  objectZone(): NSZone | null;
  /** Exported member.*/
  systemVersion(): number;
  /** Exported member.*/
  allowsKeyedCoding(): boolean;
  /** Exported member.*/
  encodeObjectForKey(_objv: unknown, _key: string | null): void;
  /** Exported member.*/
  encodeConditionalObjectForKey(_objv: unknown, _key: string | null): void;
  /** Exported member.*/
  encodeBoolForKey(_boolv: boolean, _key: string | null): void;
  /** Exported member.*/
  encodeIntForKey(_intv: number, _key: string | null): void;
  /** Exported member.*/
  encodeInt32ForKey(_intv: number, _key: string | null): void;
  /** Exported member.*/
  encodeInt64ForKey(_intv: number, _key: string | null): void;
  /** Exported member.*/
  encodeFloatForKey(_realv: number, _key: string | null): void;
  /** Exported member.*/
  encodeDoubleForKey(_realv: number, _key: string | null): void;
  /** Exported member.*/
  encodeBytesLengthForKey(_bytesp: NativePointer | null, _lenv: number, _key: string | null): void;
  /** Exported member.*/
  containsValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  decodeObjectForKey(_key: string | null): unknown;
  /** Exported member.*/
  decodeBoolForKey(_key: string | null): boolean;
  /** Exported member.*/
  decodeIntForKey(_key: string | null): number;
  /** Exported member.*/
  decodeInt32ForKey(_key: string | null): number;
  /** Exported member.*/
  decodeInt64ForKey(_key: string | null): number;
  /** Exported member.*/
  decodeFloatForKey(_key: string | null): number;
  /** Exported member.*/
  decodeDoubleForKey(_key: string | null): number;
  /** Exported member.*/
  decodeBytesForKeyReturnedLength(_key: string | null, _lengthp: NativePointer | null): NativePointer | null;
  /** Exported member.*/
  encodeIntegerForKey(_intv: number, _key: string | null): void;
  /** Exported member.*/
  decodeIntegerForKey(_key: string | null): number;
  /** Exported member.*/
  requiresSecureCoding(): boolean;
  /** Exported member.*/
  decodeObjectOfClassForKey(_aClass: NativeClass<NativeObject>, _key: string | null): unknown;
  /** Exported member.*/
  decodeObjectOfClassesForKey(_classes: NSSet | null, _key: string | null): unknown;
  /** Exported member.*/
  decodePropertyListForKey(_key: string | null): unknown;
  /** Exported member.*/
  allowedClasses(): NSSet | null;
  /** Exported member.*/
  encodeCGPointForKey(_point: CGPoint, _key: string | null): void;
  /** Exported member.*/
  encodeCGSizeForKey(_size: CGSize, _key: string | null): void;
  /** Exported member.*/
  encodeCGRectForKey(_rect: CGRect, _key: string | null): void;
  /** Exported member.*/
  encodeCGAffineTransformForKey(_transform: CGAffineTransform, _key: string | null): void;
  /** Exported member.*/
  encodeUIEdgeInsetsForKey(_insets: UIEdgeInsets, _key: string | null): void;
  /** Exported member.*/
  encodeUIOffsetForKey(_offset: UIOffset, _key: string | null): void;
  /** Exported member.*/
  decodeCGPointForKey(_key: string | null): CGPoint;
  /** Exported member.*/
  decodeCGSizeForKey(_key: string | null): CGSize;
  /** Exported member.*/
  decodeCGRectForKey(_key: string | null): CGRect;
  /** Exported member.*/
  decodeCGAffineTransformForKey(_key: string | null): CGAffineTransform;
  /** Exported member.*/
  decodeUIEdgeInsetsForKey(_key: string | null): UIEdgeInsets;
  /** Exported member.*/
  decodeUIOffsetForKey(_key: string | null): UIOffset;
  /** Exported member.*/
  encodeCMTimeForKey(_time: CMTime, _key: string | null): void;
  /** Exported member.*/
  decodeCMTimeForKey(_key: string | null): CMTime;
  /** Exported member.*/
  encodeCMTimeRangeForKey(_timeRange: CMTimeRange, _key: string | null): void;
  /** Exported member.*/
  decodeCMTimeRangeForKey(_key: string | null): CMTimeRange;
  /** Exported member.*/
  encodeCMTimeMappingForKey(_timeMapping: CMTimeMapping, _key: string | null): void;
  /** Exported member.*/
  decodeCMTimeMappingForKey(_key: string | null): CMTimeMapping;
  /** Exported member.*/
  initForReadingWithData(_data: NSData | null): NSKeyedUnarchiver | null;
  /** Exported member.*/
  setDelegate(_delegate: unknown): void;
  /** Exported member.*/
  delegate(): unknown;
  /** Exported member.*/
  finishDecoding(): void;
  /** Exported member.*/
  setClassForClassName(_cls: NativeClass<NativeObject>, _codedName: string | null): void;
  /** Exported member.*/
  classForClassName(_codedName: string | null): NativeClass<NativeObject>;
  /** Exported member.*/
  setRequiresSecureCoding(_b: boolean): void;
}
/** Native class object for {@link NSKeyedUnarchiver}.*/
interface NSKeyedUnarchiverClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSKeyedUnarchiver | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSKeyedUnarchiver | null;
  /** Exported member.*/
  alloc(): NSKeyedUnarchiver | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  unarchiveObjectWithData(_data: NSData | null): unknown;
  /** Exported member.*/
  unarchiveObjectWithFile(_path: string | null): unknown;
  /** Exported member.*/
  setClassForClassName(_cls: NativeClass<NativeObject>, _codedName: string | null): void;
  /** Exported member.*/
  classForClassName(_codedName: string | null): NativeClass<NativeObject>;
}
/** Host-injected native class object.*/
declare var NSKeyedUnarchiver: NSKeyedUnarchiverClass;

/** Native instance exported as `NSLocale`.
 */
interface NSLocale {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  objectForKey(_key: unknown): unknown;
  /** Exported member.*/
  displayNameForKeyValue(_key: unknown, _value: unknown): string | null;
  /** Exported member.*/
  localeIdentifier(): string | null;
}
/** Native class object for {@link NSLocale}.*/
interface NSLocaleClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSLocale | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSLocale | null;
  /** Exported member.*/
  alloc(): NSLocale | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  autoupdatingCurrentLocale(): unknown;
  /** Exported member.*/
  currentLocale(): unknown;
  /** Exported member.*/
  systemLocale(): unknown;
  /** Exported member.*/
  localeWithLocaleIdentifier(_ident: string | null): NSLocale | null;
  /** Exported member.*/
  availableLocaleIdentifiers(): unknown[] | null;
  /** Exported member.*/
  ISOLanguageCodes(): unknown[] | null;
  /** Exported member.*/
  ISOCountryCodes(): unknown[] | null;
  /** Exported member.*/
  ISOCurrencyCodes(): unknown[] | null;
  /** Exported member.*/
  commonISOCurrencyCodes(): unknown[] | null;
  /** Exported member.*/
  preferredLanguages(): unknown[] | null;
  /** Exported member.*/
  componentsFromLocaleIdentifier(_string: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  localeIdentifierFromComponents(_dict: Record<string, unknown> | null): string | null;
  /** Exported member.*/
  canonicalLocaleIdentifierFromString(_string: string | null): string | null;
  /** Exported member.*/
  canonicalLanguageIdentifierFromString(_string: string | null): string | null;
  /** Exported member.*/
  localeIdentifierFromWindowsLocaleCode(_lcid: number): string | null;
  /** Exported member.*/
  windowsLocaleCodeFromLocaleIdentifier(_localeIdentifier: string | null): number;
  /** Exported member.*/
  characterDirectionForLanguage(_isoLangCode: string | null): number;
  /** Exported member.*/
  lineDirectionForLanguage(_isoLangCode: string | null): number;
}
/** Host-injected native class object.*/
declare var NSLocale: NSLocaleClass;

/** Native instance exported as `NSMapTable`.
 */
interface NSMapTable {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  keyPointerFunctions(): NSPointerFunctions | null;
  /** Exported member.*/
  valuePointerFunctions(): NSPointerFunctions | null;
  /** Exported member.*/
  objectForKey(_aKey: unknown): unknown;
  /** Exported member.*/
  removeObjectForKey(_aKey: unknown): void;
  /** Exported member.*/
  setObjectForKey(_anObject: unknown, _aKey: unknown): void;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  keyEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  objectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  removeAllObjects(): void;
  /** Exported member.*/
  dictionaryRepresentation(): Record<string, unknown> | null;
}
/** Native class object for {@link NSMapTable}.*/
interface NSMapTableClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSMapTable | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSMapTable | null;
  /** Exported member.*/
  alloc(): NSMapTable | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  mapTableWithKeyOptionsValueOptions(_keyOptions: number, _valueOptions: number): unknown;
  /** Exported member.*/
  strongToStrongObjectsMapTable(): unknown;
  /** Exported member.*/
  weakToStrongObjectsMapTable(): unknown;
  /** Exported member.*/
  strongToWeakObjectsMapTable(): unknown;
  /** Exported member.*/
  weakToWeakObjectsMapTable(): unknown;
}
/** Host-injected native class object.*/
declare var NSMapTable: NSMapTableClass;

/** Native instance exported as `NSMutableArray`.
 */
interface NSMutableArray {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  sortedArrayUsingDescriptors(_sortDescriptors: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  objectAtIndex(_index: number): unknown;
  /** Exported member.*/
  arrayByAddingObject(_anObject: unknown): unknown[] | null;
  /** Exported member.*/
  arrayByAddingObjectsFromArray(_otherArray: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  componentsJoinedByString(_separator: string | null): string | null;
  /** Exported member.*/
  containsObject(_anObject: unknown): boolean;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
  /** Exported member.*/
  descriptionWithLocaleIndent(_locale: unknown, _level: number): string | null;
  /** Exported member.*/
  firstObjectCommonWithArray(_otherArray: unknown[] | null): unknown;
  /** Exported member.*/
  getObjectsRange(_objects: NativePointer, _range: NSRange): void;
  /** Exported member.*/
  indexOfObject(_anObject: unknown): number;
  /** Exported member.*/
  indexOfObjectInRange(_anObject: unknown, _range: NSRange): number;
  /** Exported member.*/
  indexOfObjectIdenticalTo(_anObject: unknown): number;
  /** Exported member.*/
  indexOfObjectIdenticalToInRange(_anObject: unknown, _range: NSRange): number;
  /** Exported member.*/
  isEqualToArray(_otherArray: unknown[] | null): boolean;
  /** Exported member.*/
  firstObject(): unknown;
  /** Exported member.*/
  lastObject(): unknown;
  /** Exported member.*/
  objectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  reverseObjectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  sortedArrayHint(): NSData | null;
  /** Exported member.*/
  sortedArrayUsingFunctionContext(_comparator: NativePointer, _context: NativePointer | null): unknown[] | null;
  /** Exported member.*/
  sortedArrayUsingFunctionContextHint(_comparator: NativePointer, _context: NativePointer | null, _hint: NSData | null): unknown[] | null;
  /** Exported member.*/
  sortedArrayUsingSelector(_comparator: NativeSelector): unknown[] | null;
  /** Exported member.*/
  subarrayWithRange(_range: NSRange): unknown[] | null;
  /** Exported member.*/
  writeToFileAtomically(_path: string | null, _useAuxiliaryFile: boolean): boolean;
  /** Exported member.*/
  writeToURLAtomically(_url: NSURL | null, _atomically: boolean): boolean;
  /** Exported member.*/
  makeObjectsPerformSelector(_aSelector: NativeSelector): void;
  /** Exported member.*/
  makeObjectsPerformSelectorWithObject(_aSelector: NativeSelector, _argument: unknown): void;
  /** Exported member.*/
  objectsAtIndexes(_indexes: NSIndexSet | null): unknown[] | null;
  /** Exported member.*/
  objectAtIndexedSubscript(_idx: number): unknown;
  /** Exported member.*/
  enumerateObjectsUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateObjectsWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateObjectsAtIndexesOptionsUsingBlock(_s: NSIndexSet | null, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  indexOfObjectPassingTest(_predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexOfObjectWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexOfObjectAtIndexesOptionsPassingTest(_s: NSIndexSet | null, _opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexesOfObjectsPassingTest(_predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesOfObjectsWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesOfObjectsAtIndexesOptionsPassingTest(_s: NSIndexSet | null, _opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  sortedArrayUsingComparator(_cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  sortedArrayWithOptionsUsingComparator(_opts: number, _cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  indexOfObjectInSortedRangeOptionsUsingComparator(_obj: unknown, _r: NSRange, _opts: number, _cmp: NSComparator): number;
  /** Exported member.*/
  getObjects(_objects: NativePointer): void;
  /** Exported member.*/
  valueForKey(_key: string | null): unknown;
  /** Exported member.*/
  setValueForKey(_value: unknown, _key: string | null): void;
  /** Exported member.*/
  addObserverToObjectsAtIndexesForKeyPathOptionsContext(_observer: unknown, _indexes: NSIndexSet | null, _keyPath: string | null, _options: number, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverFromObjectsAtIndexesForKeyPathContext(_observer: unknown, _indexes: NSIndexSet | null, _keyPath: string | null, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverFromObjectsAtIndexesForKeyPath(_observer: unknown, _indexes: NSIndexSet | null, _keyPath: string | null): void;
  /** Exported member.*/
  addObserverForKeyPathOptionsContext(_observer: unknown, _keyPath: string | null, _options: number, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPathContext(_observer: unknown, _keyPath: string | null, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPath(_observer: unknown, _keyPath: string | null): void;
  /** Exported member.*/
  pathsMatchingExtensions(_filterTypes: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  filteredArrayUsingPredicate(_predicate: NSPredicate | null): unknown[] | null;
  /** Exported member.*/
  addObject(_anObject: unknown): void;
  /** Exported member.*/
  insertObjectAtIndex(_anObject: unknown, _index: number): void;
  /** Exported member.*/
  removeLastObject(): void;
  /** Exported member.*/
  removeObjectAtIndex(_index: number): void;
  /** Exported member.*/
  replaceObjectAtIndexWithObject(_index: number, _anObject: unknown): void;
  /** Exported member.*/
  addObjectsFromArray(_otherArray: unknown[] | null): void;
  /** Exported member.*/
  exchangeObjectAtIndexWithObjectAtIndex(_idx1: number, _idx2: number): void;
  /** Exported member.*/
  removeAllObjects(): void;
  /** Exported member.*/
  removeObjectInRange(_anObject: unknown, _range: NSRange): void;
  /** Exported member.*/
  removeObject(_anObject: unknown): void;
  /** Exported member.*/
  removeObjectIdenticalToInRange(_anObject: unknown, _range: NSRange): void;
  /** Exported member.*/
  removeObjectIdenticalTo(_anObject: unknown): void;
  /** Exported member.*/
  removeObjectsFromIndicesNumIndices(_indices: NativePointer | null, _cnt: number): void;
  /** Exported member.*/
  removeObjectsInArray(_otherArray: unknown[] | null): void;
  /** Exported member.*/
  removeObjectsInRange(_range: NSRange): void;
  /** Exported member.*/
  replaceObjectsInRangeWithObjectsFromArrayRange(_range: NSRange, _otherArray: unknown[] | null, _otherRange: NSRange): void;
  /** Exported member.*/
  replaceObjectsInRangeWithObjectsFromArray(_range: NSRange, _otherArray: unknown[] | null): void;
  /** Exported member.*/
  setArray(_otherArray: unknown[] | null): void;
  /** Exported member.*/
  sortUsingFunctionContext(_compare: NativePointer, _context: NativePointer | null): void;
  /** Exported member.*/
  sortUsingSelector(_comparator: NativeSelector): void;
  /** Exported member.*/
  insertObjectsAtIndexes(_objects: unknown[] | null, _indexes: NSIndexSet | null): void;
  /** Exported member.*/
  removeObjectsAtIndexes(_indexes: NSIndexSet | null): void;
  /** Exported member.*/
  replaceObjectsAtIndexesWithObjects(_indexes: NSIndexSet | null, _objects: unknown[] | null): void;
  /** Exported member.*/
  setObjectAtIndexedSubscript(_obj: unknown, _idx: number): void;
  /** Exported member.*/
  sortUsingComparator(_cmptr: NSComparator): void;
  /** Exported member.*/
  sortWithOptionsUsingComparator(_opts: number, _cmptr: NSComparator): void;
  /** Exported member.*/
  init(): unknown[] | null;
  /** Exported member.*/
  initWithCapacity(_numItems: number): unknown[] | null;
  /** Exported member.*/
  filterUsingPredicate(_predicate: NSPredicate | null): void;
  /** Exported member.*/
  sortUsingDescriptors(_sortDescriptors: unknown[] | null): void;
}
/** Native class object for {@link NSMutableArray}.*/
interface NSMutableArrayClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): unknown[] | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): unknown[] | null;
  /** Exported member.*/
  alloc(): unknown[] | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  array(): unknown[] | null;
  /** Exported member.*/
  arrayWithObject(_anObject: unknown): unknown[] | null;
  /** Exported member.*/
  arrayWithObjectsCount(_objects: NativePointer, _cnt: number): unknown[] | null;
  /** Exported member.*/
  arrayWithObjects(_firstObj: unknown): unknown[] | null;
  /** Exported member.*/
  arrayWithArray(_array: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  arrayWithContentsOfFile(_path: string | null): unknown;
  /** Exported member.*/
  arrayWithContentsOfURL(_url: NSURL | null): unknown;
  /** Exported member.*/
  arrayWithCapacity(_numItems: number): unknown[] | null;
}
/** Host-injected native class object.*/
declare var NSMutableArray: NSMutableArrayClass;

/** Native instance exported as `NSMutableAttributedString`.
 */
interface NSMutableAttributedString {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  string(): string | null;
  /** Exported member.*/
  attributesAtIndexEffectiveRange(_location: number, _range: NSRangePointer): Record<string, unknown> | null;
  /** Exported member.*/
  length(): number;
  /** Exported member.*/
  attributeAtIndexEffectiveRange(_attrName: string | null, _location: number, _range: NSRangePointer): unknown;
  /** Exported member.*/
  attributedSubstringFromRange(_range: NSRange): NSAttributedString | null;
  /** Exported member.*/
  attributesAtIndexLongestEffectiveRangeInRange(_location: number, _range: NSRangePointer, _rangeLimit: NSRange): Record<string, unknown> | null;
  /** Exported member.*/
  attributeAtIndexLongestEffectiveRangeInRange(_attrName: string | null, _location: number, _range: NSRangePointer, _rangeLimit: NSRange): unknown;
  /** Exported member.*/
  isEqualToAttributedString(_other: NSAttributedString | null): boolean;
  /** Exported member.*/
  enumerateAttributesInRangeOptionsUsingBlock(_enumerationRange: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateAttributeInRangeOptionsUsingBlock(_attrName: string | null, _enumerationRange: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  dataFromRangeDocumentAttributesError(_range: NSRange, _dict: Record<string, unknown> | null, _error: NSError | null): NSData | null;
  /** Exported member.*/
  fileWrapperFromRangeDocumentAttributesError(_range: NSRange, _dict: Record<string, unknown> | null, _error: NSError | null): NSFileWrapper | null;
  /** Exported member.*/
  size(): CGSize;
  /** Exported member.*/
  drawAtPoint(_point: CGPoint): void;
  /** Exported member.*/
  drawInRect(_rect: CGRect): void;
  /** Exported member.*/
  drawWithRectOptionsAttributesContext(_rect: CGRect, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): void;
  /** Exported member.*/
  boundingRectWithSizeOptionsAttributesContext(_size: CGSize, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): CGRect;
  /** Exported member.*/
  drawWithRectOptionsContext(_rect: CGRect, _options: number, _context: NSStringDrawingContext | null): void;
  /** Exported member.*/
  boundingRectWithSizeOptionsContext(_size: CGSize, _options: number, _context: NSStringDrawingContext | null): CGRect;
  /** Exported member.*/
  replaceCharactersInRangeWithString(_range: NSRange, _str: string | null): void;
  /** Exported member.*/
  setAttributesRange(_attrs: Record<string, unknown> | null, _range: NSRange): void;
  /** Exported member.*/
  mutableString(): string | null;
  /** Exported member.*/
  addAttributeValueRange(_name: string | null, _value: unknown, _range: NSRange): void;
  /** Exported member.*/
  addAttributesRange(_attrs: Record<string, unknown> | null, _range: NSRange): void;
  /** Exported member.*/
  removeAttributeRange(_name: string | null, _range: NSRange): void;
  /** Exported member.*/
  replaceCharactersInRangeWithAttributedString(_range: NSRange, _attrString: NSAttributedString | null): void;
  /** Exported member.*/
  insertAttributedStringAtIndex(_attrString: NSAttributedString | null, _loc: number): void;
  /** Exported member.*/
  appendAttributedString(_attrString: NSAttributedString | null): void;
  /** Exported member.*/
  deleteCharactersInRange(_range: NSRange): void;
  /** Exported member.*/
  setAttributedString(_attrString: NSAttributedString | null): void;
  /** Exported member.*/
  beginEditing(): void;
  /** Exported member.*/
  endEditing(): void;
  /** Exported member.*/
  fixAttributesInRange(_range: NSRange): void;
  /** Exported member.*/
  readFromFileURLOptionsDocumentAttributesError(_url: NSURL | null, _opts: Record<string, unknown> | null, _dict: Record<string, unknown> | null, _error: NSError | null): boolean;
  /** Exported member.*/
  readFromDataOptionsDocumentAttributesError(_data: NSData | null, _opts: Record<string, unknown> | null, _dict: Record<string, unknown> | null, _error: NSError | null): boolean;
}
/** Native class object for {@link NSMutableAttributedString}.*/
interface NSMutableAttributedStringClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSMutableAttributedString | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSMutableAttributedString | null;
  /** Exported member.*/
  alloc(): NSMutableAttributedString | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  attributedStringWithAttachment(_attachment: NSTextAttachment | null): NSAttributedString | null;
}
/** Host-injected native class object.*/
declare var NSMutableAttributedString: NSMutableAttributedStringClass;

/** Native instance exported as `NSMutableCharacterSet`.
 */
interface NSMutableCharacterSet {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  characterIsMember(_aCharacter: number): boolean;
  /** Exported member.*/
  bitmapRepresentation(): NSData | null;
  /** Exported member.*/
  invertedSet(): NSCharacterSet | null;
  /** Exported member.*/
  longCharacterIsMember(_theLongChar: number): boolean;
  /** Exported member.*/
  isSupersetOfSet(_theOtherSet: NSCharacterSet | null): boolean;
  /** Exported member.*/
  hasMemberInPlane(_thePlane: number): boolean;
  /** Exported member.*/
  addCharactersInRange(_aRange: NSRange): void;
  /** Exported member.*/
  removeCharactersInRange(_aRange: NSRange): void;
  /** Exported member.*/
  addCharactersInString(_aString: string | null): void;
  /** Exported member.*/
  removeCharactersInString(_aString: string | null): void;
  /** Exported member.*/
  formUnionWithCharacterSet(_otherSet: NSCharacterSet | null): void;
  /** Exported member.*/
  formIntersectionWithCharacterSet(_otherSet: NSCharacterSet | null): void;
  /** Exported member.*/
  invert(): void;
}
/** Native class object for {@link NSMutableCharacterSet}.*/
interface NSMutableCharacterSetClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSMutableCharacterSet | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSMutableCharacterSet | null;
  /** Exported member.*/
  alloc(): NSMutableCharacterSet | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  URLUserAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLPasswordAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLHostAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLPathAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLQueryAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLFragmentAllowedCharacterSet(): unknown;
  /** Exported member.*/
  controlCharacterSet(): unknown;
  /** Exported member.*/
  whitespaceCharacterSet(): unknown;
  /** Exported member.*/
  whitespaceAndNewlineCharacterSet(): unknown;
  /** Exported member.*/
  decimalDigitCharacterSet(): unknown;
  /** Exported member.*/
  letterCharacterSet(): unknown;
  /** Exported member.*/
  lowercaseLetterCharacterSet(): unknown;
  /** Exported member.*/
  uppercaseLetterCharacterSet(): unknown;
  /** Exported member.*/
  nonBaseCharacterSet(): unknown;
  /** Exported member.*/
  alphanumericCharacterSet(): unknown;
  /** Exported member.*/
  decomposableCharacterSet(): unknown;
  /** Exported member.*/
  illegalCharacterSet(): unknown;
  /** Exported member.*/
  punctuationCharacterSet(): unknown;
  /** Exported member.*/
  capitalizedLetterCharacterSet(): unknown;
  /** Exported member.*/
  symbolCharacterSet(): unknown;
  /** Exported member.*/
  newlineCharacterSet(): unknown;
  /** Exported member.*/
  characterSetWithRange(_aRange: NSRange): unknown;
  /** Exported member.*/
  characterSetWithCharactersInString(_aString: string | null): unknown;
  /** Exported member.*/
  characterSetWithBitmapRepresentation(_data: NSData | null): unknown;
  /** Exported member.*/
  characterSetWithContentsOfFile(_fName: string | null): unknown;
}
/** Host-injected native class object.*/
declare var NSMutableCharacterSet: NSMutableCharacterSetClass;

/** Native instance exported as `NSMutableData`.
 */
interface NSMutableData {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  length(): number;
  /** Exported member.*/
  bytes(): NativePointer | null;
  /** Exported member.*/
  getBytesLength(_buffer: NativePointer | null, _length: number): void;
  /** Exported member.*/
  getBytesRange(_buffer: NativePointer | null, _range: NSRange): void;
  /** Exported member.*/
  isEqualToData(_other: NSData | null): boolean;
  /** Exported member.*/
  subdataWithRange(_range: NSRange): NSData | null;
  /** Exported member.*/
  writeToFileAtomically(_path: string | null, _useAuxiliaryFile: boolean): boolean;
  /** Exported member.*/
  writeToURLAtomically(_url: NSURL | null, _atomically: boolean): boolean;
  /** Exported member.*/
  writeToFileOptionsError(_path: string | null, _writeOptionsMask: number, _errorPtr: NSError | null): boolean;
  /** Exported member.*/
  writeToURLOptionsError(_url: NSURL | null, _writeOptionsMask: number, _errorPtr: NSError | null): boolean;
  /** Exported member.*/
  rangeOfDataOptionsRange(_dataToFind: NSData | null, _mask: number, _searchRange: NSRange): NSRange;
  /** Exported member.*/
  enumerateByteRangesUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  getBytes(_buffer: NativePointer | null): void;
  /** Exported member.*/
  base64Encoding(): string | null;
  /** Exported member.*/
  mutableBytes(): NativePointer | null;
  /** Exported member.*/
  setLength(_length: number): void;
  /** Exported member.*/
  appendBytesLength(_bytes: NativePointer | null, _length: number): void;
  /** Exported member.*/
  appendData(_other: NSData | null): void;
  /** Exported member.*/
  increaseLengthBy(_extraLength: number): void;
  /** Exported member.*/
  replaceBytesInRangeWithBytes(_range: NSRange, _bytes: NativePointer | null): void;
  /** Exported member.*/
  resetBytesInRange(_range: NSRange): void;
  /** Exported member.*/
  setData(_data: NSData | null): void;
  /** Exported member.*/
  replaceBytesInRangeWithBytesLength(_range: NSRange, _replacementBytes: NativePointer | null, _replacementLength: number): void;
}
/** Native class object for {@link NSMutableData}.*/
interface NSMutableDataClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSMutableData | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSMutableData | null;
  /** Exported member.*/
  alloc(): NSMutableData | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  data(): unknown;
  /** Exported member.*/
  dataWithStringEncoding(_string: string | null, _encoding: number): unknown;
  /** Exported member.*/
  dataWithBytesLength(_bytes: NativePointer | null, _length: number): unknown;
  /** Exported member.*/
  dataWithBytesNoCopyLength(_bytes: NativePointer | null, _length: number): unknown;
  /** Exported member.*/
  dataWithBytesNoCopyLengthFreeWhenDone(_bytes: NativePointer | null, _length: number, _b: boolean): unknown;
  /** Exported member.*/
  dataWithContentsOfFileOptionsError(_path: string | null, _readOptionsMask: number, _errorPtr: NSError | null): unknown;
  /** Exported member.*/
  dataWithContentsOfURLOptionsError(_url: NSURL | null, _readOptionsMask: number, _errorPtr: NSError | null): unknown;
  /** Exported member.*/
  dataWithContentsOfFile(_path: string | null): unknown;
  /** Exported member.*/
  dataWithContentsOfURL(_url: NSURL | null): unknown;
  /** Exported member.*/
  dataWithData(_data: NSData | null): unknown;
  /** Exported member.*/
  dataWithContentsOfMappedFile(_path: string | null): unknown;
  /** Exported member.*/
  dataWithCapacity(_aNumItems: number): unknown;
  /** Exported member.*/
  dataWithLength(_length: number): unknown;
}
/** Host-injected native class object.*/
declare var NSMutableData: NSMutableDataClass;

/** Native instance exported as `NSMutableDictionary`.
 */
interface NSMutableDictionary {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  valueForKey(_key: string | null): unknown;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  objectForKey(_aKey: unknown): unknown;
  /** Exported member.*/
  keyEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  allKeys(): unknown[] | null;
  /** Exported member.*/
  allKeysForObject(_anObject: unknown): unknown[] | null;
  /** Exported member.*/
  allValues(): unknown[] | null;
  /** Exported member.*/
  descriptionInStringsFileFormat(): string | null;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
  /** Exported member.*/
  descriptionWithLocaleIndent(_locale: unknown, _level: number): string | null;
  /** Exported member.*/
  isEqualToDictionary(_otherDictionary: Record<string, unknown> | null): boolean;
  /** Exported member.*/
  objectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  objectsForKeysNotFoundMarker(_keys: unknown[] | null, _marker: unknown): unknown[] | null;
  /** Exported member.*/
  writeToFileAtomically(_path: string | null, _useAuxiliaryFile: boolean): boolean;
  /** Exported member.*/
  writeToURLAtomically(_url: NSURL | null, _atomically: boolean): boolean;
  /** Exported member.*/
  keysSortedByValueUsingSelector(_comparator: NativeSelector): unknown[] | null;
  /** Exported member.*/
  getObjectsAndKeys(_objects: NativePointer, _keys: NativePointer): void;
  /** Exported member.*/
  objectForKeyedSubscript(_key: unknown): unknown;
  /** Exported member.*/
  enumerateKeysAndObjectsUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateKeysAndObjectsWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  keysSortedByValueUsingComparator(_cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  keysSortedByValueWithOptionsUsingComparator(_opts: number, _cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  keysOfEntriesPassingTest(_predicate: NativeBlock | null): NSSet | null;
  /** Exported member.*/
  keysOfEntriesWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): NSSet | null;
  /** Exported member.*/
  removeObjectForKey(_aKey: unknown): void;
  /** Exported member.*/
  setObjectForKey(_anObject: unknown, _aKey: unknown): void;
  /** Exported member.*/
  addEntriesFromDictionary(_otherDictionary: Record<string, unknown> | null): void;
  /** Exported member.*/
  removeAllObjects(): void;
  /** Exported member.*/
  removeObjectsForKeys(_keyArray: unknown[] | null): void;
  /** Exported member.*/
  setDictionary(_otherDictionary: Record<string, unknown> | null): void;
  /** Exported member.*/
  setObjectForKeyedSubscript(_obj: unknown, _key: unknown): void;
  /** Exported member.*/
  initWithCapacity(_numItems: number): Record<string, unknown> | null;
  /** Exported member.*/
  fileSize(): number;
  /** Exported member.*/
  fileModificationDate(): Date | null;
  /** Exported member.*/
  fileType(): string | null;
  /** Exported member.*/
  filePosixPermissions(): number;
  /** Exported member.*/
  fileOwnerAccountName(): string | null;
  /** Exported member.*/
  fileGroupOwnerAccountName(): string | null;
  /** Exported member.*/
  fileSystemNumber(): number;
  /** Exported member.*/
  fileSystemFileNumber(): number;
  /** Exported member.*/
  fileExtensionHidden(): boolean;
  /** Exported member.*/
  fileHFSCreatorCode(): number;
  /** Exported member.*/
  fileHFSTypeCode(): number;
  /** Exported member.*/
  fileIsImmutable(): boolean;
  /** Exported member.*/
  fileIsAppendOnly(): boolean;
  /** Exported member.*/
  fileCreationDate(): Date | null;
  /** Exported member.*/
  fileOwnerAccountID(): number | null;
  /** Exported member.*/
  fileGroupOwnerAccountID(): number | null;
  /** Exported member.*/
  setValueForKey(_value: unknown, _key: string | null): void;
}
/** Native class object for {@link NSMutableDictionary}.*/
interface NSMutableDictionaryClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): Record<string, unknown> | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): Record<string, unknown> | null;
  /** Exported member.*/
  alloc(): Record<string, unknown> | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  dictionary(): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithObjectForKey(_object: unknown, _key: unknown): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithObjectsForKeysCount(_objects: NativePointer, _keys: NativePointer, _cnt: number): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithObjectsAndKeys(_firstObject: unknown): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithDictionary(_dict: Record<string, unknown> | null): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithObjectsForKeys(_objects: unknown[] | null, _keys: unknown[] | null): Record<string, unknown> | null;
  /** Exported member.*/
  dictionaryWithContentsOfFile(_path: string | null): unknown;
  /** Exported member.*/
  dictionaryWithContentsOfURL(_url: NSURL | null): unknown;
  /** Exported member.*/
  dictionaryWithCapacity(_numItems: number): Record<string, unknown> | null;
  /** Exported member.*/
  sharedKeySetForKeys(_keys: unknown[] | null): unknown;
  /** Exported member.*/
  dictionaryWithSharedKeySet(_keyset: unknown): unknown;
}
/** Host-injected native class object.*/
declare var NSMutableDictionary: NSMutableDictionaryClass;

/** Native instance exported as `NSMutableIndexSet`.
 */
interface NSMutableIndexSet {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  isEqualToIndexSet(_indexSet: NSIndexSet | null): boolean;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  firstIndex(): number;
  /** Exported member.*/
  lastIndex(): number;
  /** Exported member.*/
  indexGreaterThanIndex(_value: number): number;
  /** Exported member.*/
  indexLessThanIndex(_value: number): number;
  /** Exported member.*/
  indexGreaterThanOrEqualToIndex(_value: number): number;
  /** Exported member.*/
  indexLessThanOrEqualToIndex(_value: number): number;
  /** Exported member.*/
  getIndexesMaxCountInIndexRange(_indexBuffer: NativePointer | null, _bufferSize: number, _range: NSRangePointer): number;
  /** Exported member.*/
  countOfIndexesInRange(_range: NSRange): number;
  /** Exported member.*/
  containsIndex(_value: number): boolean;
  /** Exported member.*/
  containsIndexesInRange(_range: NSRange): boolean;
  /** Exported member.*/
  containsIndexes(_indexSet: NSIndexSet | null): boolean;
  /** Exported member.*/
  intersectsIndexesInRange(_range: NSRange): boolean;
  /** Exported member.*/
  enumerateIndexesUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateIndexesWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateIndexesInRangeOptionsUsingBlock(_range: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  indexPassingTest(_predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexInRangeOptionsPassingTest(_range: NSRange, _opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexesPassingTest(_predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesInRangeOptionsPassingTest(_range: NSRange, _opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  enumerateRangesUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateRangesWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateRangesInRangeOptionsUsingBlock(_range: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  addIndexes(_indexSet: NSIndexSet | null): void;
  /** Exported member.*/
  removeIndexes(_indexSet: NSIndexSet | null): void;
  /** Exported member.*/
  removeAllIndexes(): void;
  /** Exported member.*/
  addIndex(_value: number): void;
  /** Exported member.*/
  removeIndex(_value: number): void;
  /** Exported member.*/
  addIndexesInRange(_range: NSRange): void;
  /** Exported member.*/
  removeIndexesInRange(_range: NSRange): void;
  /** Exported member.*/
  shiftIndexesStartingAtIndexBy(_index: number, _delta: number): void;
}
/** Native class object for {@link NSMutableIndexSet}.*/
interface NSMutableIndexSetClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSMutableIndexSet | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSMutableIndexSet | null;
  /** Exported member.*/
  alloc(): NSMutableIndexSet | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  indexSet(): NSMutableIndexSet | null;
  /** Exported member.*/
  indexSetWithIndex(_value: number): NSMutableIndexSet | null;
  /** Exported member.*/
  indexSetWithIndexesInRange(_range: NSRange): NSMutableIndexSet | null;
}
/** Host-injected native class object.*/
declare var NSMutableIndexSet: NSMutableIndexSetClass;

/** Native instance exported as `NSMutableOrderedSet`.
 */
interface NSMutableOrderedSet {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  sortedArrayUsingDescriptors(_sortDescriptors: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  valueForKey(_key: string | null): unknown;
  /** Exported member.*/
  setValueForKey(_value: unknown, _key: string | null): void;
  /** Exported member.*/
  addObserverForKeyPathOptionsContext(_observer: unknown, _keyPath: string | null, _options: number, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPathContext(_observer: unknown, _keyPath: string | null, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPath(_observer: unknown, _keyPath: string | null): void;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  objectAtIndex(_idx: number): unknown;
  /** Exported member.*/
  indexOfObject(_object: unknown): number;
  /** Exported member.*/
  getObjectsRange(_objects: NativePointer, _range: NSRange): void;
  /** Exported member.*/
  objectsAtIndexes(_indexes: NSIndexSet | null): unknown[] | null;
  /** Exported member.*/
  firstObject(): unknown;
  /** Exported member.*/
  lastObject(): unknown;
  /** Exported member.*/
  isEqualToOrderedSet(_other: NSOrderedSet | null): boolean;
  /** Exported member.*/
  containsObject(_object: unknown): boolean;
  /** Exported member.*/
  intersectsOrderedSet(_other: NSOrderedSet | null): boolean;
  /** Exported member.*/
  intersectsSet(_set: NSSet | null): boolean;
  /** Exported member.*/
  isSubsetOfOrderedSet(_other: NSOrderedSet | null): boolean;
  /** Exported member.*/
  isSubsetOfSet(_set: NSSet | null): boolean;
  /** Exported member.*/
  objectAtIndexedSubscript(_idx: number): unknown;
  /** Exported member.*/
  objectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  reverseObjectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  reversedOrderedSet(): NSOrderedSet | null;
  /** Exported member.*/
  array(): unknown[] | null;
  /** Exported member.*/
  set(): NSSet | null;
  /** Exported member.*/
  enumerateObjectsUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateObjectsWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateObjectsAtIndexesOptionsUsingBlock(_s: NSIndexSet | null, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  indexOfObjectPassingTest(_predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexOfObjectWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexOfObjectAtIndexesOptionsPassingTest(_s: NSIndexSet | null, _opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexesOfObjectsPassingTest(_predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesOfObjectsWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesOfObjectsAtIndexesOptionsPassingTest(_s: NSIndexSet | null, _opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexOfObjectInSortedRangeOptionsUsingComparator(_object: unknown, _range: NSRange, _opts: number, _cmp: NSComparator): number;
  /** Exported member.*/
  sortedArrayUsingComparator(_cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  sortedArrayWithOptionsUsingComparator(_opts: number, _cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
  /** Exported member.*/
  descriptionWithLocaleIndent(_locale: unknown, _level: number): string | null;
  /** Exported member.*/
  filteredOrderedSetUsingPredicate(_p: NSPredicate | null): NSOrderedSet | null;
  /** Exported member.*/
  insertObjectAtIndex(_object: unknown, _idx: number): void;
  /** Exported member.*/
  removeObjectAtIndex(_idx: number): void;
  /** Exported member.*/
  replaceObjectAtIndexWithObject(_idx: number, _object: unknown): void;
  /** Exported member.*/
  addObject(_object: unknown): void;
  /** Exported member.*/
  addObjectsCount(_objects: NativePointer, _count: number): void;
  /** Exported member.*/
  addObjectsFromArray(_array: unknown[] | null): void;
  /** Exported member.*/
  exchangeObjectAtIndexWithObjectAtIndex(_idx1: number, _idx2: number): void;
  /** Exported member.*/
  moveObjectsAtIndexesToIndex(_indexes: NSIndexSet | null, _idx: number): void;
  /** Exported member.*/
  insertObjectsAtIndexes(_objects: unknown[] | null, _indexes: NSIndexSet | null): void;
  /** Exported member.*/
  setObjectAtIndex(_obj: unknown, _idx: number): void;
  /** Exported member.*/
  setObjectAtIndexedSubscript(_obj: unknown, _idx: number): void;
  /** Exported member.*/
  replaceObjectsInRangeWithObjectsCount(_range: NSRange, _objects: NativePointer, _count: number): void;
  /** Exported member.*/
  replaceObjectsAtIndexesWithObjects(_indexes: NSIndexSet | null, _objects: unknown[] | null): void;
  /** Exported member.*/
  removeObjectsInRange(_range: NSRange): void;
  /** Exported member.*/
  removeObjectsAtIndexes(_indexes: NSIndexSet | null): void;
  /** Exported member.*/
  removeAllObjects(): void;
  /** Exported member.*/
  removeObject(_object: unknown): void;
  /** Exported member.*/
  removeObjectsInArray(_array: unknown[] | null): void;
  /** Exported member.*/
  intersectOrderedSet(_other: NSOrderedSet | null): void;
  /** Exported member.*/
  minusOrderedSet(_other: NSOrderedSet | null): void;
  /** Exported member.*/
  unionOrderedSet(_other: NSOrderedSet | null): void;
  /** Exported member.*/
  intersectSet(_other: NSSet | null): void;
  /** Exported member.*/
  minusSet(_other: NSSet | null): void;
  /** Exported member.*/
  unionSet(_other: NSSet | null): void;
  /** Exported member.*/
  sortUsingComparator(_cmptr: NSComparator): void;
  /** Exported member.*/
  sortWithOptionsUsingComparator(_opts: number, _cmptr: NSComparator): void;
  /** Exported member.*/
  sortRangeOptionsUsingComparator(_range: NSRange, _opts: number, _cmptr: NSComparator): void;
  /** Exported member.*/
  filterUsingPredicate(_p: NSPredicate | null): void;
  /** Exported member.*/
  sortUsingDescriptors(_sortDescriptors: unknown[] | null): void;
}
/** Native class object for {@link NSMutableOrderedSet}.*/
interface NSMutableOrderedSetClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSMutableOrderedSet | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSMutableOrderedSet | null;
  /** Exported member.*/
  alloc(): NSMutableOrderedSet | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  orderedSet(): NSMutableOrderedSet | null;
  /** Exported member.*/
  orderedSetWithObject(_object: unknown): NSMutableOrderedSet | null;
  /** Exported member.*/
  orderedSetWithObjectsCount(_objects: NativePointer, _cnt: number): NSMutableOrderedSet | null;
  /** Exported member.*/
  orderedSetWithObjects(_firstObj: unknown): NSMutableOrderedSet | null;
  /** Exported member.*/
  orderedSetWithOrderedSet(_set: NSOrderedSet | null): NSMutableOrderedSet | null;
  /** Exported member.*/
  orderedSetWithOrderedSetRangeCopyItems(_set: NSOrderedSet | null, _range: NSRange, _flag: boolean): NSMutableOrderedSet | null;
  /** Exported member.*/
  orderedSetWithArray(_array: unknown[] | null): NSMutableOrderedSet | null;
  /** Exported member.*/
  orderedSetWithArrayRangeCopyItems(_array: unknown[] | null, _range: NSRange, _flag: boolean): NSMutableOrderedSet | null;
  /** Exported member.*/
  orderedSetWithSet(_set: NSSet | null): NSMutableOrderedSet | null;
  /** Exported member.*/
  orderedSetWithSetCopyItems(_set: NSSet | null, _flag: boolean): NSMutableOrderedSet | null;
  /** Exported member.*/
  orderedSetWithCapacity(_numItems: number): NSMutableOrderedSet | null;
}
/** Host-injected native class object.*/
declare var NSMutableOrderedSet: NSMutableOrderedSetClass;

/** Native instance exported as `NSMutableSet`.
 */
interface NSMutableSet {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  sortedArrayUsingDescriptors(_sortDescriptors: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  valueForKey(_key: string | null): unknown;
  /** Exported member.*/
  setValueForKey(_value: unknown, _key: string | null): void;
  /** Exported member.*/
  addObserverForKeyPathOptionsContext(_observer: unknown, _keyPath: string | null, _options: number, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPathContext(_observer: unknown, _keyPath: string | null, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPath(_observer: unknown, _keyPath: string | null): void;
  /** Exported member.*/
  filteredSetUsingPredicate(_predicate: NSPredicate | null): NSSet | null;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  member(_object: unknown): unknown;
  /** Exported member.*/
  objectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  allObjects(): unknown[] | null;
  /** Exported member.*/
  anyObject(): unknown;
  /** Exported member.*/
  containsObject(_anObject: unknown): boolean;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
  /** Exported member.*/
  intersectsSet(_otherSet: NSSet | null): boolean;
  /** Exported member.*/
  isEqualToSet(_otherSet: NSSet | null): boolean;
  /** Exported member.*/
  isSubsetOfSet(_otherSet: NSSet | null): boolean;
  /** Exported member.*/
  makeObjectsPerformSelector(_aSelector: NativeSelector): void;
  /** Exported member.*/
  makeObjectsPerformSelectorWithObject(_aSelector: NativeSelector, _argument: unknown): void;
  /** Exported member.*/
  setByAddingObject(_anObject: unknown): NSSet | null;
  /** Exported member.*/
  setByAddingObjectsFromSet(_other: NSSet | null): NSSet | null;
  /** Exported member.*/
  setByAddingObjectsFromArray(_other: unknown[] | null): NSSet | null;
  /** Exported member.*/
  enumerateObjectsUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateObjectsWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  objectsPassingTest(_predicate: NativeBlock | null): NSSet | null;
  /** Exported member.*/
  objectsWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): NSSet | null;
  /** Exported member.*/
  addObject(_object: unknown): void;
  /** Exported member.*/
  removeObject(_object: unknown): void;
  /** Exported member.*/
  addObjectsFromArray(_array: unknown[] | null): void;
  /** Exported member.*/
  intersectSet(_otherSet: NSSet | null): void;
  /** Exported member.*/
  minusSet(_otherSet: NSSet | null): void;
  /** Exported member.*/
  removeAllObjects(): void;
  /** Exported member.*/
  unionSet(_otherSet: NSSet | null): void;
  /** Exported member.*/
  setSet(_otherSet: NSSet | null): void;
  /** Exported member.*/
  filterUsingPredicate(_predicate: NSPredicate | null): void;
}
/** Native class object for {@link NSMutableSet}.*/
interface NSMutableSetClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSMutableSet | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSMutableSet | null;
  /** Exported member.*/
  alloc(): NSMutableSet | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  set(): NSMutableSet | null;
  /** Exported member.*/
  setWithObject(_object: unknown): NSMutableSet | null;
  /** Exported member.*/
  setWithObjectsCount(_objects: NativePointer, _cnt: number): NSMutableSet | null;
  /** Exported member.*/
  setWithObjects(_firstObj: unknown): NSMutableSet | null;
  /** Exported member.*/
  setWithSet(_set: NSSet | null): NSMutableSet | null;
  /** Exported member.*/
  setWithArray(_array: unknown[] | null): NSMutableSet | null;
  /** Exported member.*/
  setWithCapacity(_numItems: number): NSMutableSet | null;
}
/** Host-injected native class object.*/
declare var NSMutableSet: NSMutableSetClass;

/** Native instance exported as `NSMutableString`.
 */
interface NSMutableString {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  stringByAddingPercentEncodingWithAllowedCharacters(_allowedCharacters: NSCharacterSet | null): string | null;
  /** Exported member.*/
  stringByRemovingPercentEncoding(): string | null;
  /** Exported member.*/
  stringByAddingPercentEscapesUsingEncoding(_enc: number): string | null;
  /** Exported member.*/
  stringByReplacingPercentEscapesUsingEncoding(_enc: number): string | null;
  /** Exported member.*/
  linguisticTagsInRangeSchemeOptionsOrthographyTokenRanges(_range: NSRange, _tagScheme: string | null, _opts: number, _orthography: NSOrthography | null, _tokenRanges: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  enumerateLinguisticTagsInRangeSchemeOptionsOrthographyUsingBlock(_range: NSRange, _tagScheme: string | null, _opts: number, _orthography: NSOrthography | null, _block: NativeBlock | null): void;
  /** Exported member.*/
  pathComponents(): unknown[] | null;
  /** Exported member.*/
  isAbsolutePath(): boolean;
  /** Exported member.*/
  lastPathComponent(): string | null;
  /** Exported member.*/
  stringByDeletingLastPathComponent(): string | null;
  /** Exported member.*/
  stringByAppendingPathComponent(_str: string | null): string | null;
  /** Exported member.*/
  pathExtension(): string | null;
  /** Exported member.*/
  stringByDeletingPathExtension(): string | null;
  /** Exported member.*/
  stringByAppendingPathExtension(_str: string | null): string | null;
  /** Exported member.*/
  stringByAbbreviatingWithTildeInPath(): string | null;
  /** Exported member.*/
  stringByExpandingTildeInPath(): string | null;
  /** Exported member.*/
  stringByStandardizingPath(): string | null;
  /** Exported member.*/
  stringByResolvingSymlinksInPath(): string | null;
  /** Exported member.*/
  stringsByAppendingPaths(_paths: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  completePathIntoStringCaseSensitiveMatchesIntoArrayFilterTypes(_outputName: string | null, _flag: boolean, _outputArray: unknown[] | null, _filterTypes: unknown[] | null): number;
  /** Exported member.*/
  fileSystemRepresentation(): NativePointer | null;
  /** Exported member.*/
  getFileSystemRepresentationMaxLength(_cname: NativePointer | null, _max: number): boolean;
  /** Exported member.*/
  length(): number;
  /** Exported member.*/
  characterAtIndex(_index: number): number;
  /** Exported member.*/
  getCharactersRange(_buffer: NativePointer | null, _aRange: NSRange): void;
  /** Exported member.*/
  substringFromIndex(_from: number): string | null;
  /** Exported member.*/
  substringToIndex(_to: number): string | null;
  /** Exported member.*/
  substringWithRange(_range: NSRange): string | null;
  /** Exported member.*/
  compare(_string: string | null): number;
  /** Exported member.*/
  compareOptions(_string: string | null, _mask: number): number;
  /** Exported member.*/
  compareOptionsRange(_string: string | null, _mask: number, _compareRange: NSRange): number;
  /** Exported member.*/
  compareOptionsRangeLocale(_string: string | null, _mask: number, _compareRange: NSRange, _locale: unknown): number;
  /** Exported member.*/
  caseInsensitiveCompare(_string: string | null): number;
  /** Exported member.*/
  localizedCompare(_string: string | null): number;
  /** Exported member.*/
  localizedCaseInsensitiveCompare(_string: string | null): number;
  /** Exported member.*/
  localizedStandardCompare(_string: string | null): number;
  /** Exported member.*/
  isEqualToString(_aString: string | null): boolean;
  /** Exported member.*/
  hasPrefix(_aString: string | null): boolean;
  /** Exported member.*/
  hasSuffix(_aString: string | null): boolean;
  /** Exported member.*/
  rangeOfString(_aString: string | null): NSRange;
  /** Exported member.*/
  rangeOfStringOptions(_aString: string | null, _mask: number): NSRange;
  /** Exported member.*/
  rangeOfStringOptionsRange(_aString: string | null, _mask: number, _searchRange: NSRange): NSRange;
  /** Exported member.*/
  rangeOfStringOptionsRangeLocale(_aString: string | null, _mask: number, _searchRange: NSRange, _locale: NSLocale | null): NSRange;
  /** Exported member.*/
  rangeOfCharacterFromSet(_aSet: NSCharacterSet | null): NSRange;
  /** Exported member.*/
  rangeOfCharacterFromSetOptions(_aSet: NSCharacterSet | null, _mask: number): NSRange;
  /** Exported member.*/
  rangeOfCharacterFromSetOptionsRange(_aSet: NSCharacterSet | null, _mask: number, _searchRange: NSRange): NSRange;
  /** Exported member.*/
  rangeOfComposedCharacterSequenceAtIndex(_index: number): NSRange;
  /** Exported member.*/
  rangeOfComposedCharacterSequencesForRange(_range: NSRange): NSRange;
  /** Exported member.*/
  stringByAppendingString(_aString: string | null): string | null;
  /** Exported member.*/
  stringByAppendingFormat(_format: string | null, _arguments: unknown[] | null): string | null;
  /** Exported member.*/
  doubleValue(): number;
  /** Exported member.*/
  floatValue(): number;
  /** Exported member.*/
  intValue(): number;
  /** Exported member.*/
  integerValue(): number;
  /** Exported member.*/
  longLongValue(): number;
  /** Exported member.*/
  boolValue(): boolean;
  /** Exported member.*/
  componentsSeparatedByString(_separator: string | null): unknown[] | null;
  /** Exported member.*/
  componentsSeparatedByCharactersInSet(_separator: NSCharacterSet | null): unknown[] | null;
  /** Exported member.*/
  commonPrefixWithStringOptions(_aString: string | null, _mask: number): string | null;
  /** Exported member.*/
  uppercaseString(): string | null;
  /** Exported member.*/
  lowercaseString(): string | null;
  /** Exported member.*/
  capitalizedString(): string | null;
  /** Exported member.*/
  uppercaseStringWithLocale(_locale: NSLocale | null): string | null;
  /** Exported member.*/
  lowercaseStringWithLocale(_locale: NSLocale | null): string | null;
  /** Exported member.*/
  capitalizedStringWithLocale(_locale: NSLocale | null): string | null;
  /** Exported member.*/
  stringByTrimmingCharactersInSet(_set: NSCharacterSet | null): string | null;
  /** Exported member.*/
  stringByPaddingToLengthWithStringStartingAtIndex(_newLength: number, _padString: string | null, _padIndex: number): string | null;
  /** Exported member.*/
  getLineStartEndContentsEndForRange(_startPtr: NativePointer | null, _lineEndPtr: NativePointer | null, _contentsEndPtr: NativePointer | null, _range: NSRange): void;
  /** Exported member.*/
  lineRangeForRange(_range: NSRange): NSRange;
  /** Exported member.*/
  getParagraphStartEndContentsEndForRange(_startPtr: NativePointer | null, _parEndPtr: NativePointer | null, _contentsEndPtr: NativePointer | null, _range: NSRange): void;
  /** Exported member.*/
  paragraphRangeForRange(_range: NSRange): NSRange;
  /** Exported member.*/
  enumerateSubstringsInRangeOptionsUsingBlock(_range: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateLinesUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  fastestEncoding(): number;
  /** Exported member.*/
  smallestEncoding(): number;
  /** Exported member.*/
  dataUsingEncodingAllowLossyConversion(_encoding: number, _lossy: boolean): NSData | null;
  /** Exported member.*/
  dataUsingEncoding(_encoding: number): NSData | null;
  /** Exported member.*/
  canBeConvertedToEncoding(_encoding: number): boolean;
  /** Exported member.*/
  cStringUsingEncoding(_encoding: number): NativePointer | null;
  /** Exported member.*/
  getCStringMaxLengthEncoding(_buffer: NativePointer | null, _maxBufferCount: number, _encoding: number): boolean;
  /** Exported member.*/
  getBytesMaxLengthUsedLengthEncodingOptionsRangeRemainingRange(_buffer: NativePointer | null, _maxBufferCount: number, _usedBufferCount: NativePointer | null, _encoding: number, _options: number, _range: NSRange, _leftover: NSRangePointer): boolean;
  /** Exported member.*/
  maximumLengthOfBytesUsingEncoding(_enc: number): number;
  /** Exported member.*/
  lengthOfBytesUsingEncoding(_enc: number): number;
  /** Exported member.*/
  decomposedStringWithCanonicalMapping(): string | null;
  /** Exported member.*/
  precomposedStringWithCanonicalMapping(): string | null;
  /** Exported member.*/
  decomposedStringWithCompatibilityMapping(): string | null;
  /** Exported member.*/
  precomposedStringWithCompatibilityMapping(): string | null;
  /** Exported member.*/
  stringByFoldingWithOptionsLocale(_options: number, _locale: NSLocale | null): string | null;
  /** Exported member.*/
  stringByReplacingOccurrencesOfStringWithStringOptionsRange(_target: string | null, _replacement: string | null, _options: number, _searchRange: NSRange): string | null;
  /** Exported member.*/
  stringByReplacingOccurrencesOfStringWithString(_target: string | null, _replacement: string | null): string | null;
  /** Exported member.*/
  stringByReplacingCharactersInRangeWithString(_range: NSRange, _replacement: string | null): string | null;
  /** Exported member.*/
  UTF8String(): NativePointer | null;
  /** Exported member.*/
  writeToURLAtomicallyEncodingError(_url: NSURL | null, _useAuxiliaryFile: boolean, _enc: number, _error: NSError | null): boolean;
  /** Exported member.*/
  writeToFileAtomicallyEncodingError(_path: string | null, _useAuxiliaryFile: boolean, _enc: number, _error: NSError | null): boolean;
  /** Exported member.*/
  propertyList(): unknown;
  /** Exported member.*/
  propertyListFromStringsFileFormat(): Record<string, unknown> | null;
  /** Exported member.*/
  cString(): NativePointer | null;
  /** Exported member.*/
  lossyCString(): NativePointer | null;
  /** Exported member.*/
  cStringLength(): number;
  /** Exported member.*/
  getCString(_bytes: NativePointer | null): void;
  /** Exported member.*/
  getCStringMaxLength(_bytes: NativePointer | null, _maxLength: number): void;
  /** Exported member.*/
  getCStringMaxLengthRangeRemainingRange(_bytes: NativePointer | null, _maxLength: number, _aRange: NSRange, _leftoverRange: NSRangePointer): void;
  /** Exported member.*/
  writeToFileAtomically(_path: string | null, _useAuxiliaryFile: boolean): boolean;
  /** Exported member.*/
  writeToURLAtomically(_url: NSURL | null, _atomically: boolean): boolean;
  /** Exported member.*/
  getCharacters(_buffer: NativePointer | null): void;
  /** Exported member.*/
  sizeWithFont(_font: UIFont | null): CGSize;
  /** Exported member.*/
  sizeWithFontForWidthLineBreakMode(_font: UIFont | null, _width: number, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawAtPointWithFont(_point: CGPoint, _font: UIFont | null): CGSize;
  /** Exported member.*/
  drawAtPointForWidthWithFontLineBreakMode(_point: CGPoint, _width: number, _font: UIFont | null, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  sizeWithFontConstrainedToSize(_font: UIFont | null, _size: CGSize): CGSize;
  /** Exported member.*/
  sizeWithFontConstrainedToSizeLineBreakMode(_font: UIFont | null, _size: CGSize, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawInRectWithFont(_rect: CGRect, _font: UIFont | null): CGSize;
  /** Exported member.*/
  drawInRectWithFontLineBreakMode(_rect: CGRect, _font: UIFont | null, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawInRectWithFontLineBreakModeAlignment(_rect: CGRect, _font: UIFont | null, _lineBreakMode: number, _alignment: number): CGSize;
  /** Exported member.*/
  sizeWithFontMinFontSizeActualFontSizeForWidthLineBreakMode(_font: UIFont | null, _minFontSize: number, _actualFontSize: NativePointer | null, _width: number, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawAtPointForWidthWithFontFontSizeLineBreakModeBaselineAdjustment(_point: CGPoint, _width: number, _font: UIFont | null, _fontSize: number, _lineBreakMode: number, _baselineAdjustment: number): CGSize;
  /** Exported member.*/
  drawAtPointForWidthWithFontMinFontSizeActualFontSizeLineBreakModeBaselineAdjustment(_point: CGPoint, _width: number, _font: UIFont | null, _minFontSize: number, _actualFontSize: NativePointer | null, _lineBreakMode: number, _baselineAdjustment: number): CGSize;
  /** Exported member.*/
  sizeWithAttributes(_attrs: Record<string, unknown> | null): CGSize;
  /** Exported member.*/
  drawAtPointWithAttributes(_point: CGPoint, _attrs: Record<string, unknown> | null): void;
  /** Exported member.*/
  drawInRectWithAttributes(_rect: CGRect, _attrs: Record<string, unknown> | null): void;
  /** Exported member.*/
  size(): CGSize;
  /** Exported member.*/
  drawAtPoint(_point: CGPoint): void;
  /** Exported member.*/
  drawInRect(_rect: CGRect): void;
  /** Exported member.*/
  drawWithRectOptionsAttributesContext(_rect: CGRect, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): void;
  /** Exported member.*/
  boundingRectWithSizeOptionsAttributesContext(_size: CGSize, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): CGRect;
  /** Exported member.*/
  replaceCharactersInRangeWithString(_range: NSRange, _aString: string | null): void;
  /** Exported member.*/
  insertStringAtIndex(_aString: string | null, _loc: number): void;
  /** Exported member.*/
  deleteCharactersInRange(_range: NSRange): void;
  /** Exported member.*/
  appendString(_aString: string | null): void;
  /** Exported member.*/
  appendFormat(_format: string | null, _arguments: unknown[] | null): void;
  /** Exported member.*/
  setString(_aString: string | null): void;
  /** Exported member.*/
  initWithCapacity(_capacity: number): string | null;
  /** Exported member.*/
  replaceOccurrencesOfStringWithStringOptionsRange(_target: string | null, _replacement: string | null, _options: number, _searchRange: NSRange): number;
}
/** Native class object for {@link NSMutableString}.*/
interface NSMutableStringClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): string | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): string | null;
  /** Exported member.*/
  alloc(): string | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  pathWithComponents(_components: unknown[] | null): string | null;
  /** Exported member.*/
  defaultCStringEncoding(): number;
  /** Exported member.*/
  availableStringEncodings(): number;
  /** Exported member.*/
  localizedNameOfStringEncoding(_encoding: number): string | null;
  /** Exported member.*/
  string(): unknown;
  /** Exported member.*/
  stringWithString(_string: string | null): string | null;
  /** Exported member.*/
  stringWithCharactersLength(_characters: NativePointer | null, _length: number): string | null;
  /** Exported member.*/
  stringWithUTF8String(_nullTerminatedCString: NativePointer | null): string | null;
  /** Exported member.*/
  stringWithFormat(_format: string | null, _arguments: unknown[] | null): string | null;
  /** Exported member.*/
  localizedStringWithFormat(_format: string | null, _arguments: unknown[] | null): string | null;
  /** Exported member.*/
  stringWithCStringEncoding(_cString: NativePointer | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfURLEncoding(_url: NSURL | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfFileEncoding(_path: string | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfURLUsedEncoding(_url: NSURL | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfFileUsedEncoding(_path: string | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithCapacity(_capacity: number): unknown;
  /** Exported member.*/
  stringWithContentsOfFile(_path: string | null): unknown;
  /** Exported member.*/
  stringWithContentsOfURL(_url: NSURL | null): unknown;
  /** Exported member.*/
  stringWithContentsOfData(_data: NSData | null): unknown;
  /** Exported member.*/
  stringWithCStringLength(_bytes: NativePointer | null, _length: number): unknown;
  /** Exported member.*/
  stringWithCString(_bytes: NativePointer | null): unknown;
}
/** Host-injected native class object.*/
declare var NSMutableString: NSMutableStringClass;

/** Native instance exported as `NSMutableURLRequest`.
 */
interface NSMutableURLRequest {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  URL(): NSURL | null;
  /** Exported member.*/
  cachePolicy(): number;
  /** Exported member.*/
  timeoutInterval(): number;
  /** Exported member.*/
  mainDocumentURL(): NSURL | null;
  /** Exported member.*/
  networkServiceType(): number;
  /** Exported member.*/
  allowsCellularAccess(): boolean;
  /** Exported member.*/
  setURL(_URL: NSURL | null): void;
  /** Exported member.*/
  setCachePolicy(_policy: number): void;
  /** Exported member.*/
  setTimeoutInterval(_seconds: number): void;
  /** Exported member.*/
  setMainDocumentURL(_URL: NSURL | null): void;
  /** Exported member.*/
  setNetworkServiceType(_networkServiceType: number): void;
  /** Exported member.*/
  setAllowsCellularAccess(_allow: boolean): void;
  /** Exported member.*/
  HTTPMethod(): string | null;
  /** Exported member.*/
  allHTTPHeaderFields(): Record<string, unknown> | null;
  /** Exported member.*/
  valueForHTTPHeaderField(_field: string | null): string | null;
  /** Exported member.*/
  HTTPBody(): NSData | null;
  /** Exported member.*/
  HTTPBodyStream(): NSInputStream | null;
  /** Exported member.*/
  HTTPShouldHandleCookies(): boolean;
  /** Exported member.*/
  HTTPShouldUsePipelining(): boolean;
  /** Exported member.*/
  setHTTPMethod(_method: string | null): void;
  /** Exported member.*/
  setAllHTTPHeaderFields(_headerFields: Record<string, unknown> | null): void;
  /** Exported member.*/
  setValueForHTTPHeaderField(_value: string | null, _field: string | null): void;
  /** Exported member.*/
  addValueForHTTPHeaderField(_value: string | null, _field: string | null): void;
  /** Exported member.*/
  setHTTPBody(_data: NSData | null): void;
  /** Exported member.*/
  setHTTPBodyStream(_inputStream: NSInputStream | null): void;
  /** Exported member.*/
  setHTTPShouldHandleCookies(_should: boolean): void;
  /** Exported member.*/
  setHTTPShouldUsePipelining(_shouldUsePipelining: boolean): void;
}
/** Native class object for {@link NSMutableURLRequest}.*/
interface NSMutableURLRequestClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSMutableURLRequest | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSMutableURLRequest | null;
  /** Exported member.*/
  alloc(): NSMutableURLRequest | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  requestWithURL(_URL: NSURL | null): unknown;
  /** Exported member.*/
  supportsSecureCoding(): boolean;
  /** Exported member.*/
  requestWithURLCachePolicyTimeoutInterval(_URL: NSURL | null, _cachePolicy: number, _timeoutInterval: number): unknown;
}
/** Host-injected native class object.*/
declare var NSMutableURLRequest: NSMutableURLRequestClass;

/** Native instance exported as `NSNotification`.
 */
interface NSNotification {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  readonly name: string | null;
  /** Exported member.*/
  readonly object: unknown;
  /** Exported member.*/
  readonly userInfo: Record<string, unknown> | null;
  /** Exported member.*/
  initWithNameObjectUserInfo(_name: string | null, _object: unknown, _userInfo: Record<string, unknown> | null): NSNotification | null;
}
/** Native class object for {@link NSNotification}.*/
interface NSNotificationClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSNotification | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSNotification | null;
  /** Exported member.*/
  alloc(): NSNotification | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  notificationWithNameObject(_aName: string | null, _anObject: unknown): NSNotification | null;
  /** Exported member.*/
  notificationWithNameObjectUserInfo(_aName: string | null, _anObject: unknown, _aUserInfo: Record<string, unknown> | null): NSNotification | null;
}
/** Host-injected native class object.*/
declare var NSNotification: NSNotificationClass;

/** Native instance exported as `NSNotificationCenter`.
 */
interface NSNotificationCenter {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  init(): NSNotificationCenter | null;
  /** Exported member.*/
  addObserverSelectorName(_observer: unknown, _aSelector: string | null, _aName: string | null): void;
  /** Exported member.*/
  postNotification(_notification: NSNotification | null): void;
  /** Exported member.*/
  postNotificationNameObject(_aName: string | null, _anObject: unknown): void;
  /** Exported member.*/
  postNotificationNameObjectUserInfo(_aName: string | null, _anObject: unknown, _aUserInfo: Record<string, unknown> | null): void;
  /** Exported member.*/
  removeObserver(_observer: unknown): void;
  /** Exported member.*/
  removeObserverName(_observer: unknown, _aName: string | null): void;
}
/** Native class object for {@link NSNotificationCenter}.*/
interface NSNotificationCenterClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSNotificationCenter | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSNotificationCenter | null;
  /** Exported member.*/
  alloc(): NSNotificationCenter | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  defaultCenter(): NSNotificationCenter | null;
}
/** Host-injected native class object.*/
declare var NSNotificationCenter: NSNotificationCenterClass;

/** Native instance exported as `NSNull`.
 */
interface NSNull {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
}
/** Native class object for {@link NSNull}.*/
interface NSNullClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSNull | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSNull | null;
  /** Exported member.*/
  alloc(): NSNull | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  null(): NSNull | null;
}
/** Host-injected native class object.*/
declare var NSNull: NSNullClass;

/** Native instance exported as `NSNumber`.
 */
interface NSNumber {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  getValue(_value: NativePointer | null): void;
  /** Exported member.*/
  objCType(): NativePointer | null;
  /** Exported member.*/
  nonretainedObjectValue(): unknown;
  /** Exported member.*/
  pointerValue(): NativePointer | null;
  /** Exported member.*/
  isEqualToValue(_value: NSValue | null): boolean;
  /** Exported member.*/
  rangeValue(): NSRange;
  /** Exported member.*/
  CGPointValue(): CGPoint;
  /** Exported member.*/
  CGSizeValue(): CGSize;
  /** Exported member.*/
  CGRectValue(): CGRect;
  /** Exported member.*/
  CGAffineTransformValue(): CGAffineTransform;
  /** Exported member.*/
  UIEdgeInsetsValue(): UIEdgeInsets;
  /** Exported member.*/
  UIOffsetValue(): UIOffset;
  /** Exported member.*/
  CATransform3DValue(): CATransform3D;
  /** Exported member.*/
  charValue(): number;
  /** Exported member.*/
  unsignedCharValue(): number;
  /** Exported member.*/
  shortValue(): number;
  /** Exported member.*/
  unsignedShortValue(): number;
  /** Exported member.*/
  intValue(): number;
  /** Exported member.*/
  unsignedIntValue(): number;
  /** Exported member.*/
  longValue(): number;
  /** Exported member.*/
  unsignedLongValue(): number;
  /** Exported member.*/
  longLongValue(): number;
  /** Exported member.*/
  unsignedLongLongValue(): number;
  /** Exported member.*/
  floatValue(): number;
  /** Exported member.*/
  doubleValue(): number;
  /** Exported member.*/
  boolValue(): boolean;
  /** Exported member.*/
  integerValue(): number;
  /** Exported member.*/
  unsignedIntegerValue(): number;
  /** Exported member.*/
  stringValue(): string | null;
  /** Exported member.*/
  compare(_otherNumber: number | null): number;
  /** Exported member.*/
  isEqualToNumber(_number: number | null): boolean;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
}
/** Native class object for {@link NSNumber}.*/
interface NSNumberClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): number | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): number | null;
  /** Exported member.*/
  alloc(): number | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  valueWithBytesObjCType(_value: NativePointer | null, _type: NativePointer | null): NSValue | null;
  /** Exported member.*/
  valueWithObjCType(_value: NativePointer | null, _type: NativePointer | null): NSValue | null;
  /** Exported member.*/
  valueWithNonretainedObject(_anObject: unknown): NSValue | null;
  /** Exported member.*/
  valueWithPointer(_pointer: NativePointer | null): NSValue | null;
  /** Exported member.*/
  valueWithRange(_range: NSRange): NSValue | null;
  /** Exported member.*/
  valueWithCGPoint(_point: CGPoint): NSValue | null;
  /** Exported member.*/
  valueWithCGSize(_size: CGSize): NSValue | null;
  /** Exported member.*/
  valueWithCGRect(_rect: CGRect): NSValue | null;
  /** Exported member.*/
  valueWithCGAffineTransform(_transform: CGAffineTransform): NSValue | null;
  /** Exported member.*/
  valueWithUIEdgeInsets(_insets: UIEdgeInsets): NSValue | null;
  /** Exported member.*/
  valueWithUIOffset(_insets: UIOffset): NSValue | null;
  /** Exported member.*/
  valueWithCATransform3D(_t: CATransform3D): NSValue | null;
  /** Exported member.*/
  numberWithChar(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedChar(_value: number): number | null;
  /** Exported member.*/
  numberWithShort(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedShort(_value: number): number | null;
  /** Exported member.*/
  numberWithInt(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedInt(_value: number): number | null;
  /** Exported member.*/
  numberWithLong(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedLong(_value: number): number | null;
  /** Exported member.*/
  numberWithLongLong(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedLongLong(_value: number): number | null;
  /** Exported member.*/
  numberWithFloat(_value: number): number | null;
  /** Exported member.*/
  numberWithDouble(_value: number): number | null;
  /** Exported member.*/
  numberWithBool(_value: boolean): number | null;
  /** Exported member.*/
  numberWithInteger(_value: number): number | null;
  /** Exported member.*/
  numberWithUnsignedInteger(_value: number): number | null;
}
/** Host-injected native class object.*/
declare var NSNumber: NSNumberClass;

/** Native instance exported as `NSNumberFormatter`.
 */
interface NSNumberFormatter {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  stringForObjectValue(_obj: unknown): string | null;
  /** Exported member.*/
  attributedStringForObjectValueWithDefaultAttributes(_obj: unknown, _attrs: Record<string, unknown> | null): NSAttributedString | null;
  /** Exported member.*/
  editingStringForObjectValue(_obj: unknown): string | null;
  /** Exported member.*/
  getObjectValueForStringErrorDescription(_obj: unknown, _string: string | null, _error: string | null): boolean;
  /** Exported member.*/
  isPartialStringValidNewEditingStringErrorDescription(_partialString: string | null, _newString: string | null, _error: string | null): boolean;
  /** Exported member.*/
  isPartialStringValidProposedSelectedRangeOriginalStringOriginalSelectedRangeErrorDescription(_partialStringPtr: string | null, _proposedSelRangePtr: NSRangePointer, _origString: string | null, _origSelRange: NSRange, _error: string | null): boolean;
  /** Exported member.*/
  getObjectValueForStringRangeError(_obj: unknown, _string: string | null, _rangep: NativePointer | null, _error: NSError | null): boolean;
  /** Exported member.*/
  stringFromNumber(_number: number | null): string | null;
  /** Exported member.*/
  numberFromString(_string: string | null): number | null;
  /** Exported member.*/
  numberStyle(): number;
  /** Exported member.*/
  setNumberStyle(_style: number): void;
  /** Exported member.*/
  locale(): NSLocale | null;
  /** Exported member.*/
  setLocale(_locale: NSLocale | null): void;
  /** Exported member.*/
  generatesDecimalNumbers(): boolean;
  /** Exported member.*/
  setGeneratesDecimalNumbers(_b: boolean): void;
  /** Exported member.*/
  formatterBehavior(): number;
  /** Exported member.*/
  setFormatterBehavior(_behavior: number): void;
  /** Exported member.*/
  negativeFormat(): string | null;
  /** Exported member.*/
  setNegativeFormat(_format: string | null): void;
  /** Exported member.*/
  textAttributesForNegativeValues(): Record<string, unknown> | null;
  /** Exported member.*/
  setTextAttributesForNegativeValues(_newAttributes: Record<string, unknown> | null): void;
  /** Exported member.*/
  positiveFormat(): string | null;
  /** Exported member.*/
  setPositiveFormat(_format: string | null): void;
  /** Exported member.*/
  textAttributesForPositiveValues(): Record<string, unknown> | null;
  /** Exported member.*/
  setTextAttributesForPositiveValues(_newAttributes: Record<string, unknown> | null): void;
  /** Exported member.*/
  allowsFloats(): boolean;
  /** Exported member.*/
  setAllowsFloats(_flag: boolean): void;
  /** Exported member.*/
  decimalSeparator(): string | null;
  /** Exported member.*/
  setDecimalSeparator(_string: string | null): void;
  /** Exported member.*/
  alwaysShowsDecimalSeparator(): boolean;
  /** Exported member.*/
  setAlwaysShowsDecimalSeparator(_b: boolean): void;
  /** Exported member.*/
  currencyDecimalSeparator(): string | null;
  /** Exported member.*/
  setCurrencyDecimalSeparator(_string: string | null): void;
  /** Exported member.*/
  usesGroupingSeparator(): boolean;
  /** Exported member.*/
  setUsesGroupingSeparator(_b: boolean): void;
  /** Exported member.*/
  groupingSeparator(): string | null;
  /** Exported member.*/
  setGroupingSeparator(_string: string | null): void;
  /** Exported member.*/
  zeroSymbol(): string | null;
  /** Exported member.*/
  setZeroSymbol(_string: string | null): void;
  /** Exported member.*/
  textAttributesForZero(): Record<string, unknown> | null;
  /** Exported member.*/
  setTextAttributesForZero(_newAttributes: Record<string, unknown> | null): void;
  /** Exported member.*/
  nilSymbol(): string | null;
  /** Exported member.*/
  setNilSymbol(_string: string | null): void;
  /** Exported member.*/
  textAttributesForNil(): Record<string, unknown> | null;
  /** Exported member.*/
  setTextAttributesForNil(_newAttributes: Record<string, unknown> | null): void;
  /** Exported member.*/
  notANumberSymbol(): string | null;
  /** Exported member.*/
  setNotANumberSymbol(_string: string | null): void;
  /** Exported member.*/
  textAttributesForNotANumber(): Record<string, unknown> | null;
  /** Exported member.*/
  setTextAttributesForNotANumber(_newAttributes: Record<string, unknown> | null): void;
  /** Exported member.*/
  positiveInfinitySymbol(): string | null;
  /** Exported member.*/
  setPositiveInfinitySymbol(_string: string | null): void;
  /** Exported member.*/
  textAttributesForPositiveInfinity(): Record<string, unknown> | null;
  /** Exported member.*/
  setTextAttributesForPositiveInfinity(_newAttributes: Record<string, unknown> | null): void;
  /** Exported member.*/
  negativeInfinitySymbol(): string | null;
  /** Exported member.*/
  setNegativeInfinitySymbol(_string: string | null): void;
  /** Exported member.*/
  textAttributesForNegativeInfinity(): Record<string, unknown> | null;
  /** Exported member.*/
  setTextAttributesForNegativeInfinity(_newAttributes: Record<string, unknown> | null): void;
  /** Exported member.*/
  positivePrefix(): string | null;
  /** Exported member.*/
  setPositivePrefix(_string: string | null): void;
  /** Exported member.*/
  positiveSuffix(): string | null;
  /** Exported member.*/
  setPositiveSuffix(_string: string | null): void;
  /** Exported member.*/
  negativePrefix(): string | null;
  /** Exported member.*/
  setNegativePrefix(_string: string | null): void;
  /** Exported member.*/
  negativeSuffix(): string | null;
  /** Exported member.*/
  setNegativeSuffix(_string: string | null): void;
  /** Exported member.*/
  currencyCode(): string | null;
  /** Exported member.*/
  setCurrencyCode(_string: string | null): void;
  /** Exported member.*/
  currencySymbol(): string | null;
  /** Exported member.*/
  setCurrencySymbol(_string: string | null): void;
  /** Exported member.*/
  internationalCurrencySymbol(): string | null;
  /** Exported member.*/
  setInternationalCurrencySymbol(_string: string | null): void;
  /** Exported member.*/
  percentSymbol(): string | null;
  /** Exported member.*/
  setPercentSymbol(_string: string | null): void;
  /** Exported member.*/
  perMillSymbol(): string | null;
  /** Exported member.*/
  setPerMillSymbol(_string: string | null): void;
  /** Exported member.*/
  minusSign(): string | null;
  /** Exported member.*/
  setMinusSign(_string: string | null): void;
  /** Exported member.*/
  plusSign(): string | null;
  /** Exported member.*/
  setPlusSign(_string: string | null): void;
  /** Exported member.*/
  exponentSymbol(): string | null;
  /** Exported member.*/
  setExponentSymbol(_string: string | null): void;
  /** Exported member.*/
  groupingSize(): number;
  /** Exported member.*/
  setGroupingSize(_number: number): void;
  /** Exported member.*/
  secondaryGroupingSize(): number;
  /** Exported member.*/
  setSecondaryGroupingSize(_number: number): void;
  /** Exported member.*/
  multiplier(): number | null;
  /** Exported member.*/
  setMultiplier(_number: number | null): void;
  /** Exported member.*/
  formatWidth(): number;
  /** Exported member.*/
  setFormatWidth(_number: number): void;
  /** Exported member.*/
  paddingCharacter(): string | null;
  /** Exported member.*/
  setPaddingCharacter(_string: string | null): void;
  /** Exported member.*/
  paddingPosition(): number;
  /** Exported member.*/
  setPaddingPosition(_position: number): void;
  /** Exported member.*/
  roundingMode(): number;
  /** Exported member.*/
  setRoundingMode(_mode: number): void;
  /** Exported member.*/
  roundingIncrement(): number | null;
  /** Exported member.*/
  setRoundingIncrement(_number: number | null): void;
  /** Exported member.*/
  minimumIntegerDigits(): number;
  /** Exported member.*/
  setMinimumIntegerDigits(_number: number): void;
  /** Exported member.*/
  maximumIntegerDigits(): number;
  /** Exported member.*/
  setMaximumIntegerDigits(_number: number): void;
  /** Exported member.*/
  minimumFractionDigits(): number;
  /** Exported member.*/
  setMinimumFractionDigits(_number: number): void;
  /** Exported member.*/
  maximumFractionDigits(): number;
  /** Exported member.*/
  setMaximumFractionDigits(_number: number): void;
  /** Exported member.*/
  minimum(): number | null;
  /** Exported member.*/
  setMinimum(_number: number | null): void;
  /** Exported member.*/
  maximum(): number | null;
  /** Exported member.*/
  setMaximum(_number: number | null): void;
  /** Exported member.*/
  currencyGroupingSeparator(): string | null;
  /** Exported member.*/
  setCurrencyGroupingSeparator(_string: string | null): void;
  /** Exported member.*/
  isLenient(): boolean;
  /** Exported member.*/
  setLenient(_b: boolean): void;
  /** Exported member.*/
  usesSignificantDigits(): boolean;
  /** Exported member.*/
  setUsesSignificantDigits(_b: boolean): void;
  /** Exported member.*/
  minimumSignificantDigits(): number;
  /** Exported member.*/
  setMinimumSignificantDigits(_number: number): void;
  /** Exported member.*/
  maximumSignificantDigits(): number;
  /** Exported member.*/
  setMaximumSignificantDigits(_number: number): void;
  /** Exported member.*/
  isPartialStringValidationEnabled(): boolean;
  /** Exported member.*/
  setPartialStringValidationEnabled(_b: boolean): void;
}
/** Native class object for {@link NSNumberFormatter}.*/
interface NSNumberFormatterClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSNumberFormatter | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSNumberFormatter | null;
  /** Exported member.*/
  alloc(): NSNumberFormatter | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  localizedStringFromNumberNumberStyle(_num: number | null, _nstyle: number): string | null;
  /** Exported member.*/
  defaultFormatterBehavior(): number;
  /** Exported member.*/
  setDefaultFormatterBehavior(_behavior: number): void;
}
/** Host-injected native class object.*/
declare var NSNumberFormatter: NSNumberFormatterClass;

/** Native instance exported as `NSOperation`.
 */
interface NSOperation {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  start(): void;
  /** Exported member.*/
  main(): void;
  /** Exported member.*/
  isCancelled(): boolean;
  /** Exported member.*/
  cancel(): void;
  /** Exported member.*/
  isExecuting(): boolean;
  /** Exported member.*/
  isFinished(): boolean;
  /** Exported member.*/
  isConcurrent(): boolean;
  /** Exported member.*/
  isReady(): boolean;
  /** Exported member.*/
  addDependency(_op: NSOperation | null): void;
  /** Exported member.*/
  removeDependency(_op: NSOperation | null): void;
  /** Exported member.*/
  dependencies(): unknown[] | null;
  /** Exported member.*/
  queuePriority(): number;
  /** Exported member.*/
  setQueuePriority(_p: number): void;
  /** Exported member.*/
  completionBlock(): NativeBlock | null;
  /** Exported member.*/
  setCompletionBlock(_block: unknown): void;
  /** Exported member.*/
  waitUntilFinished(): void;
  /** Exported member.*/
  threadPriority(): number;
  /** Exported member.*/
  setThreadPriority(_p: number): void;
}
/** Native class object for {@link NSOperation}.*/
interface NSOperationClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSOperation | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSOperation | null;
  /** Exported member.*/
  alloc(): NSOperation | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
}
/** Host-injected native class object.*/
declare var NSOperation: NSOperationClass;

/** Native instance exported as `NSOperationQueue`.
 */
interface NSOperationQueue {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  addOperation(_op: NSOperation | null): void;
  /** Exported member.*/
  addOperationsWaitUntilFinished(_ops: unknown[] | null, _wait: boolean): void;
  /** Exported member.*/
  addOperationWithBlock(_block: unknown): void;
  /** Exported member.*/
  operations(): unknown[] | null;
  /** Exported member.*/
  operationCount(): number;
  /** Exported member.*/
  maxConcurrentOperationCount(): number;
  /** Exported member.*/
  setMaxConcurrentOperationCount(_cnt: number): void;
  /** Exported member.*/
  setSuspended(_b: boolean): void;
  /** Exported member.*/
  isSuspended(): boolean;
  /** Exported member.*/
  setName(_n: string | null): void;
  /** Exported member.*/
  name(): string | null;
  /** Exported member.*/
  cancelAllOperations(): void;
  /** Exported member.*/
  waitUntilAllOperationsAreFinished(): void;
}
/** Native class object for {@link NSOperationQueue}.*/
interface NSOperationQueueClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSOperationQueue | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSOperationQueue | null;
  /** Exported member.*/
  alloc(): NSOperationQueue | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  currentQueue(): unknown;
  /** Exported member.*/
  mainQueue(): unknown;
}
/** Host-injected native class object.*/
declare var NSOperationQueue: NSOperationQueueClass;

/** Native instance exported as `NSOrderedSet`.
 */
interface NSOrderedSet {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  sortedArrayUsingDescriptors(_sortDescriptors: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  valueForKey(_key: string | null): unknown;
  /** Exported member.*/
  setValueForKey(_value: unknown, _key: string | null): void;
  /** Exported member.*/
  addObserverForKeyPathOptionsContext(_observer: unknown, _keyPath: string | null, _options: number, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPathContext(_observer: unknown, _keyPath: string | null, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPath(_observer: unknown, _keyPath: string | null): void;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  objectAtIndex(_idx: number): unknown;
  /** Exported member.*/
  indexOfObject(_object: unknown): number;
  /** Exported member.*/
  getObjectsRange(_objects: NativePointer, _range: NSRange): void;
  /** Exported member.*/
  objectsAtIndexes(_indexes: NSIndexSet | null): unknown[] | null;
  /** Exported member.*/
  firstObject(): unknown;
  /** Exported member.*/
  lastObject(): unknown;
  /** Exported member.*/
  isEqualToOrderedSet(_other: NSOrderedSet | null): boolean;
  /** Exported member.*/
  containsObject(_object: unknown): boolean;
  /** Exported member.*/
  intersectsOrderedSet(_other: NSOrderedSet | null): boolean;
  /** Exported member.*/
  intersectsSet(_set: NSSet | null): boolean;
  /** Exported member.*/
  isSubsetOfOrderedSet(_other: NSOrderedSet | null): boolean;
  /** Exported member.*/
  isSubsetOfSet(_set: NSSet | null): boolean;
  /** Exported member.*/
  objectAtIndexedSubscript(_idx: number): unknown;
  /** Exported member.*/
  objectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  reverseObjectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  reversedOrderedSet(): NSOrderedSet | null;
  /** Exported member.*/
  array(): unknown[] | null;
  /** Exported member.*/
  set(): NSSet | null;
  /** Exported member.*/
  enumerateObjectsUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateObjectsWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateObjectsAtIndexesOptionsUsingBlock(_s: NSIndexSet | null, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  indexOfObjectPassingTest(_predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexOfObjectWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexOfObjectAtIndexesOptionsPassingTest(_s: NSIndexSet | null, _opts: number, _predicate: NativeBlock | null): number;
  /** Exported member.*/
  indexesOfObjectsPassingTest(_predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesOfObjectsWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexesOfObjectsAtIndexesOptionsPassingTest(_s: NSIndexSet | null, _opts: number, _predicate: NativeBlock | null): NSIndexSet | null;
  /** Exported member.*/
  indexOfObjectInSortedRangeOptionsUsingComparator(_object: unknown, _range: NSRange, _opts: number, _cmp: NSComparator): number;
  /** Exported member.*/
  sortedArrayUsingComparator(_cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  sortedArrayWithOptionsUsingComparator(_opts: number, _cmptr: NSComparator): unknown[] | null;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
  /** Exported member.*/
  descriptionWithLocaleIndent(_locale: unknown, _level: number): string | null;
  /** Exported member.*/
  filteredOrderedSetUsingPredicate(_p: NSPredicate | null): NSOrderedSet | null;
}
/** Native class object for {@link NSOrderedSet}.*/
interface NSOrderedSetClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSOrderedSet | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSOrderedSet | null;
  /** Exported member.*/
  alloc(): NSOrderedSet | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  orderedSet(): NSOrderedSet | null;
  /** Exported member.*/
  orderedSetWithObject(_object: unknown): NSOrderedSet | null;
  /** Exported member.*/
  orderedSetWithObjectsCount(_objects: NativePointer, _cnt: number): NSOrderedSet | null;
  /** Exported member.*/
  orderedSetWithObjects(_firstObj: unknown): NSOrderedSet | null;
  /** Exported member.*/
  orderedSetWithOrderedSet(_set: NSOrderedSet | null): NSOrderedSet | null;
  /** Exported member.*/
  orderedSetWithOrderedSetRangeCopyItems(_set: NSOrderedSet | null, _range: NSRange, _flag: boolean): NSOrderedSet | null;
  /** Exported member.*/
  orderedSetWithArray(_array: unknown[] | null): NSOrderedSet | null;
  /** Exported member.*/
  orderedSetWithArrayRangeCopyItems(_array: unknown[] | null, _range: NSRange, _flag: boolean): NSOrderedSet | null;
  /** Exported member.*/
  orderedSetWithSet(_set: NSSet | null): NSOrderedSet | null;
  /** Exported member.*/
  orderedSetWithSetCopyItems(_set: NSSet | null, _flag: boolean): NSOrderedSet | null;
}
/** Host-injected native class object.*/
declare var NSOrderedSet: NSOrderedSetClass;

/** Native instance exported as `NSPointerArray`.
 */
interface NSPointerArray {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  pointerFunctions(): NSPointerFunctions | null;
  /** Exported member.*/
  pointerAtIndex(_index: number): NativePointer | null;
  /** Exported member.*/
  addPointer(_pointer: NativePointer | null): void;
  /** Exported member.*/
  removePointerAtIndex(_index: number): void;
  /** Exported member.*/
  insertPointerAtIndex(_item: NativePointer | null, _index: number): void;
  /** Exported member.*/
  replacePointerAtIndexWithPointer(_index: number, _item: NativePointer | null): void;
  /** Exported member.*/
  compact(): void;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  setCount(_count: number): void;
  /** Exported member.*/
  allObjects(): unknown[] | null;
}
/** Native class object for {@link NSPointerArray}.*/
interface NSPointerArrayClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSPointerArray | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSPointerArray | null;
  /** Exported member.*/
  alloc(): NSPointerArray | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  strongObjectsPointerArray(): unknown;
  /** Exported member.*/
  weakObjectsPointerArray(): unknown;
}
/** Host-injected native class object.*/
declare var NSPointerArray: NSPointerArrayClass;

/** Native instance exported as `NSPredicate`.
 */
interface NSPredicate {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  predicateFormat(): string | null;
  /** Exported member.*/
  predicateWithSubstitutionVariables(_variables: Record<string, unknown> | null): NSPredicate | null;
  /** Exported member.*/
  evaluateWithObject(_object: unknown): boolean;
  /** Exported member.*/
  evaluateWithObjectSubstitutionVariables(_object: unknown, _bindings: Record<string, unknown> | null): boolean;
  /** Exported member.*/
  allowEvaluation(): void;
}
/** Native class object for {@link NSPredicate}.*/
interface NSPredicateClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSPredicate | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSPredicate | null;
  /** Exported member.*/
  alloc(): NSPredicate | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  predicateWithFormatArgumentArray(_predicateFormat: string | null, _arguments: unknown[] | null): NSPredicate | null;
  /** Exported member.*/
  predicateWithFormat(_predicateFormat: string | null): NSPredicate | null;
  /** Exported member.*/
  predicateWithFormatArguments(_predicateFormat: string | null, _argList: va_list): NSPredicate | null;
  /** Exported member.*/
  predicateFromMetadataQueryString(_queryString: string | null): NSPredicate | null;
  /** Exported member.*/
  predicateWithValue(_value: boolean): NSPredicate | null;
  /** Exported member.*/
  predicateWithBlock(_block: NativeBlock | null): NSPredicate | null;
}
/** Host-injected native class object.*/
declare var NSPredicate: NSPredicateClass;

/** Native instance exported as `NSScanner`.
 */
interface NSScanner {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  string(): string | null;
  /** Exported member.*/
  scanLocation(): number;
  /** Exported member.*/
  setScanLocation(_pos: number): void;
  /** Exported member.*/
  setCharactersToBeSkipped(_set: NSCharacterSet | null): void;
  /** Exported member.*/
  setCaseSensitive(_flag: boolean): void;
  /** Exported member.*/
  setLocale(_locale: unknown): void;
  /** Exported member.*/
  charactersToBeSkipped(): NSCharacterSet | null;
  /** Exported member.*/
  caseSensitive(): boolean;
  /** Exported member.*/
  locale(): unknown;
  /** Exported member.*/
  scanInt(_result: NativePointer | null): boolean;
  /** Exported member.*/
  scanInteger(_result: NativePointer | null): boolean;
  /** Exported member.*/
  scanLongLong(_result: NativePointer | null): boolean;
  /** Exported member.*/
  scanUnsignedLongLong(_result: NativePointer | null): boolean;
  /** Exported member.*/
  scanFloat(_result: NativePointer | null): boolean;
  /** Exported member.*/
  scanDouble(_result: NativePointer | null): boolean;
  /** Exported member.*/
  scanHexInt(_result: NativePointer | null): boolean;
  /** Exported member.*/
  scanHexLongLong(_result: NativePointer | null): boolean;
  /** Exported member.*/
  scanHexFloat(_result: NativePointer | null): boolean;
  /** Exported member.*/
  scanHexDouble(_result: NativePointer | null): boolean;
  /** Exported member.*/
  scanStringIntoString(_string: string | null, _result: string | null): boolean;
  /** Exported member.*/
  scanCharactersFromSetIntoString(_set: NSCharacterSet | null, _result: string | null): boolean;
  /** Exported member.*/
  scanUpToStringIntoString(_string: string | null, _result: string | null): boolean;
  /** Exported member.*/
  scanUpToCharactersFromSetIntoString(_set: NSCharacterSet | null, _result: string | null): boolean;
  /** Exported member.*/
  isAtEnd(): boolean;
  /** Exported member.*/
  initWithString(_string: string | null): NSScanner | null;
}
/** Native class object for {@link NSScanner}.*/
interface NSScannerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSScanner | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSScanner | null;
  /** Exported member.*/
  alloc(): NSScanner | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  scannerWithString(_string: string | null): unknown;
  /** Exported member.*/
  localizedScannerWithString(_string: string | null): unknown;
}
/** Host-injected native class object.*/
declare var NSScanner: NSScannerClass;

/** Native instance exported as `NSSet`.
 */
interface NSSet {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  sortedArrayUsingDescriptors(_sortDescriptors: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  valueForKey(_key: string | null): unknown;
  /** Exported member.*/
  setValueForKey(_value: unknown, _key: string | null): void;
  /** Exported member.*/
  addObserverForKeyPathOptionsContext(_observer: unknown, _keyPath: string | null, _options: number, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPathContext(_observer: unknown, _keyPath: string | null, _context: NativePointer | null): void;
  /** Exported member.*/
  removeObserverForKeyPath(_observer: unknown, _keyPath: string | null): void;
  /** Exported member.*/
  filteredSetUsingPredicate(_predicate: NSPredicate | null): NSSet | null;
  /** Exported member.*/
  count(): number;
  /** Exported member.*/
  member(_object: unknown): unknown;
  /** Exported member.*/
  objectEnumerator(): NSEnumerator | null;
  /** Exported member.*/
  allObjects(): unknown[] | null;
  /** Exported member.*/
  anyObject(): unknown;
  /** Exported member.*/
  containsObject(_anObject: unknown): boolean;
  /** Exported member.*/
  descriptionWithLocale(_locale: unknown): string | null;
  /** Exported member.*/
  intersectsSet(_otherSet: NSSet | null): boolean;
  /** Exported member.*/
  isEqualToSet(_otherSet: NSSet | null): boolean;
  /** Exported member.*/
  isSubsetOfSet(_otherSet: NSSet | null): boolean;
  /** Exported member.*/
  makeObjectsPerformSelector(_aSelector: NativeSelector): void;
  /** Exported member.*/
  makeObjectsPerformSelectorWithObject(_aSelector: NativeSelector, _argument: unknown): void;
  /** Exported member.*/
  setByAddingObject(_anObject: unknown): NSSet | null;
  /** Exported member.*/
  setByAddingObjectsFromSet(_other: NSSet | null): NSSet | null;
  /** Exported member.*/
  setByAddingObjectsFromArray(_other: unknown[] | null): NSSet | null;
  /** Exported member.*/
  enumerateObjectsUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateObjectsWithOptionsUsingBlock(_opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  objectsPassingTest(_predicate: NativeBlock | null): NSSet | null;
  /** Exported member.*/
  objectsWithOptionsPassingTest(_opts: number, _predicate: NativeBlock | null): NSSet | null;
}
/** Native class object for {@link NSSet}.*/
interface NSSetClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSSet | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSSet | null;
  /** Exported member.*/
  alloc(): NSSet | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  set(): NSSet | null;
  /** Exported member.*/
  setWithObject(_object: unknown): NSSet | null;
  /** Exported member.*/
  setWithObjectsCount(_objects: NativePointer, _cnt: number): NSSet | null;
  /** Exported member.*/
  setWithObjects(_firstObj: unknown): NSSet | null;
  /** Exported member.*/
  setWithSet(_set: NSSet | null): NSSet | null;
  /** Exported member.*/
  setWithArray(_array: unknown[] | null): NSSet | null;
}
/** Host-injected native class object.*/
declare var NSSet: NSSetClass;

/** Native instance exported as `NSSimpleCString`.
 */
interface NSSimpleCString {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  stringByAddingPercentEncodingWithAllowedCharacters(_allowedCharacters: NSCharacterSet | null): string | null;
  /** Exported member.*/
  stringByRemovingPercentEncoding(): string | null;
  /** Exported member.*/
  stringByAddingPercentEscapesUsingEncoding(_enc: number): string | null;
  /** Exported member.*/
  stringByReplacingPercentEscapesUsingEncoding(_enc: number): string | null;
  /** Exported member.*/
  linguisticTagsInRangeSchemeOptionsOrthographyTokenRanges(_range: NSRange, _tagScheme: string | null, _opts: number, _orthography: NSOrthography | null, _tokenRanges: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  enumerateLinguisticTagsInRangeSchemeOptionsOrthographyUsingBlock(_range: NSRange, _tagScheme: string | null, _opts: number, _orthography: NSOrthography | null, _block: NativeBlock | null): void;
  /** Exported member.*/
  pathComponents(): unknown[] | null;
  /** Exported member.*/
  isAbsolutePath(): boolean;
  /** Exported member.*/
  lastPathComponent(): string | null;
  /** Exported member.*/
  stringByDeletingLastPathComponent(): string | null;
  /** Exported member.*/
  stringByAppendingPathComponent(_str: string | null): string | null;
  /** Exported member.*/
  pathExtension(): string | null;
  /** Exported member.*/
  stringByDeletingPathExtension(): string | null;
  /** Exported member.*/
  stringByAppendingPathExtension(_str: string | null): string | null;
  /** Exported member.*/
  stringByAbbreviatingWithTildeInPath(): string | null;
  /** Exported member.*/
  stringByExpandingTildeInPath(): string | null;
  /** Exported member.*/
  stringByStandardizingPath(): string | null;
  /** Exported member.*/
  stringByResolvingSymlinksInPath(): string | null;
  /** Exported member.*/
  stringsByAppendingPaths(_paths: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  completePathIntoStringCaseSensitiveMatchesIntoArrayFilterTypes(_outputName: string | null, _flag: boolean, _outputArray: unknown[] | null, _filterTypes: unknown[] | null): number;
  /** Exported member.*/
  fileSystemRepresentation(): NativePointer | null;
  /** Exported member.*/
  getFileSystemRepresentationMaxLength(_cname: NativePointer | null, _max: number): boolean;
  /** Exported member.*/
  length(): number;
  /** Exported member.*/
  characterAtIndex(_index: number): number;
  /** Exported member.*/
  getCharactersRange(_buffer: NativePointer | null, _aRange: NSRange): void;
  /** Exported member.*/
  substringFromIndex(_from: number): string | null;
  /** Exported member.*/
  substringToIndex(_to: number): string | null;
  /** Exported member.*/
  substringWithRange(_range: NSRange): string | null;
  /** Exported member.*/
  compare(_string: string | null): number;
  /** Exported member.*/
  compareOptions(_string: string | null, _mask: number): number;
  /** Exported member.*/
  compareOptionsRange(_string: string | null, _mask: number, _compareRange: NSRange): number;
  /** Exported member.*/
  compareOptionsRangeLocale(_string: string | null, _mask: number, _compareRange: NSRange, _locale: unknown): number;
  /** Exported member.*/
  caseInsensitiveCompare(_string: string | null): number;
  /** Exported member.*/
  localizedCompare(_string: string | null): number;
  /** Exported member.*/
  localizedCaseInsensitiveCompare(_string: string | null): number;
  /** Exported member.*/
  localizedStandardCompare(_string: string | null): number;
  /** Exported member.*/
  isEqualToString(_aString: string | null): boolean;
  /** Exported member.*/
  hasPrefix(_aString: string | null): boolean;
  /** Exported member.*/
  hasSuffix(_aString: string | null): boolean;
  /** Exported member.*/
  rangeOfString(_aString: string | null): NSRange;
  /** Exported member.*/
  rangeOfStringOptions(_aString: string | null, _mask: number): NSRange;
  /** Exported member.*/
  rangeOfStringOptionsRange(_aString: string | null, _mask: number, _searchRange: NSRange): NSRange;
  /** Exported member.*/
  rangeOfStringOptionsRangeLocale(_aString: string | null, _mask: number, _searchRange: NSRange, _locale: NSLocale | null): NSRange;
  /** Exported member.*/
  rangeOfCharacterFromSet(_aSet: NSCharacterSet | null): NSRange;
  /** Exported member.*/
  rangeOfCharacterFromSetOptions(_aSet: NSCharacterSet | null, _mask: number): NSRange;
  /** Exported member.*/
  rangeOfCharacterFromSetOptionsRange(_aSet: NSCharacterSet | null, _mask: number, _searchRange: NSRange): NSRange;
  /** Exported member.*/
  rangeOfComposedCharacterSequenceAtIndex(_index: number): NSRange;
  /** Exported member.*/
  rangeOfComposedCharacterSequencesForRange(_range: NSRange): NSRange;
  /** Exported member.*/
  stringByAppendingString(_aString: string | null): string | null;
  /** Exported member.*/
  stringByAppendingFormat(_format: string | null, _arguments: unknown[] | null): string | null;
  /** Exported member.*/
  doubleValue(): number;
  /** Exported member.*/
  floatValue(): number;
  /** Exported member.*/
  intValue(): number;
  /** Exported member.*/
  integerValue(): number;
  /** Exported member.*/
  longLongValue(): number;
  /** Exported member.*/
  boolValue(): boolean;
  /** Exported member.*/
  componentsSeparatedByString(_separator: string | null): unknown[] | null;
  /** Exported member.*/
  componentsSeparatedByCharactersInSet(_separator: NSCharacterSet | null): unknown[] | null;
  /** Exported member.*/
  commonPrefixWithStringOptions(_aString: string | null, _mask: number): string | null;
  /** Exported member.*/
  uppercaseString(): string | null;
  /** Exported member.*/
  lowercaseString(): string | null;
  /** Exported member.*/
  capitalizedString(): string | null;
  /** Exported member.*/
  uppercaseStringWithLocale(_locale: NSLocale | null): string | null;
  /** Exported member.*/
  lowercaseStringWithLocale(_locale: NSLocale | null): string | null;
  /** Exported member.*/
  capitalizedStringWithLocale(_locale: NSLocale | null): string | null;
  /** Exported member.*/
  stringByTrimmingCharactersInSet(_set: NSCharacterSet | null): string | null;
  /** Exported member.*/
  stringByPaddingToLengthWithStringStartingAtIndex(_newLength: number, _padString: string | null, _padIndex: number): string | null;
  /** Exported member.*/
  getLineStartEndContentsEndForRange(_startPtr: NativePointer | null, _lineEndPtr: NativePointer | null, _contentsEndPtr: NativePointer | null, _range: NSRange): void;
  /** Exported member.*/
  lineRangeForRange(_range: NSRange): NSRange;
  /** Exported member.*/
  getParagraphStartEndContentsEndForRange(_startPtr: NativePointer | null, _parEndPtr: NativePointer | null, _contentsEndPtr: NativePointer | null, _range: NSRange): void;
  /** Exported member.*/
  paragraphRangeForRange(_range: NSRange): NSRange;
  /** Exported member.*/
  enumerateSubstringsInRangeOptionsUsingBlock(_range: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateLinesUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  fastestEncoding(): number;
  /** Exported member.*/
  smallestEncoding(): number;
  /** Exported member.*/
  dataUsingEncodingAllowLossyConversion(_encoding: number, _lossy: boolean): NSData | null;
  /** Exported member.*/
  dataUsingEncoding(_encoding: number): NSData | null;
  /** Exported member.*/
  canBeConvertedToEncoding(_encoding: number): boolean;
  /** Exported member.*/
  cStringUsingEncoding(_encoding: number): NativePointer | null;
  /** Exported member.*/
  getCStringMaxLengthEncoding(_buffer: NativePointer | null, _maxBufferCount: number, _encoding: number): boolean;
  /** Exported member.*/
  getBytesMaxLengthUsedLengthEncodingOptionsRangeRemainingRange(_buffer: NativePointer | null, _maxBufferCount: number, _usedBufferCount: NativePointer | null, _encoding: number, _options: number, _range: NSRange, _leftover: NSRangePointer): boolean;
  /** Exported member.*/
  maximumLengthOfBytesUsingEncoding(_enc: number): number;
  /** Exported member.*/
  lengthOfBytesUsingEncoding(_enc: number): number;
  /** Exported member.*/
  decomposedStringWithCanonicalMapping(): string | null;
  /** Exported member.*/
  precomposedStringWithCanonicalMapping(): string | null;
  /** Exported member.*/
  decomposedStringWithCompatibilityMapping(): string | null;
  /** Exported member.*/
  precomposedStringWithCompatibilityMapping(): string | null;
  /** Exported member.*/
  stringByFoldingWithOptionsLocale(_options: number, _locale: NSLocale | null): string | null;
  /** Exported member.*/
  stringByReplacingOccurrencesOfStringWithStringOptionsRange(_target: string | null, _replacement: string | null, _options: number, _searchRange: NSRange): string | null;
  /** Exported member.*/
  stringByReplacingOccurrencesOfStringWithString(_target: string | null, _replacement: string | null): string | null;
  /** Exported member.*/
  stringByReplacingCharactersInRangeWithString(_range: NSRange, _replacement: string | null): string | null;
  /** Exported member.*/
  UTF8String(): NativePointer | null;
  /** Exported member.*/
  writeToURLAtomicallyEncodingError(_url: NSURL | null, _useAuxiliaryFile: boolean, _enc: number, _error: NSError | null): boolean;
  /** Exported member.*/
  writeToFileAtomicallyEncodingError(_path: string | null, _useAuxiliaryFile: boolean, _enc: number, _error: NSError | null): boolean;
  /** Exported member.*/
  propertyList(): unknown;
  /** Exported member.*/
  propertyListFromStringsFileFormat(): Record<string, unknown> | null;
  /** Exported member.*/
  cString(): NativePointer | null;
  /** Exported member.*/
  lossyCString(): NativePointer | null;
  /** Exported member.*/
  cStringLength(): number;
  /** Exported member.*/
  getCString(_bytes: NativePointer | null): void;
  /** Exported member.*/
  getCStringMaxLength(_bytes: NativePointer | null, _maxLength: number): void;
  /** Exported member.*/
  getCStringMaxLengthRangeRemainingRange(_bytes: NativePointer | null, _maxLength: number, _aRange: NSRange, _leftoverRange: NSRangePointer): void;
  /** Exported member.*/
  writeToFileAtomically(_path: string | null, _useAuxiliaryFile: boolean): boolean;
  /** Exported member.*/
  writeToURLAtomically(_url: NSURL | null, _atomically: boolean): boolean;
  /** Exported member.*/
  getCharacters(_buffer: NativePointer | null): void;
  /** Exported member.*/
  sizeWithFont(_font: UIFont | null): CGSize;
  /** Exported member.*/
  sizeWithFontForWidthLineBreakMode(_font: UIFont | null, _width: number, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawAtPointWithFont(_point: CGPoint, _font: UIFont | null): CGSize;
  /** Exported member.*/
  drawAtPointForWidthWithFontLineBreakMode(_point: CGPoint, _width: number, _font: UIFont | null, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  sizeWithFontConstrainedToSize(_font: UIFont | null, _size: CGSize): CGSize;
  /** Exported member.*/
  sizeWithFontConstrainedToSizeLineBreakMode(_font: UIFont | null, _size: CGSize, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawInRectWithFont(_rect: CGRect, _font: UIFont | null): CGSize;
  /** Exported member.*/
  drawInRectWithFontLineBreakMode(_rect: CGRect, _font: UIFont | null, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawInRectWithFontLineBreakModeAlignment(_rect: CGRect, _font: UIFont | null, _lineBreakMode: number, _alignment: number): CGSize;
  /** Exported member.*/
  sizeWithFontMinFontSizeActualFontSizeForWidthLineBreakMode(_font: UIFont | null, _minFontSize: number, _actualFontSize: NativePointer | null, _width: number, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawAtPointForWidthWithFontFontSizeLineBreakModeBaselineAdjustment(_point: CGPoint, _width: number, _font: UIFont | null, _fontSize: number, _lineBreakMode: number, _baselineAdjustment: number): CGSize;
  /** Exported member.*/
  drawAtPointForWidthWithFontMinFontSizeActualFontSizeLineBreakModeBaselineAdjustment(_point: CGPoint, _width: number, _font: UIFont | null, _minFontSize: number, _actualFontSize: NativePointer | null, _lineBreakMode: number, _baselineAdjustment: number): CGSize;
  /** Exported member.*/
  sizeWithAttributes(_attrs: Record<string, unknown> | null): CGSize;
  /** Exported member.*/
  drawAtPointWithAttributes(_point: CGPoint, _attrs: Record<string, unknown> | null): void;
  /** Exported member.*/
  drawInRectWithAttributes(_rect: CGRect, _attrs: Record<string, unknown> | null): void;
  /** Exported member.*/
  size(): CGSize;
  /** Exported member.*/
  drawAtPoint(_point: CGPoint): void;
  /** Exported member.*/
  drawInRect(_rect: CGRect): void;
  /** Exported member.*/
  drawWithRectOptionsAttributesContext(_rect: CGRect, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): void;
  /** Exported member.*/
  boundingRectWithSizeOptionsAttributesContext(_size: CGSize, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): CGRect;
}
/** Native class object for {@link NSSimpleCString}.*/
interface NSSimpleCStringClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): string | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): string | null;
  /** Exported member.*/
  alloc(): string | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  pathWithComponents(_components: unknown[] | null): string | null;
  /** Exported member.*/
  defaultCStringEncoding(): number;
  /** Exported member.*/
  availableStringEncodings(): number;
  /** Exported member.*/
  localizedNameOfStringEncoding(_encoding: number): string | null;
  /** Exported member.*/
  string(): string | null;
  /** Exported member.*/
  stringWithString(_string: string | null): string | null;
  /** Exported member.*/
  stringWithCharactersLength(_characters: NativePointer | null, _length: number): string | null;
  /** Exported member.*/
  stringWithUTF8String(_nullTerminatedCString: NativePointer | null): string | null;
  /** Exported member.*/
  stringWithFormat(_format: string | null, _arguments: unknown[] | null): string | null;
  /** Exported member.*/
  localizedStringWithFormat(_format: string | null, _arguments: unknown[] | null): string | null;
  /** Exported member.*/
  stringWithCStringEncoding(_cString: NativePointer | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfURLEncoding(_url: NSURL | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfFileEncoding(_path: string | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfURLUsedEncoding(_url: NSURL | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfFileUsedEncoding(_path: string | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithCapacity(_capacity: number): unknown;
  /** Exported member.*/
  stringWithContentsOfFile(_path: string | null): unknown;
  /** Exported member.*/
  stringWithContentsOfURL(_url: NSURL | null): unknown;
  /** Exported member.*/
  stringWithContentsOfData(_data: NSData | null): unknown;
  /** Exported member.*/
  stringWithCStringLength(_bytes: NativePointer | null, _length: number): unknown;
  /** Exported member.*/
  stringWithCString(_bytes: NativePointer | null): unknown;
}
/** Host-injected native class object.*/
declare var NSSimpleCString: NSSimpleCStringClass;

/** Native instance exported as `NSString`.
 */
interface NSString {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  stringByAddingPercentEncodingWithAllowedCharacters(_allowedCharacters: NSCharacterSet | null): string | null;
  /** Exported member.*/
  stringByRemovingPercentEncoding(): string | null;
  /** Exported member.*/
  stringByAddingPercentEscapesUsingEncoding(_enc: number): string | null;
  /** Exported member.*/
  stringByReplacingPercentEscapesUsingEncoding(_enc: number): string | null;
  /** Exported member.*/
  linguisticTagsInRangeSchemeOptionsOrthographyTokenRanges(_range: NSRange, _tagScheme: string | null, _opts: number, _orthography: NSOrthography | null, _tokenRanges: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  enumerateLinguisticTagsInRangeSchemeOptionsOrthographyUsingBlock(_range: NSRange, _tagScheme: string | null, _opts: number, _orthography: NSOrthography | null, _block: NativeBlock | null): void;
  /** Exported member.*/
  pathComponents(): unknown[] | null;
  /** Exported member.*/
  isAbsolutePath(): boolean;
  /** Exported member.*/
  lastPathComponent(): string | null;
  /** Exported member.*/
  stringByDeletingLastPathComponent(): string | null;
  /** Exported member.*/
  stringByAppendingPathComponent(_str: string | null): string | null;
  /** Exported member.*/
  pathExtension(): string | null;
  /** Exported member.*/
  stringByDeletingPathExtension(): string | null;
  /** Exported member.*/
  stringByAppendingPathExtension(_str: string | null): string | null;
  /** Exported member.*/
  stringByAbbreviatingWithTildeInPath(): string | null;
  /** Exported member.*/
  stringByExpandingTildeInPath(): string | null;
  /** Exported member.*/
  stringByStandardizingPath(): string | null;
  /** Exported member.*/
  stringByResolvingSymlinksInPath(): string | null;
  /** Exported member.*/
  stringsByAppendingPaths(_paths: unknown[] | null): unknown[] | null;
  /** Exported member.*/
  completePathIntoStringCaseSensitiveMatchesIntoArrayFilterTypes(_outputName: string | null, _flag: boolean, _outputArray: unknown[] | null, _filterTypes: unknown[] | null): number;
  /** Exported member.*/
  fileSystemRepresentation(): NativePointer | null;
  /** Exported member.*/
  getFileSystemRepresentationMaxLength(_cname: NativePointer | null, _max: number): boolean;
  /** Exported member.*/
  length(): number;
  /** Exported member.*/
  characterAtIndex(_index: number): number;
  /** Exported member.*/
  getCharactersRange(_buffer: NativePointer | null, _aRange: NSRange): void;
  /** Exported member.*/
  substringFromIndex(_from: number): string | null;
  /** Exported member.*/
  substringToIndex(_to: number): string | null;
  /** Exported member.*/
  substringWithRange(_range: NSRange): string | null;
  /** Exported member.*/
  compare(_string: string | null): number;
  /** Exported member.*/
  compareOptions(_string: string | null, _mask: number): number;
  /** Exported member.*/
  compareOptionsRange(_string: string | null, _mask: number, _compareRange: NSRange): number;
  /** Exported member.*/
  compareOptionsRangeLocale(_string: string | null, _mask: number, _compareRange: NSRange, _locale: unknown): number;
  /** Exported member.*/
  caseInsensitiveCompare(_string: string | null): number;
  /** Exported member.*/
  localizedCompare(_string: string | null): number;
  /** Exported member.*/
  localizedCaseInsensitiveCompare(_string: string | null): number;
  /** Exported member.*/
  localizedStandardCompare(_string: string | null): number;
  /** Exported member.*/
  isEqualToString(_aString: string | null): boolean;
  /** Exported member.*/
  hasPrefix(_aString: string | null): boolean;
  /** Exported member.*/
  hasSuffix(_aString: string | null): boolean;
  /** Exported member.*/
  rangeOfString(_aString: string | null): NSRange;
  /** Exported member.*/
  rangeOfStringOptions(_aString: string | null, _mask: number): NSRange;
  /** Exported member.*/
  rangeOfStringOptionsRange(_aString: string | null, _mask: number, _searchRange: NSRange): NSRange;
  /** Exported member.*/
  rangeOfStringOptionsRangeLocale(_aString: string | null, _mask: number, _searchRange: NSRange, _locale: NSLocale | null): NSRange;
  /** Exported member.*/
  rangeOfCharacterFromSet(_aSet: NSCharacterSet | null): NSRange;
  /** Exported member.*/
  rangeOfCharacterFromSetOptions(_aSet: NSCharacterSet | null, _mask: number): NSRange;
  /** Exported member.*/
  rangeOfCharacterFromSetOptionsRange(_aSet: NSCharacterSet | null, _mask: number, _searchRange: NSRange): NSRange;
  /** Exported member.*/
  rangeOfComposedCharacterSequenceAtIndex(_index: number): NSRange;
  /** Exported member.*/
  rangeOfComposedCharacterSequencesForRange(_range: NSRange): NSRange;
  /** Exported member.*/
  stringByAppendingString(_aString: string | null): string | null;
  /** Exported member.*/
  stringByAppendingFormat(_format: string | null, _arguments: unknown[] | null): string | null;
  /** Exported member.*/
  doubleValue(): number;
  /** Exported member.*/
  floatValue(): number;
  /** Exported member.*/
  intValue(): number;
  /** Exported member.*/
  integerValue(): number;
  /** Exported member.*/
  longLongValue(): number;
  /** Exported member.*/
  boolValue(): boolean;
  /** Exported member.*/
  componentsSeparatedByString(_separator: string | null): unknown[] | null;
  /** Exported member.*/
  componentsSeparatedByCharactersInSet(_separator: NSCharacterSet | null): unknown[] | null;
  /** Exported member.*/
  commonPrefixWithStringOptions(_aString: string | null, _mask: number): string | null;
  /** Exported member.*/
  uppercaseString(): string | null;
  /** Exported member.*/
  lowercaseString(): string | null;
  /** Exported member.*/
  capitalizedString(): string | null;
  /** Exported member.*/
  uppercaseStringWithLocale(_locale: NSLocale | null): string | null;
  /** Exported member.*/
  lowercaseStringWithLocale(_locale: NSLocale | null): string | null;
  /** Exported member.*/
  capitalizedStringWithLocale(_locale: NSLocale | null): string | null;
  /** Exported member.*/
  stringByTrimmingCharactersInSet(_set: NSCharacterSet | null): string | null;
  /** Exported member.*/
  stringByPaddingToLengthWithStringStartingAtIndex(_newLength: number, _padString: string | null, _padIndex: number): string | null;
  /** Exported member.*/
  getLineStartEndContentsEndForRange(_startPtr: NativePointer | null, _lineEndPtr: NativePointer | null, _contentsEndPtr: NativePointer | null, _range: NSRange): void;
  /** Exported member.*/
  lineRangeForRange(_range: NSRange): NSRange;
  /** Exported member.*/
  getParagraphStartEndContentsEndForRange(_startPtr: NativePointer | null, _parEndPtr: NativePointer | null, _contentsEndPtr: NativePointer | null, _range: NSRange): void;
  /** Exported member.*/
  paragraphRangeForRange(_range: NSRange): NSRange;
  /** Exported member.*/
  enumerateSubstringsInRangeOptionsUsingBlock(_range: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateLinesUsingBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  fastestEncoding(): number;
  /** Exported member.*/
  smallestEncoding(): number;
  /** Exported member.*/
  dataUsingEncodingAllowLossyConversion(_encoding: number, _lossy: boolean): NSData | null;
  /** Exported member.*/
  dataUsingEncoding(_encoding: number): NSData | null;
  /** Exported member.*/
  canBeConvertedToEncoding(_encoding: number): boolean;
  /** Exported member.*/
  cStringUsingEncoding(_encoding: number): NativePointer | null;
  /** Exported member.*/
  getCStringMaxLengthEncoding(_buffer: NativePointer | null, _maxBufferCount: number, _encoding: number): boolean;
  /** Exported member.*/
  getBytesMaxLengthUsedLengthEncodingOptionsRangeRemainingRange(_buffer: NativePointer | null, _maxBufferCount: number, _usedBufferCount: NativePointer | null, _encoding: number, _options: number, _range: NSRange, _leftover: NSRangePointer): boolean;
  /** Exported member.*/
  maximumLengthOfBytesUsingEncoding(_enc: number): number;
  /** Exported member.*/
  lengthOfBytesUsingEncoding(_enc: number): number;
  /** Exported member.*/
  decomposedStringWithCanonicalMapping(): string | null;
  /** Exported member.*/
  precomposedStringWithCanonicalMapping(): string | null;
  /** Exported member.*/
  decomposedStringWithCompatibilityMapping(): string | null;
  /** Exported member.*/
  precomposedStringWithCompatibilityMapping(): string | null;
  /** Exported member.*/
  stringByFoldingWithOptionsLocale(_options: number, _locale: NSLocale | null): string | null;
  /** Exported member.*/
  stringByReplacingOccurrencesOfStringWithStringOptionsRange(_target: string | null, _replacement: string | null, _options: number, _searchRange: NSRange): string | null;
  /** Exported member.*/
  stringByReplacingOccurrencesOfStringWithString(_target: string | null, _replacement: string | null): string | null;
  /** Exported member.*/
  stringByReplacingCharactersInRangeWithString(_range: NSRange, _replacement: string | null): string | null;
  /** Exported member.*/
  UTF8String(): NativePointer | null;
  /** Exported member.*/
  writeToURLAtomicallyEncodingError(_url: NSURL | null, _useAuxiliaryFile: boolean, _enc: number, _error: NSError | null): boolean;
  /** Exported member.*/
  writeToFileAtomicallyEncodingError(_path: string | null, _useAuxiliaryFile: boolean, _enc: number, _error: NSError | null): boolean;
  /** Exported member.*/
  propertyList(): unknown;
  /** Exported member.*/
  propertyListFromStringsFileFormat(): Record<string, unknown> | null;
  /** Exported member.*/
  cString(): NativePointer | null;
  /** Exported member.*/
  lossyCString(): NativePointer | null;
  /** Exported member.*/
  cStringLength(): number;
  /** Exported member.*/
  getCString(_bytes: NativePointer | null): void;
  /** Exported member.*/
  getCStringMaxLength(_bytes: NativePointer | null, _maxLength: number): void;
  /** Exported member.*/
  getCStringMaxLengthRangeRemainingRange(_bytes: NativePointer | null, _maxLength: number, _aRange: NSRange, _leftoverRange: NSRangePointer): void;
  /** Exported member.*/
  writeToFileAtomically(_path: string | null, _useAuxiliaryFile: boolean): boolean;
  /** Exported member.*/
  writeToURLAtomically(_url: NSURL | null, _atomically: boolean): boolean;
  /** Exported member.*/
  getCharacters(_buffer: NativePointer | null): void;
  /** Exported member.*/
  sizeWithFont(_font: UIFont | null): CGSize;
  /** Exported member.*/
  sizeWithFontForWidthLineBreakMode(_font: UIFont | null, _width: number, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawAtPointWithFont(_point: CGPoint, _font: UIFont | null): CGSize;
  /** Exported member.*/
  drawAtPointForWidthWithFontLineBreakMode(_point: CGPoint, _width: number, _font: UIFont | null, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  sizeWithFontConstrainedToSize(_font: UIFont | null, _size: CGSize): CGSize;
  /** Exported member.*/
  sizeWithFontConstrainedToSizeLineBreakMode(_font: UIFont | null, _size: CGSize, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawInRectWithFont(_rect: CGRect, _font: UIFont | null): CGSize;
  /** Exported member.*/
  drawInRectWithFontLineBreakMode(_rect: CGRect, _font: UIFont | null, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawInRectWithFontLineBreakModeAlignment(_rect: CGRect, _font: UIFont | null, _lineBreakMode: number, _alignment: number): CGSize;
  /** Exported member.*/
  sizeWithFontMinFontSizeActualFontSizeForWidthLineBreakMode(_font: UIFont | null, _minFontSize: number, _actualFontSize: NativePointer | null, _width: number, _lineBreakMode: number): CGSize;
  /** Exported member.*/
  drawAtPointForWidthWithFontFontSizeLineBreakModeBaselineAdjustment(_point: CGPoint, _width: number, _font: UIFont | null, _fontSize: number, _lineBreakMode: number, _baselineAdjustment: number): CGSize;
  /** Exported member.*/
  drawAtPointForWidthWithFontMinFontSizeActualFontSizeLineBreakModeBaselineAdjustment(_point: CGPoint, _width: number, _font: UIFont | null, _minFontSize: number, _actualFontSize: NativePointer | null, _lineBreakMode: number, _baselineAdjustment: number): CGSize;
  /** Exported member.*/
  sizeWithAttributes(_attrs: Record<string, unknown> | null): CGSize;
  /** Exported member.*/
  drawAtPointWithAttributes(_point: CGPoint, _attrs: Record<string, unknown> | null): void;
  /** Exported member.*/
  drawInRectWithAttributes(_rect: CGRect, _attrs: Record<string, unknown> | null): void;
  /** Exported member.*/
  size(): CGSize;
  /** Exported member.*/
  drawAtPoint(_point: CGPoint): void;
  /** Exported member.*/
  drawInRect(_rect: CGRect): void;
  /** Exported member.*/
  drawWithRectOptionsAttributesContext(_rect: CGRect, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): void;
  /** Exported member.*/
  boundingRectWithSizeOptionsAttributesContext(_size: CGSize, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): CGRect;
}
/** Native class object for {@link NSString}.*/
interface NSStringClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): string | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): string | null;
  /** Exported member.*/
  alloc(): string | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  pathWithComponents(_components: unknown[] | null): string | null;
  /** Exported member.*/
  defaultCStringEncoding(): number;
  /** Exported member.*/
  availableStringEncodings(): number;
  /** Exported member.*/
  localizedNameOfStringEncoding(_encoding: number): string | null;
  /** Exported member.*/
  string(): string | null;
  /** Exported member.*/
  stringWithString(_string: string | null): string | null;
  /** Exported member.*/
  stringWithCharactersLength(_characters: NativePointer | null, _length: number): string | null;
  /** Exported member.*/
  stringWithUTF8String(_nullTerminatedCString: NativePointer | null): string | null;
  /** Exported member.*/
  stringWithFormat(_format: string | null, _arguments: unknown[] | null): string | null;
  /** Exported member.*/
  localizedStringWithFormat(_format: string | null, _arguments: unknown[] | null): string | null;
  /** Exported member.*/
  stringWithCStringEncoding(_cString: NativePointer | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfURLEncoding(_url: NSURL | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfFileEncoding(_path: string | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfURLUsedEncoding(_url: NSURL | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithContentsOfFileUsedEncoding(_path: string | null, _enc: number): string | null;
  /** Exported member.*/
  stringWithCapacity(_capacity: number): unknown;
  /** Exported member.*/
  stringWithContentsOfFile(_path: string | null): unknown;
  /** Exported member.*/
  stringWithContentsOfURL(_url: NSURL | null): unknown;
  /** Exported member.*/
  stringWithContentsOfData(_data: NSData | null): unknown;
  /** Exported member.*/
  stringWithCStringLength(_bytes: NativePointer | null, _length: number): unknown;
  /** Exported member.*/
  stringWithCString(_bytes: NativePointer | null): unknown;
}
/** Host-injected native class object.*/
declare var NSString: NSStringClass;

/** Native instance exported as `NSTimeZone`.
 */
interface NSTimeZone {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  name(): string | null;
  /** Exported member.*/
  data(): NSData | null;
  /** Exported member.*/
  secondsFromGMTForDate(_aDate: Date | null): number;
  /** Exported member.*/
  abbreviationForDate(_aDate: Date | null): string | null;
  /** Exported member.*/
  isDaylightSavingTimeForDate(_aDate: Date | null): boolean;
  /** Exported member.*/
  daylightSavingTimeOffsetForDate(_aDate: Date | null): number;
  /** Exported member.*/
  nextDaylightSavingTimeTransitionAfterDate(_aDate: Date | null): Date | null;
  /** Exported member.*/
  secondsFromGMT(): number;
  /** Exported member.*/
  abbreviation(): string | null;
  /** Exported member.*/
  isDaylightSavingTime(): boolean;
  /** Exported member.*/
  daylightSavingTimeOffset(): number;
  /** Exported member.*/
  nextDaylightSavingTimeTransition(): Date | null;
  /** Exported member.*/
  isEqualToTimeZone(_aTimeZone: NSTimeZone | null): boolean;
  /** Exported member.*/
  localizedNameLocale(_style: number, _locale: NSLocale | null): string | null;
}
/** Native class object for {@link NSTimeZone}.*/
interface NSTimeZoneClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSTimeZone | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSTimeZone | null;
  /** Exported member.*/
  alloc(): NSTimeZone | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  systemTimeZone(): NSTimeZone | null;
  /** Exported member.*/
  resetSystemTimeZone(): void;
  /** Exported member.*/
  defaultTimeZone(): NSTimeZone | null;
  /** Exported member.*/
  setDefaultTimeZone(_aTimeZone: NSTimeZone | null): void;
  /** Exported member.*/
  localTimeZone(): NSTimeZone | null;
  /** Exported member.*/
  knownTimeZoneNames(): unknown[] | null;
  /** Exported member.*/
  abbreviationDictionary(): Record<string, unknown> | null;
  /** Exported member.*/
  setAbbreviationDictionary(_dict: Record<string, unknown> | null): void;
  /** Exported member.*/
  timeZoneDataVersion(): string | null;
  /** Exported member.*/
  timeZoneWithName(_tzName: string | null): unknown;
  /** Exported member.*/
  timeZoneWithNameData(_tzName: string | null, _aData: NSData | null): unknown;
  /** Exported member.*/
  timeZoneForSecondsFromGMT(_seconds: number): unknown;
  /** Exported member.*/
  timeZoneWithAbbreviation(_abbreviation: string | null): unknown;
}
/** Host-injected native class object.*/
declare var NSTimeZone: NSTimeZoneClass;

/** Native instance exported as `NSTimer`.
 */
interface NSTimer {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  fire(_unused: unknown): void;
  /** Exported member.*/
  fireDate(): Date | null;
  /** Exported member.*/
  setFireDate(_date: Date | null): void;
  /** Exported member.*/
  timeInterval(): number;
  /** Exported member.*/
  tolerance(): number;
  /** Exported member.*/
  setTolerance(_tolerance: number): void;
  /** Exported member.*/
  invalidate(_unused: unknown): void;
  /** Exported member.*/
  isValid(): boolean;
  /** Exported member.*/
  userInfo(): unknown;
}
/** Native class object for {@link NSTimer}.*/
interface NSTimerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSTimer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSTimer | null;
  /** Exported member.*/
  alloc(): NSTimer | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  scheduledTimerWithTimeInterval(_ti: number, _yesOrNo: boolean, _block: unknown): NSTimer | null;
}
/** Host-injected native class object.*/
declare var NSTimer: NSTimerClass;

/** Native instance exported as `NSURL`.
 */
interface NSURL {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  percentEncodedFragment: string | null;
  /** Exported member.*/
  percentEncodedPath: string | null;
  /** Exported member.*/
  query(): string | null;
  /** Exported member.*/
  percentEncodedPassword: string | null;
  /** Exported member.*/
  path(): string | null;
  /** Exported member.*/
  host(): string | null;
  /** Exported member.*/
  password(): string | null;
  /** Exported member.*/
  scheme(): string | null;
  /** Exported member.*/
  percentEncodedHost: string | null;
  /** Exported member.*/
  percentEncodedUser: string | null;
  /** Exported member.*/
  percentEncodedQuery: string | null;
  /** Exported member.*/
  user(): string | null;
  /** Exported member.*/
  fragment(): string | null;
  /** Exported member.*/
  port(): number | null;
  /** Exported member.*/
  readonly previewItemURL: NSURL | null;
  /** Exported member.*/
  readonly previewItemTitle: string | null;
  /** Exported member.*/
  absoluteString(): string | null;
  /** Exported member.*/
  relativeString(): string | null;
  /** Exported member.*/
  baseURL(): NSURL | null;
  /** Exported member.*/
  absoluteURL(): NSURL | null;
  /** Exported member.*/
  resourceSpecifier(): string | null;
  /** Exported member.*/
  parameterString(): string | null;
  /** Exported member.*/
  relativePath(): string | null;
  /** Exported member.*/
  getFileSystemRepresentationMaxLength(_buffer: NativePointer | null, _maxBufferLength: number): boolean;
  /** Exported member.*/
  fileSystemRepresentation(): NativePointer | null;
  /** Exported member.*/
  isFileURL(): boolean;
  /** Exported member.*/
  standardizedURL(): NSURL | null;
  /** Exported member.*/
  checkResourceIsReachableAndReturnError(_error: NSError | null): boolean;
  /** Exported member.*/
  isFileReferenceURL(): boolean;
  /** Exported member.*/
  fileReferenceURL(): NSURL | null;
  /** Exported member.*/
  filePathURL(): NSURL | null;
  /** Exported member.*/
  getResourceValueForKeyError(_value: unknown, _key: string | null, _error: NSError | null): boolean;
  /** Exported member.*/
  resourceValuesForKeysError(_keys: unknown[] | null, _error: NSError | null): Record<string, unknown> | null;
  /** Exported member.*/
  setResourceValueForKeyError(_value: unknown, _key: string | null, _error: NSError | null): boolean;
  /** Exported member.*/
  setResourceValuesError(_keyedValues: Record<string, unknown> | null, _error: NSError | null): boolean;
  /** Exported member.*/
  removeCachedResourceValueForKey(_key: string | null): void;
  /** Exported member.*/
  removeAllCachedResourceValues(): void;
  /** Exported member.*/
  setTemporaryResourceValueForKey(_value: unknown, _key: string | null): void;
  /** Exported member.*/
  bookmarkDataWithOptionsIncludingResourceValuesForKeysRelativeToURLError(_options: number, _keys: unknown[] | null, _relativeURL: NSURL | null, _error: NSError | null): NSData | null;
  /** Exported member.*/
  startAccessingSecurityScopedResource(): boolean;
  /** Exported member.*/
  stopAccessingSecurityScopedResource(): void;
  /** Exported member.*/
  URL(): NSURL | null;
  /** Exported member.*/
  URLRelativeToURL(_baseURL: NSURL | null): NSURL | null;
  /** Exported member.*/
  stringByAddingPercentEncodingWithAllowedCharacters(_allowedCharacters: NSCharacterSet | null): string | null;
  /** Exported member.*/
  stringByRemovingPercentEncoding(): string | null;
  /** Exported member.*/
  stringByAddingPercentEscapesUsingEncoding(_enc: number): string | null;
  /** Exported member.*/
  stringByReplacingPercentEscapesUsingEncoding(_enc: number): string | null;
  /** Exported member.*/
  pathComponents(): unknown[] | null;
  /** Exported member.*/
  lastPathComponent(): string | null;
  /** Exported member.*/
  pathExtension(): string | null;
  /** Exported member.*/
  URLByAppendingPathComponent(_pathComponent: string | null): NSURL | null;
  /** Exported member.*/
  URLByAppendingPathComponentIsDirectory(_pathComponent: string | null, _isDirectory: boolean): NSURL | null;
  /** Exported member.*/
  URLByDeletingLastPathComponent(): NSURL | null;
  /** Exported member.*/
  URLByAppendingPathExtension(_pathExtension: string | null): NSURL | null;
  /** Exported member.*/
  URLByDeletingPathExtension(): NSURL | null;
  /** Exported member.*/
  URLByStandardizingPath(): NSURL | null;
  /** Exported member.*/
  URLByResolvingSymlinksInPath(): NSURL | null;
}
/** Native class object for {@link NSURL}.*/
interface NSURLClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSURL | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSURL | null;
  /** Exported member.*/
  alloc(): NSURL | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  fileURLWithPathIsDirectory(_path: string | null, _isDir: boolean): unknown;
  /** Exported member.*/
  fileURLWithPath(_path: string | null): unknown;
  /** Exported member.*/
  fileURLWithFileSystemRepresentationIsDirectoryRelativeToURL(_path: NativePointer | null, _isDir: boolean, _baseURL: NSURL | null): unknown;
  /** Exported member.*/
  URLWithString(_URLString: string | null): unknown;
  /** Exported member.*/
  URLWithStringRelativeToURL(_URLString: string | null, _baseURL: NSURL | null): unknown;
  /** Exported member.*/
  URLByResolvingBookmarkDataOptionsRelativeToURLBookmarkDataIsStaleError(_bookmarkData: NSData | null, _options: number, _relativeURL: NSURL | null, _isStale: boolean, _error: NSError | null): unknown;
  /** Exported member.*/
  resourceValuesForKeysFromBookmarkData(_keys: unknown[] | null, _bookmarkData: NSData | null): Record<string, unknown> | null;
  /** Exported member.*/
  writeBookmarkDataToURLOptionsError(_bookmarkData: NSData | null, _bookmarkFileURL: NSURL | null, _options: number, _error: NSError | null): boolean;
  /** Exported member.*/
  bookmarkDataWithContentsOfURLError(_bookmarkFileURL: NSURL | null, _error: NSError | null): NSData | null;
  /** Exported member.*/
  componentsWithURLResolvingAgainstBaseURL(_url: NSURL | null, _resolve: boolean): unknown;
  /** Exported member.*/
  componentsWithString(_URLString: string | null): unknown;
  /** Exported member.*/
  URLUserAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLPasswordAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLHostAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLPathAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLQueryAllowedCharacterSet(): unknown;
  /** Exported member.*/
  URLFragmentAllowedCharacterSet(): unknown;
  /** Exported member.*/
  fileURLWithPathComponents(_components: unknown[] | null): NSURL | null;
}
/** Host-injected native class object.*/
declare var NSURL: NSURLClass;

/** Native instance exported as `NSURLComponents`.
 */
interface NSURLComponents {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  percentEncodedFragment: string | null;
  /** Exported member.*/
  percentEncodedPath: string | null;
  /** Exported member.*/
  query: string | null;
  /** Exported member.*/
  percentEncodedPassword: string | null;
  /** Exported member.*/
  path: string | null;
  /** Exported member.*/
  host: string | null;
  /** Exported member.*/
  password: string | null;
  /** Exported member.*/
  scheme: string | null;
  /** Exported member.*/
  percentEncodedHost: string | null;
  /** Exported member.*/
  percentEncodedUser: string | null;
  /** Exported member.*/
  percentEncodedQuery: string | null;
  /** Exported member.*/
  user: string | null;
  /** Exported member.*/
  fragment: string | null;
  /** Exported member.*/
  port: number | null;
  /** Exported member.*/
  URL(): NSURL | null;
  /** Exported member.*/
  URLRelativeToURL(_baseURL: NSURL | null): NSURL | null;
}
/** Native class object for {@link NSURLComponents}.*/
interface NSURLComponentsClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSURLComponents | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSURLComponents | null;
  /** Exported member.*/
  alloc(): NSURLComponents | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  componentsWithURLResolvingAgainstBaseURL(_url: NSURL | null, _resolve: boolean): unknown;
  /** Exported member.*/
  componentsWithString(_URLString: string | null): unknown;
}
/** Host-injected native class object.*/
declare var NSURLComponents: NSURLComponentsClass;

/** Native instance exported as `NSURLConnection`.
 */
interface NSURLConnection {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  originalRequest(): NSURLRequest | null;
  /** Exported member.*/
  currentRequest(): NSURLRequest | null;
  /** Exported member.*/
  start(): void;
  /** Exported member.*/
  cancel(): void;
  /** Exported member.*/
  scheduleInRunLoopForMode(_aRunLoop: NSRunLoop | null, _mode: string | null): void;
  /** Exported member.*/
  unscheduleFromRunLoopForMode(_aRunLoop: NSRunLoop | null, _mode: string | null): void;
  /** Exported member.*/
  setDelegateQueue(_queue: NSOperationQueue | null): void;
  /** Exported member.*/
  connectionDidFailWithError(_connection: NSURLConnection | null, _error: NSError | null): void;
  /** Exported member.*/
  connectionShouldUseCredentialStorage(_connection: NSURLConnection | null): boolean;
  /** Exported member.*/
  connectionWillSendRequestForAuthenticationChallenge(_connection: NSURLConnection | null, _challenge: NSURLAuthenticationChallenge | null): void;
  /** Exported member.*/
  connectionCanAuthenticateAgainstProtectionSpace(_connection: NSURLConnection | null, _protectionSpace: NSURLProtectionSpace | null): boolean;
  /** Exported member.*/
  connectionDidReceiveAuthenticationChallenge(_connection: NSURLConnection | null, _challenge: NSURLAuthenticationChallenge | null): void;
  /** Exported member.*/
  connectionDidCancelAuthenticationChallenge(_connection: NSURLConnection | null, _challenge: NSURLAuthenticationChallenge | null): void;
  /** Exported member.*/
  connectionWillSendRequestRedirectResponse(_connection: NSURLConnection | null, _request: NSURLRequest | null, _response: NSURLResponse | null): NSURLRequest | null;
  /** Exported member.*/
  connectionDidReceiveResponse(_connection: NSURLConnection | null, _response: NSURLResponse | null): void;
  /** Exported member.*/
  connectionDidReceiveData(_connection: NSURLConnection | null, _data: NSData | null): void;
  /** Exported member.*/
  connectionNeedNewBodyStream(_connection: NSURLConnection | null, _request: NSURLRequest | null): NSInputStream | null;
  /** Exported member.*/
  connectionDidSendBodyDataTotalBytesWrittenTotalBytesExpectedToWrite(_connection: NSURLConnection | null, _bytesWritten: number, _totalBytesWritten: number, _totalBytesExpectedToWrite: number): void;
  /** Exported member.*/
  connectionWillCacheResponse(_connection: NSURLConnection | null, _cachedResponse: NSCachedURLResponse | null): NSCachedURLResponse | null;
  /** Exported member.*/
  connectionDidFinishLoading(_connection: NSURLConnection | null): void;
  /** Exported member.*/
  connectionDidWriteDataTotalBytesWrittenExpectedTotalBytes(_connection: NSURLConnection | null, _bytesWritten: number, _totalBytesWritten: number, _expectedTotalBytes: number): void;
  /** Exported member.*/
  connectionDidResumeDownloadingTotalBytesWrittenExpectedTotalBytes(_connection: NSURLConnection | null, _totalBytesWritten: number, _expectedTotalBytes: number): void;
  /** Exported member.*/
  connectionDidFinishDownloadingDestinationURL(_connection: NSURLConnection | null, _destinationURL: NSURL | null): void;
}
/** Native class object for {@link NSURLConnection}.*/
interface NSURLConnectionClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSURLConnection | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSURLConnection | null;
  /** Exported member.*/
  alloc(): NSURLConnection | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  connectionWithRequestDelegate(_request: NSURLRequest | null, _delegate: unknown): NSURLConnection | null;
  /** Exported member.*/
  canHandleRequest(_request: NSURLRequest | null): boolean;
  /** Exported member.*/
  sendSynchronousRequestReturningResponseError(_request: NSURLRequest | null, _response: NSURLResponse | null, _error: NSError | null): NSData | null;
  /** Exported member.*/
  sendAsynchronousRequestQueueCompletionHandler(_request: NSURLRequest | null, _queue: NSOperationQueue | null, _handler: unknown): void;
}
/** Host-injected native class object.*/
declare var NSURLConnection: NSURLConnectionClass;

/** Native instance exported as `NSURLRequest`.
 */
interface NSURLRequest {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  URL(): NSURL | null;
  /** Exported member.*/
  cachePolicy(): number;
  /** Exported member.*/
  timeoutInterval(): number;
  /** Exported member.*/
  mainDocumentURL(): NSURL | null;
  /** Exported member.*/
  networkServiceType(): number;
  /** Exported member.*/
  allowsCellularAccess(): boolean;
  /** Exported member.*/
  setURL(_URL: NSURL | null): void;
  /** Exported member.*/
  setCachePolicy(_policy: number): void;
  /** Exported member.*/
  setTimeoutInterval(_seconds: number): void;
  /** Exported member.*/
  setMainDocumentURL(_URL: NSURL | null): void;
  /** Exported member.*/
  setNetworkServiceType(_networkServiceType: number): void;
  /** Exported member.*/
  setAllowsCellularAccess(_allow: boolean): void;
  /** Exported member.*/
  HTTPMethod(): string | null;
  /** Exported member.*/
  allHTTPHeaderFields(): Record<string, unknown> | null;
  /** Exported member.*/
  valueForHTTPHeaderField(_field: string | null): string | null;
  /** Exported member.*/
  HTTPBody(): NSData | null;
  /** Exported member.*/
  HTTPBodyStream(): NSInputStream | null;
  /** Exported member.*/
  HTTPShouldHandleCookies(): boolean;
  /** Exported member.*/
  HTTPShouldUsePipelining(): boolean;
}
/** Native class object for {@link NSURLRequest}.*/
interface NSURLRequestClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSURLRequest | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSURLRequest | null;
  /** Exported member.*/
  alloc(): NSURLRequest | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  requestWithURL(_URL: NSURL | null): unknown;
  /** Exported member.*/
  supportsSecureCoding(): boolean;
  /** Exported member.*/
  requestWithURLCachePolicyTimeoutInterval(_URL: NSURL | null, _cachePolicy: number, _timeoutInterval: number): unknown;
}
/** Host-injected native class object.*/
declare var NSURLRequest: NSURLRequestClass;

/** Native instance exported as `NSURLResponse`.
 */
interface NSURLResponse {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  initWithURLMIMETypeExpectedContentLengthTextEncodingName(_URL: NSURL | null, _MIMEType: string | null, _length: number, _name: string | null): NSURLResponse | null;
  /** Exported member.*/
  URL(): NSURL | null;
  /** Exported member.*/
  MIMEType(): string | null;
  /** Exported member.*/
  expectedContentLength(): number;
  /** Exported member.*/
  textEncodingName(): string | null;
  /** Exported member.*/
  suggestedFilename(): string | null;
}
/** Native class object for {@link NSURLResponse}.*/
interface NSURLResponseClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSURLResponse | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSURLResponse | null;
  /** Exported member.*/
  alloc(): NSURLResponse | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
}
/** Host-injected native class object.*/
declare var NSURLResponse: NSURLResponseClass;

/** Native instance exported as `NSUUID`.
 */
interface NSUUID {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  getUUIDBytes(_uuid: uuid_t): void;
  /** Exported member.*/
  UUIDString(): string | null;
}
/** Native class object for {@link NSUUID}.*/
interface NSUUIDClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSUUID | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSUUID | null;
  /** Exported member.*/
  alloc(): NSUUID | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  UUID(): unknown;
}
/** Host-injected native class object.*/
declare var NSUUID: NSUUIDClass;

/** Native instance exported as `NSUbiquitousKeyValueStore`.
 */
interface NSUbiquitousKeyValueStore {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  objectForKey(_aKey: string | null): unknown;
  /** Exported member.*/
  setObjectForKey(_anObject: unknown, _aKey: string | null): void;
  /** Exported member.*/
  removeObjectForKey(_aKey: string | null): void;
  /** Exported member.*/
  stringForKey(_aKey: string | null): string | null;
  /** Exported member.*/
  arrayForKey(_aKey: string | null): unknown[] | null;
  /** Exported member.*/
  dictionaryForKey(_aKey: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  dataForKey(_aKey: string | null): NSData | null;
  /** Exported member.*/
  longLongForKey(_aKey: string | null): number;
  /** Exported member.*/
  doubleForKey(_aKey: string | null): number;
  /** Exported member.*/
  boolForKey(_aKey: string | null): boolean;
  /** Exported member.*/
  setStringForKey(_aString: string | null, _aKey: string | null): void;
  /** Exported member.*/
  setDataForKey(_aData: NSData | null, _aKey: string | null): void;
  /** Exported member.*/
  setArrayForKey(_anArray: unknown[] | null, _aKey: string | null): void;
  /** Exported member.*/
  setDictionaryForKey(_aDictionary: Record<string, unknown> | null, _aKey: string | null): void;
  /** Exported member.*/
  setLongLongForKey(_value: number, _aKey: string | null): void;
  /** Exported member.*/
  setDoubleForKey(_value: number, _aKey: string | null): void;
  /** Exported member.*/
  setBoolForKey(_value: boolean, _aKey: string | null): void;
  /** Exported member.*/
  dictionaryRepresentation(): Record<string, unknown> | null;
  /** Exported member.*/
  synchronize(): boolean;
}
/** Native class object for {@link NSUbiquitousKeyValueStore}.*/
interface NSUbiquitousKeyValueStoreClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSUbiquitousKeyValueStore | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSUbiquitousKeyValueStore | null;
  /** Exported member.*/
  alloc(): NSUbiquitousKeyValueStore | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  defaultStore(): NSUbiquitousKeyValueStore | null;
}
/** Host-injected native class object.*/
declare var NSUbiquitousKeyValueStore: NSUbiquitousKeyValueStoreClass;

/** Native instance exported as `NSUserDefaults`.
 */
interface NSUserDefaults {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  objectForKey(_defaultName: string | null): unknown;
  /** Exported member.*/
  setObjectForKey(_value: unknown, _defaultName: string | null): void;
  /** Exported member.*/
  removeObjectForKey(_defaultName: string | null): void;
  /** Exported member.*/
  stringForKey(_defaultName: string | null): string | null;
  /** Exported member.*/
  arrayForKey(_defaultName: string | null): unknown[] | null;
  /** Exported member.*/
  dictionaryForKey(_defaultName: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  dataForKey(_defaultName: string | null): NSData | null;
  /** Exported member.*/
  stringArrayForKey(_defaultName: string | null): unknown[] | null;
  /** Exported member.*/
  integerForKey(_defaultName: string | null): number;
  /** Exported member.*/
  floatForKey(_defaultName: string | null): number;
  /** Exported member.*/
  doubleForKey(_defaultName: string | null): number;
  /** Exported member.*/
  boolForKey(_defaultName: string | null): boolean;
  /** Exported member.*/
  URLForKey(_defaultName: string | null): NSURL | null;
  /** Exported member.*/
  setIntegerForKey(_value: number, _defaultName: string | null): void;
  /** Exported member.*/
  setFloatForKey(_value: number, _defaultName: string | null): void;
  /** Exported member.*/
  setDoubleForKey(_value: number, _defaultName: string | null): void;
  /** Exported member.*/
  setBoolForKey(_value: boolean, _defaultName: string | null): void;
  /** Exported member.*/
  setURLForKey(_url: NSURL | null, _defaultName: string | null): void;
  /** Exported member.*/
  registerDefaults(_registrationDictionary: Record<string, unknown> | null): void;
  /** Exported member.*/
  addSuiteNamed(_suiteName: string | null): void;
  /** Exported member.*/
  removeSuiteNamed(_suiteName: string | null): void;
  /** Exported member.*/
  dictionaryRepresentation(): Record<string, unknown> | null;
  /** Exported member.*/
  volatileDomainNames(): unknown[] | null;
  /** Exported member.*/
  volatileDomainForName(_domainName: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  setVolatileDomainForName(_domain: Record<string, unknown> | null, _domainName: string | null): void;
  /** Exported member.*/
  removeVolatileDomainForName(_domainName: string | null): void;
  /** Exported member.*/
  persistentDomainNames(): unknown[] | null;
  /** Exported member.*/
  persistentDomainForName(_domainName: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  setPersistentDomainForName(_domain: Record<string, unknown> | null, _domainName: string | null): void;
  /** Exported member.*/
  removePersistentDomainForName(_domainName: string | null): void;
  /** Exported member.*/
  synchronize(): boolean;
  /** Exported member.*/
  objectIsForcedForKey(_key: string | null): boolean;
  /** Exported member.*/
  objectIsForcedForKeyInDomain(_key: string | null, _domain: string | null): boolean;
}
/** Native class object for {@link NSUserDefaults}.*/
interface NSUserDefaultsClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSUserDefaults | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSUserDefaults | null;
  /** Exported member.*/
  alloc(): NSUserDefaults | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  standardUserDefaults(): NSUserDefaults | null;
  /** Exported member.*/
  resetStandardUserDefaults(): void;
}
/** Host-injected native class object.*/
declare var NSUserDefaults: NSUserDefaultsClass;

/** Native instance exported as `NSValue`.
 */
interface NSValue {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(): unknown;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  getValue(_value: NativePointer | null): void;
  /** Exported member.*/
  objCType(): NativePointer | null;
  /** Exported member.*/
  nonretainedObjectValue(): unknown;
  /** Exported member.*/
  pointerValue(): NativePointer | null;
  /** Exported member.*/
  isEqualToValue(_value: NSValue | null): boolean;
  /** Exported member.*/
  rangeValue(): NSRange;
  /** Exported member.*/
  CGPointValue(): CGPoint;
  /** Exported member.*/
  CGSizeValue(): CGSize;
  /** Exported member.*/
  CGRectValue(): CGRect;
  /** Exported member.*/
  CGAffineTransformValue(): CGAffineTransform;
  /** Exported member.*/
  UIEdgeInsetsValue(): UIEdgeInsets;
  /** Exported member.*/
  UIOffsetValue(): UIOffset;
  /** Exported member.*/
  CATransform3DValue(): CATransform3D;
}
/** Native class object for {@link NSValue}.*/
interface NSValueClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSValue | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSValue | null;
  /** Exported member.*/
  alloc(): NSValue | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  valueWithBytesObjCType(_value: NativePointer | null, _type: NativePointer | null): NSValue | null;
  /** Exported member.*/
  valueWithObjCType(_value: NativePointer | null, _type: NativePointer | null): NSValue | null;
  /** Exported member.*/
  valueWithNonretainedObject(_anObject: unknown): NSValue | null;
  /** Exported member.*/
  valueWithPointer(_pointer: NativePointer | null): NSValue | null;
  /** Exported member.*/
  valueWithRange(_range: NSRange): NSValue | null;
  /** Exported member.*/
  valueWithCGPoint(_point: CGPoint): NSValue | null;
  /** Exported member.*/
  valueWithCGSize(_size: CGSize): NSValue | null;
  /** Exported member.*/
  valueWithCGRect(_rect: CGRect): NSValue | null;
  /** Exported member.*/
  valueWithCGAffineTransform(_transform: CGAffineTransform): NSValue | null;
  /** Exported member.*/
  valueWithUIEdgeInsets(_insets: UIEdgeInsets): NSValue | null;
  /** Exported member.*/
  valueWithUIOffset(_insets: UIOffset): NSValue | null;
  /** Exported member.*/
  valueWithCATransform3D(_t: CATransform3D): NSValue | null;
}
/** Host-injected native class object.*/
declare var NSValue: NSValueClass;
