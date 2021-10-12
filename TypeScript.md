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

### 1.4 Nullable

#### 1.4.1 undefined

```typescript
const test: undefined = undefined
```

#### 1.4.2 null

```typescript
const test: null = null
```

### 1.5 void

void类型表示某个值不存在，该类型用作函数的返回值类型。若一个函数没有返回值，那么该函数的返回值类型为void类型。

```typescript
function sayHai(): void {
    console.log('你好！');
}
```

### 1.6 Symbol类型

```typescript
const flag: symbol = Symbol()
let obj = {
    [flag]: 'Hello world!'
}
console.log(obj[flag]);
```

### 1.7 Enum类型

枚举类型由零个或多个枚举成员构成，每个枚举成员都是一个命名的常量。

#### 1.7.1 数值型枚举

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

#### 1.7.2 字符串枚举
