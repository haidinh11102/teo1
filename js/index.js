const APP_ID = 'cf26e7b2c25b5acd18ed5c3e836fb235';
const DEFAULT_VALUE = '--';
const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');


const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');


searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json();
            console.log('[Search Input]', data);
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;

            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
            windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
        });
});

// Tro ly ao
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const synth = window.speechSynthesis;
recognition.lang = 'vi-VI';//hiểu tiếng việt
recognition.continuous = false;

const microphone = document.querySelector('.microphone');
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const speak = (text) => {
    if (synth.speaking) {
        console.error('Busy.Speaking...');
        return;
    }

    const utter = new SpeechSynthesisUtterance(text);

    

    utter.onend = () => {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utter.onerror = (err) => {
        console.error('SpeechSynthesisUtterance.onerror', err);
    }

    synth.speak(utter);
};

const handleVoice = (text) => {
    console.log('text', text);

    //const Greeting = ['nói lại xem','ăn nói hồ đồ','tao không hiểu mày đi hỏi gg đi'];

    // "thời tiết tại Đà Nẵng" => ["thời tiết tại", "Đà Nẵng"]
    const handledText = text.toLowerCase();
    if (handledText.includes('thời tiết tại')) {
        const location = handledText.split('tại')[1].trim();

        console.log('location', location);
        searchInput.value = location;
        const changeEvent = new Event('change');
        searchInput.dispatchEvent(changeEvent);
        return;
    }
    
    const container = document.querySelector('.container');
    if (handledText.includes('thay đổi màu nền')) {
        const color = handledText.split('màu nền')[1].trim();
        container.style.background = color;
        return;
    }

    if (handledText.includes('màu nền mặc định')) {
        container.style.background = '';
        return;
    }

    if (handledText.includes('mấy giờ')) {
        const textToSpeech = `${moment().hours()} giờ ${moment().minutes()} phút`;
        speak(textToSpeech);
        return;
    }
    if (handledText.includes('ăn cơm chưa')) {
        speak('Mày Bị điên à');
        return;
    }

    if (handledText.includes('xin chào')) {
        speak('Ừ Xin chào lại mày');
        return;
    }

    if (handledText.includes('tạm biệt')) {
        speak('Ừ');
        return;
    }

    if (handledText.includes('láo')) {
        speak('26 sơn la chào anh em mày thích gì cho tao cái địa chỉ');
        return;
    }

    if (handledText.includes('địt mẹ')) {
        speak('26 sơn la chào anh em mày thích gì cho tao cái địa chỉ');
        return;
    }

    if (handledText.includes('đ m')) {  
        speak('26 sơn la chào anh em mày thích gì cho tao cái địa chỉ');
        return;
    }

    if (handledText.includes('thằng này được')) {  
        speak('quá khen quá khen ');
        return;
    }

    if (handledText.includes('khen')) {
        speak('ngu');
        return;
    }

    if (handledText.includes('đẹp trai')) {
        speak('đẹp trai đẹp trai cho là vậy đi');
        return;
    }

    if (handledText.includes('xinh gái')) {
        speak('Xinh Xinh Như con tinh tinh');
        return;
    }

    if (handledText.includes('tán gái')) {
        speak('người như mày ở vậy là được rồi');
        return;
    }

    if (handledText.includes('youtube')) {
        speak ('mở Youtube');
        window.open('https://www.youtube.com/')
        return;
    }

    if (handledText.includes('facebook')) {
        speak ('mở facebook');
        window.open('https://www.facebook.com/')
        return;
    }

    if (handledText.includes('instagram')) {
        speak ('mở instagram');
        window.open('https://www.instagram.com/')
        return;
    }


    if (handledText.includes('tik tok')) {
        speak ('mở tik tok');
        window.open('https://www.tiktok.com/')
        return;
    }
    
    if (handledText.includes('google')) {
        speak ('mở google');
        window.open('https://www.google.com.vn/?hl=vi')
        return;
    }

    if (handledText.includes('Phòng chống Covid')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://www.google.com.vn/?hl=vi')
        return;
    }

    if (handledText.includes('Khai báo y tế')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://coccoc.com/search?query=Khai+b%C3%A1o+y+t%E1%BA%BF')
        return;
    }

    if (handledText.includes('Covid hôm nay')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://www.google.com.vn/?hl=vi')
        return;
    }

    if (handledText.includes('Cổng thông tin tiêm chủng')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://www.google.com.vn/?hl=vi')
        return;
    }

    if (handledText.includes('Euro 2021')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://www.google.com.vn/?hl=vi')
        return;
    }

    if (handledText.includes('Ket qua bong da')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://coccoc.com/search?query=Ket+qua+bong+da')
        return;
    }


    if (handledText.includes('Lịch thi đấu bóng đá Việt Nam')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://coccoc.com/search?query=L%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+b%C3%B3ng+%C4%91%C3%A1+Vi%E1%BB%87t+Nam')
        return;
    }


    if (handledText.includes('vòng loại World Cup 2022')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://coccoc.com/search?query=%C3%B2ng+lo%E1%BA%A1i+World+Cup+2022')
        return;
    }

    
    if (handledText.includes('Copa America 2021')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://www.google.com.vn/search?q=Copa+America+2021&hl=vi&source=hp&ei=ud7uYY76KbK38QPciJ2gDw&iflsig=ALs-wAMAAAAAYe7syVdscVsxI9AtBLwPftDsAgeJ_YtF&ved=0ahUKEwjOupPw8cr1AhWyW3wKHVxEB_QQ4dUDCAc&uact=5&oq=Copa+America+2021&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEUP0DWP0DYPIIaAFwAHgAgAGBAYgBgQGSAQMwLjGYAQCgAQKgAQGwAQA&sclient=gws-wiz')
        return;
    }

    if (handledText.includes('Olm')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://www.google.com.vn/?hl=vi')
        return;
    }

    if (handledText.includes('Azota')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://www.google.com.vn/?hl=vi')
        return;
    }

    if (handledText.includes('K12online')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://www.google.com.vn/?hl=vi')
        return;
    }

    if (handledText.includes('Quizizz')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://www.google.com.vn/?hl=vi')
        return;
    }

    if (handledText.includes('Shub classroom')) {
        speak ('hãy tra nó ở trên này đi mày ');
        window.open('https://www.google.com.vn/?hl=vi')
        return;
    }

    if (handledText.includes('sex')) {
        speak ('hả cái gì cơ nói lại xem ');
        
        return;
    }

    if (handledText.includes('buồn ỉa')) {
        speak ('ỉa đi mày nói nhiều ');
        
        return;
    }

    if (handledText.includes(' đái')) {
        speak ('hỏi chấm quần què ');
        
        return;
    }

    if (handledText.includes(' tên gì')) {
        speak ('mày hỏi tao tên gì à, tao xin tự giới thiệt tao tên là  tèo ..... e o eo huyền tèo');
        
        return;
    }

    if (handledText.includes(' tên hay ')) {
        speak ('hay hay hay');
        
        return;
    }

    if (handledText.includes(' tên hay ')) {
        speak ('hay hay hay');
        
        return;
    }



    speak('mày nói cái gì đấy đéo hiểu');


    speech.volume = 1;
    speech.rate = 1.1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

microphone.addEventListener('click', (e) => {
    e.preventDefault();

    recognition.start();
    microphone.classList.add('recording');
});

recognition.onspeechend = () => {
    recognition.stop();
    microphone.classList.remove('recording');
}

recognition.onerror = (err) => {
    console.error(err);
    microphone.classList.remove('recording');
}

recognition.onresult = (e) => {
    console.log('onresult', e);
    const text = e.results[0][0].transcript;
    // content.textContent = text
    handleVoice(text);

    // const current = e.resultIndex;

    // const transcript = e.results[current][0].transcript;
    // content.textContent = transcript;
    // readOutLoud(transcript);
}

