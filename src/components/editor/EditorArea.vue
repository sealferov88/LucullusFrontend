<template>
 <form class="article">
   <div class="ArticleContainer">
     <div class='Container'>
       <textarea class="inputField textArea" rows="1" cols="100%" v-autosize="" type="text" placeholder="Article name"></textarea>
     </div>
     <div class='Container'>
       <select class='selectCategory' v-model="chosenCategory" placeholder="Choose your category">
         <option v-for="category in categories" v-bind:value="category">{{category.name}}</option>
       </select>
     </div>
     <div class='Container'>
       <textarea class="inputField textArea" rows="25" cols="100%"  v-autosize="" placeholder="Type here your beatiful article:3"></textarea>
    </div>
    <div class="Container">
      <tags-component class="tagsInput" v-model="tags"></tags-component>
    </div>
    <div class="Container" value="Publish">
      <button class="buttonItself"  v-on:click="publish" value="Publish">Publish</button>
    </div>
   </div>
</form>
</template>

<script>
import axios from 'axios'
import tags from './Tags.vue'

export default {
        data(){
          return{
            tags:[
              ''
          ],
          chosenCategory: '',
          categories:[
            {name: 'odin'},
            {name: 'dva' }
          ]
        }
        },
        components: {
          'tags-component': tags,
        },
        // methods:{
        //   publish(){
        //     axios.post('/article',{
        //     })
        //     .then(function (response) {})
        //   }
        // }
    }
</script>

<style scoped>
.article{
  background-color: #2E323E;
  text-align: center;
}
.Container{
  margin-top: 1%;
}
.ArticleContainer{
}
.textArea{
  border: none;
  resize: none;
  font-size: 16px;
  size: 100%;
}
.buttonItself{
  background-color: #009EFF;
  color: #FFFFFF;
  border-color: #009EFF;
  display: inline-flex;
  line-height: 1;
  align-items: center;
  border-radius: 4px;
  padding: 4px;
  margin-right: 8px;
  margin-bottom: 4px;
  border: none;
  font-size: 16px;
}
.inputField{
  background-color: #2E323E;
  border-color: #676973;
  color: #FFFFFF
}
.inputField::placeholder{
  color: #676973
}
.selectCategory{

}
</style>
