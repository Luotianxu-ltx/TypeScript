# TypeScript

[toc]

## 一、类型基础

### 1.1 Boolean类型

```typescript
const yes: Boolean = true
```

### 1.2 Number类型

```typescript
// 二进制
const bin: Number = 0b1010
// 八进制
const oct: Number = 0o744
// 十进制
const num: Number = 100
const float: Number = 3.14
// 十六进制
const num2: Number = 0xffffff
```

### 1.3 String类型

```typescript
const name: String = '小明'
```

### 1.4 undefined

```typescript
const test: undefined = undefined
```

### 1.5 null

```typescript
const test: null = null
```

### 1.6 unknown

TypeScript3.0引入了unknown类型。与any相同的是任何其他类型都能够赋值给unkown类型。不同的是unknown类型只允许赋值给any类型和unknown类型，而不允许赋值给任何其他类型。

```typescript
let x: unknown

const a1: any = x
const a2: unknown = x

const a3: boolean = x // 报错
```

### 1.7 Void类型

void类型表示某个值不存在，该类型用作函数的返回值类型。若一个函数没有返回值，那么该函数的返回值类型为void类型。

```typescript
function sayHai(): void {
    console.log('你好！');
}
```

### 1.8 Symbol类型

```typescript
const flag: symbol = Symbol()
let obj = {
    [flag]: 'Hello world!'
}
console.log(obj[flag]);
```

### 1.9 Enum类型

枚举类型由零个或多个枚举成员构成，每个枚举成员都是一个命名的常量。

#### 1.9.1 数值型枚举

每个数值型枚举成员都表示一个具体的数字。如果在定义枚举时没有设置枚举成员的值，那么TypeScript将自动计算枚举成员的值。第一个枚举成员的值为0，其后每个枚举成员的值等于前一个枚举成员的值加1。

```typescript
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

const direction: Direction = Direction.Down
const direction1: Direction = 0 // Direction.Up

```

```typescript
enum Direction {
    Up = 3,    // 3
    Down,      // 4
    Left = 8,  // 8
    Right      // 9
}

const direction: Direction = Direction.Down
```

#### 1.9.2 字符串枚举

字符串枚举成员必须实用字符串字面量或另一个字符串枚举成员来初始化。

```typescript
enum Direction {
    Up = "ong",
    Down = "two",
    Left = "three",
    Right = "four"
}

const direction: Direction = Direction.Down
```

#### 1.9.3 异构型枚举

一个枚举中同时定义数值型枚举成员和字符串枚举成员，这种枚举成为异构型枚举。

```typescript
enum Direction {
    Up = 1,
    Down = "two",
    Left = 3,
    Right = "four"
}
```

必须为紧跟在字符串枚举成员之后的数值型枚举成员指定一个初始值。

```typescript
enum Enum {
    A,
    B,
    C = "C",
    D = "D",
    E, // 报错
    F,
}
```

### 1.10 never

never类型表示的是永远不存在的值的类型。

```typescript
function a(): never {
  throw new Error()
}
```

### 1.11 数组类型

```typescript
let num: number[] = [0,1,2,3,4,5]
let hybrid: (String | number)[] = ['one',2,3,4,5]
let list: Array<number> = [1,2,3,4,5]
let hybridList: Array<String | number> = ['one',2,3,4,5]
```

*只读数组*
只读数组仅允许程序员读取数组元素而不允许修改数组元素。

```typescript
const num: ReadonlyArray<number> = [0,1,2,3]
const num1: readonly number[] = [0,1,2,3]
const num3: Readonly<number[]> = [0,1,2,3]
```

### 1.12 元组

元组表示由有限元素构成的有序列表。元组是长度固定的数组，并且元素中每个元素都有确定的类型。

```typescript
const num: [number, number] = [0, 0]
const hello: [String, number] = ['hello', 0]

let type: [String, number]
// const type = [0, 'hello']  报错
// const type = [0] 报错
```

#### 1.12.1 只读元组

与只读数组类似,但是在访问元组中不存在的元素时会产生编译错误。

```typescript
const num: readonly [number, number] = [0, 0]
const num1: Readonly<[number, number]> = [0, 0]
```

#### 1.12.2 可选元素

定义元组时可以将某些元素定义为可选元素。如果元组中同时存在可选元素和必选元素，那么可选元素必须在必选元素后面。

```typescript
const num: [boolean, string?, number?] = [true, 'hello', 0]
const num1: [boolean, string?, number?] = [true]
```

#### 1.12.2 剩余元素

在定义元组时，可以将最后一个元素定义为剩余元素。

```typescript
const tuple: [number, ...string[]] = [0, 'h', 'e', 'l', 'l', '0']
```

### 1.13 对象类型

#### 1.13.1 Object

#### 1.13.2 object

## 二、类型进阶

### 2.1 泛型

#### 2.1.1 简介

通过一个identity函数来介绍泛型的应用。identity函数也叫做恒等函数，它的返回值永远等于传入的参数。

```typescript
function identity(arg: number): number {
    return arg
}
identity(1)
```

此例中identity只能接受number类的参数。如果想让identity函数能够接受任意类型的参数，就要实用unknown或any类型。但这样失去了参数类型与返回值相同这个重要信息。

```typescript
function identity(arg: unknown): unknown {
    return arg
}
identity(1)
identity('hello')
```

