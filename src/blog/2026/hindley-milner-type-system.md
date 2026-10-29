---
title: "The MuxLang Type System: What Hindley-Milner Got Wrong"
date: 2026-08-09
author: Derek Corniello
image: ./images/hm-vs-mux-type-inference-cover-image.png
tags: type-systems language-design hindley-milner
synopsis: >-
  How Mux handles type inference differently from Hindley-Milner, with explicit
  generics, local inference, and a discussion of where compilers should infer types.
authorProfile:
  class: 2027
  photo: ./images/derek-corniello.jpg
  email: corniedj@mail.uc.edu
  website: https://derekcorn.dev
  github: DerekCorniello
  linkedin: derek-corniello
  bio: Software engineer in Cincinnati, Ohio. I work on backend systems and developer tools, and I am building Mux, a statically typed programming language.
---



I have been working on my programming language Mux for a while now, and I have been really interested in the way that different programming languages handle type systems. Mux uses a strong and static type system, and I have been exploring the different ways that type systems can be designed and implemented, and just adding in different features.

While learning about this, the one type system that keeps coming up again and again is the Hindley-Milner type system.

{/* truncate */}

## What is the Hindley-Milner (HM) Type System

One of the most influential type systems in the history of programming languages is the Hindley-Milner type system, which has been used in languages like ML, Haskell, and OCaml. HM has also had large influence on languages like Rust, C#, and Swift, which have adopted some of its features and concepts. However, despite its widespread adoption and influence, it still has several limitations and shortcomings that have been identified over the years.

Mux specifically does not use the strictest version of the Hindley-Milner type system, and instead uses some different approaches to type inference and type checking. In this article, I will discuss some of the limitations of the Hindley-Milner type system, and why I chose to use a different approach in Mux.

Due to the widespread usage of TypeScript as of late, I will be drawing similarities and differences between Mux and TS and their HM systems over the course of this article, but this applies to many PLs!

## The Basic Idea

One of the simplest examples of HM type inference is the identity function:

```hm
let identity = fun x -> x
```

The compiler can infer that its type is:

```hm
'a -> 'a
```

Here, `'a` is a type variable. The identity function does not care what type it receives. Whatever type it receives, it returns that same type. This is called parametric polymorphism. The function can be used with an int, a string, or any other type without needing a separate implementation for each one. This smells a lot like generics!

And that is exactly how TypeScript expresses this:

```typescript
function identity<T>(x: T): T {
    return x;
}
```

Mux makes a similar distinction to TypeScript:

```mux
func identity<T>(T x) returns T {
    return x
}
```

So in this case, Mux is very similar to HM. The difference is in how Mux handles type inference and genericity in other cases. There are other concepts that we will go over first, but this is a good introduction to the basic idea of HM. Maybe you can see where this is going...

## What Hindley-Milner Got Right

First, I think there are a lot of things that HM does that is very useful and important.

### Type Inference

HM's type inference is one of its biggest strengths. For example, instead of writing something to the effect of:

```hm
let x: int = 42
```

we can write:

```hm
let x = 42
```

and the compiler can determine that x has type int. TypeScript's is essentially the same:

```typescript
let x = 42;
```

The compiler knows that x is a number without requiring an annotation. Mux also supports this kind of local inference:

```mux
auto x = 42
```

The difference is in where Mux wants inference to happen.

Mux is intentionally more explicit about the types that define an API, while allowing inference inside expressions and local variables. More on what can and can't be inferred to come shortly.

### Unification

Another important part of HM is unification. Suppose the compiler knows that some value has type `'a` and later discovers that the value is being used as an int. The compiler can unify the two types, effectively determining that:

```hm
'a = int
```

This is what allows HM to infer surprisingly complicated types without requiring annotations everywhere. TypeScript has a similar concept when it infers generic type parameters:

```typescript
function first<T>(items: T[]): T {
    return items[0];
}

const x = first([1, 2, 3]);
```

The compiler sees that the argument is a list of numbers, so it infers that T is a number and therefore x is a number. TypeScript can also do some more advanced inference (which i think is kinda cool btw). For example:

```typescript
function echo<const T>(value: T): T {
    return value;
}

const x = echo([1, 2, 3] as const);
```

The type checker can infer that T is the tuple type:

```typescript
readonly [1, 2, 3]
```

