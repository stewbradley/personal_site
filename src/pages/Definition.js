import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; 
import NotFound from '../components/NotFound';

export default function Definition() { 
    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false); // useState is a hook that allows us to use state in functional components
    const navigate = useNavigate(); 
    let { search } = useParams(); // useParams is a hook that allows us to access the URL parameters
    
    useEffect(() => { //
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                }
                    return response.json(); 
                })
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);
            });
    }, []);

    if (notFound === true) {
        return (
            <>
                <NotFound />
                <Link to='/dictionary'>Go back to dictionary</Link>
            </>
        );
    }
    return (
        <>
            {word ? ( 
                <>
                    <h1 className= "font-mono font-bold text-lg">Here is a definition</h1>
                    {word.map((meaning) => { //turnary operator to check if word is defined
                    return (
                        <p
                            className = "font-light text-lg font-sans text-blue-500" 
                            key={uuidv4()}
                        >
                            {meaning.partOfSpeech + ': '} 
                            {meaning.definitions[0].definition}
                        </p>
                    ); 
                })}
            </>
            ) : null}
        </> 
    );
}
    