import {
    forwardRef,
    InputHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        ...props
    }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                "w-full bg-bg-input-text border border-border placeholder-placeholder " +
                "rounded-md px-4 py-2 transition hover:bg-bg-input-text-hover hover:bg-border-text-input-hover focus:bg-bg-input-text-hover focus:outline-none focus:ring-1 focus:ring-border-focus focus:border-border-focus" +
                className
            }
            ref={localRef}
        />
    );
});
