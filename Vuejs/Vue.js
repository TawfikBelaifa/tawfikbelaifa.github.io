
const Slidesc = {
    template: "#sildes",
    name: "Slidesc", 
    data(){
        return {
            index: 0,
        }
    },
    computed: {
        visible(){ return this.index === this.$parent.index},
        transition(){ return 'CrsAnnimation-' + this.$parent.direction },
        
    },
    methods:{
       
    }
}

const Carroussel = {
    template: "#carroussel",
    name: "Carroussel",
    data(){
        return{
            index: 0,
            slides: [],
            direction: null
        }
    },
    methods: {
        suivant(){
            this.index++
            if(this.index > this.$parent.lengthdataCarouss-1){
                this.index = 0
            }
            this.direction = 'right'
        },
        prev(){
            this.index--
            if(this.index < 0){
                this.index = this.$parent.lengthdataCarouss -1
            }
            this.direction = 'left'
        },
        SelectCarouss(id){
            this.direction = this.index > id ? 'left' : 'right'
            this.index = id
        }
        
    },
    computed: {
        //sildesCount(){ return this.slides.length },
        dataCaroussLength(){ return this.$parent.dataCarouss.length }
       
    },
    mounted(){
        this.slides = this.$children
        this.slides.forEach((slide, i) => {
            slide.index = i
        })
    }

}

const Vm = new Vue({
    el: "#app",
    components:{
        Carroussel,
        Slidesc
        
    },
    data: {
        dataCarouss: [
            { name: 'ssnet.gif', title : 'Student social network', acces:"Code à venir sur GitHub",Whats: "Student social network est réseau social étudiant équivalent à instagram. Conçu dans le but de facilité la communication entre les étudiants et les enseigants ..."},
            { name: '2.png', title : 'ShareMyHouse', acces:"Code à venir sur GitHub", Whats: "ShareMyHouse est un site web équivalent à airBnb permettant la réservation de logement de particulier avec une messagerie mise en place pour permettre l'échange entre le particulier et la personne intéressée ..."},
            { name: '3.png', title : 'YourSneakers', acces:"Site à venir", Whats: "YourSneakers est un site e-commerce dédié à l'achat de chausssure de luxe en ligne, avec un systeme de panier permettant de voir l'évolution de nos achats et leurs actualisations."},
            { name: '4.png', title : 'JO Tokyo 2020', acces:"Code à venir sur GitHub", Whats: "JO Tokyo 2020 est projet Universitaire proposé par l'université de picardie Jules Vers dans lequel il nous est demandé de mettre en place une base de donnée qui servira à l'organisation des prochains jeux olympiques. Cette organisation regroupe la gestion des épreuves et la gestion des personnes au quel j'ai eu le plaisir de participer à la conception et à l'implémentaion de cette dernière"}
            
        ],
    },
    computed: {
        lengthdataCarouss(){ return this.dataCarouss.length }
    }
})