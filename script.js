// Variable to track whether the process is stopped
let isProcessStopped = false;

function stopProcess() {
    // Reload the page
    location.reload();
}

function checkReason() {
    // Get the input value
    const inputValue = document.getElementById('reasonInput').value;

    // Check if the process is stopped
    if (isProcessStopped) {
        return;
    }

    // Check if the input meets any of the conditions
    if (
        inputValue.length === 7 ||
        /\b\w{7}\b/g.test(inputValue) ||
        isSumOfDigitsSeven(inputValue) ||
        isCombinedOperationSeven(inputValue)
    ) {
        // If conditions are met, show positive message

        // Create an image element
        const gifImage = document.createElement('img');

        // Set the source of the GIF (replace 'path/to/your/gif_positive.gif' with the actual path)
        gifImage.src = 'S.gif';

        // Set any additional attributes or styles for the image
        gifImage.setAttribute('alt', 'Thala For Reason');
        gifImage.style.width = '300px'; // Adjust the width as needed

        // Append the image to the document body
        document.body.appendChild(gifImage);

        // Create an audio element
        const audioElement = document.createElement('audio');

        // Set the source of the audio (replace 'path/to/your/audio_positive.mp3' with the actual path)
        audioElement.src = 'S7.mp3';

        // Append the audio to the document body
        document.body.appendChild(audioElement);

        // Play the audio with a promise
        audioElement.play().then(() => {
            // Additional asynchronous logic, if needed
            console.log('Audio started playing');
        }).catch(error => {
            // Handle any errors
            console.error('Error playing audio:', error.message);
        });
    } else {
        // If conditions are not met, show negative message

        // Create an image element
        const negativeGifImage = document.createElement('img');

        // Set the source of the GIF (replace 'path/to/your/gif_negative.gif' with the actual path)
        negativeGifImage.src = 'D.jpg';

        // Set any additional attributes or styles for the image
        negativeGifImage.setAttribute('alt', 'No Reason For You');
        negativeGifImage.style.width = '300px'; // Adjust the width as needed

        // Append the image to the document body
        document.body.appendChild(negativeGifImage);

        // Create an audio element
        const negativeAudioElement = document.createElement('audio');

        // Set the source of the audio (replace 'path/to/your/audio_negative.mp3' with the actual path)
        negativeAudioElement.src = 'M.mp3';

        // Append the audio to the document body
        document.body.appendChild(negativeAudioElement);

        // Play the audio with a promise
        negativeAudioElement.play().then(() => {
            // Additional asynchronous logic, if needed
            console.log('Audio started playing');
        }).catch(error => {
            // Handle any errors
            console.error('Error playing audio:', error.message);
        });
    }
}

function isSumOfDigitsSeven(value) {
    // Check if the sum of digits is 7
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        sum += parseInt(value[i], 10) || 0;
    }
    return sum === 7;
}

function isCombinedOperationSeven(value) {
    // Check if any combination of operations results in 7
    const numbers = value.split("").map(Number);

    // Check addition, subtraction, multiplication, and division
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === 7 ||
                numbers[i] - numbers[j] === 7 ||
                numbers[j] - numbers[i] === 7 ||
                numbers[i] * numbers[j] === 7 ||
                (numbers[i] / numbers[j] === 7 && numbers[j] !== 0) ||
                (numbers[j] / numbers[i] === 7 && numbers[i] !== 0)) {
                return true;
            }
        }
    }

    return false;
}
