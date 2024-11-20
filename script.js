function getDictResponse(){
    const searchWord = document.getElementById('searchBar').value;
    const buttonClick = document.getElementById('button-search');
    
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Word not found');
            }

            return response.json();
        })
        .then(data => {
            document.getElementById("wordCard").style.display = 'block';
            document.getElementById("searchItem").textContent = data[0].word;

            const wordSearched = document.getElementById("meaning");
            const definition = data[0]?.meanings[0]?.definitions[0]?.definition;
            wordSearched.textContent = definition || "No definition available";

            const example = document.getElementById("example");
            const exampleDefinition = data[0]?.meanings[0]?.definitions[0]?.example;
            wordSearched.textContent = definition || "No definition available";

            document.getElementById("example").textContent = data[0].meanings[0].definitions[0].example;

            const audioElement = document.getElementById("audio");
            audioElement.href = data[0].phonetics[0].audio; 

            if (!data[0].phonetics[0].audio) { 
            audioElement.style.display = 'none'; 
            } else {
            audioElement.style.display = 'inline'; 
}
            document.getElementById("partOfSpeech").textContent = data[0].meanings[0].partOfSpeech;
            console.log(data.data[0].meanings)
        });

}