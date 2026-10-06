import { useState } from "react";
import Button from "./Button";

export default function SimpleForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const validate = (value: any) => {
        const submission = value;

        if (!submission) {
            return 'Input cannot be empty.';
        }
        if (submission.length <= 2) {
            return 'Input must be greater than 2 characters.';
        }
        return null;
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();

        const value = event.target.elements.name.value;
        const error = validate(value);

        if (error) {
            setIsError(true);
            setMessage(error);
            return;
        }

        setIsError(false);
        setMessage('Form submitted successfully!');
    };

        return (
            <form className='grid gap-4' onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100" htmlFor="name">Name:</label>
                    <input
                        id="name"
                        className='rounded-md border bg-white px-3.5 py-2.5 text-black focus:outline-none focus:ring-2'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Show the error message if it exists */}
                {message && <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>}

                <Button type="submit">Submit</Button>
            </form>
        );
    }
