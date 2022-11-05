# formState
This object contains information about the entire form state. It helps you to keep on track with the user's interaction with your form application.

- **Type**
```ts
import type { toRefs } from 'vue'

type FormState<T> = toRefs<{
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
}>
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

- **Detail**

The reason that `formState` can keep reactivity is use [toRefs](https://vuejs.org/api/reactivity-utilities.html#torefs), so you can access these props by `xxx.value`
```ts
const {
  register,
  formState: { errors },
  isExistInErrors,
} = useForm({
  mode: 'onChange'
})

// access with `.value`
console.log(errors.value)
```
You may hate the way of access these props with `.value`, if so, you can use with [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html#reactivity-transform)
```ts
const {
  register,
  formState: { errors },
  isExistInErrors,
} = $(useForm({
  mode: 'onChange'
}))

// no need to access with `.value`
console.log(errors)
```


## isDirty
Set to true after the user modifies any of the inputs.
 **Type**

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
An object with the user-modified fields. Make sure to provide all inputs' defaultValues via useForm, so the library can compare against the defaultValues.

- **Type**
	
```ts
const dirtyFields: Record<string, boolean> = {}
```

- **Usage**
```ts
const {
  formState: { dirtyFields }
} = $(useForm())
```


## defaultValues
The value which has been set at useForm's defaultValues or updated defaultValues via reset API.

- **Type**
```ts
const dirtyFields: Record<string, boolean> = options.defaultValues || {}
```

- **Usage**
```vue
<script setup>
import { useForm } from 'vue-use-form'

const {
  register,
  formState: { defaultValues },
  reset,
} = $(useForm({
  mode: 'onChange'
}))
</script>

<template>
  {{ defaultValues }}
  name: <input :="register('name', { required: true })">

  <button @click="reset({ name: 'a' })">
    reset
  </button>
</template>

```

try it on [playground](https://vue-use-form-play.netlify.app/#eNpVkUFPwzAMhf+KlUuHtLX3qkwgNATnSZxyyVp3C7RJSBzEVPW/46Qb2g6V0mfnvc/OJPTorKfNqFz5GawRtZikAZCXQpCihqwk7SfiJgbc9NaPqSDFiciFuqpuKxs3qHNpkAbdn0vl3F2VY6RIhrM0s1iLZ+dKrnNwE1qvHUFAim4rzUIAE7QeFeHOe+vflOkG9OuLto+HUdO/yBmvHAEz9N6OUNzmFtJI01oTkmPK93jUgdK19Jda9sSWPC502Ks40IcaIgaY16lBh90v97+bzBGydsrBC0QWPDI8n2Z4vMKs8vZG27FzYc0L3zkiw8wPCaiplqF53IZw5M0R8hlgmu4gZt5WegOjRvZptHGRoH6U4jrFqkilYs30Hr+j9tjVQD4icJCosmf6mkMksgae2kG3X9mAkVfTYlyoIrVvs9hUS29iq27gxPwHMjvG1w==)


## isSubmitted
Set to true after the form is submitted. Will remain true until the reset method is invoked.

- **Type**
```ts
const isSubmitted: boolean = false
```


- **Usage**
```vue
<script setup>
import { createSubmitHandler, useForm } from 'vue-use-form'

const {
  register,
  formState: { isSubmitted },
  handleSubmit,
  reset,
} = useForm({
  mode: 'onChange'
})

const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})
</script>

<template>
  {{ isSubmitted }}
  <form @submit.prevent="handleSubmit(onSubmit)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
  <button @click="reset({})">
    reset
  </button>
