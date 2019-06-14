<template>
  <div id="app">
    <div class="bg-animation"></div>
    <el-container direction="vertical">
      
      <el-header>
        
        <el-row>
          <el-col :span="18" :offset="3">
            <div class="header-left">
              <p>Brc 的博客</p>
            </div>



            <div class="header-right" v-if="terminal==1">
              <!-- @select--菜单激活回调（key,keypath） -->
              <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">我的简历</el-menu-item>
                <el-menu-item index="4">归档</el-menu-item>
                <el-menu-item index="3">搜索</el-menu-item>
              </el-menu>
            </div>
            
            <div class="header-right" v-else-if="terminal==2">
              <i class="el-icon-tickets" @click="show = !show"></i>
            </div>
          



          </el-col>
        </el-row>


        
        

      </el-header>

      <div>
        <el-collapse-transition>
          <div v-show="show">
            <el-menu
              default-active="2"
              @select="handleSelect"
              class="el-menu-vertical-demo">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">我的简历</el-menu-item>
              <el-menu-item index="4">归档</el-menu-item>
              <el-menu-item index="3">搜索</el-menu-item>
            </el-menu>
          </div>
        </el-collapse-transition>
      </div>

      <i class="el-icon-upload2" @click="returnTop()" v-if="btnTop"></i>

      <router-view/>
      <el-footer>
        
        <!-- <a href="mailto:953629790@qq.com"><i style="margin-right: 5px;" class="el-icon-message"></i>意见反馈</a> -->
        <p style="color: #eee">Copyright ©2019 Brc</p>

      </el-footer>  

    </el-container>
      
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      terminal: '',
      btnTop: false,
      show: false
    }
  },
  computed: {
  },
  methods: {
    handleSelect(key, keyPath) {  //根据传进的key值确定点击的是哪个目录，并跳转
      console.log(key);

      let target;
      switch(key) {
        case '1':
          target = 'BlogIndex';
          this.activeIndex = '1';
          break;
        case '2':
          target = 'AboutMe';
          this.activeIndex = '2';
          break;
        case '3':
          target = 'SearchPage';
          this.activeIndex = '3';
          break;
        case '4':
          target = 'TimeStamp';
          this.activeIndex = '4';
          break;  
      }


      console.log(target);
      this.$router.push({name: target})
    },
    scrollToTop() {   //根据当前页面位置，控制返回顶部标签的显示隐藏
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    // 　　console.log(scrollTop);
      let browserHeight = window.outerHeight;
      if (scrollTop > browserHeight) {
            this.btnTop = true;
      } else {
            this.btnTop = false;
      }
    },
    returnTop() {   //判断页面当前位置是否大于0（即页面当前位置是否是最顶端），不是就调用this.returnTop方法减少当前的窗体高度，并再度调用自身，知道窗口位置为0，清除计时器
      document.documentElement.scrollTop -= 80;
      let timer;
      if (document.documentElement.scrollTop > 0) {
          timer=setTimeout(()=>this.returnTop(80),16);
      }else {
          clearTimeout(timer);
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  created() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
       console.log('手机端');
       this.terminal = '2';
    }else {
       console.log('PC端')
       this.terminal = '1';
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .header-left {
    float: left;
  }
  .header-left > p{
    color: rgb(255, 208, 75);
    margin-left: 10px;
    font-size: 25px;
  }
  .header-right {
    float: right;
  }
  .el-header {
    background-color: #545c64;
    line-height: 60px;
  }
  .el-footer {
      background-color: #545c64;
      color: #333;
      text-align: center;
      line-height: 60px;
  }
  .el-footer > a {
    text-decoration: none;
    color: #fff;
  }
  .el-footer > a:hover {
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
    border-bottom: 1px solid #ccc;
  }
  i{
    color: #fff;
  }
  .grid-content {
    padding: 10px;
    min-height: 36px;
  }
  .el-icon-upload2{
    color: #000;
    font-size: 30px;
    height: 30px;
    width: 30px;
    position: fixed;
    right: 30px;
    bottom: 60px;
  }
  .el-icon-upload2:hover{
    color: #409eff;
  }
</style>
