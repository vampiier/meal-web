<template>
 <div id="d">
  <el-form ref="form" :model="form" label-width="130px">
      <el-form-item label="报餐可选天数" style="width: 350px" >
      <el-input v-model="form.input1"></el-input>
    </el-form-item>
    <el-form-item label="用户报餐截止时间" style="width: 350px">
      <el-input v-model="form.input2"></el-input>
    </el-form-item>
    <el-form-item label="食堂报餐截止时间" style="width: 350px">
      <el-input v-model="form.input3"></el-input>
    </el-form-item>
    <el-form-item style="width:20%">
      <el-button type="primary" @click="onSubmit">提交修改</el-button>
    </el-form-item>
  </el-form>
 </div>
</template>

<script>
   export default {
      data() {
        return {
          form: {
            input1: '',
            input2: '',
            input3: ''
          }
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        }
      }
    }
</script>

<style>
  .el-form-item__label{
    text-align: left;
  }
  #d{
    margin-top: 50px;
    margin-left: 50px;
  }
</style>
