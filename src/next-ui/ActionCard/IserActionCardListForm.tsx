/* eslint-disable import/no-extraneous-dependencies */
import { Controller, ControllerProps, FieldValues } from '@graphcommerce/react-hook-form'
import React, { MouseEventHandler } from 'react'
import { ActionCardProps } from './ActionCard'
import { ActionCardList, ActionCardListProps } from './ActionCardList'
import { Product, ProductOption, ProductOptionValues } from '@vercel/commerce/types/product'

export type IserActionCardItemBase = {
}

export type IserActionCardItemRenderProps<T> = ActionCardProps & {
  onReset: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLSpanElement>
} & T

export type IserActionCardListFormProps<A, F extends FieldValues = FieldValues> = Omit<
  ActionCardListProps,
  'value' | 'error' | 'onChange' | 'children'
> &
  Omit<ControllerProps<F>, 'render'> & {
    items: ProductOptionValues[]
    render: React.FC<IserActionCardItemRenderProps<ProductOption>>
  }

export function IserActionCardListForm<
  T extends IserActionCardItemBase,
  F extends FieldValues = FieldValues,
>(props: IserActionCardListFormProps<T, F>) {
  const {
    required,
    rules,
    items,
    render,
    control,
    name,
    errorMessage,
    defaultValue,
    multiple,
    ...other
  } = props
  const RenderItem = render as React.FC<IserActionCardItemRenderProps<IserActionCardItemBase>>

  function onSelect(itemValue: unknown, selectValues: unknown) {

    // console.log(`itemValue = ${JSON.stringify(itemValue)}`)
    // console.log(`selectValues = ${JSON.stringify(selectValues)}`)

    return multiple
      ? Array.isArray(selectValues) && selectValues.some((selectValue) => selectValue === itemValue)
      : selectValues === itemValue
  }

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{ required: errorMessage || required, ...rules }}
      render={({ field: { onChange, value, ref }, fieldState, formState }) => (
        <ActionCardList
          {...other}
          multiple={multiple}
          required={required}
          value={value}
          ref={ref}
          onChange={(_, incomming) => onChange(incomming)}
          error={formState.isSubmitted && !!fieldState.error}
          errorMessage={fieldState.error?.message}
        >
          {items.map((item) => (
            <RenderItem
              {...item}
              key={item.label ?? 'tralala'}
              value={item.label}
              selected={onSelect(item.label, value)}
              onReset={(e) => {
                e.preventDefault()
                onChange(null)
              }}
            />
          ))}
        </ActionCardList>
      )}
    />
  )
}
