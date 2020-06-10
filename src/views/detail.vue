<template>
  <div>
    <div id="d2">
      <div id="d21">
        姓名<el-input class="ip" v-model="input1" style="width: 10%"></el-input>
        工号<el-input class="ip" v-model="input2" style="width: 10%"></el-input>
        部门<el-input class="ip" v-model="input3" style="width: 10%"></el-input>
        日期<el-date-picker class="ip" v-model="input4" style="width: 15%" type="date" placeholder="选择日期"></el-date-picker>
        &nbsp;
        <el-button>搜索</el-button>
        <el-button>提交</el-button>
      </div>
      <el-table :data="tableData" border style="width: auto">
        <el-table-column prop="id" label="" >
        </el-table-column>
        <el-table-column prop="jobNumber" label="工号">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="department" label="部门名称">
        </el-table-column>
        <el-table-column prop="date" label="日期">
        </el-table-column>
        <el-table-column width="700px">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.checked1" label="午餐" border></el-checkbox>
            <el-checkbox v-model="scope.row.checked2" label="晚餐" border></el-checkbox>
            <el-checkbox v-model="scope.row.checked3" label="夜餐" border></el-checkbox>
            <el-checkbox v-model="scope.row.checked4" label="夜宵" border></el-checkbox>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
          return {
    			   input1:"",
    			   input2:"",
    			   input3:"",
    			   input4:"",
            tableData: [
    				   {
    	 				 id:'1',
              jobNumber: 'JST1111',
              name: '王小虎',
              department: '信息技术中心',
    	 				 date:'2016-05-02',
               checked1:false,
               checked2:false,
               checked3:false,
               checked4:false
            }, {
    	 				 id:'2',
              jobNumber: 'JST1111',
              name: '王小虎',
              department: '信息技术中心',
              date:'2016-05-02',
               checked1:false,
               checked2:false,
               checked3:false,
               checked4:false
            }, {
    	 				 id:'3',
              jobNumber: 'JST1111',
              name: '王小虎',
              department: '信息技术中心',
              date:'2016-05-02',
               checked1:false,
               checked2:false,
               checked3:false,
               checked4:false
            }, {
    	 				 id:'4',
              jobNumber: 'JST1111',
              name: '王小虎',
              department: '信息技术中心',
              date:'2016-05-02',
               checked1:false,
               checked2:false,
               checked3:false,
               checked4:false
            } ,{
    	 				 id:'5',
              jobNumber: 'JST1111',
              name: '王小虎',
              department: '信息技术中心',
              date:'2016-05-02',
               checked1:false,
               checked2:false,
               checked3:false,
               checked4:false
            }, {
    	 				 id:'6',
              jobNumber: 'JST1111',
              name: '王小虎',
              department: '信息技术中心',
              date:'2016-05-02',
               checked1:false,
               checked2:false,
               checked3:false,
               checked4:false
            }, {
    	 				 id:'7',
              jobNumber: 'JST1111',
              name: '王小虎',
              department: '信息技术中心',
              date:'2016-05-02',
               checked1:false,
               checked2:false,
               checked3:false,
               checked4:false
            }, {
    	 				 id:'8',
              jobNumber: 'JST1111',
              name: '王小虎',
              department: '信息技术中心',
              date:'2016-05-02',
               checked1:false,
               checked2:false,
               checked3:false,
               checked4:false
            }, {
    	 				 id:'9',
              jobNumber: 'JST1111',
              name: '王小虎',
              department: '信息技术中心',
              date:'2016-05-02',
               checked1:false,
               checked2:false,
               checked3:false,
               checked4:false
            }]
          }
       }

  }

</script>

<style>

  #d21{

  		  margin:10px;
  }
 .ip{
  		  width: 120px;
  }

</style>
