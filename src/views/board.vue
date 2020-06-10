<template>
  <div style="margin-top: 50px;margin-left: 30px;margin-right: 30px;">
    <h3>报餐汇总</h3>
    <el-table :data="tableData" border style="width: auto">
            <el-table-column prop="field" label="" >
            </el-table-column>
            <el-table-column prop="lunch" label="中餐报餐人数">
            </el-table-column>
            <el-table-column prop="dinner" label="晚餐报餐人数">
            </el-table-column>
            <el-table-column prop="meal" label="夜餐报餐人数">
            </el-table-column>
            <el-table-column prop="night" label="夜宵报餐人数">
            </el-table-column>
            <el-table-column prop="total" label="合计">
            </el-table-column>
          </el-table>
  </div>
</template>

<script>
  export default{
      data(){
            return {
              tableData:[
      				    {
      	 				   field:'合计',
                   lunch: '100',
                   dinner: '100',
                   meal: '100',
      	 				   night:'100',
                   total:'400'
                  }]
                }
               }
           }
</script>

<style>
</style>