</template>
```

try it on [playground](https://vue-use-form-play.netlify.app/#eNp1ksFu2zAMhl+F0MUKkNh3wyk6DB22c6+6qDbTarMlTaKLBYbffZTkpC6w3WSS/8efpBdhJu8CnSbt65/RWdGKRVkAtSWiEi3kSIq9z3iaI54uLkwpocQbkY9t0+wzJz/qa22RRnO51tr7T1luo0QCrsqu4ii+eF9znht3sQ/GE0Sk2T8oWxzAAn1ATfgUggvftR1GDMct9jy/TIbuQe7xjVvACpfgJqj2fStlle2djYmY+gd8NZGSLH2lkmdiJI8LJhYw4QDrMaVNfPrD1T9sdhFz7C23LZU5EJCt82uF882KzLub3MDcytmvrHlFtrIePuw4Wxis+sdUUg6a9AHOD+UOmmMkq1gkce57jLFi3Gdk9nkn7ncnJeYZ/oe8aDPi8EHsmnIXvkhHOPFxCfkNsCy7Pa18ToAurREeC6n2Ad/R0pl/k92q5G3e483mQR6UyEgAqydeVWesnwlalt7OJKuUqo58noC/ZxNwaIHCjMA2RbPJu5eZyFmgq0cWFyMML4+uKelc3DXJbHluqsd+NP2v3JQvKZdE3sA5UmR3Rtfs9iHWv2lyKGk=)


## isSubmitSuccessful
Indicate the form was successfully submitted without any Error been thrown within the handleSubmit callback.
Will remain true until the reset method is invoked or submit failed.
- **Type**
```ts
const isSubmitted: boolean = false
```


- **Usage**
```vue
<script setup>
import { createSubmitHandler, useForm } from 'vue-use-form'

const {
  register,
  formState: { isSubmitSuccessful },
  handleSubmit,
  reset,
} = useForm({
  mode: 'onChange'
})

const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})
</script>

<template>
  {{ isSubmitSuccessful }}
  <form @submit.prevent="handleSubmit(onSubmit)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
  <button @click="reset({})">
    reset
  </button>
</template>
```

try it on [playground](https://vue-use-form-play.netlify.app/#eNp1Uk1vnDAQ/SsjX/BKu3BHbJSqStWe9+qLA0PiFmzXH1FXiP/esc1uiJTczDy/D79hYWq2xoXTLG392xvNWrYIDSA2wAvWQp6k2VvEU/R4Go2bEyDYawjWt02zR052ktdaY5jUeK2ltR9QshEsCa5Cr+zIvllbE07Gne+dsgE8hmgfhC4JYIHeoQz45JxxP6UeJnTHbXaJz7MK9yF5/CALWGF0ZoZq71sJLXRvtE+Kyd/hi/Ih0dJXunIJJHlMX8o//SPwl86mPs9es0txzAOHlJROK5xvzjxXNZsBW6iM/k6cFyTn9fDubnTRINYnj+B8kEEe4PxQapc0C7zyheJj36P3Fcl9lMw574r7qjjH/IavJEepJhzeFbumrIEW0AWcaZcB6QywLPeOauVL6EvJM8ZppXUCdOkKPBbp2jp8Qx3O9JvsuuO3Ao633Ad+ECx7AGg5U3ed0jYGaIl6WxOvElQdaXsO/0blcGghuIhAuVmz0bvnGILREK4WiVyCkHg5dE2B8+WuSWHLcWM99pPq/2RTWi1fkvImnCeFdtfoml1BbP0PA9kpEA==)


## submitCount
Number of times the form was submitted.
- **Type**
```ts
const submitCount: number = 0
```

- **Usage**
```vue
<script setup>
import { createSubmitHandler, useForm } from 'vue-use-form'

const {
  register,
  formState: { submitCount },
  handleSubmit,
} = useForm({
  mode: 'onChange'
})

const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})
</script>

<template>
  {{ submitCount }}
  <form @submit.prevent="handleSubmit(onSubmit)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
