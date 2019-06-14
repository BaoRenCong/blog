<template>
  <div class="timeStamp">
    <el-main>
      <el-col :span="18" :offset="3">

        <div class="block">

          <el-timeline>
            <el-timeline-item
              v-for="(note, index) in notes"
              :key="index"
              :timestamp="note.ndate"
              placement="top">
              <el-card>
                <a href="javscript:;" @click="openNote(index)">{{note.title}}</a>
                <p>前言：{{note.introduce}}</p>
              </el-card>
            </el-timeline-item>
            
          </el-timeline>

        </div>


      </el-col>
    </el-main>

  </div>
</template>

<script>

// import Notes from '../components/Notes'

export default {
  name: 'timeStamp',
  // components: { Notes },
  data () {
    return {
      notes: []
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
          for(let i in _this.notes) {
            _this.notes[i].ndate = _this.notes[i].ndate.substring(0, 10);
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
    }
  },
  created() {
    this.getdata()
  }
}
</script>

<style scoped>
a {
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    color: #3354AA;
    text-decoration: none;
  }
p{
  margin-bottom: 10px;
}
</style>
