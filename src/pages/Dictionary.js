import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Dictionary() {
    const [word, setWord] = useState(''); // useState is a hook that allows us to use state in functional components
    const navigate = useNavigate();

    return (
        <div>
        <p className= "px-1 font-bold text-lg font-mono text-blue-500">
            Find a definition
        </p>
        <>
            <input
                className="rounded font-mono border-2 border-zinc-500" 
                type="text" 
                onChange={(e) => {
                    setWord(e.target.value);
                }} 
            />
            <>
                <p className="space-x-1"></p>
            </>
            <button 
                className = "font-mono text-sm border-solid hover:border-double hover:bg-green-300 bg-slate-300 border-2 rounded px-2 border-zinc-500"
                onClick={() => {
                navigate('/definition/' + word);
                }}
            >
                Search
            </button> 
        </>
        </div>
    );

}
