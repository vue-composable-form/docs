---
next: ./useForm/useForm
---

# Getting Started

vue-use-form is a composition api form validator for vue, which is inspired by [react-hook-form](https://react-hook-form.com/)

I love `react-hook-form` usage, it's simple and efficient

## Example
for example, if you want to proxy a form component state in `react-hook-form`, you just need to write these code simply

Assumed we have an interface
```ts
interface Inputs {
  firstname: string
}
```

In `react-hook-form`
```tsx
import { useForm } from 'react-hook-form'

function App() {
  const { register } = useForm<Inputs>()

  return (
    <input {...register('firstName')} />
  )
}
```

In `vue-use-form`,

```vue
<script setup lang="ts">
import { useForm } from 'vue-use-form'

const { register } = useForm<Inputs>()
</script>

<template>
  <input :="register('firstname')">
</template>
```

The usage of `vue-use-form` is very similar to `react-hook-form`.`vue-use-form` inherits its power, flexibility and ease of use.

