import react, { useState } from 'react';
import Button from './Button';

function ClickCounter() {
    const [count, setCount] = useState(0);

    return (

        <div className="flex flex-col gap-6">

            <h1>You clicked {count} times</h1>
            <div className='flex flex-wrap gap-3'>
                <Button onClick={() => setCount(count + 1)}>Increment</Button>
                <Button onClick={() => setCount(count - 1)}>Decrement</Button>
            </div>
            {/* Conditional rendering of messages for each state */}
            {count === 0 && (
                <p className="mt-2 text-zinc-500">Press a button to get started.</p>
            )}
            {count < 0 && (
                <p className="mt-2 text-red-600">The count is negative.</p>
            )}
            {count >= 5 && (
                <p className="mt-2 text-green-600">You reached 5 or more.</p>
            )}
        </div>
    );
}

export default function App() {
    return (
        <div>
            <ClickCounter />
        </div>
    );
}
