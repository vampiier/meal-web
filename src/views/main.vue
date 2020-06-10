<template>
  <div>
    <div class="d1">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="!isCollapse">
        <el-menu-item index="1" @click="menuShow()">
            <i class="el-icon-s-fold"></i>
            <span slot="title">展开/缩放</span>
        </el-menu-item>
        <router-link :to="'/detail'">
          <el-menu-item index="1">
            <i class="el-icon-document"></i>
              <span slot="title">报餐明细列表</span>
          </el-menu-item>
        </router-link>
        <router-link :to="'/jurisdiction'">
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">报餐权限维护</span>
          </el-menu-item>
        </router-link>
        <router-link :to="'/board'">
        <el-menu-item index="3" >
          <i class="el-icon-document"></i>
          <span slot="title">报餐看板</span>
        </el-menu-item>
        </router-link>
        <router-link :to="'/parameter'">
        <el-menu-item index="4">
          <i class="el-icon-document"></i>
          <span slot="title">报餐参数配置</span>
        </el-menu-item>
        </router-link>
        <router-link :to="'/mobile'">
        <el-menu-item index="5">
          <i class="el-icon-document"></i>
          <span slot="title">移动端界面</span>
        </el-menu-item>
        </router-link>
      </el-menu>
    </div>
    <div class="d2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      menuShow(){
        this.$nextTick(()=>{
          this.isCollapse=!this.isCollapse;
        })
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  .bu{
        height: 80px;
  }

  .d1{
  		 float:left;
  }
  .d2{
    overflow: hidden;
  }
</style>
