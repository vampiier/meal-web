<template>
 <div>
   <div id="d1">
   姓名<el-input class="ip" v-model="input1" style="width: 10%"></el-input>
   工号<el-input class="ip" v-model="input2" style="width: 10%"></el-input>
   部门<el-input class="ip" v-model="input3" style="width: 10%"></el-input>
   日期<el-date-picker class="ip" v-model="input4" style="width: 15%" type="date" placeholder="选择日期"></el-date-picker>
   &nbsp;
   <el-button>搜索</el-button>
   <el-button>提交</el-button>
   </div>

   <el-table :data="tableData" border >
     <el-table-column prop="id" label="" >
     </el-table-column>
     <el-table-column prop="jobNumber" label="工号">
     </el-table-column>
     <el-table-column prop="name" label="姓名">
     </el-table-column>
     <el-table-column prop="jurisdiction" label="部门权限" width="200px">
     </el-table-column>
     <el-table-column prop="createBy" label="创建人">
     </el-table-column>
     <el-table-column prop="createTime" label="创建时间" width="200px">
     </el-table-column>
     <el-table-column width="700px">
       <template slot-scope="scope">
        <el-radio-group v-model="scope.row.flag">
              <el-radio :label="2" border>设为管理员</el-radio>
              <el-radio :label="1" border>取消管理员</el-radio>
        </el-radio-group>
        </template>
     </el-table-column>
   </el-table>
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
                 jurisdiction: '信息技术中心',
    	 				   createBy:'小明',
                 createTime:'2016-05-02',
                 flag:1
            }, {
    	 				 id:'2',
    	 				 jobNumber: 'JST1111',
    	 				 name: '王小虎',
    	 				 jurisdiction: '信息技术中心',
    	 				 createBy:'小明',
    	 				 createTime:'2016-05-02',
               flag:1
            }, {
    	 				 id:'3',
    	 				 jobNumber: 'JST1111',
    	 				 name: '王小虎',
    	 				 jurisdiction: '信息技术中心',
    	 				 createBy:'小明',
    	 				 createTime:'2016-05-02',
               flag:1
            }, {
    	 				id:'4',
    	 				jobNumber: 'JST1111',
    	 				name: '王小虎',
    	 				jurisdiction: '信息技术中心',
    	 				createBy:'小明',
    	 				createTime:'2016-05-02',
              flag:1
            } ,{
    	 				 id:'5',
    	 				 jobNumber: 'JST1111',
    	 				 name: '王小虎',
    	 				 jurisdiction: '信息技术中心',
    	 				 createBy:'小明',
    	 				 createTime:'2016-05-02',
               flag:1
            }, {
    	 				id:'6',
    	 				jobNumber: 'JST1111',
    	 				name: '王小虎',
    	 				jurisdiction: '信息技术中心',
    	 				createBy:'小明',
    	 				createTime:'2016-05-02',
              flag:1
            }, {
    	 				 id:'7',
    	 				 jobNumber: 'JST1111',
    	 				 name: '王小虎',
    	 				 jurisdiction: '信息技术中心',
    	 				 createBy:'小明',
    	 				 createTime:'2016-05-02',
               flag:1
            }, {
    	 				 id:'8',
    	 				 jobNumber: 'JST1111',
    	 				 name: '王小虎',
    	 				 jurisdiction: '信息技术中心',
    	 				 createBy:'小明',
    	 				 createTime:'2016-05-02',
               flag:1
            }, {
    	 				 id:'9',
    	 				 jobNumber: 'JST1111',
    	 				 name: '王小虎',
    	 				 jurisdiction: '信息技术中心',
    	 				 createBy:'小明',
    	 				 createTime:'2016-05-02',
               flag:1
            }]
          }
      }
  }

</script>

<style>
  #d1{
    margin: 10px;
  }
</style>