</template>
```

try it on [playground](https://vue-use-form-play.netlify.app/#eNptUc1ugzAMfhUrF0AqcEd02lRp2r3XXFJwW6aSZIlTqUK8+xxSum7aLfbn78fOJIbRGkflqGz16Y0WjZikBpB3wEvRwNKJvWvAMngsj8aNEZDiTGR9U9fPSGkv6lZppMtwvFXK2l8o20gRBWepZ7ERb9ZWjLNx6zs3WAKPFOyL1CkBTNA5VIT7cBgH+lC6v6DbAOu9sxzMcHRmhOzZI5Na6s5oz+xo5fA0eGJWLOLAnliQFwO/iO5M0ATzAp8Xg2S2NBxyIH7NsF1N80V1ND1rZEbvmHNCNp2LH2Ojkwaz/smf570iVcD2JSVU3KM8S3E4Vdeh9xnLRcm2Tpfhm3BBOPKBCbkCmP6swEcFaOOK8JqAyjq8oqYtf9bTavmar8gLKRYtAK1G3qgdtA0EDTPWw+VZhLINX8zhVxgc9g2QCwicb2W3h0BkNNDNInOT/QOFe9D7bJ2GF7CtY2B+tvVjOTF/A6R+6E8=)


## isValid
Set to true if the form doesn't have any errors.
- **Type**
```ts
const isValid: boolean = false
```

- **Usage**
```vue
<script setup>
import { createErrorHandler, createSubmitHandler, useForm } from 'vue-use-form'

const {
  register,
  formState,
  handleSubmit,
} = useForm({
  mode: 'onChange'
})

const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})

const onError = createErrorHandler((errors) => {
  alert('submit failed')
})
</script>

<template>
  {{ formState.isValid }}
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
</template>

```

try it on [playground](https://vue-use-form-play.netlify.app/#eNp1UcFO7DAM/BUrl2al3fZeddF7QiDuSJxyCa0XgtokJA7Squq/4zR0WSS4xR7PeDKehZm8C3SYtK/forOiFbOyAOoLiEq0sHZy7yPhIUU8nFyYMqDEK5GPbdNcIwc/6nNtkUZzOtfa+x8or1EiCy7KLmIv/ntfM86Lu9gH4wkiUvI3yhYHMEMfUBPeheDCg7bDiGH/1XtMz5OhS5N33PMKWOAU3ATV9d5KWWV7ZyMr5vUBX0wkZuUiDzwSC67V66pXtLmxwHFTlit1cgO2UDl7y5MvyMrL7lvd2cJk1i8mpRw06R0cb4oNzT2SVSyUmPoeY6xY7qfk+vmL4nUUUmKu4l+SJ21GHDbFrikhc7xcEE58K0KuAOb5O4baxCc9mgEWvhJAlwH4VxRrH/ADLR35+ldBye3f+83uTu6UWKUBrJ44ss5Ynwhapm7xyypD1Z7PHPA9mYBDCxQSAtvd2N1zInIW6OyRucXHBQWObW2U2aYMr2DXZOf87JrLX8XyCV3gCLQ=)


## isValidating
Set to true during validation.
- **Type**
```ts
const isValidating: boolean = false
```

- **Usage**
```vue
<script setup>
import { createErrorHandler, createSubmitHandler, useForm } from 'vue-use-form'

const {
  register,
  formState: { isValidating },
  handleSubmit,
} = useForm({
  mode: 'onChange'
})

const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})

const onError = createErrorHandler((errors) => {
  alert('submit failed')
})

const validate = async () => {
  await new Promise((resolve) => {
      		setTimeout(() => resolve(true), 3000)
      	})
  return true
}
</script>

<template>
  {{ isValidating }}
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    name: <input
      :="register('name', {
        required: true,
        validate: {
          async pass() {
            await validate()

            return true
          }
        }
      })"
    >
    <button type="submit">
      submit
    </button>
  </form>
</template>

