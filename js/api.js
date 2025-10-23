
//Datos para crear la Api como la URL
const apiKey = `&appid=8c5de8da03c08196a5c65d61f4ec089a`;


//Pronostico de 3 horas por 5 dias endpoint 1 
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=`;
//Pronostico actual endpoint 2
const apiActual =`https://api.openweathermap.org/data/2.5/weather?q=`;
const units = `&units=metric`;
const lang = `&lang=es`;
const searchCity = document.querySelector(".header__section-inputSearch");


document.addEventListener("DOMContentLoaded", () => {
    //Funcion para obetener clima actual
async function checkWeather(city){
    try{
        const response = await axios.get(apiActual + city+ apiKey + units + lang)
        let data = await response.data;
        console.log(data);
        
        const country = data.sys.country;
        const nameCity = document.querySelector(".Namecity").innerHTML= data.name + " " + country;
        const temperatureContainer = document.querySelectorAll(".temperature");
        const temperatureText = Math.round(data.main.temp) + "°c";
        const humidity = document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        const sensation = document.querySelector(".sensation").innerHTML= Math.round(data.main.feels_like) + "°c";
        const windSpeed = document.querySelector(".windSpeed").innerHTML= Math.round(data.wind.speed * 3.6) + " " + "km/h";
        const weatherInfo = data.weather[0].main;
        const descriptionContainer = document.querySelectorAll(".description");
        const descriptionText = data.weather[0].description;
        const icon = data.weather[0].icon;
        console.log(weatherInfo);
        const minTempContainer = document.querySelectorAll(".mintemp");
        const minTempText = Math.round(data.main.temp_min + 1) + "°";
        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;
         //Horario de salida del sol
         const date = new Date(sunrise * 1000);
        const sunriseText = document.querySelector(".sunrise").innerHTML = date.getHours() + ":" + date.getMinutes();
        const date2 = new Date(sunset * 1000);
        const sunsetText = document.querySelector(".sunset").innerHTML = date2.getHours() + ":" + date.getMinutes();
        const iconUpdate = document.querySelectorAll(".iconUpdate");
        console.log(sunsetText);
        console.log(sunriseText);
    
    
        //Iconos dia
        if(weatherInfo === "Clear" && icon.includes("d")){
            iconUpdate.src = "img/icons/clear-day.svg"
        } else if(weatherInfo === "Clouds" && icon.includes("d")){
            iconUpdate.src = "img/icons/partly-cloudy-day.svg"
        }else if(weatherInfo === "Rain" && icon.includes("d")){ 
            iconUpdate.src = "img/icons/rain.svg"
        } else if(weatherInfo === "Mist" && icon.includes("d")){
            iconUpdate.src = "img/icons/mist.svg"
        } else if(weatherInfo === "Drizzle" && icon.includes("d")){
            iconUpdate.src = "img/icons/drizzle.svg"
        } else if(weatherInfo === "Haze" && icon.includes("d")){
            iconUpdate.src = "img/icons/haze-day.svg"
        } else if(weatherInfo === "Rain" && icon.includes("d")){
            iconUpdate.src = "img/icons/rain.svg"
        } else if(weatherInfo === "Snow" && icon.includes("d")){
            iconUpdate.src = "img/icons/snow.svg"
        }


        //Iconos de noche
        if(weatherInfo === "Clouds" && icon.includes("n")){
            iconUpdate.src = "img/icons/partly-cloudy-night.svg"
        } else if(weatherInfo === "Rain" && icon.includes("n")){
            iconUpdate.src = "img/icons/partly-cloudy-night-rain.svg"
        } else if(weatherInfo === "Snow" && icon.includes("n")){
            iconUpdate.src = "img/icons/partly-cloudy-night-snow.svg"
        } else if (weatherInfo === "Haze" && icon.includes("n")){
            iconUpdate.src = "img/icons/haze-night.svg"
        } else if(weatherInfo === "Clear" && icon.includes("n")){
            iconUpdate.src = "img/icons/clear-night.svg"
        }

        //Actualizar iconos del clima actual
        iconUpdate.forEach(Element =>{
            Element.src = iconUpdate.src;
        })

        //Actualizar la descripción del clima actual
        descriptionContainer.forEach(Element =>{
            Element.innerHTML = descriptionText;
            Element.style.textTransform = "capitalize";
        })

        //Actualizar la temperatura actual
        temperatureContainer.forEach(Element =>{
            Element.innerHTML = temperatureText;
        })

        //Actualizar la temperatura minima
        minTempContainer.forEach(Element =>{{
            Element.innerHTML = minTempText;
        }})

    } catch(error){
        console.log(error);
        //alert("Ciudad no encontrada");
    }
}

//Funcion para obtener pronostico de 3 horas por 5 dias
async function checkWeather5days(city){
    try{
        const response0 = await axios.get(apiURL + city + apiKey + units + lang);
        let data0 = await response0.data;
        console.log(data0,"pronostico de 3 horas por 5 dias");
        // Horas del dia
        const Days19am =  new Date(data0.list[0].dt_txt);
        const Days112am = new Date(data0.list[1].dt_txt);
        const Days13pm = new Date(data0.list[2].dt_txt);
        const Days16pm = new Date(data0.list[3].dt_txt);
        const Days19pm = new Date(data0.list[4].dt_txt);

        //Convertir la fecha a hora
        // Supongamos que obtuviste un bloque del forecast sacar bloques
        const bloque = data0.list[0]; 
        const bloque2 = data0.list[1]; 
        const bloque3 = data0.list[2]; 
        const bloque4 = data0.list[3]; 
        const bloque5 = data0.list[4]; 
        const ciudad = data0.city; 

        // Los valores relevantes:
        const utcSeconds = bloque.dt;     
        const utcSeconds2 = bloque2.dt;    
        const utcSeconds3 = bloque3.dt;    
        const utcSeconds4 = bloque4.dt;    
        const utcSeconds5 = bloque5.dt;    
        const timezoneOffset = ciudad.timezone; 

        //Convertir a milisegundos
        const localTimeMs = (utcSeconds + timezoneOffset) * 1000;
        const localTimeMs2 = (utcSeconds2 + timezoneOffset) * 1000;
        const localTimeMs3 = (utcSeconds3 + timezoneOffset) * 1000;
        const localTimeMs4 = (utcSeconds4 + timezoneOffset) * 1000;
        const localTimeMs5 = (utcSeconds5 + timezoneOffset) * 1000;

        //Crear el objeto Date local
        const localDate = new Date(localTimeMs);
        const localDate2 = new Date(localTimeMs2);
        const localDate3 = new Date(localTimeMs3);
        const localDate4 = new Date(localTimeMs4);
        const localDate5 = new Date(localTimeMs5);

        //Formateamos la hora a algo legible
        const horaLocal = localDate.toLocaleString("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        });
        const horaLocal2 = localDate2.toLocaleString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            });
        const horaLocal3 = localDate3.toLocaleString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            });
        const horaLocal4 = localDate4.toLocaleString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            });
        const horaLocal5 = localDate5.toLocaleString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            });

        //Mostramos la hora local
        console.log(`Hora local en ${ciudad.name}: ${horaLocal}`);
        console.log(`Hora local en ${ciudad.name}: ${horaLocal2}`);
        console.log(`Hora local en ${ciudad.name}: ${horaLocal3}`);
        console.log(`Hora local en ${ciudad.name}: ${horaLocal4}`);
        console.log(`Hora local en ${ciudad.name}: ${horaLocal5}`);


        const Days19amHours = Days19am.getHours() +":"+Days19am.getMinutes() + Days19am.getMinutes();
        const Days112amHours = Days112am.getHours() +":"+Days112am.getMinutes() + Days112am.getMinutes();
        const Days13pmHours = Days13pm.getHours() +":"+Days13pm.getMinutes() + Days13pm.getMinutes();
        const Days16pmHours = Days16pm.getHours() +":"+Days16pm.getMinutes() + Days16pm.getMinutes();
        const Days19pmHours = Days19pm.getHours() +":"+Days19pm.getMinutes() + Days19pm.getMinutes();
        const Days19amHoursText = document.querySelector(".temhourDay1").innerHTML = Days19pmHours;
        const Days112amHoursText = document.querySelector(".temhourDay2").innerHTML = Days112amHours;
        console.log(Days19amHours);
        console.log(Days112amHours);
        console.log(Days13pmHours);
        console.log(Days16pmHours);
        console.log(Days19pmHours);
        // Clima de las horas
        const weatherInfo = data0.list[0].weather[0].main;
        const weatherInfo2 = data0.list[1].weather[0].main;
        const weatherInfo3 = data0.list[2].weather[0].main;
        const weatherInfo4 = data0.list[3].weather[0].main;
        const weatherInfo5 = data0.list[4].weather[0].main;
        // Iconos de las horas
        const icon = data0.list[0].weather[0].icon;
        const icon2 = data0.list[1].weather[0].icon;
        const icon3 = data0.list[2].weather[0].icon;
        const icon4 = data0.list[3].weather[0].icon;
        const icon5 = data0.list[4].weather[0].icon;
        //Temperatura de las horas
        const temperature = Math.round(data0.list[0].main.temp);
        const temperature2 = Math.round(data0.list[1].main.temp);
        //console.log(temperature2);
        const temperature3 = Math.round(data0.list[2].main.temp);
        const temperature4 = Math.round(data0.list[3].main.temp);
        const temperature5 = Math.round(data0.list[4].main.temp);
        const temperature6 = Math.round(data0.list[5].main.temp);
        // Temperatura de las horas container
        const tempSunrise = document.querySelector(".tempsunrise").innerHTML = temperature + "°";
        const tempday12pm = document.querySelector(".tempday12pm").innerHTML = temperature3 + "°";
        const tempday3pm = document.querySelector(".tempday3pm").innerHTML = temperature4 + "°";
        const tempSunset = document.querySelector(".tempsunset").innerHTML = temperature5 + "°";
        const tempday6pm = document.querySelector(".tempday6pm").innerHTML = temperature6 + "°";
        const tempday9am = document.querySelector(".tempday9am-text").innerHTML = temperature2 + "°";
        /*
        console.log(Days19am);
        console.log(Days112am);
        console.log(Days13pm);
        console.log(Days16pm);
        console.log(Days19pm);
        */
        const iconUpdate2 = document.querySelector(".iconUpdate2");
        const iconUpdate3 = document.querySelector(".iconUpdate3");
        const iconUpdate4 = document.querySelector(".iconUpdate4");
        const iconUpdate5 = document.querySelector(".iconUpdate5");  

         //Iconos dia
         if(weatherInfo === "Clear" && icon.includes("d")){
            iconUpdate2.src = "img/icons/clear-day.svg"
        } else if(weatherInfo === "Clouds" && icon.includes("d")){
            iconUpdate2.src = "img/icons/partly-cloudy-day.svg"
        }else if(weatherInfo === "Rain" && icon.includes("d")){ 
            iconUpdate2.src = "img/icons/rain.svg"
        } else if(weatherInfo === "Mist" && icon.includes("d")){
            iconUpdate2.src = "img/icons/mist.svg"
        } else if(weatherInfo === "Drizzle" && icon.includes("d")){
            iconUpdate2.src = "img/icons/drizzle.svg"
        } else if(weatherInfo === "Haze" && icon.includes("d")){
            iconUpdate2.src = "img/icons/haze-day.svg"
        } else if(weatherInfo === "Rain" && icon.includes("d")){
            iconUpdate2.src = "img/icons/rain.svg"
        } else if(weatherInfo === "Snow" && icon.includes("d")){
            iconUpdate2.src = "img/icons/snow.svg"
        }
        //Iconos de noche
        if(weatherInfo === "Clouds" && icon.includes("n")){
            iconUpdate2.src = "img/icons/partly-cloudy-night.svg"
        } else if(weatherInfo === "Rain" && icon.includes("n")){
            iconUpdate2.src = "img/icons/partly-cloudy-night-rain.svg"
        } else if(weatherInfo === "Snow" && icon.includes("n")){
            iconUpdate2.src = "img/icons/partly-cloudy-night-snow.svg"
        } else if (weatherInfo === "Haze" && icon.includes("n")){
            iconUpdate2.src = "img/icons/haze-night.svg"
        } else if(weatherInfo === "Clear" && icon.includes("n")){
            iconUpdate2.src = "img/icons/clear-night.svg"
        }

        //Iconos dia hora 9am
        if(weatherInfo2 === "Clear" && icon2.includes("d")){
            iconUpdate3.src = "img/icons/clear-day.svg"
        } else if(weatherInfo2 === "Clouds" && icon2.includes("d")){
            iconUpdate3.src = "img/icons/partly-cloudy-day.svg"
        }else if(weatherInfo2 === "Rain" && icon2.includes("d")){ 
            iconUpdate3.src = "img/icons/rain.svg"
        } else if(weatherInfo2 === "Mist" && icon2.includes("d")){
            iconUpdate3.src = "img/icons/mist.svg"
        } else if(weatherInfo2 === "Drizzle" && icon2.includes("d")){
            iconUpdate3.src = "img/icons/drizzle.svg"
        } else if(weatherInfo2 === "Haze" && icon2.includes("d")){
            iconUpdate3.src = "img/icons/haze-day.svg"
        } else if(weatherInfo2 === "Rain" && icon2.includes("d")){
            iconUpdate3.src = "img/icons/rain.svg"
        } else if(weatherInfo2 === "Snow" && icon2.includes("d")){
            iconUpdate3.src = "img/icons/snow.svg"
        }
        //Iconos de noche
        if(weatherInfo2 === "Clouds" && icon2.includes("n")){
            iconUpdate3.src = "img/icons/partly-cloudy-night.svg"
        } else if(weatherInfo2 === "Rain" && icon2.includes("n")){
            iconUpdate3.src = "img/icons/partly-cloudy-night-rain.svg"
        } else if(weatherInfo2 === "Snow" && icon2.includes("n")){
            iconUpdate3.src = "img/icons/partly-cloudy-night-snow.svg"
        } else if (weatherInfo2 === "Haze" && icon2.includes("n")){
            iconUpdate3.src = "img/icons/haze-night.svg"
        } else if(weatherInfo2 === "Clear" && icon2.includes("n")){
            iconUpdate3.src = "img/icons/clear-night.svg"
        }

        //Iconos dia hora 12pm
        if(weatherInfo2 === "Clear" && icon3.includes("d")){
            iconUpdate4.src = "img/icons/clear-day.svg"
        } else if(weatherInfo2 === "Clouds" && icon3.includes("d")){
            iconUpdate4.src = "img/icons/partly-cloudy-day.svg"
        }else if(weatherInfo2 === "Rain" && icon3.includes("d")){ 
            iconUpdate4.src = "img/icons/rain.svg"
        } else if(weatherInfo2 === "Mist" && icon3.includes("d")){
            iconUpdate4.src = "img/icons/mist.svg"
        } else if(weatherInfo2 === "Drizzle" && icon3.includes("d")){
            iconUpdate4.src = "img/icons/drizzle.svg"
        } else if(weatherInfo2 === "Haze" && icon3.includes("d")){
            iconUpdate4.src = "img/icons/haze-day.svg"
        } else if(weatherInfo2 === "Rain" && icon3.includes("d")){
            iconUpdate4.src = "img/icons/rain.svg"
        } else if(weatherInfo2 === "Snow" && icon3.includes("d")){
            iconUpdate3.src = "img/icons/snow.svg"
        }
        //Iconos de noche
        if(weatherInfo2 === "Clouds" && icon3.includes("n")){
            iconUpdate3.src = "img/icons/partly-cloudy-night.svg"
        } else if(weatherInfo2 === "Rain" && icon3.includes("n")){
            iconUpdate3.src = "img/icons/partly-cloudy-night-rain.svg"
        } else if(weatherInfo2 === "Snow" && icon3.includes("n")){
            iconUpdate3.src = "img/icons/partly-cloudy-night-snow.svg"
        } else if (weatherInfo2 === "Haze" && icon3.includes("n")){
            iconUpdate3.src = "img/icons/haze-night.svg"
        } else if(weatherInfo2 === "Clear" && icon3.includes("n")){
            iconUpdate3.src = "img/icons/clear-night.svg"
        }


        //Iconos dia hora 3pm
        if(weatherInfo3 === "Clear" && icon4.includes("d")){
            iconUpdate4.src = "img/icons/clear-day.svg"
        } else if(weatherInfo3 === "Clouds" && icon4.includes("d")){
            iconUpdate4.src = "img/icons/partly-cloudy-day.svg"
        }else if(weatherInfo3 === "Rain" && icon4.includes("d")){ 
            iconUpdate4.src = "img/icons/rain.svg"
        } else if(weatherInfo3 === "Mist" && icon4.includes("d")){
            iconUpdate4.src = "img/icons/mist.svg"
        } else if(weatherInfo3 === "Drizzle" && icon4.includes("d")){
            iconUpdate4.src = "img/icons/drizzle.svg"
        } else if(weatherInfo3 === "Haze" && icon4.includes("d")){
            iconUpdate4.src = "img/icons/haze-day.svg"
        } else if(weatherInfo3 === "Rain" && icon4.includes("d")){
            iconUpdate4.src = "img/icons/rain.svg"
        } else if(weatherInfo3 === "Snow" && icon4.includes("d")){
            iconUpdate4.src = "img/icons/snow.svg"
        }
        //Iconos de noche
        if(weatherInfo3 === "Clouds" && icon4.includes("n")){
            iconUpdate4.src = "img/icons/partly-cloudy-night.svg"
        } else if(weatherInfo3 === "Rain" && icon4.includes("n")){
            iconUpdate4.src = "img/icons/partly-cloudy-night-rain.svg"
        } else if(weatherInfo3 === "Snow" && icon4.includes("n")){
            iconUpdate4.src = "img/icons/partly-cloudy-night-snow.svg"
        } else if (weatherInfo3 === "Haze" && icon4.includes("n")){
            iconUpdate4.src = "img/icons/haze-night.svg"
        } else if(weatherInfo3 === "Clear" && icon4.includes("n")){
            iconUpdate4.src = "img/icons/clear-night.svg"
        }

        //Iconos dia hora 6pm
        if(weatherInfo4 === "Clear" && icon5.includes("d")){
            iconUpdate5.src = "img/icons/clear-day.svg"
        } else if(weatherInfo4 === "Clouds" && icon5.includes("d")){
            iconUpdate5.src = "img/icons/partly-cloudy-day.svg"
        }else if(weatherInfo4 === "Rain" && icon5.includes("d")){ 
            iconUpdate5.src = "img/icons/rain.svg"
        } else if(weatherInfo4 === "Mist" && icon2.includes("d")){
            iconUpdate5.src = "img/icons/mist.svg"
        } else if(weatherInfo4 === "Drizzle" && icon5.includes("d")){
            iconUpdate5.src = "img/icons/drizzle.svg"
        } else if(weatherInfo4 === "Haze" && icon5.includes("d")){
            iconUpdate5.src = "img/icons/haze-day.svg"
        } else if(weatherInfo4 === "Rain" && icon5.includes("d")){
            iconUpdate5.src = "img/icons/rain.svg"
        } else if(weatherInfo4 === "Snow" && icon5.includes("d")){
            iconUpdate5.src = "img/icons/snow.svg"
        }
        //Iconos de noche
        if(weatherInfo4 === "Clouds" && icon5.includes("n")){
            iconUpdate5.src = "img/icons/partly-cloudy-night.svg"
        } else if(weatherInfo4 === "Rain" && icon5.includes("n")){
            iconUpdate5.src = "img/icons/partly-cloudy-night-rain.svg"
        } else if(weatherInfo4 === "Snow" && icon5.includes("n")){
            iconUpdate5.src = "img/icons/partly-cloudy-night-snow.svg"
        } else if (weatherInfo4 === "Haze" && icon5.includes("n")){
            iconUpdate5.src = "img/icons/haze-night.svg"
        } else if(weatherInfo4 === "Clear" && icon5.includes("n")){
            iconUpdate5.src = "img/icons/clear-night.svg"
        }



        //Actualizar los otros dias

        const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
        const dateOfDaysBlock = data0.list[1].dt_txt;
        const dateOfDaysBlock2 = data0.list[9].dt_txt;
        const dateOfDaysBlock3 = data0.list[17].dt_txt;
        const dateOfDaysBlock4 = data0.list[25].dt_txt;
        const dateOfDaysBlock5 = data0.list[33].dt_txt;
        const dateOfDaysBlock6 = data0.list[39].dt_txt;
        const dateOfDays = new Date(dateOfDaysBlock);
        const dateOfDays2 = new Date(dateOfDaysBlock2);
        const dateOfDays3 = new Date(dateOfDaysBlock3);
        const dateOfDays4 = new Date(dateOfDaysBlock4);
        const dateOfDays5 = new Date(dateOfDaysBlock5);
        const dateOfDays6 = new Date(dateOfDaysBlock6);
        console.warn(dateOfDays); // getDay()

        const day1 = days[dateOfDays.getDay()];
        const day2 = days[dateOfDays2.getDay()];
        const day3 = days[dateOfDays3.getDay()];
        const day4 = days[dateOfDays4.getDay()];
        const day5 = days[dateOfDays5.getDay()];
        const day6 = days[dateOfDays6.getDay()];
        console.warn(day1);
        console.warn(day2);
        console.warn(day3);
        console.warn(day4);
        console.warn(day5);
        console.warn(day6);

        const daytxt1 = document.querySelector(".day1").innerHTML = day1;
        const daytxt2 = document.querySelector(".day2").innerHTML = day2;
        const daytxt3 = document.querySelector(".day3").innerHTML = day3;
        const daytxt4 = document.querySelector(".day4").innerHTML = day4;
        const daytxt5 = document.querySelector(".day5").innerHTML = day5;
        const daytxt6 = document.querySelector(".day6").innerHTML = day6;


        //Funcion para hacer que los iconos de los siguientes dias se actualicen

        //Bloque para saber como esta el clima 
        const weatherNextDays = [data0.list[1].weather[0].main, data0.list[9].weather[0].main,data0.list[17].weather[0].main,data0.list[25].weather[0].main,data0.list[33].weather[0].main,data0.list[39].weather[0].main];
        console.warn(weatherNextDays);

        //Icono para saber si es n o d
        const iconoBloque1 = [data0.list[1].weather[0].icon, data0.list[9].weather[0].icon,data0.list[17].weather[0].icon,data0.list[25].weather[0].icon,data0.list[33].weather[0].icon,data0.list[39].weather[0].icon];
        console.warn(iconoBloque1);
        
        const funcionIconsNextDays = (weatherNextDays, iconoBloque1) =>{
            //Selectores para actualizar iconos
            const iconUpdateNextDays2 = document.querySelector(".iconUpdateNextDays2");
            const iconUpdateNextDays3 = document.querySelector(".iconUpdateNextDays3");
            const iconUpdateNextDays4 = document.querySelector(".iconUpdateNextDays4");
            const iconUpdateNextDays5 = document.querySelector(".iconUpdateNextDays5");
            const iconUpdateNextDays6 = document.querySelector(".iconUpdateNextDays6");
            const iconUpdateNextDays7 = document.querySelector(".iconUpdateNextDays7");

            //Actualizar iconos y descripccion del primer bloque que esta debajo del dia actual
            if(weatherNextDays[0] === "Clear" && iconoBloque1[0].includes("d")){
                iconUpdateNextDays2.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[0] === "Clouds" && iconoBloque1[0].includes("d")){
                iconUpdateNextDays2.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[0] === "Rain" && iconoBloque1[0].includes("d")){
                iconUpdateNextDays2.src = "img/icons/rain.svg"
            }else if (weatherNextDays[0] === "Mist" && iconoBloque1[0].includes("d")){
                iconUpdateNextDays2.src = "img/icons/mist.svg"
            }else if (weatherNextDays[0] === "Drizzle" && iconoBloque1[0].includes("d")){
                iconUpdateNextDays2.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[0] === "Haze" && iconoBloque1[0].includes("d")){
                iconUpdateNextDays2.src = "img/icons/haze-day.svg"
            }else if (weatherNextDays[0] === "Snow" && iconoBloque1[0].includes("d")){
                iconUpdateNextDays2.src = "img/icons/snow.svg"
            }

            if(weatherNextDays[0] === "Clear" && iconoBloque1[0].includes("n")){
                iconUpdateNextDays2.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[0] === "Clouds" && iconoBloque1[0].includes("n")){
                iconUpdateNextDays2.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[0] === "Rain" && iconoBloque1[0].includes("n")){
                iconUpdateNextDays2.src = "img/icons/rain.svg"
            }else if (weatherNextDays[0] === "Mist" && iconoBloque1[0].includes("n")){
                iconUpdateNextDays2.src = "img/icons/mist.svg"
            }else if (weatherNextDays[0] === "Drizzle" && iconoBloque1[0].includes("n")){
                iconUpdateNextDays2.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[0] === "Haze" && iconoBloque1[0].includes("n")){
                iconUpdateNextDays2.src = "img/icons/haze-day.svg"
            }else if (weatherNextDays[0] === "Snow" && iconoBloque1[0].includes("n")){
                iconUpdateNextDays2.src = "img/icons/snow.svg"
            }

            //Actualizar iconos del siguiente bloque

            if(weatherNextDays[1] === "Clear" && iconoBloque1[1].includes("d")){
                iconUpdateNextDays3.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[1] === "Clouds" && iconoBloque1[1].includes("d")){
                iconUpdateNextDays3.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[1] === "Rain" && iconoBloque1[1].includes("d")){
                iconUpdateNextDays3.src = "img/icons/rain.svg"
            }else if (weatherNextDays[1] === "Mist" && iconoBloque1[1].includes("d")){
                iconUpdateNextDays3.src = "img/icons/mist.svg"
            }else if (weatherNextDays[1] === "Drizzle" && iconoBloque1[1].includes("d")){
                iconUpdateNextDays3.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[1] === "Haze" && iconoBloque1[1].includes("d")){
                iconUpdateNextDays3.src = "img/icons/haze-day.svg"
            }else if (weatherNextDays[1] === "Snow" && iconoBloque1[1].includes("d")){
                iconUpdateNextDays3.src = "img/icons/snow.svg"
            }

            if(weatherNextDays[1] === "Clear" && iconoBloque1[1].includes("n")){
                iconUpdateNextDays3.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[1] === "Clouds" && iconoBloque1[1].includes("n")){
                iconUpdateNextDays3.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[1] === "Rain" && iconoBloque1[1].includes("n")){
                iconUpdateNextDays3.src = "img/icons/rain.svg"
            }else if (weatherNextDays[1] === "Mist" && iconoBloque1[1].includes("n")){
                iconUpdateNextDays3.src = "img/icons/mist.svg"
            }else if (weatherNextDays[1] === "Drizzle" && iconoBloque1[1].includes("n")){
                iconUpdateNextDays3.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[1] === "Haze" && iconoBloque1[1].includes("n")){
                iconUpdateNextDays3.src = "img/icons/haze-night.svg"
            }else if (weatherNextDays[1] === "Snow" && iconoBloque1[1].includes("n")){
                iconUpdateNextDays3.src = "img/icons/snow.svg"
            }

              //Actualizar los iconos del siguiente bloque

            if(weatherNextDays[2] === "Clear" && iconoBloque1[2].includes("d")){
                iconUpdateNextDays4.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[2] === "Clouds" && iconoBloque1[2].includes("d")){
                iconUpdateNextDays4.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[2] === "Rain" && iconoBloque1[2].includes("d")){
                iconUpdateNextDays4.src = "img/icons/rain.svg"
            }else if (weatherNextDays[2] === "Mist" && iconoBloque1[2].includes("d")){
                iconUpdateNextDays4.src = "img/icons/mist.svg"
            }else if (weatherNextDays[2] === "Drizzle" && iconoBloque1[2].includes("d")){
                iconUpdateNextDays4.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[2] === "Haze" && iconoBloque1[2].includes("d")){
                iconUpdateNextDays4.src = "img/icons/haze-day.svg"
            } else if(weatherNextDays[2] === "Snow" && iconoBloque1[2].includes("d")){
                iconUpdateNextDays4.src = "img/icons/snow.svg"
            }

            if(weatherNextDays[2] === "Clear" && iconoBloque1[2].includes("n")){
                iconUpdateNextDays4.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[2] === "Clouds" && iconoBloque1[2].includes("n")){
                iconUpdateNextDays4.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[2] === "Rain" && iconoBloque1[2].includes("n")){
                iconUpdateNextDays4.src = "img/icons/rain.svg"
            }else if (weatherNextDays[2] === "Mist" && iconoBloque1[2].includes("n")){
                iconUpdateNextDays4.src = "img/icons/mist.svg"
            }else if (weatherNextDays[2] === "Drizzle" && iconoBloque1[2].includes("n")){
                iconUpdateNextDays4.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[2] === "Haze" && iconoBloque1[2].includes("n")){
                iconUpdateNextDays4.src = "img/icons/haze-night.svg"
            } else if(weatherNextDays[2] === "Snow" && iconoBloque1[2].includes("n")){
                iconUpdateNextDays4.src = "img/icons/snow.svg"
            }

              //Actualizar los iconos del siguiente bloque

            if(weatherNextDays[3] === "Clear" && iconoBloque1[3].includes("d")){
                iconUpdateNextDays5.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[3] === "Clouds" && iconoBloque1[3].includes("d")){
                iconUpdateNextDays5.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[3] === "Rain" && iconoBloque1[3].includes("d")){
                iconUpdateNextDays5.src = "img/icons/rain.svg"
            }else if (weatherNextDays[3] === "Mist" && iconoBloque1[3].includes("d")){
                iconUpdateNextDays5.src = "img/icons/mist.svg"
            }else if (weatherNextDays[3] === "Drizzle" && iconoBloque1[3].includes("d")){
                iconUpdateNextDays5.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[3] === "Haze" && iconoBloque1[3].includes("d")){
                iconUpdateNextDays5.src = "img/icons/haze-day.svg"
            } else if(weatherNextDays[3] === "Snow" && iconoBloque1[3].includes("d")){
                iconUpdateNextDays5.src = "img/icons/snow.svg"
            }

            if(weatherNextDays[3] === "Clear" && iconoBloque1[3].includes("n")){
                iconUpdateNextDays5.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[3] === "Clouds" && iconoBloque1[3].includes("n")){
                iconUpdateNextDays5.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[3] === "Rain" && iconoBloque1[3].includes("n")){
                iconUpdateNextDays5.src = "img/icons/rain.svg"
            }else if (weatherNextDays[3] === "Mist" && iconoBloque1[3].includes("n")){
                iconUpdateNextDays5.src = "img/icons/mist.svg"
            }else if (weatherNextDays[3] === "Drizzle" && iconoBloque1[3].includes("n")){
                iconUpdateNextDays5.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[3] === "Haze" && iconoBloque1[3].includes("n")){
                iconUpdateNextDays5.src = "img/icons/haze-day.svg"
            } else if(weatherNextDays[3] === "Snow" && iconoBloque1[3].includes("n")){
                iconUpdateNextDays5.src = "img/icons/snow.svg"
            }

             //Actualizar los iconos del siguiente bloque

            if(weatherNextDays[4] === "Clear" && iconoBloque1[4].includes("d")){
                iconUpdateNextDays6.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[4] === "Clouds" && iconoBloque1[4].includes("d")){
                iconUpdateNextDays6.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[4] === "Rain" && iconoBloque1[4].includes("d")){
                iconUpdateNextDays6.src = "img/icons/rain.svg"
            }else if (weatherNextDays[4] === "Mist" && iconoBloque1[4].includes("d")){
                iconUpdateNextDays6.src = "img/icons/mist.svg"
            }else if (weatherNextDays[4] === "Drizzle" && iconoBloque1[4].includes("d")){
                iconUpdateNextDays6.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[4] === "Haze" && iconoBloque1[4].includes("d")){
                iconUpdateNextDays6.src = "img/icons/haze-day.svg"
            } else if(weatherNextDays[4] === "Snow" && iconoBloque1[4].includes("d")){
                iconUpdateNextDays6.src = "img/icons/snow.svg"
            }

            if(weatherNextDays[4] === "Clear" && iconoBloque1[4].includes("n")){
                iconUpdateNextDays6.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[4] === "Clouds" && iconoBloque1[4].includes("n")){
                iconUpdateNextDays6.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[4] === "Rain" && iconoBloque1[4].includes("n")){
                iconUpdateNextDays6.src = "img/icons/rain.svg"
            }else if (weatherNextDays[4] === "Mist" && iconoBloque1[4].includes("n")){
                iconUpdateNextDays6.src = "img/icons/mist.svg"
            }else if (weatherNextDays[4] === "Drizzle" && iconoBloque1[4].includes("n")){
                iconUpdateNextDays6.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[4] === "Haze" && iconoBloque1[4].includes("n")){
                iconUpdateNextDays6.src = "img/icons/haze-day.svg"
            } else if(weatherNextDays[4] === "Snow" && iconoBloque1[4].includes("n")){
                iconUpdateNextDays6.src = "img/icons/snow.svg"
            }

            //Actualizar iconos y descripccion del bloque
            if(weatherNextDays[5] === "Clear" && iconoBloque1[5].includes("d")){
                iconUpdateNextDays7.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[5] === "Clouds" && iconoBloque1[5].includes("d")){
                iconUpdateNextDays7.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[5] === "Rain" && iconoBloque1[5].includes("d")){
                iconUpdateNextDays7.src = "img/icons/rain.svg"
            }else if (weatherNextDays[5] === "Mist" && iconoBloque1[5].includes("d")){
                iconUpdateNextDays7.src = "img/icons/mist.svg"
            }else if (weatherNextDays[5] === "Drizzle" && iconoBloque1[5].includes("d")){
                iconUpdateNextDays7.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[5] === "Haze" && iconoBloque1[5].includes("d")){
                iconUpdateNextDays7.src = "img/icons/haze-day.svg"
            } else if(weatherNextDays[5] === "Snow" && iconoBloque1[5].includes("d")){
                iconUpdateNextDays7.src = "img/icons/snow.svg"
            }

            if(weatherNextDays[5] === "Clear" && iconoBloque1[5].includes("n")){
                iconUpdateNextDays7.src = "img/icons/clear-day.svg"
            } else if(weatherNextDays[5] === "Clouds" && iconoBloque1[5].includes("n")){
                iconUpdateNextDays7.src = "img/icons/partly-cloudy-day.svg"
            }else if (weatherNextDays[5] === "Rain" && iconoBloque1[5].includes("n")){
                iconUpdateNextDays7.src = "img/icons/rain.svg"
            }else if (weatherNextDays[5] === "Mist" && iconoBloque1[5].includes("n")){
                iconUpdateNextDays7.src = "img/icons/mist.svg"
            }else if (weatherNextDays[5] === "Drizzle" && iconoBloque1[5].includes("n")){
                iconUpdateNextDays7.src = "img/icons/drizzle.svg"
            }else if (weatherNextDays[5] === "Haze" && iconoBloque1[5].includes("n")){
                iconUpdateNextDays7.src = "img/icons/haze-day.svg"
            } else if(weatherNextDays[5] === "Snow" && iconoBloque1[5].includes("n")){
                iconUpdateNextDays7.src = "img/icons/snow.svg"
            }


        }

        funcionIconsNextDays(weatherNextDays, iconoBloque1);


        //Actualizar la descripccion
        const descriptionND = [data0.list[1].weather[0].description, data0.list[9].weather[0].description, data0.list[17].weather[0].description, data0.list[25].weather[0].description, data0.list[33].weather[0].description, data0.list[39].weather[0].description];
        const functionDescriptionNextDays = (descriptionND) => {
            const descriptionNextDays1 = document.querySelector(".descriptionNextDays1");
            if(descriptionND){
                const descriptionNextDays2 = document.querySelector(".descriptionNextDays2");
                descriptionNextDays2.innerHTML = descriptionND[0];
                descriptionNextDays2.style.textTransform = "capitalize";
                const descriptionNextDays3 = document.querySelector(".descriptionNextDays3");
                descriptionNextDays3.innerHTML = descriptionND[1];
                descriptionNextDays3.style.textTransform = "capitalize";
                const descriptionNextDays4 = document.querySelector(".descriptionNextDays4");
                descriptionNextDays4.innerHTML = descriptionND[2];
                descriptionNextDays4.style.textTransform = "capitalize";
                const descriptionNextDays5 = document.querySelector(".descriptionNextDays5");
                descriptionNextDays5.innerHTML = descriptionND[3];
                descriptionNextDays5.style.textTransform = "capitalize";
                const descriptionNextDays6 = document.querySelector(".descriptionNextDays6");
                descriptionNextDays6.innerHTML = descriptionND[4];
                descriptionNextDays6.style.textTransform = "capitalize";
                const descriptionNextDays7 = document.querySelector(".descriptionNextDays7");
                descriptionNextDays7.innerHTML = descriptionND[5];
                descriptionNextDays7.style.textTransform = "capitalize";
            }
        }
        functionDescriptionNextDays(descriptionND);


        //Funcion para actualizar la temperatura de estos bloques
        const tempNextDays =[data0.list[1].main.temp, data0.list[9].main.temp, data0.list[17].main.temp, data0.list[25].main.temp, data0.list[33].main.temp, data0.list[39].main.temp];
        const functionTempNextDays = (tempNextDays) => {
            const tempNextDays1 = document.querySelector(".tempNextDays1");
            if(tempNextDays){
                const tempNextDays2 = document.querySelector(".tempNextDays2");
                tempNextDays2.innerHTML = Math.round(tempNextDays[0]) + "°c";
                const tempNextDays3 = document.querySelector(".tempNextDays3");
                tempNextDays3.innerHTML = Math.round(tempNextDays[1]) + "°c";
                const tempNextDays4 = document.querySelector(".tempNextDays4");
                tempNextDays4.innerHTML = Math.round(tempNextDays[2]) + "°c";
                const tempNextDays5 = document.querySelector(".tempNextDays5");
                tempNextDays5.innerHTML = Math.round(tempNextDays[3]) + "°c";
                const tempNextDays6 = document.querySelector(".tempNextDays6");
                tempNextDays6.innerHTML = Math.round(tempNextDays[4]) + "°c";
                const tempNextDays7 = document.querySelector(".tempNextDays7");
                tempNextDays7.innerHTML = Math.round(tempNextDays[5]) + "°c";
            }
        }
        functionTempNextDays(tempNextDays);


        const probabilityRain = document.querySelector(".probabilityRain").innerHTML = Math.round( data0.list[0].pop * 100 )+ "%";
    } catch(error){
        console.log(error);
        alert(error);
    }
}



