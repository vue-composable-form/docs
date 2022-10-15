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
type maxLength = number | { value: number; message: string }
```

- **Usage**
```ts
register('username', {
  mixLength: {
    value: 3,
    message: 'The minimumlength of username is 3!'
  }
})
```
