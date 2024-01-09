import{myApi} from './api js'
const apikey=myApi();

window.addEventListener("load",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            let lon=position.coords.longitude;
            let lat=position.coords.latitude;

            const url=`http://api.openweathermap.org/date/2.5/weather?q=delhi&appid=${apikey}`;

            fetch(url).then(res=>{
                return res.json()
            }).then((date)=>{
                console.log(date);
            })
        })
    }
})


function weatherReport(data){
    var urlcast=`http://api.openweathermap.org/date/2.5/forecast?=${data.name}&` + `appid=${apikey}`;
    fetch(urlcast).then(res=>{
        return res.json()
    }).then((forecast)=>{
        console.log(forecast);
        hourForecast(forecast);
        dayForecast(forecast);

        document.getElementById('city').innerText=data.name+","+(data.sys.country);

        document.getElementById('temperatur').innerText=Math.floor+","+(data.main.temp -
        273)+ '°C';

        document.getElementById('clouds').innerText=data.weather[0].description;
    
        let icon=data.weather[0].icon;
        let iconurl='http://api.openweathermap.org/img/w/' + ".png";
        document.getElementById('img').src=iconurl;
    })
}

function hourForecast(forecast){
   document.querySelector('.templist').innerHTML='';
   for(let i=0;i<5;i++){
    var data = new DataTransfer(forecast.list[i].dt*1000);
    hourForecast.setAttribute("class","next");

    let div=document.createElement('div');
    let time=document.createElement('p');
    time.setAttribute('class','time');
    time.innerText= (date.tolocaleTimeString(undefined,'Asia/Kolkata')).replace(':00,');

    let temp=document.createElement('p');
    time.innerText=Math.floor(forecast.main.temp_max - 273)+ '°C' + 
    '/' (data.main.temp_max - 273)+ '°C'
     
    div.appendChild(time);
    div.appendChild(temp);

    let desc=document.createElement('p');
    desc.setAttribute('class','desc');
    desc.innerText= forecast.list[i].weather[0].description;

       
    hourR.appendChild(div);
    hourR.appendChild(desc);
    document.querySelector('.templist').
    appendChild()
   }
}

function dayForecast(forecast){

}