我们需要保证函数传入参数的类型与返回值的类型相同。

```typescript
function identity<T>(arg: T): T {
    return arg
}

let res = identity<String> ('hello')
let res1 = identity<Number> (2)
let res2 = identity('hello')

// 传入多个参数
function test<T, U>(a: T,b: U ): T {
 return a
}
```

T是identity函数的一个类型参数，它能够捕获identity函数的参数类型并用作返回值类型。Typescript编译器也能够根据函数调用的实际参数自动地推断出类型参数的实际类型。

#### 2.1.2 形式类型参数

##### 2.1.2.1 形式类型参数声明

泛型形式类型参数列表定义的具体语法为`<TypeParameter,TypeParameter,...>`
形式类型参数名必须为合法的标识符。形式类型参数名通常以大写字母开头。推荐给形式类型参数取一个具有描述型的名字。同时还建议形式类型参数名以大写字母T作为前缀，并以此实用后续的U、V等大写字母。

##### 2.1.2.2 形式类型参数默认类型

在声明形式参数类型时，可以为类型参数设置一个默认类型。

```typescript
function test<T = String> (a: T): T {
    return a
}
```

##### 2.1.2.3 可选的类型参数

如果一个形式类型参数没有定义默认类型，那么他是一个必选类型参数，反之，如果一个形式类型参数定义了默认类型，那么他是一个可选的类型参数。在形式参数列表中，必选类型参数不允许出现在可选类型参数之后。
`<T = booleawn, U> // 错误`
`<T, U = boolean> // 正确`

#### 2.1.3 实际类型参数

当显示的传入实际类型参数时，只有必选类型参数时一定要提供的，可选类型参数可以被省略，这时可选类型参数将实使用其默认类型。

```typescript
function test<T, U = Number>(a: T,b: U): T {
    return a
}

test<String>('hello',3)
```

### 2.2 联合类型

### 2.3 交叉类型

### 2.4 类型索引

### 2.5 映射对象类型

### 2.6 条件类型

### 2.7 类型断言

有些时候，开发者比编译器更加清楚某个表达式的类型。所哟我们可以通过类型断言的方式告诉编译器，“相信我，我知道自己在干什么”。

#### 2.7.1 <>类型断言

`<T>`类型断言的语法为`<T>expr`。在该语法中T表示断言的目标类型；expr表示一个表达式。`<T>`类型断言尝试将expr表达式的类型转换为T类型。

```typescript
let str: any = 'hello'
let strLength = (<String>str).length 
```

#### 2.7.3 as T类型断言

as T类型断言的语法如下： `expr as T`。as是关键字；T表示类型断言的目标类型；expr表示一个表达式。as T类型断言尝试将expr表达式的类型转换为T类型。

```typescript
let str: any = 'hello'
let strLength = (str as String).length 
```

#### 2.7.4 类型断言的约束

类型断言不允许在两个类型之间随意做转换而是需要满足一定的前提。

```typescript
let a: boolean = 'hello' as boolean // 报错

function toBoolean(something: string | number): boolean {
// Type 'string | number' cannot be converted to type 'boolean'
    return <boolean>something;
}
```

#### 2.7.5 !类型断言

非空类型断言运算符"!"是TypeScript特有的类型运算符。非空类型断言能够从某个类型中剔除undefined类型和null类型。它的语法如下：`expr!`。在该语法中，expr表示一个表达式，非空类型断言尝试从expr表达式的类型中剔除undefined和null类型。

```typescript
function getLength(v:string | undefined) {
    if (!idDefined(v)) {
        return 0
    }

    return v!.length
}

function idDefined(value: any) {
    return value !== undefined && value !== null
}
```

第6行使用工具函数idDefined判断参数是否为undefined或null。编译器无法识别出第10行中v的类型为string，而是仍然认为v的类型是"string|undefined"，此时需要使用非空类型断言来告诉编译器参数v的类型不是undefined类型。

```typescript
const a: number | undefined = undefined;
const b: number = a!;
console.log(b); 
```

以上 TS 代码会编译生成以下 ES5 代码：

```javascript
"use strict";
const a = undefined;
const b = a;
console.log(b);
```

虽然在 TS 代码中，我们使用了非空断言，使得 const b: number = a!; 语句可以通过 TypeScript 类型检查器的检查。但在生成的 ES5 代码中，! 非空断言操作符被移除了，所以在浏览器中执行以上代码，在控制台会输出 undefined。

### 2.8 类型守卫

类型守卫是一类特殊形式的表达式，具有特定的代码编写模式。编译器能够根据已知的模式从代码中识别出这些类型守卫表达式，然后分析类型守卫表达式的值，从而能够将相关的变量、参数或属性等的类型细化为更加1具体的类型。

#### 2.8.1 typeof类型守卫

typeof运算符用于获取操作数的数据类型。typeof运算符返回值是一个字符串，该字符串表明了操作数的数据类型。
操作数的类型|typeof返回值
---|:--|---:
Undefined类型|"undefined"
Null类型|"object"
Boolean类型|"boolean"
Number类型|"number"
String类型|"string"
Symbol类型|"symbol"
BigInt类型|"bigint"
函数类型|"function"
对象类型|"object"

```typescript
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

#### 2.8.2 instanceof类型守卫