instead of `number[]`. This is a more advanced feature that is very cool, but Mux does not currently support it :(

Mux does this inference for generic calls as well:

```mux
func first<T>(list<T> items) returns T {
    return items[0]
}

auto x = first([1, 2, 3])

/* we can also define x as:
 * list<int> x = first([1, 2, 3])
 *
 * but we don't need to in this case :)
 */
```

The compiler can infer T is an int without requiring the explicit instantiation:

```mux
first([1, 2, 3])
```

This is one of the places where Mux directly benefits from HM-style unification.

## What Hindley-Milner Got Wrong, and How Mux Does It Better

The interesting part is not that HM can infer types. It is how much information we want the compiler to infer in Mux. For Mux, I decided that inference should remove boilerplate without removing useful information from the code. This has its tradeoffs, but I like it so...

### 0. HM Generalizes Types; Mux Declares Them

Consider our identity function again. During type inference, the compiler can determine that its type is:

```hm
'a -> 'a
```

But it still needs to decide whether `'a` should mean one specific type, or whether the function can actually be used polymorphically. HM generalizes the type variable, giving us:

```hm
forall 'a. 'a -> 'a
```

That means each use of identity can pick its own `'a`:

```hm
identity 42
identity "hello"
```

The first use can instantiate `'a` as int, while the second can instantiate it as string. This is an important distinction. The compiler is not simply saying that identity has some unknown type. It has determined that identity is universally polymorphic over `'a`. Inferring a type, then generalizing its free type variables, is a major part of what makes Hindley-Milner so powerful.

Mux takes a different approach. Rather than discovering that a function should be universally polymorphic and then generalizing its inferred type, Mux makes the generic parameter explicit in the declaration. Consider:

```mux
func identity<T>(T x) returns T
```

The `<T>` is there on purpose: the polymorphism is part of the function's declaration rather than something the compiler has to discover from the function body. This is one of the recurring design decisions in Mux: the compiler still performs type inference, but the programmer explicitly defines where polymorphism exists. Then at compilation time, Mux compiler will monomorphize the function. This is what Rust does, for example. So when we call identity with 42 and "hello" in Mux, we get something like this to use at runtime:

```mux
func identity$string(string x) returns string;
func identity$int(int x) returns int;
```

This bloats some of the code, but it is a way easier way to reason about, and debug a compiler. Plus, it is faster at runtime!

TypeScript is already on Mux's side here. Generic parameters are explicit in the declaration:

```typescript
function map<T, U>(items: T[], f: (value: T) => U): U[] {
    return items.map(f);
}
```

The generic relationship is explicitly visible as T -> U. A reader can immediately see that map takes an array of T, applies a function from T to U, and produces an array of U. An HM language can instead be written without explicitly declaring those type parameters:

```hm
let map = fun f xs ->
    ...
```

The compiler can infer the equivalent polymorphic type. That is incredibly powerful, but I don't think it is the best tradeoff for Mux. Mux instead makes the public API explicit:

```mux
func map<T, U>(
    list<T> items,
    func(T) returns U f
) returns list<U> {
    ...
}
```

The Mux version is more verbose, but in my opinion it is more readable and easier to reason about because the important type relationships are visible where the function is defined. And when calling it, the compiler still does the boring work:

```mux
auto strings = map(numbers, to_string)
```

rather than requiring:

```mux
auto strings = map<int, string>(numbers, to_string)
```

This gives Mux a useful separation:

> The programmer declares the API. The compiler determines the concrete types.

### 1. Don't Carry Unknown Types Forward

The interesting thing about HM is that if the compiler doesn't know a type yet, it can introduce a type variable and keep going.

For example, an empty list can conceptually have the type `'a list`. There is nothing inherently wrong with that. The compiler knows it is a list, but it does not yet know what the elements are.

TypeScript has a similar situation:

```typescript
const empty = [];
```

The compiler has very little information about what empty is supposed to contain.

Mux intentionally does not allow this ambiguity. Code with this declaration:

```mux
auto empty = []
```

will result in the following message:

```text
error: Cannot infer type for empty list literal
--> test.mux:1:14
   |
 1 | auto empty = []
   |              ^
   |
= help: Use an explicit type annotation, e.g. list<int> myVar = []
```

This is a useful error because it tells the programmer exactly what information is missing and how to provide it. The other thing they can do is provide enough information for the compiler to infer it from the values in the list:

```mux
auto filled = [1, 2, 3]
```

Here, the compiler can infer that filled is a list of ints. This raises a broader point. There is a difference between a type being representable by the type system and a type being useful to the programmer. HM is perfectly capable of representing `'a list`. But an `'a list` that no later use ever pins down is a type the compiler will eventually refuse anyway, at some random spot that has nothing to do with where the empty list was declared.

The Mux programmer can also write:

```mux
list<int> empty = []
```

Now there is no unresolved type variable. The programmer has explicitly provided the information the compiler was missing. This comes down to a subtle difference in philosophy.

HM asks:
> Can this type remain polymorphic or unresolved?

Mux asks:
> Do we have enough information to determine this type here?

If the answer is no, Mux asks the programmer for more information instead of carrying the unknown type forward. That is a deliberate tradeoff, not a technical limitation. And I think the resulting code is easier to reason about. When I see:

```mux
list<int> empty = []
```

I immediately know what the collection contains. I do not need to find another use of empty somewhere else in the program to figure out what type the compiler eventually inferred for it.

### 2. Parametric Polymorphism Does Not Express Constraints

Usage of `'a` tells us almost nothing about `'a`.

That is exactly what we want for the identity function. It becomes less useful when writing functions that need to operate on the generic value. TypeScript solves this using constraints:

```typescript
function stringify<T extends Printable>(value: T): string {
    return value.print();
}
```

Now T is still generic, but the compiler knows that T satisfies Printable. Mux has the same basic idea through generic bounds and interfaces, more similar to Rust and Go in this regard:

```mux
func stringify<T is Printable>(T value) returns string {
    return value.print()
}
```

This lets Mux express a distinction that plain HM polymorphism does not naturally express. The classic HM-era answer to this is type classes, like Haskell's, layered on top of the base system. Mux just uses a simpler spelling.

`T` means:
> This function is parameterized over some type T.

While:

`T is Printable` means:
> This function is parameterized over some type T that is known to satisfy Printable.

This is much more useful for a language with interfaces and generic programming. The compiler can still treat T as an unknown concrete type, while also knowing what operations are guaranteed to be available on it.

## Where This Leaves Mux

I think of Mux as borrowing one of HM's most useful pieces: unification-based type inference. Mux then builds a different type system around it:

- explicit generics
- local type inference
- generic bounds
- interfaces
- nominal types
- monomorphization

The philosophy is fairly simple:

> The programmer should describe the important type relationships. The compiler should fill in the boring parts.

HM showed how far a compiler can go in inferring those relationships automatically.

Mux is therefore not trying to replace HM's inference model so much as make a different set of tradeoffs about where that inference is allowed to operate.

What I learned from making Mux is that just because the compiler can infer something does not necessarily mean that it should.
