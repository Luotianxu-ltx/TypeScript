# TypeScript

[toc]

## 一、基础类型

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
