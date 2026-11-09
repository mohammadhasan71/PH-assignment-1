# Type Narrowing

### Introduction

In TypeScript, sometimes we may use one variable for different types of values. For example, a product price can come as a number or a string from different sources. But we cannot use the same operation for both types. So, we need to check the type first. This is called Type Narrowing.

### 1. Using typeof

We can use `typeof` to check basic types like string and number.

```ts
function showPrice(price: string | number): void {
  if (typeof price === "string") {
    console.log("Price: " + price);
  } else {
    console.log(price.toFixed(2));
  }
}
```

Here, if the price comes as a string, we just show it. But if it is a number, we format it with two decimal places.

### 2. Using instanceof

We can use `instanceof` to check if an object belongs to a specific class.

```ts
class Order {
  getDetails(): void {
    console.log("This is a customer order");
  }
}

function checkOrder(data: Order | Date): void {
  if (data instanceof Order) {
    data.getDetails();
  } else {
    console.log(data.toDateString());
  }
}
```

Here, we check whether the data is an Order object or a Date object. Based on that, we call the correct method.

### 3. Using the in Operator

The `in` operator checks if a property exists inside an object.

```ts
function showUser(info: { email: string } | { phone: string }): void {
  if ("email" in info) {
    console.log(info.email);
  } else {
    console.log(info.phone);
  }
}
```

Here, some users may provide an email and others may provide a phone number. We check which property is available before using it.

### Conclusion

So basically, Type Narrowing helps us check what type of value we are working with. `typeof` is for basic types, `instanceof` is for class objects, and `in` is for checking object properties. It helps us use the correct methods without getting unnecessary type errors.