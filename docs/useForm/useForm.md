# useForm

useForm is a custom hook for managing forms with ease. It takes one object as optional argument.

```ts
declare function useForm<TFieldValues extends FieldValues = FieldValues>(
  props?: Partial<UseFormProps<TFieldValues>>
): UseFormReturn<TFieldValues>;
```

## Options

```ts
interface UseFormProps<TFieldValues extends object> {
    mode: Mode;
    reValidateMode: Exclude<Mode, 'onTouched' | 'all'>;
    defaultValues: DefaultValues<TFieldValues>;
    resolver: Resolver<TFieldValues>;
    shouldFocusError: boolean;
    shouldUnregister: boolean;
    shouldUseNativeValidation: boolean;
    criteriaMode: CriteriaMode;
    delayError: number;
}
```

## mode

It decide when to trigger validate for

### Type

```ts
type Mode = 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched' | 'all';
```

### Details
  
- **onSubmit**: Validation will trigger on the submit event and invalid inputs will attach onChange event listeners to re-validate them.

- **onBlur**: Validation will trigger on the blur event.

- **onChange**: Validation will trigger on the change event with each input, and lead to multiple re-renders. Warning: this often comes with a significant impact on performance.

- **onTouched**: Validation will trigger on the first blur event. After that, it will trigger on every change event.

- **all**: Validation will trigger on the blur and change events.

::: warning
In some UI framework, they may not provide `dom` in the instance which get from `ref`, so i recommend you to use `onChange` | `all`
:::

