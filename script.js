window.addEventListener('load',setWord);
        let score= 0;
        let is_playing;
        let started = false;
        const music = new Audio('./assets/audio/mixkit-audio.wav');


        var textInput = document.querySelector('#text-input');
        var currentWord = document.querySelector('#current-word');
        var scoreDisplay = document.querySelector('#score');
        var timeDisplay = document.querySelector('#time');
        var result = document.querySelector('#result');
        var btnSnail = document.getElementById('snail');
        var btnRabbit = document.getElementById('rabbit');
        var btnCheetah = document.getElementById('cheetah');


        var level = {
            snail: 16,
            rabbit: 14,
            cheetah: 10,
        };

        var currentLevel;
        function setWord() {
            console.log("initialization");
            displayQuestion(questions);
            textInput.addEventListener('input',startCheck);
            disableCheat()
            setInterval(checkIfPlaying, 50);
             
        }

        function displayQuestion(questions){
            var randomQuestions = Math.floor(Math.random() * questions.length);
            currentWord.innerHTML = questions[randomQuestions]; 
        } 
        
        function match_words() {
            if (textInput.value === currentWord.innerHTML){
                    result.innerHTML = "Correct!"
                    return true
                } else{
                    result.innerHTML === ''
                    return false
                }
        }


        function startCheck() {
            if (!started) {
                setInterval(countdown, 1000);
                started = true
            }

            if (match_words()) {
                is_playing = true;
                time++;
                displayQuestion(questions);
                textInput.value = "";
                score++
                music.play();
                document.querySelector(".progress-bar").style.width = score + "6%";
                function increase(){
                    if (score == score > 90 ? 10 : score + 10);
                    document.querySelector(".progress-bar").style.width = score + "%";
                }
                console.log("Word has matched!");
            }
            if(score === -1){
                scoreDisplay.innerHTML= 0
            }else{
            scoreDisplay.innerHTML = score;
            }
        }

        function countdown() {
            if(time > 0){
                time--;
            }else if(time === 0){
                is_playing = false;
            }
            timeDisplay.innerHTML= time;
        }



        function restartGame(restart){
            window.location.replace("")
        }

        function disableCheat(){
        document.oncopy = function(){alert("Copy option disabled"); return false;}
        document.oncut = function(){alert("Cut option disabled");return false;}
        document.onpaste = function(){alert("Paste option disabled");return false;}
        }