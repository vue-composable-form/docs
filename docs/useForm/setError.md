# setError

The function allows you to manually set one or more errors.

## **Type**
```ts
export interface FieldError {
  type: string
  message?: string
}

export type UseFormSetError<FieldName> = (
  name: FieldName,
  error: FieldError,
  config?: { shouldFocusError: boolean }
) => void
```


## **Props**

- name **`:string`** inputs's name
- error **`:FieldError`** Set an error with its type and message.
- config **`:{ shouldFocusError: boolean } = { shouldFocusError: true }`** Should focus the input during setting an error. This only works when the input's reference is registered.

## **Usage**
```ts
setError(
  'registerInput',
  { type: 'custom', message: 'custom message' },
  { shouldFocusError: true }
)
```

try it on [playground](https://vue-use-form-play.netlify.app/#eNqVUstu2zAQ/JWFLpIBS+rZkIMURYL2nGPVAy2tbbbio3y4NQz9e5akZCuvQ27kLndmdoaXjAutjCsF09Vvq2S2yS6tBGinhm2zDcRKqJ08lt5iuVdGhEabHZ3TdlPXy06pB3auJLqB788V0/pFl2jabL1A/CRQZbx0XGCFVpQ7o/5ZNG8wayqe0JQGZY8GzWc4Xo2+4Qk0YyvHbJ191boiMDKtsZ3h2oFF5/VdK5N7cIHOIHP4YIwy35nsBzTrqfbkd4K7a5EEPZIeGGFvlIB8KTJvZSs7JW1ADPwGD9y6MBZu4cmTI0iKCjBQWRijHdw+/KeHP2QUYGPtGBkTeyyQ5tiOl25AZtJr2hG2s64ifgKheiLJlfxGKAckXePqpk3JhEpT76xYFD1zbAXbu/ShGNVckds0Yn3XobU5wb2EjFquiEsjiyLt+hHknvEB+xmxqVNEFE7jUFDsDukMcLl5RrECNMFOuE8glTZ4Qum29HsWvhXzqutZ4apYtVnEA5BMkEsNl9o72NDoHFeRh1YVfPj55Vd1YoPHfE2hGfzrucF+A854BNKb1RNYs/POKQnurJGgkiyiSoemTu34uKmD9HiM12nyvht49yfMTkEXofuulOhHpKKUO2+dEqRPUDDscCvNhXz6ZRewR+WH/lFRPzLMe7Ty5srMnpReZTf1Io1sfAZVj5mz)

## **Detail**

- shouldFocus doesn't work when an input has been disabled.

- Can be useful in the handleSubmit method when you want to give error feedback to a user after async validation. (ex: API returns validation errors)

- This method will force set isValid formState to false, however, it's important to aware isValid will always be derived by the validation result from your input registration rules or schema result.
