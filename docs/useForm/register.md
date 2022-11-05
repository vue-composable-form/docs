# register
This method allows you to register **field** and **ref** to bind components for apply validation rules of vue-use-form.
- **Type**

```ts
type RegisterFn<T extends FiledValues, V = T[typeof name]> =
(name: keyof T, options: RegisterOptions<T>) => {
  [options.vModelBinding]: V
  [`onUpdate:${options.vModelBinding}`]: (input: V) => void
  value?: V
  onInput?: (e: InputEvent) => void
}
```

- **Usage**

```vue
<script setup lang="ts">
import { useForm } from 'vue-use-form'

const {
  register,
  formState: { errors }
} = useForm<{ username: number }>()
</script>

<template>
  <input :="register('username')">
</template>
```
- **Details**

`<input :="register()" />` is equal to `<input v-bind="register()"/>`

```html
<input :="register('username')">
<input v-bind="register('username')">
```
- **Playground**

Play register on [playground](https://vue-use-form-play.netlify.app/#eNpVj8FugzAMhl/FyoVWKnBHtNIue4Fdc8kq0zERx3LMpArx7nPomNqj8zvf/3lxY+QkWsfAzXdO5Dq3eALwf0H2roPtpbz9zFjPGeshSSyBd1+qnLu2fU5qnsK9IdRpHO5NYH5Jrca7Alw9re7k3pgby624z1cZWSGjzgxToNvZu2Jw8fSwgQUM824UWGGQFKF6RleePF0TZVssDYK3MSvKqQxl4UODot0DKJIkbwpw3pn9RhcK0XZojp8osF4OR099+1AzERsUo12oaBNAPxLPCp2p7nWHasdUx02+b/+/uPUX0JKCCA==)

## required
A Boolean which, if true, indicates that the input must have a value before the form can be submitted. You can assign a string to return an error message in the errors object.

- **Type**

```ts
type Required = string | boolean
```
- **Usage**

```html
<input :="register('username', {
  required: true
})"/>
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
```html
<input
  type="number"
  :="register('count', {
    max: {
      value: 150,
      message: 'The maximum value of count is 150!'
    },
    valueAsNumber: true
  })"
/>
```
## min

The minimum value to accept for this input.

- **Type**
```ts
type min = number | { value: number; message: string }
```

- **Usage**
```html
<input
  type="number"
  :="register('count', {
    min: {
      value: 20,
      message: 'The minimum value of count is 150!'
    },
    valueAsNumber: true
  })"
/>
```

## pattern

The regex pattern for the input.
- **Type**
```ts
type pattern = RegExp | { value: RegExp; message: string }
```

- **Usage**
```ts
// RegExp
register('test', {
  pattern: /[A-Za-z]{3}/
})

// { value: RegExp; message: string }
register('test', {
  pattern: {
    value: /[A-Za-z]{3}/,
    message: 'The max length of test field is 3.'
  }
})
```

## disabled
Set disabled to true will disable input control.

- **Type**
```ts
const disabled: boolean = false
```

- **Usage**
```ts
register('disabled', {
  disabled: true
})
```

- **Detail**

The `disabled` attribute only takes effect by setting the attribute of `input/select/textarea` like `setAttribute/removeAttribute` and not updating its inputValue.


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
    :="register('test', {
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
    :="register('test', {
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


## Examples
Try it on [playground](https://vue-use-form-play.netlify.app/#eNqtU8GO2jAQ/ZVRLgGJOFKPUViVXXVPq15W6qXpwSQDuE1s13ZoEeLfO3YSSIEuQt2bNfPem5k3nn0kGq2MSxqu2XerZJRF+0ICFH3CFlEGIeJj2xaT1mKyUqbxiSLaOKdtlqbjTKJrvmMSXS1WO8a1/itLZYpoNlK8U4iZVjrRIEPbJEujflk0F5opBbdoEoOyQoPmnhpn1Is6vsyhkIdoFi20ZiRGpuW2NEI7sOha/VDIzj3YA9V5pjJwgJVRDcTj2nEhC1kqaT3Q4FpYh2YGGy6rGl/bZSMc8eaDxiTsocIVb2v3hdct2uNuVsJY95k3mEEc907U/CJUcodrZXbj0AbLH0v1O4Ov3/qQ4ZVQHhJGpeBheupUyb6zOUwq7vgU5g9dFz6vamS1WncZIp5Yn4xRxpPQP+x1Wp8LxDztPCU3c4cN7ckhvQFy7x18tKENpg1uUbo5rXfk22RoczaUnk6mRRT4pCCkbh1kRBpsn8RHC+NZWMfPVhisMnCmRSAHIqAWStyomv4FMZ89HiQRKJWS8hvawyqCdCPkC8q122Tw4ZrwC4Gv6FqssTwXHhYan4YjqNJOKAlb/0cITqnXQGaM5WmX/Cd4QeinXhUWN+GPY/jjGZxWGOq+bc7wA/0M4Hbayw4xiowaC3b8rw51/C46T7fXHg5pLBMC98x0U+HmNDcVrs7RY7sbO5bIU396/iDT0UVGhz/E+xf4)
```vue
<script setup>
import { useForm } from 'vue-use-form'

const { register, handleSubmit } = useForm({
  defaultValues: {
    firstName: '',
    lastName: '',
    category: '',
    checkbox: [],
    radio: ''
  }
})

const onSubmit = (data) => {
  console.log(data)
}
const onError = (errors) => {
  console.log(errors)
}
</script>

<template>
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    <input :="register('firstName', { required: true })" placeholder="First name">

    <input :="register('lastName', { minLength: 2 })" placeholder="Last name">

    <select :="register('category')">
      <option value="">
        Select...
      </option>
      <option value="A">
        Category A
      </option>
      <option value="B">
        Category B
      </option>
    </select>

    <input :="register('checkbox')" type="checkbox" value="A">
    <input :="register('checkbox')" type="checkbox" value="B">
    <input :="register('checkbox')" type="checkbox" value="C">

    <input :="register('radio')" type="radio" value="A">
    <input :="register('radio')" type="radio" value="B">
    <input :="register('radio')" type="radio" value="C">

    <input type="submit">
  </form>
</template>
```

