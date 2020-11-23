//get quote from API

const quoteContainer = document.getElementById('quote-container');
const quotecontent = document.getElementById('quote');
const authorcontent = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');





async function getQuote(){
    
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL ="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

    try {

        const respose = await fetch(proxyURL + apiURL);
        const data = await respose.json();
        // console.log(data);
        // console.log(data.quoteText);
        // console.log(data.quoteAuthor);git
        console.log(data.quoteText);
        quotecontent.innerText = data.quoteText;

        if(data.quoteAuthor === ""){
            authorcontent.innerText ="Unknown";
        } else { 
            authorcontent.innerText = data.quoteAuthor;
        }
        if(data.quoteText.length > 50){
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        // stop loading, show quote
        
    }catch(e){
        // getQuote();
}
}

function tweetQuote(){
    const quote = quotecontent.innerText;
    const author = authorcontent.innerText;
    const twitterURL = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterURL, '_blank');
}

newQuoteBtn.addEventListener('click', getQuote);

twitterBtn.addEventListener('click', tweetQuote);


getQuote();
// loading();