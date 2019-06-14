<template>
  <div class="blogIndex">
    <el-main>
      <el-row v-for="(note,index) in notes" :key="index">
          <el-col :span="18" :offset="3">
            <div class="grid-content bg">


              <!-- <router-link tag="a" to="/BlogText" style="font-size: 18px; margin-bottom: 8px; color: #3354AA; text-decoration: none;"></router-link> -->
              <a href="javscript:;" @click="openNote(index)">{{note.title}}</a>


              <p class="sign">
                <span>时间：{{note.ndate}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>分类：{{note.category}}</span>
              </p>
              <div style="clear: both;"></div>
              <p style="margin-bottom: 20px;">前言：{{note.introduce}}</p>

            </div>
          </el-col>
        </el-row>

    </el-main>

  </div>
</template>

<script>

// import Notes from '../components/Notes'

export default {
  name: 'BlogIndex',
  // components: { Notes },
  data () {
    return {
      notes: []
    }
  },  
  methods: {
    openNote: function(index) {   //获取当前所点击的笔记的id值，并传给BlogText，跳转
      console.log("qwe"+index);
      let _this = this;
      let nid = _this.notes[index].nid;
      console.log("asd"+nid);
      this.$router.push({
          name:'BlogText',
          params:{
            id: nid
          }
        })
    },
    getdata: function() {
      let _this = this;

      this.$http.get('/api/getNotes')
      .then(function(res){
          console.log('请求成功');
          console.log(res);
          _this.notes = res.data;

          for(let i in _this.notes) {
            _this.notes[i].ndate = _this.notes[i].ndate.substring(0, 10);
          }

      },function(){
          console.log('请求失败处理');
      });

    }
  },
  created() {
    this.getdata()
  }
}
</script>

<style scoped>
  .header-right {
  }
  .el-header {
    background-color: #545c64;
    line-height: 60px;
  }
  .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
  .el-main {
  }
  
  body > .el-container {
    width: 100%;
    margin-bottom: 40px;
  }
   .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg {
    border-bottom: 1px dashed #999;
  }
  .grid-content {
    padding: 10px;
    min-height: 36px;
  }
  a {
    font-size: 18px;
    line-height: 50px;
    color: #3354AA;
    text-decoration: none;
  }
  a:hover {
    color: #f40;
  }
  .sign {
    font-size: 14px;
    margin-bottom: 10px;
  }
</style>
