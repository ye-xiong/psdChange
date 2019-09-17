<template>
    <div id="home-page"
      v-loading="loading"
      element-loading-text="正在转化为word文件并存入同级目录下"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      class="upload-demo">
      <el-upload
      drag
      action=""
      :auto-upload="false"
      :on-change="fileDate"
      :show-file-list="false"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">请上传需要转化的pdf</div>
      </el-upload>
    </div>
</template>
<script>
import path from 'path'
import PdfWord from '../util/PdfWord'
export default {
  data () {
    return {
      loading: false
    }
  },
  created () {
    this.$store.commit('CHANG_STATE', false)
  },
  computed: {
    state () {
      return this.$store.state.Counter.main
    }
  },
  methods: {
    fileDate (fileList) {
      let extname = path.extname(fileList.raw.path)
      if (extname === '.pdf') {
        this.$store.commit('CHANG_STATE', true)
        PdfWord.change(fileList.raw.path)
      } else {
        this.$message({
          type: 'error',
          message: '请上传正确的文件类型'
        })
      }
    }
  },
  watch: {
    state (val) {
      if (val) {
        this.loading = true
      } else {
        this.loading = false
      }
    }
  }
}
</script>
<style>
#home-page{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
}
html,body,#app{
  height: 100%;
}
.el-upload__tip{
  text-align: center;
  font-size: 15px;
}
</style>


