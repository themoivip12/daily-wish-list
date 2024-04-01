import { ErrorMessage } from '@hookform/error-message';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  useFormState,
} from 'react-hook-form';

interface Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends ControllerProps<TFieldValues, TName> {
  title: string;
  customError?: boolean;
  customErrorMessage?: string;
  className?: string;
}

const ControllerItem = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  title,
  customError,
  customErrorMessage,
  className,
  ...rest
}: Props<TFieldValues, TName>) => {
  const { errors } = useFormState({
    control: rest.control,
  });
  return (
    <div className={className}>
      <p className="font-weight-600 text-left mb-2">{title}</p>
      <Controller {...rest} />
      <ErrorMessage
        errors={errors}
        name={rest.name as any}
        render={({ message }) => (
          <p className="text-left text-red m-1">{message}</p>
        )}
      />
    </div>
  );
};

export default ControllerItem;
