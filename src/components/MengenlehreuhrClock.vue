<template>
        <div class="mengenlehreuhr">
            <!-- Segundos -->
            <div class="row seconds">
                <div class="lightSecond yellow" :class="{ on: LuzSegundos }"></div>
            </div>
            <!-- Fila de las 5 horas -->
            <div class="row five-hours">
                <div class="light red" v-for="(light, index) in LuzCincoHoras" :key="'five-hour-' + index" :class="{ on: light }"></div>
            </div>
            <!-- Fila de las horas -->
            <div class="row hours">
                <div class="light red" v-for="(light, index) in LuzHoras" :key="'hour-' + index" :class="{ on: light }"></div>
            </div>
            <!-- Fila de los 5 minutos -->
            <div class="row five-minutes">
                <div class="light" v-for="(light, index) in LuzCincoMinutos" :key="'five-minute-' + index" 
                    :class="{ on: light, red: (index + 1) % 3 === 0, yellow: (index + 1) % 3 !== 0 }">
                </div>
            </div>
            <!-- Fila de los minutos -->
            <div class="row minutes">
                <div class="light yellow" v-for="(light, index) in LuzMinutos" :key="'minute-' + index" :class="{ on: light }"></div>
            </div>
        </div>
</template>
    
<script>
    export default {
        name: 'MengenlehreuhrClock',
        data() {
        return {
            LuzSegundos:        false,
            LuzCincoHoras:      Array(4).fill(false),
            LuzHoras:           Array(4).fill(false),
            LuzCincoMinutos:    Array(11).fill(false),
            LuzMinutos:         Array(4).fill(false),
        };
        },
        methods: {
            updateLights() {
                const TiempoActual      = new Date();
                const hours             = TiempoActual.getHours();
                const minutes           = TiempoActual.getMinutes();
                const seconds           = TiempoActual.getSeconds();
        
                this.LuzSegundos        = seconds % 2 === 0;

                this.LuzCincoHoras      = this.LuzCincoHoras.map((_, i) => i < Math.floor(hours / 5));
                
                this.LuzHoras           = this.LuzHoras.map((_, i) => i < (hours % 5));
        
                this.LuzCincoMinutos    = this.LuzCincoMinutos.map((_, i) => i < Math.floor(minutes / 5));
        
                this.LuzMinutos         = this.LuzMinutos.map((_, i) => i < (minutes % 5));
            }
        },
        mounted() {

            this.updateLights();

            setInterval(this.updateLights, 1000);
        },
    };
</script>
    
<style scoped>
    .mengenlehreuhr {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: black;
        padding: 50px;
        border-radius: 90px;
        margin-left: 750px;
        margin-right: 750px;
    }
    
    .row {
        display: flex;
        margin-bottom: 5px;
    }
    
    .seconds {
        margin-bottom: 15px;
    }
    
    .light {
        width: 40px;
        height: 40px;
        margin: 5px;
        /* background-color: grey; */
        background-color: black;
        border-radius: 10%;
        border-color: gray;
        border-style: solid;
        border-width: 2px;
    }
    .light.red.on {
        background-color: red;
    }
    .light.yellow.on {
        background-color: yellow;
    }

    
    .lightSecond {
        width: 60px;
        height: 60px;
        margin: 5px;
        /* background-color: grey; */
        background-color: black;
        border-radius: 50%;
        border-color: gray;
        border-style: solid;
        border-width: 2px;
    }
    .lightSecond.red.on {
        background-color: red;
    }
    .lightSecond.yellow.on {
        background-color: yellow;
    }

    
    .five-hours .light {
        width: 50px;
        height: 30px;
        margin: 9px;
    }
    
    .five-minutes .light {
        width: 15px;
        height: 30px;
        padding: 0px;
        margin: 3px;
    }
    
    .hours .light,
    .minutes .light {
        width: 50px;
        height: 30px;
        margin: 9px;
    }
</style>
    