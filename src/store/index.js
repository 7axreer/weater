import axios from "axios";
import { createStore } from "vuex";

export default createStore({
    state: {
        apiKey: "65bdd06e9ec6b9ec751d2576d17e656e",
        weather: null,
    },
    getters: {},
    mutations: {},
    actions: {
        async getWeather(context, city) {
            try {
                let response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&appid=${context.state.apiKey}`);
                let { lat, lon, local_names } = response.data[0];

                if (local_names.en.toLowerCase() == city.toLowerCase() || local_names.ru.toLowerCase() == city.toLowerCase()) {
                    let responseSec = await axios.get(
                        `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${context.state.apiKey}&units=metric&lang=ru`
                    );
                    console.log(responseSec.data.current.temp);
                }
                // console.log(response);
            } catch (error) {
                // console.log(error);
            }
        },
    },
});
