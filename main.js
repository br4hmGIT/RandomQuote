// select elements
const quoteEle = document.getElementById('quote');
const authorEle = document.getElementById('author');
const btnEle = document.getElementById('btnQuote');

// API


const apiKey = 'mHNZMQme+EPT2cFHRWJLGg==v7CgwmIdKAOqcXnx';

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key' : apiKey,
    }
};

const apiURL = 'https://api.api-ninjas.com/v1/quotes?category=';


// generate quote

const getQuote = async function() {
    
   
	const response = await fetch(apiURL, options);
	const result = await response.json();
    quoteEle.innerText = '" ' + result[0].quote + ' "';
    authorEle.innerText = '― ' + result[0].author;

}

addEventListener('click', getQuote);