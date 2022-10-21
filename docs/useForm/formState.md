# formState
This object contains information about the entire form state. It helps you to keep on track with the user's interaction with your form application.

- **Type**
```ts
interface FormState<T> {
  isDirty: boolean
  dirtyFields: FieldNamesMarkedBoolean<T>
  isSubmitted: boolean
  isSubmitSuccessful: boolean
  submitCount: number
  isSubmitting: boolean
  isValidating: boolean
  isValid: boolean
  defaultValues: Partial<DefaultValues<TFieldValues>>
  errors: FieldErrors<T>
}
```
- **Usage**
```vue
<script setup>
import { useForm } from 'vue-use-form'

const {
  register,
  formState: { errors },
  isExistInErrors,
} = useForm({
  mode: 'onChange'
})
</script>

<template>
  isError: {{ isExistInErrors('name') }}
  <br>
  errors: {{ errors }}
  <br>
  <input :="register('name', { required: true })">
</template>
```

Try it on [playground](https://vue-use-form-play.netlify.app/#eNqVUctuwkAM/BVrLwEpj3sUKlUtlXrudS8BDGzFPup1aFGUf683gYrCidvaY8+MZ3tlbPDEhW1D+Rm9U7XqtQPQZyBqVcPYSb1jh0UXsdh6sgnQas8cYl1V10gRDu2pdMgHsz2VbQj/UJHRKr9ifJCopM6xsVhitMWK/HdEuuOspHlEKgjdBgnpEY2b1TudJDNoN6hcPYdQCpmE1sQ1mcAQkbvwpN2UHvQgOm8iAwNsyVvIrrUzcZuydmvvogyngnBnIiON16ShD24Z5Q8AiTzFHEx8NcSnYZwwcfkj8+9uOaHiCxYX0dnIaP1G9jPvXvat22EmI3PtmmpyLF6lYLSSA6NUI2ciE83+ln+WudZiNodBEgBoVgTVuDOZSyvT6xZvjAsdQ73Q6nLhmSuX0wi/OkO4qYGpQxB/Sraa6s+WGn4B6i7uKA==)

- **Warning**

Please don't destructure `Value Type` variable like `isSubmitting` `isSubmitted` `isDirty` because when you destructure them, the reactivity will be invalid. But like `errors` `dirtyFields` you can destructure them, because `reactive` can proxy them deeply.

```ts
const {
  // Wrong deconstruction, because isSubmitted is `Value Type`
  formState: { isSubmitted }
} = useForm()

const {
  // Right
  formState: { errors }
} = useForm()
```

<!--
## isDirty

- **Type**

```ts

```

- **Usage**
  ```ts

```
-->
## isDirty
Set to true after the user modifies any of the inputs.
- **Type**

```ts
const isDirty: boolean = false
```

- **Usage**
```ts
const {
  formState,
  setValue,
} = useForm({ defaultValues: { test: '' } })

// formState.isDirty: true
setValue('test', 'change')

// formState.isDirty: false because there getValues() === defaultValues
setValue('test', '')
```

Try it on [playground](https://vue-use-form-play.netlify.app/#eNqVUctqAzEM/BXhi1vI7t6XtFAo/YFCT75sE23isn4ga1OC8b9XzjYhbU65WTPSjDXKyroYiBs3xPYrBa96lY0HML9EMqqHE1Kxw4zNnLAZA7lKGLVnjqnvumumidNwbD3yZMdjO8T4hxUbo1ZXincKtTR7tg5bTK75pPCdkG40OwEPSA2h3yIh3ePxb/TGp9oU44taqZcYWxGT0NZpQzYyJOQ5Phu/pAcZxOdNbKDASMGBvvbW8tuatd8En6S5FhV/54HxtI7IfQzTvBSEO5sY6VTICFOY5F3g6ezykGGL4zBPy1SS0wFj4h60lh+UR+ONP8s86ErpFeSKdx3Y9GqJjz0wyVX82fvSpzf7we9QS/ctV9F1t6Qg+0vB6CRbRqkAcr4sViS8dXdhVfkBwhPiCA==)

## dirtyFields

- **Type**
	
An object with the user-modified fields. Make sure to provide all inputs' defaultValues via useForm, so the library can compare against the defaultValues.
```ts
const dirtyFields: Record<string, boolean> = {}
```

- **Usage**
```ts
const { formState: { dirtyFields } } = useForm()
```
