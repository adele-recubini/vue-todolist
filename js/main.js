var app = new Vue({
 el: '#root',
 data:{
 arraylist:[],
 elementi:'',

 },

methods:{
// creo funzione che al click mi inserisce una stringa di elementi in un array
addElement:function() {
  this.arraylist.push(this.elementi)
}

}



});




Vue.config.devtools = true;
