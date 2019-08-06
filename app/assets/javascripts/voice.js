window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// This allows live transcription. If it was false, you would have to wait until done speaking to see the results. 

recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map( result => result[0])
    .map( result => result.transcript)
    .join('')

    p.textContent = transcript;
    if(e.results[0].isFinal){

      document.getElementById('note_content').value = transcript

    }

});

recognition.addEventListener('end', recognition.start);
recognition.start();

