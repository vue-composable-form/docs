# handleSubmit

This function will receive the form data if form validation is successful.

## **Type**
```ts
type HandleSubmitFn = (
  (data: Object, e?: Event) => void, 
  (errors: Object, e?: Event) => void
) => Function
```

## **Props**
  
- **SubmitHandler**

A successful callback  

```ts
type SubmitHandler = (data: Object, e?: Event) => void
```

- **SubmitErrorHandler**

An error callback.
```ts
type SubmitErrorHandler = (errors: Object, e?: Event) => void
```

## **Usage**
```vue
<script setup>
import { createErrorHandler, createSubmitHandler, useForm } from 'vue-use-form'

const {
  register,
  handleSubmit,
} = useForm({
  mode: 'onChange'
})

const onSubmit = createSubmitHandler((data) => {
  console.log(data)
})

const onError = createErrorHandler((errors) => {
  console.log(errors)
})
</script>

<template>
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
</template>
```

try it one [playground](https://vue-use-form-play.netlify.app/#eNqVUcuO2zAM/BVCFzuAH3fDWbQoWvTeqy5OzGRdWI9SdIog8L8vZcVZ7+OyN5HDGQ5HNzUY74hL0/nqb3BWNeqmLYC+A0GrBpZO7F0mLKeA5cmRiYBWz8w+NHW9RUo/dtfKIo/D6Vp13r9BZY1WxUbxi0IVTZYHgxUGUx7I/Q9IHzRraV6QSkLbIyF9Zcc76oc9cc2s7awK9d37SsQktDYcafAMAXnyT9qm9OAGR8KO8SeRo9+d7Uek4t77Mx3MwI+mGPolfmCGEzkD2dZkpq22R2eDKMb1hOchsLBi8bwoJDVpzLBftfJl2LgeG8ic/SGTZxStefeq52xiCusTW3ned9ztYP+UFkeOG7Ea3Tkh78WWQx9a27PzHGMVPhe7Y0murVOakqMUjEb+iFEqgDbGAd/CYrLyhBe0vJev3YSQrzcVq6FdvtNq4QPYzkgc7WD9xNAIdQ0zzyKUFfJphP+mgbBvgGlCEE8ruz1MzM4CXz0KN/l4oAD3Rpqt03AyXkfn8mzrx0FqfgGrsDoA)


## **Detail**
- You can easily submit form asynchronously with handleSubmit.
```ts
handleSubmit(async data => await fetchAPI(data))()
```