```

try it on [playground](https://vue-use-form-play.netlify.app/#eNp1U02L2zAQ/SuDL1YgiRd6C87SUlp6LGzpSRetM8mq2JIqjbKE4P/ekRQnTujqJM3HezNvRudKD856Wg3Krf8Ea6pNdZYGQF4cQVYbyJZkO0ZcxYCrvfVDcsjqjciFTdPMPSvXq9PaIPV6f1or5+68TCOrBDhKM1bL6otza/YzcRs6rx1BQIruWZpSAZyh86gIv3lv/Q9ldj365cX2El8HTVcjc3xnChhh7+0A9Zy3lkaazprAiIne40EH4qz0SAEvxIDcLOjwW/V6p0ibA4zZ/5YZChsbRthOXCKDDXbHqbU1XznygMw1Lm581pRMzvpP2UIwlVrA9rkUpthGog4lJcSuwxBqhruHzHJcEefiCIHpFT6C3Cvd4+4R8Vh6RoZU4WQ6ELP8d8V5Bt/hJ+uqAwrhMdj+iLeYvCEkiaf3Sw9oI4mCcIkU5CMulvDp6emJaaeEVEIaBkVvIIVwVdK0TdkF3gJ+EA68UoT8Ajg/DojDAdo0QfhcOlw7j0c0tOX9nA1OTHNYTvItxEJWGRXAqIFH2GrjIk3lbRhh2hNRp4h6ees2lf03ao+7Ta48b0o5k5jXv1NOEdapEFiaO8+k8ZTIhXHnc/+dRDdz7v7hyprmHwZw6a19jUSWk08OuaWi0rVz4CXLhhLblODsbJukK1/b5jqEavwH+Ehk5A==)


## errors
An object with field errors. There is also an ErrorMessage component to retrieve error message easily.
- **Type**
```ts
interface ErrorMessage {
  type: string
  message: string
}

const errors: Record<string, ErrorMessag> = {}
```

- **Usage**
```vue
<script setup>
import { createErrorHandler, createSubmitHandler, useForm } from 'vue-use-form'

const {
  register,
  formState: { errors },
  isExistInErrors,
  handleSubmit,
} = useForm({
  mode: 'onChange'
})

const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})

const onError = createErrorHandler((errors) => {
  alert('submit failed')
})
</script>

<template>
  {{ errors }}
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
</template>

```

try it on [playground](https://vue-use-form-play.netlify.app/#eNp1U02L2zAQ/SuDL1YgiRd6C87SUlp6LGzpSRetM8mq2JIqjbKE4P/ekRQnTujqJM3HezNvRudKD856Wg3Krf8Ea6pNdZYGQF4cQVYbyJZkO0ZcxYCrvfVDcsjqjciFTdPMPSvXq9PaIPV6f1or5+68TCOrBDhKM1bL6otza/YzcRs6rx1BQIruWZpSAZyh86gIv3lv/Q9ldj365cX2El8HTVcjc3xnChhh7+0A9Zy3lkaazprAiIne40EH4qz0SAEvxIDcLOjwW/V6p0ibA4zZ/5YZChsbRthOXCKDDXbHqbU1XznygMw1Lm581pRMzvpP2UIwlVrA9rkUpthGog4lJcSuwxBqhruHzHJcEefiCIHpFT6C3Cvd4+4R8Vh6RoZU4WQ6ELP8d8V5Bt/hJ+uqAwrhMdj+iLeYvCEkiaf3Sw9oI4mCcIkU5CMulvDp6emJaaeEVEIaBkVvIIVwVdK0TdkF3gJ+EA68UoT8Ajg/DojDAdo0QfhcOlw7j0c0tOX9nA1OTHNYTvItxEJWGRXAqIFH2GrjIk3lbRhh2hNRp4h6ees2lf03ao+7Ta48b0o5k5jXv1NOEdapEFiaO8+k8ZTIhXHnc/+dRDdz7v7hyprmHwZw6a19jUSWk08OuaWi0rVz4CXLhhLblODsbJukK1/b5jqEavwH+Ehk5A==)
