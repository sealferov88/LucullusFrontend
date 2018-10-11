<template>
  <div class="Container">
      <span v-for="tag in value" class="tags">
        <div>{{ tag }}</div>
        <button type="button" class="removeTag" @click="removeTag(tag)">&times;</button>
      </span>
      <div class="">
        <input class="inputField" placeholder="Add tag..." @keydown.enter.prevent="addTag" v-model="newTag">
      </div>
    </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      newTag: '',
    }
  },
  methods: {
    addTag() {
      if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
        return
      }
      this.$emit('input', [...this.value, this.newTag.trim()])
      this.newTag = ''
    },
    removeTag(tag) {
      this.$emit('input', this.value.filter(t => t !== tag))
    },
  },
}
</script>

<style scope>
.tags {
  display: inline-flex;
  line-height: 1;
  align-items: center;
  background-color: #009EFF;
  color: #FFFFFF;
  border-color: #676973;
  border-radius: 4px;
  padding: 4px;
  margin-right: 8px;
  margin-bottom: 4px;
  font-size: 16px;
}

.removeTag {
  margin-left: 3px;
  background-color: #009EFF;
  color: #FFFFFF;
  line-height: 1;
  border: 0px;
  font-size: 16px;
}

.inputField{
  background-color: #2E323E;
  border-color: #676973;
  color: #FFFFFF;
  border: none;
  font-size: 16px;
}
.inputField::placeholder{
  color: #676973
}
</style>
