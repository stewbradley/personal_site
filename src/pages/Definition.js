import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; 
import DefinitionSearch from '../components/DefinitionSearch';
import NotFound from '../components/NotFound';

export default function Definition() { 
    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false); // useState is a hook that allows us to use state in functional components
    const [serverError, setServerError] = useState(false); // useState is a hook that allows us to use state in functional components
    const [error, setError] = useState(false); // useState is a hook that allows us to use state in functional components

    let { search } = useParams(); // useParams is a hook that allows us to access the URL parameters
    const navigate = useNavigate(); 

    useEffect(() => {
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        
        fetch(url)
            .then((response) => {
                console.log(response.status);
                if (response.status === 404) {
                    setNotFound(true);
                } else if (response.status === 401) {
                    navigate('/login');
                } else if (response.status === 500) {
                    
                }
                if(!response.ok){
                    setError(true);

                    throw new Error('Something went wrong');
                }
                    return response.json(); 
                })
            .then((data) => {
                setWord(data[0].meanings);
            })
            .catch((e) =>{
                console.log(e.message);
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
    if (error === true) {
        return (
            <>
                <p>Something went wrong, try again</p> 
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
                <p>
                   Search again: 
                </p>
                <DefinitionSearch/>
            </>
            ) : null}
        </> 
    );
}
    