<template>
<div>

  <el-container style="height: 900px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu >
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
<!--          <el-menu-item-group>-->
            <el-submenu index="2">
            <template slot="title">试卷管理</template>
            <el-menu-item index="2-1">编辑试卷</el-menu-item>
            <el-menu-item index="2-2">发布试卷</el-menu-item>
            </el-submenu>
<!--          </el-menu-item-group>-->

          <el-submenu index="3">
            <template slot="title">学生管理</template>
          </el-submenu>
<!--          <el-menu-item-group title="学生管理">-->
<!--          </el-menu-item-group>-->
          <el-submenu index="4">
            <template slot="title">成绩管理</template>
            <el-menu-item index="4-1">查看成绩</el-menu-item>
            <el-menu-item index="4-1">导出成绩</el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">考试管理</template>
            <el-menu-item index="5-1">查看提交</el-menu-item>
            <el-menu-item index="5-2">一键判卷</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">题目管理</template>
            <el-menu-item index="6-1">编辑题目</el-menu-item>
            <el-menu-item index="5-2">编辑测试用例</el-menu-item>
          </el-submenu>

        </el-submenu>

      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>

</div>

</template>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
