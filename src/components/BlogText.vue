<template>
  <div class="blogText">
    <el-main>
      <div class="box">
      
      <div class="top">
        <h2>{{note.title}}</h2>
        <h5>
          <span>时间：{{note.ndate}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>分类：{{note.category}}</span>
        </h5>
      </div>
      <h3>简介：</h3>
      
      <p>{{note.introduce}}</p>


<!-- <h3>em</h3>
      
      <p>特点：</p>
      <ul>
        <li>子元素字体大小的em是相对于父元素字体大小</li>
        <li>元素的width/height/padding/margin用em的话是相对于该元素的font-size</li>
      </ul> -->

      <div v-html="note.preface">
      

      
    </div>




      </div>

    </el-main>

  </div>
</template>

<script>


export default {
  name: 'blogText',
  // components: { Notes },
  data () {
    return {
      note: {},
      id: '',
      date: ''
    }
  },
  methods: {
    getdata: function() {
      let _this = this;

      if (_this.$route.params.id) {
        // console.log("a");
        _this.id = this.$route.params.id;
        localStorage.setItem("id",_this.id)
      }else if(localStorage.getItem("id")) {
        // console.log("b");
        _this.id = localStorage.getItem("id");
      }


      this.$http.get('/api/getValue', {
        params: {nid: _this.id}
      }).then( (res) => {
        console.log(res.data);
        _this.note = res.data[0];

        // node时间
        // _this.note.ndate = res.data[0].ndate.substring(0, 10);
      })
    }
  },
  created() {
    this.getdata()
  }
}
</script>

<style scoped>
 .el-main{
  width: 75%;
  margin: 0 auto;
 }
  .box{
    padding: 40px;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px #aaa;
    color: #555;
  }
  .top{
    width: 100%;
    margin-bottom: 60px;
  }
  .top > h2{
    margin-bottom: 8px;
    text-align: center;
    font-size: 26px;
    margin-bottom: 30px;
  }
  .top > h5{
    font-size: 13px;
    color: #999;
    text-align: center;
  }
  h3{
    line-height: 60px;
    border-bottom: 1px solid #bbb;
  }
  p{
    text-indent: 2em;
    line-height: 30px;
    margin-top: 10px;
  }
  ul{
    line-height: 30px;
    margin-top: 10px;
    margin-left: 70px;
  }
  li{
    
  }
  pre{
    box-sizing:border-box; 
    /*以下样式是自动换行代码*/ 
    white-space: pre-wrap; /* css-3 */ 
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */ 
    white-space: -pre-wrap; /* Opera 4-6 */ 
    white-space: -o-pre-wrap; /* Opera 7 */ 
    word-wrap: break-word; /* Internet Explorer 5.5+ */ 
    /*以上样式是自动换行代码，需要的加上，不需要的删除*/
    overflow:auto;
    font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-size:13px;
    padding:9.5px;
    margin-top:10px;
    margin-bottom:10px;
    line-height:1.42857;
    color:#333333;
    word-break:break-all;
    word-wrap:break-word;
    border:1px solid #CCCCCC;
    border-radius:4px;
    background-color:#F5F5F5;
  }
</style>
