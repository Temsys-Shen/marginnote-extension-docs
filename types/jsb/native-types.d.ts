/** @module Native types */
/** An unresolved native value. Narrow only after checking its documented bridge representation.
 */
interface NativeOpaque<Name extends string> {
  readonly __nativeType: Name;
}
/** An Objective-C pointer, not a JavaScript number.*/
type NativePointer = NativeOpaque<"pointer">;
/** A native selector returned by JSB.selector().*/
type NativeSelector = NativeOpaque<"selector">;
/** Native block whose JavaScript calling convention has not been reviewed.*/
type NativeBlock = unknown;
/** Native object, not a declaration of a global NSObject constructor.*/
interface NativeObject {}
/** Opaque native class object. Does not imply `new NativeClass()`.*/
interface NativeClass<T> {
  readonly __instanceType?: T;
}

/** Native type with no reviewed JS representation.*/
type CIColor = NativeOpaque<"CIColor">;
/** Native type with no reviewed JS representation.*/
type CMTime = NativeOpaque<"CMTime">;
/** Native type with no reviewed JS representation.*/
type CMTimeMapping = NativeOpaque<"CMTimeMapping">;
/** Native type with no reviewed JS representation.*/
type CMTimeRange = NativeOpaque<"CMTimeRange">;
/** Native type with no reviewed JS representation.*/
type IMP = NativeOpaque<"IMP">;
/** Native type with no reviewed JS representation.*/
type NSBundle = NativeOpaque<"NSBundle">;
/** Native type with no reviewed JS representation.*/
type NSCachedURLResponse = NativeOpaque<"NSCachedURLResponse">;
/** Native type with no reviewed JS representation.*/
type NSCalendar = NativeOpaque<"NSCalendar">;
/** Native type with no reviewed JS representation.*/
type NSCoder = NativeOpaque<"NSCoder">;
/** Native type with no reviewed JS representation.*/
type NSComparator = NativeOpaque<"NSComparator">;
/** Native type with no reviewed JS representation.*/
type NSFileWrapper = NativeOpaque<"NSFileWrapper">;
/** Native type with no reviewed JS representation.*/
type NSInputStream = NativeOpaque<"NSInputStream">;
/** Native type with no reviewed JS representation.*/
type NSInvocation = NativeOpaque<"NSInvocation">;
/** Native type with no reviewed JS representation.*/
type NSLayoutManager = NativeOpaque<"NSLayoutManager">;
/** Native type with no reviewed JS representation.*/
type NSMethodSignature = NativeOpaque<"NSMethodSignature">;
/** Native type with no reviewed JS representation.*/
type NSOrthography = NativeOpaque<"NSOrthography">;
/** Native type with no reviewed JS representation.*/
type NSPointerFunctions = NativeOpaque<"NSPointerFunctions">;
/** Native type with no reviewed JS representation.*/
type NSRangePointer = NativeOpaque<"NSRangePointer">;
/** Native type with no reviewed JS representation.*/
type NSRunLoop = NativeOpaque<"NSRunLoop">;
/** Native type with no reviewed JS representation.*/
type NSStringDrawingContext = NativeOpaque<"NSStringDrawingContext">;
/** Native type with no reviewed JS representation.*/
type NSTextAttachment = NativeOpaque<"NSTextAttachment">;
/** Native type with no reviewed JS representation.*/
type NSTextContainer = NativeOpaque<"NSTextContainer">;
/** Native type with no reviewed JS representation.*/
type NSURLAuthenticationChallenge = NativeOpaque<"NSURLAuthenticationChallenge">;
/** Native type with no reviewed JS representation.*/
type NSURLProtectionSpace = NativeOpaque<"NSURLProtectionSpace">;
/** Native type with no reviewed JS representation.*/
type NSUndoManager = NativeOpaque<"NSUndoManager">;
/** Native type with no reviewed JS representation.*/
type NSZone = NativeOpaque<"NSZone">;
/** Native type with no reviewed JS representation.*/
type Protocol = NativeOpaque<"Protocol">;
/** Native type with no reviewed JS representation.*/
type SKNode = NativeOpaque<"SKNode">;
/** Native type with no reviewed JS representation.*/
type SKPhysicsBody = NativeOpaque<"SKPhysicsBody">;
/** Native type with no reviewed JS representation.*/
type SKScene = NativeOpaque<"SKScene">;
/** Native type with no reviewed JS representation.*/
type UISearchDisplayController = NativeOpaque<"UISearchDisplayController">;
/** Native type with no reviewed JS representation.*/
type uuid_t = NativeOpaque<"uuid_t">;
/** Native type with no reviewed JS representation.*/
type va_list = NativeOpaque<"va_list">;
