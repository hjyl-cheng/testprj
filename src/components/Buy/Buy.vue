<template>
  <div class="buy">
    <div class="item">
      <label for>书籍名称:</label>
      <input type="text" v-model="book.name" />
    </div>
    <div class="item">
      <label for>作者名称:</label>
      <input type="text" v-model="book.author" />
    </div>
    <div class="item">
      <label for>书籍描述:</label>
      <input type="text" v-model="book.desc" />
    </div>
    <div class="item">
      <label for>缩略图:</label>
      <input @change="previewImage" type="file" multiple />
      <img :src="book.img" alt />
    </div>
    <div class="item">
      <button @click="submitBook">提交</button>
    </div>
  </div>
</template>
<script>
import { postBookinfo } from "@/api";
export default {
  data() {
    return {
      book: {
        name: "",
        author: "",
        desc: "",
        img: ""
      }
    };
  },
  methods: {
    previewImage(event) {
      // window.console.log(event.target.files)
      // 使用到原生js读取文件
      var file = new FileReader();
      file.readAsDataURL(event.target.files[0]);
      file.onload = () => {
        // window.console.log(file)
        // window.console.log(file.result)
        this.book.img = file.result;
      };
    },
    async submitBook() {
      var res = await postBookinfo(this.book);
      window.console.log(res);
    }
  }
};
</script>script
<style scoped lang="less">
.item {
  width: 80%;
  margin: 40px auto;
  label {
    font-size: 40px;
  }
  input {
    border: 2px solid #ededed;
    width: 400px;
    height: 80px;
  }
  button {
    width: 240px;
    height: 80px;
    background: red;
    border: none;
    color: white;
    font-size: 36px;
  }
}
</style>