searchCity.addEventListener("keydown",btn=>{
    if(btn.key === "Enter"){
        checkWeather(searchCity.value);
        checkWeather5days(searchCity.value);
    }
    //console.log(searchCity.value);
})   


});


//Hacer que sea modo claro o modo oscuro
const buttonMode = document.querySelectorAll(".aside__menu-info-options-icons-mode");
const body = document.querySelector("body");
const textMode = document.querySelector(".aside__menu-info-options-icons-text-1");
const inputSearch = document.querySelector(".header__section-inputSearch");

//Secciones
const sectionMenu = document.querySelector(".aside__menu-info");
const sectionHeader = document.querySelector(".main__asideMenu");
const sectionMain = document.querySelector(".main__weather");
const sectionAsideWeather = document.querySelector(".aside__weather-info");

buttonMode.forEach(element => {
    element.addEventListener("click",()=>{
   
        body.classList.toggle("clearMode");
        if(body.classList.contains("clearMode")){
            textMode.innerHTML = "Modo Oscuro"
        }else{
            textMode.innerHTML = "Modo Claro"
        }

         sectionMenu.classList.toggle("clearModeSections");
    sectionMenu.classList.toggle("glass-card");
    sectionHeader.classList.toggle("clearModeSections");
    sectionHeader.classList.toggle("glass-card");
    sectionMain.classList.toggle("clearModeSections");
    sectionMain.classList.toggle("glass-card");
    sectionAsideWeather.classList.toggle("clearModeSections");
    sectionAsideWeather.classList.toggle("glass-card");
    inputSearch.classList.toggle("clearModeSections");
    inputSearch.classList.toggle("glass-card");
    })

   
})