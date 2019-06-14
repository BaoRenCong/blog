<template>
  <div class="SearchPage">


    <el-main>
      <el-row>
        <el-col :span="18" :offset="3">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col style="text-align: center;" :span="3" :offset="4">
          <a class="tag" href="javscript:;" @click="category('css')">css</a>
        </el-col>
        <el-col style="text-align: center;" :span="3" :offset="1">
          <a class="tag" href="javscript:;" @click="category('vue')">Vue</a>
        </el-col>
        <el-col style="text-align: center;" :span="3" :offset="1">
          <a class="tag" href="javscript:;" @click="category('js')">Js</a>
        </el-col>
        <el-col style="text-align: center;" :span="3" :offset="1">
          <a class="tag" href="javscript:;" @click="category('all')">全部</a>
        </el-col>
      </el-row>

      
      <el-row v-for="(note,index) in search" :key="index">
          <el-col :span="18" :offset="3">
            <div class="grid-content bg">

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
  name: 'SearchPage',
  // components: { Notes },
  data () {
    return {
      input: '',
      notes: [],
      notes1: []
    }
  },
  computed: {
    search: function() {
      let _this = this;
      let search = [];
      _this.notes.map(function(note) {
        if (note.title.search(_this.input) != -1) {
        search.push(note);
        }
      });
      return search;
    }
  },
  methods: {
    getdata: function() {
      let _this = this;

      this.$http.get('/api/getNotes')
      .then(function(res){
          console.log('请求成功');
          console.log(res.data);
          _this.notes = res.data;
          _this.notes1 = res.data;
          for(let i in _this.notes) {
            _this.notes[i].ndate = _this.notes[i].ndate.substring(0, 10);
            _this.notes1[i].ndate = _this.notes1[i].ndate.substring(0, 10);
          }
      },function(){
          console.log('请求失败处理');
      });

    },
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
    category:function(classification) {   //判断当前所选择的分类是什么，并显示相应的笔记
      if(classification != 'all') {
            console.log(classification);
            let arr = [];
            this.notes1.map(function(note) {
              if (note.category.search(classification) != -1) {
                arr.push(note);
              }
            });
            this.notes = arr;
        }else {
          this.notes = this.notes1;
        }
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
    text-align: center;
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
  .tag {
    color: #000;
    font-size: 14px;
    display: block;
    line-height: 40px;
    border: 1px solid #aaa;
    border-radius: 10px;
  }
  .tag:hover{
    background-color: #000;
    color: #fff;
  }
  .tag span{
    font-size: 12px;
  }
</style>
