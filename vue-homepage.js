var data = [{id: 1, image: 'static/images/stock1.png',subject: "Physics", tag:"#physics"},
    {id: 2, image: 'static/images/stock1.png',subject: "Chem", tag:"#chem"},
    {id: 3, image: 'static/images/stock1.png',subject: "Math", tag:"#math"},
    {id: 4, image: 'static/images/stock1.png',subject: "Math", tag:"#math"}]

Vue.component('waterloo-table', {
    template: `
    <table>
    <tr><th v-for="header in headers">{{header}}</th></tr>
    <tr v-for="item in items" @click="show(item.id)" v-bind:style="{color: colour(item.subject)}"><td v-for="data in item">{{data}}</td></tr>
    </table>
    `,
    data: function () {
        return {
            headers: ["id","image", "subject", "tag"],
            items: data,
            colours:[["Physics", "green"],
                ["Math", "red"],
                ["Chem", "blue"]],
        }
    },
    methods:{
        show: function (id){
            console.log(id)
        },
        colour: function (sub){
            var index = -1;
            for(var i = 0; i < this.colours.length; i++){
                if(this.colours[i][0] === sub){
                    index = i;
                }
            }
            if(index >= 0){
                return this.colours[index][1]
            }
            return ""
        }
    }
  })

new Vue({
    el: '#contents'
})