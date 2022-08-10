# what is vue-use-form

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

```tsx
const { register } = useForm<Inputs>()

<input {...register('firstName')} />
```

In `vue-use-form`,

```vue
<script setup lang="ts">
const { register } = useForm<Inputs>()

const [firstNameField, firstNameRef] = register('firstname')
</script>

<template>
  <input v-model="firstNameField" ref="firstNameRef" />
</template>
```

## v-form
Maybe you will see, it's very troublesome, it's Because of the mechanism of vue, but we provide a directive `v-form` that can help you easy to use it
::: warning
directive `v-form` can work because we write a compiler to transform it
:::

```vue
<script setup>
const { register } = useForm<Inputs>()
</script>

<template>
  <input v-form="register('firstName')" />
</template>
```



