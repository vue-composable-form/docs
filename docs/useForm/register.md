# Register
This method allows you to register **field** and **ref** to bind components for apply validation rules of vue-use-form.
- **Type**

```ts
type RegisterFn<T extends FiledValues> =
(name: keyof T, options: RegisterOptions<T>) => [ComponentRef, FieldRef]
```

- **Usage**

```vue
<script setup lang="ts">
import { useForm } from 'vue-use-form'

const {
  register,
  formState: { errors }
} = useForm<{ username: number }>()

const [usernameField, usernameRef] = register('username')
</script>

<template>
  <input ref="usernameRef" v-model="usernameField">
</template>
```
::: tip
You may find it troublesome to bind manually, if you want to bind automatically, please see **virtual directive**: [v-form](../v-form/v-form)
:::
```html
<input v-form="register('username')" />
```


## required
A Boolean which, if true, indicates that the input must have a value before the form can be submitted. You can assign a string to return an error message in the errors object.

- **Type**

```ts
type Required = string | boolean
```
- **Usage**

```ts
register('username', {
  required: true
})
```

## maxLength

The maximum length of the value to accept for this input.

- **Type**
```ts
type maxLength = number | { value: number; message: string }
```

- **Usage**
```ts
register('username', {
  maxLength: 20
})

register('username', {
  maxLength: {
    value: 20,
    message: 'The maximum length of username is 20!'
  }
})
```

## minLength

The minimum length of the value to accept for this input.

- **Type**
```ts
type minLength = number | { value: number; message: string }
```

- **Usage**
```ts
register('username', {
  minLength: {
    value: 3,
    message: 'The minimumlength of username is 3!'
  }
})
```

## max

The maximum value to accept for this input.

- **Type**
```ts
type max = number | { value: number; message: string }
```

- **Usage**
```ts
register('count', {
  max: {
    value: 150,
    message: 'The maximum value of count is 150!'
  }
})
```
## min

The minimum value to accept for this input.

- **Type**
```ts
type min = number | { value: number; message: string }
```

- **Usage**
```ts
register('username', {
  min: {
    value: 3,
    message: 'The minimumlength of username is 3!'
  }
})
```

## pattern

The regex pattern for the input.
- **Type**
```ts
type pattern = RegExp | { value: RegExp; message: string }
```

- **Usage**
```ts
register('test', {
  pattern: /[A-Za-z]{3}/
})
```

## validate
You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. This function will be executed on its own without depending on other validation rules included in the required attribute.
- **Type**
```ts
type ValidateFn = (val: unknown) =>
(boolean | string) | Promise<boolean | string>

type validate = ValidateFn | Record<string, ValidateFn>
```

- **Usage**
```ts
register('test', {
  validate: value => value === '1'
})
// object of callback functions
register('test1', {
  validate: {
    positive: v => parseInt(v) > 0,
    lessThanTen: v => parseInt(v) < 10,
    checkUrl: async () => await fetch(),
  }
})
```

## valueAsNumber
Returns a Number normally. If something goes wrong `NaN` will be returned.
- **Type**
```ts
const valueAsNumber: boolean = false
```

- **Usage**
```vue
<template>
  <input
    v-form="register('test', {
      valueAsNumber: true,
    })"
    type="number"
  >
</template>
```

## valueAsDate
Returns a Date object normally. If something goes wrong `Invalid Date` will be returned.

- **Type**
```ts
const valueAsDate: boolean = false
```

- **Usage**
```vue
<template>
  <input
    v-form="register('test', {
      valueAsDate: true,
    })"
    type="date"
  >
</template>
```

## setValueAs
Return input value by running through the function.

- **Type**
```ts
type SetValueAs = (value: any) => any
```

- **Usage**
```ts
register('test', {
  setValueAs: v => parseInt(v)
})
```

