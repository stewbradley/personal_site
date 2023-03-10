import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; 

export default function Definition() { 
    const [word, setWord] = useState();
    let { search } = useParams(); // useParams is a hook that allows us to access the URL parameters
    
    useEffect(() => { //
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);
            });
    }, []);

    return (
    <>
        <h1>Here is a definition</h1>
        {word ? word.map((meaning) => { //turnary operator to check if word is defined
            return (
                <p key={uuidv4()}>
                    {meaning.partOfSpeech + ': '} 
                    {meaning.definitions[0].definition}
                </p>
            ); 
        }) : null }
    </> 
    );
}
    