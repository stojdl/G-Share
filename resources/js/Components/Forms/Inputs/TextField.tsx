import React, { FC, InputHTMLAttributes } from "react";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    isFocused?: boolean;
}

const TextField: FC<TextFieldProps> = ({
    label,
    error,
    isFocused,
    ...inputProps
}) => {
    return (
        <div>
            <InputLabel htmlFor={inputProps.type} value={label} />

            <TextInput {...inputProps} isFocused={isFocused} />

            <InputError message={error} className="mt-2" />
        </div>
    );
};

export default TextField;
