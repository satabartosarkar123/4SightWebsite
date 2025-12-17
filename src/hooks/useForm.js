import { useState, useCallback } from 'react';

/**
 * Custom hook for form handling
 * Provides controlled form state, validation, and submission handling
 */
const useForm = ({
    initialValues = {},
    validate,
    onSubmit,
}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle'); // idle, success, error

    const handleChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setValues((prev) => ({
            ...prev,
            [name]: newValue,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: null,
            }));
        }
    }, [errors]);

    const handleBlur = useCallback((e) => {
        const { name } = e.target;

        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));

        // Validate on blur if validate function exists
        if (validate) {
            const validationErrors = validate(values);
            if (validationErrors[name]) {
                setErrors((prev) => ({
                    ...prev,
                    [name]: validationErrors[name],
                }));
            }
        }
    }, [values, validate]);

    const validateForm = useCallback(() => {
        if (!validate) return true;

        const validationErrors = validate(values);
        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    }, [values, validate]);

    const handleSubmit = useCallback(async (e) => {
        if (e) {
            e.preventDefault();
        }

        // Mark all fields as touched
        const allTouched = Object.keys(values).reduce((acc, key) => {
            acc[key] = true;
            return acc;
        }, {});
        setTouched(allTouched);

        // Validate form
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await onSubmit(values);
            setSubmitStatus('success');
            // Optionally reset form on success
            // setValues(initialValues);
            // setTouched({});
        } catch (error) {
            setSubmitStatus('error');
            setErrors((prev) => ({
                ...prev,
                submit: error.message || 'An error occurred',
            }));
        } finally {
            setIsSubmitting(false);
        }
    }, [values, validateForm, onSubmit]);

    const reset = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
        setSubmitStatus('idle');
    }, [initialValues]);

    const setFieldValue = useCallback((name, value) => {
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    }, []);

    const setFieldError = useCallback((name, error) => {
        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    }, []);

    return {
        values,
        errors,
        touched,
        isSubmitting,
        submitStatus,
        handleChange,
        handleBlur,
        handleSubmit,
        reset,
        setFieldValue,
        setFieldError,
        validateForm,
    };
};

export default useForm;
