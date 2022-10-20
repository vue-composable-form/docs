---
next: 'useForm | vue-use-form'
---

# Getting Started

vue-use-form is a composition api form validator for vue, it is inspired by [react-hook-form](https://react-hook-form.com/)

I love `react-hook-form` usage, it's simple and efficient

## Example
for example, if you want to proxy a form component state in `react-hook-form`, you just need to write these code simply

Assumed we have an interface
```ts
interface Inputs {
  firstName: string
}
```

In `react-hook-form`
```tsx
const { register } = useForm<Inputs>()

<input :="register('firstName')} />
```

In `vue-use-form`,

```vue
<script setup lang="ts">
const { register } = useForm<Inputs>()
</script>

<template>
  <input :="register('firstname')" />
</template>
```
