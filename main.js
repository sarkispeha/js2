var word = prompt('Enter word here.');

alert('Was this your word: ' + word + '?'+ '\n' 
	+ 'There are ' + word.length +' characters in your word! Woop de doo!' + '\n' + 
'Here is the 3rd character "'+ word.charAt(2) + '"' + '\n' +
'Here is the word in lowercase "' + word.toLowerCase() + '"' + '\n' +
'Here is the word in uppercase "' + word.toUpperCase() + '"' +'\n' +
'I ' + word + 'ed your mother last night' + '\n' +
'Subword: ' + word.substring(1,4)
);



