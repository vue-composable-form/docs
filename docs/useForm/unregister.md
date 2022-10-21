# unregister
This method allows you to unregister a single input or an array of inputs. It also provides a second optional argument to keep state after unregistering an input.

- **Type**
```ts
interface Options {
  keepDirty?: boolean
  keepError?: boolean
  keepValue?: boolean
}

type UnregisterFn = (name: string, options?: Options)
```

- **Usage**'
```ts
const { unregister } = useForm()

unregister('name', {
  keepDirty: true,
  keepError: true,
  keepValue: true
})
```

- **Playground**

Try it on [Playground](https://vue-use-form-play.netlify.app/#eNqVUk1v2zAM/SuEL3aA2L4HbtdhH9i9wE4GBsdmWq22pFFUhiDwfx8lxYnXbofepEe9x8dHnTM1WUNcTp2tfjqjs112bjVAeym4NttBRAJ29Fh6h+XB0BQKbfbMbN2urteV0o7dqdLIozqcqs7av6rSps22K8V3ClXkNasJK3RTuSfz2yG90awFPCKVhHpAQnpPj1fUN31Cm7nVc7bNPlpbiZiE1rielGVwyN7etzqlB2foCTvGL0SGvnV6GJG2F+zR7yfFV1AMfRU/MMOBzAT52mTe6lb3RrugGPoTPinHgRZuUmEyYwzA62stXAP7kaWbbBEwuHAwx8pzbJxMCDDD3WKhiPuezCCk3OhP8vIJxcK8CTYWI0YnrvD+MU9RDB13G7i7T7+nE4yL3CWK832PzuUimEQXyZjTVXGdWlEk9/+TPHRqxGFRbOq0D9lEwzjJjhnlDHA+X8L6UP04KBwHN8suAZoQFDwkscoSHlHznXyZVUrFMvJ2cbopNm0WdQF0N0lejdLWM+yEuuyhyEMp38oCCH95RTjsgMkjiNOsvtCbvWc2GvhkUcjJiIinQ1Oncnzc1MFsOl5YD/2o+hfh3dZ/axseviDaz4r4lFrHHxCwOMYr7Hs3ehklYDHNZcKbdnJxtdTUq4yz+Q+deoYD)

## KeepDirty
if set to true, isDirty and dirtyFields will be remained during this action.

- **Type**
```ts
const keepDirty: boolean = false
```
- **Usage**
```html
<input :="register('test', { keepDirty: true })" />
```


## keepError
if set to true, errors will not be updated.

- **Type**
```ts
const keepError: boolean = false
```
- **Usage**
```html
<input :="register('test', { keepError: true })" />
```

## keepValue
if set to true, **field's** current value will not be updated.

- **Type**
```ts
const keepValue: boolean = false
```
- **Usage**
```html
<input :="register('test', { keepValue: true })" />
```
