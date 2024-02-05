const app = Vue.createApp ({
    data() {return {
        opciones:true,
        fb:false,
        ub:false,
        lb:false,
        phw:false,
        plw:false,
        hiit:false,
        cross:false,
        func:false,
    }},

    methods:{
        cambiarfb(){
            this.opciones = !this.opciones;
            this.fb = !this.fb;
        },
        cambiarub(){
            this.opciones = !this.opciones;
            this.ub = !this.ub;
        },
        cambiarlb(){
            this.opciones = !this.opciones;
            this.lb = !this.lb;
        },
        cambiarphw(){
            this.opciones = !this.opciones;
            this.phw = !this.phw;
        },
        cambiarplw(){
            this.opciones = !this.opciones;
            this.plw = !this.plw;
        },
        cambiarhiit(){
            this.opciones = !this.opciones;
            this.hiit = !this.hiit;
        },
        cambiarcross(){
            this.opciones = !this.opciones;
            this.cross = !this.cross;
        },
        cambiarfunc(){
            this.opciones = !this.opciones;
            this.func = !this.func;
        },
    }
}).mount('#vue')