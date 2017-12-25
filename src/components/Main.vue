/* eslint-disable */
<template>
  <div class="hello">
    <h1>Welcome to dogs pics website on VUE.js</h1>
    <p>Breed: &nbsp;
    <select name="" id="" v-model="selected" @change="change(selected)">
      <option disabled value="">Please select one</option>
      <option v-for="breed in breeds" :key="breed">{{breed}}</option>
    </select></p>
    <img v-bind:src="img" alt="" style="border: solid 1px; max-width: 500px; max-height: 500px;">
  </div>
</template>

<script>
  import fetch from 'node-fetch'

  //добываем список пород
  let breeds = [],img;
  fetch('https://dog.ceo/api/breeds/list/all').then(res => res.json()).then(json => {
    for (let breed in json.message) {
      breeds.push(breed)
      if (json.message[breed].length > 0) json.message[breed].map(d => breeds.push(breed + '-' + d))
    }
  })
  function modifyPath (path) { return path.match(/-/g) ? path.replace(/(\w+)-(\w+)/g, '$1/$2') : path }
  function getBreedName (breed) { return breed.replace(/(https:\/\/dog.ceo\/api\/img\/)(.*)\/(.*)/g, '$2') }

  function breedRenamer () {
    return 'xxx';
  }



export default {
  name: 'HelloWorld',
  data () {
    return {
      breeds: breeds,
      selected: '',
      img: ''
    }
  },
  methods: {
    //при выборе породы
    change(selected) {
      fetch('https://dog.ceo/api/breed/' + modifyPath(selected) + '/images/random').then(res => res.json()).then(json => {
        this.img = json.message;
      });
    }
  },
  mounted() {
//    ставим дефолтную картинку
    fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json()).then(json => {
      this.img = json.message;
      this.selected = getBreedName(json.message)
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
