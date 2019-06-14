<template>
  <div class="AboutMe">

      <el-main>
        <div class="box">
          <h2>基本信息</h2>
          <p>姓名：鲍仁聪</p>
          <p>性别：男</p>
          <p>年龄：20</p>
          <p>学校：杭州科技职业技术学院</p>
          <p>博客：http://www.jobhunter.vip/brcblog.html</p>

          <h3>联系方式</h3>
          <p>电话：15990793811</p>
          <p>邮箱：953629790@qq.com</p>

          <h3>应聘岗位</h3>
          <p>前端开发工程师</p>

          <h3>专业技能</h3>
          <ol>
            <li>熟悉html、css、js等web前端开发技术</li>
            <li>熟悉Vue全家桶的使用</li>
            <li>了解nodejs、express，能够独立完成一些简单的小型项目</li>
          </ol>

          <h3>获奖经历</h3>
          <ol>
            <li>获得学院三好学生</li>
            <li>获得学院二等奖学金</li>
            <li>获得学生会优秀干事</li>
          </ol>

          <h3>自我评价</h3>
          <ol>
            <li>喜欢关注新事物、新技术，并对新的东西有较强的学习能力</li>
            <li>有较强的组织、协作能力，能够很好的和各种性格的人合作</li>
          </ol>
        </div>
      </el-main>

  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      notes: []
    }
  },  
  methods: {
    getValue() {
      let _this = this;
      // axios.get('/', {params: ''})
      this.$http.get('/api/getValue', {
        params: {nid: 1}
      }).then( (res) => {
        console.log(res);
        _this.notes = res.data;
      })
    },
    setValue() {
      // axios.post('/', {})
      this.$http.post('/api/setValue', {
        params: {nid: 1}
      }).then( (res) => {
        console.log('res', res);
      })
    }
  }
}
</script>

<style scoped>
  .el-main {

  width: 75%;
  margin: 0 auto;
  }
  .box{
    padding: 40px;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px #aaa;
    color: #555;
  }
  p{
    margin: 10px 0;
  }
  h3{
    border-top: 1px solid #555;
    padding: 10px 0;
  }
  ul{
    line-height: 30px;
    margin: 0 0 20px 20px;
  }
  ol{
    line-height: 30px;
    margin: 0 0 20px 20px;
  }
</style>
