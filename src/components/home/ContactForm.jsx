import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from '../../hooks';
import { Button, Input, Textarea, Select, Card } from '../ui';
import './ContactForm.css';

const queryTypeOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales' },
    { value: 'support', label: 'Support' },
    { value: 'partnership', label: 'Partnership' },
];

const validateForm = (values) => {
    const errors = {};

    if (!values.name || values.name.trim() === '') {
        errors.name = 'Name is required';
    }

    if (!values.email || values.email.trim() === '') {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.queryType || values.queryType === '') {
        errors.queryType = 'Please select a query type';
    }

    if (!values.message || values.message.trim() === '') {
        errors.message = 'Message is required';
    } else if (values.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }

    return errors;
};

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const {
        values,
        errors,
        touched,
        isSubmitting,
        submitStatus,
        handleChange,
        handleBlur,
        handleSubmit,
        reset,
    } = useForm({
        initialValues: {
            name: '',
            email: '',
            organization: '',
            queryType: '',
            message: '',
        },
        validate: validateForm,
        onSubmit: async (formData) => {
            // Simulate API call - replace with actual endpoint
            // POST /contact with exact form data
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // In production, uncomment:
            // const response = await fetch('/api/contact', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData),
            // });
            // if (!response.ok) throw new Error('Failed to submit');

            setSubmitted(true);
        },
    });

    const handleReset = () => {
        reset();
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <section className="contact-section" id="contact">
                <div className="contact-container">
                    <motion.div
                        className="contact-success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Card variant="glass" padding="lg" className="success-card">
                            <div className="success-icon">
                                <CheckCircle size={48} />
                            </div>
                            <h3 className="success-title">Message Sent!</h3>
                            <p className="success-message">
                                Thank you for reaching out. We'll get back to you within 24 hours.
                            </p>
                            <Button variant="secondary" onClick={handleReset}>
                                Send Another Message
                            </Button>
                        </Card>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="contact-title">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="contact-subtitle">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <motion.div
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Card variant="glass" padding="lg" className="contact-card">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-grid">
                                <Input
                                    label="Name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.name && errors.name}
                                    required
                                />

                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && errors.email}
                                    required
                                />

                                <Input
                                    label="Organization"
                                    name="organization"
                                    placeholder="Company name (optional)"
                                    value={values.organization}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <Select
                                    label="Query Type"
                                    name="queryType"
                                    options={queryTypeOptions}
                                    value={values.queryType}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.queryType && errors.queryType}
                                    required
                                />

                                <div className="form-full-width">
                                    <Textarea
                                        label="Message"
                                        name="message"
                                        placeholder="Tell us about your inquiry..."
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.message && errors.message}
                                        rows={5}
                                        required
                                    />
                                </div>
                            </div>

                            {errors.submit && (
                                <div className="form-error">
                                    <AlertCircle size={18} />
                                    <span>{errors.submit}</span>
                                </div>
                            )}

                            <div className="form-actions">
                                <Button
                                    type="submit"
                                    size="lg"
                                    loading={isSubmitting}
                                    icon={<Send size={18} />}
                                    iconPosition="right"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
