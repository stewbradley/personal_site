import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DefinitionSearch() {
    
    const [word, setWord] = useState(''); // useState is a hook that allows us to use state in functional components
    const navigate = useNavigate();
        
        return (
            <div>
            <form className="flex space-between space-x-2 max-w-[300px]"
                onSubmit={() => {
                navigate('/dictionary/' + word);
            }}>
                <input
                    className="shrink min-w-0 py-1 rounded font-mono border-2 border-zinc-500" 
                    placeholder=' Enter a word'
                    type="text" 
                    onChange={(e) => {
                        setWord(e.target.value);
                    }}
                />
                <>
                    <p className="space-x-1"></p>
                </>
                <button 
                    className= "font-mono text-sm border-solid hover:border-double hover:bg-green-300 bg-slate-300 border-2 rounded px-2 border-zinc-500"
                    
                >
                    Search
                </button>
            </form>
            </div>
        );
    
    }