<template>
  <div>
    <div>
      <p v-model="question">{{question}}</p>
      <quill-editor ref="TextEditor"
                    v-model="article.content"
                    :options="editorOption">
      </quill-editor>
      <el-button type="primary" @click="editArticle('articleForm')">确 定</el-button>
    </div>

  </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  import { quillEditor } from 'vue-quill-editor'
  export default {
    data(){
      return {
        articles: [],
        article: {
          id: '',
          date: '',
          title: '',
          author: '',
          content: '',
          status: 0,

        },
        question: 'aaaaaaaaa',
        articleFormVisible: false,
        rowIndex: 9999,
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike', 'link'],
              ['image', 'clean']
            ]
          },
          placeholder: '请输入文章内容...',
          theme: 'snow'
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 5, max: 25, message: '长度在 5 到 25 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    components: {
      quillEditor
    },
    methods:{
      editArticle:function (a) {

        //这里是因为编辑器有标签，通过正则去掉标签；
        var before = this.article.content;
        var dd=before.replace(/<\/?.+?>/g,"");
        alert(dd);
//todo 通过接口发给后台，进行编译处理；
        console.log(dd)
      }
    }
  }
</script>

<style lang="scss" scoped>

    .quill-editor {
      height: 250px;
      margin-bottom: 20px;
    }

  .el-button{
    margin-top: 20px;
  }

</style>
