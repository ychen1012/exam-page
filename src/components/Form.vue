<template>
  <div>
    <div>
      <el-row :gutter="10">
        <el-col :span="4"><div class="grid-content bg-purple">
           <el-button  @click="dialogTableVisible = true">添加学生</el-button>

<!--弹出表单-->
          <el-dialog title="添加学生" :visible.sync="dialogTableVisible">
            <el-form :model="form">
              <el-form-item label="学号" :label-width="formLabelWidth">
                <el-input v-model="form.studentId" auto-complete="off"></el-input>
              </el-form-item>

              <el-form-item label="班级" :label-width="formLabelWidth">
                <el-input v-model="form.class" auto-complete="off"></el-input>
              </el-form-item>

              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogTableVisible=false">取消</el-button>
              <el-button type="primary" @click="dialogTableVisible=false">确定</el-button>
            </div>
          </el-dialog>
        </div></el-col>
        <el-col :span="1"><div class="grid-content bg-purple">
          <el-button>导入</el-button>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>


    </div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%" >
      <el-table-column
        label="学号"
        prop="number">
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="班级"
        prop="class">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">

          <el-table-column
            label="编辑" align="right"></el-table-column>
        </template>

        <template >
          <el-button
            size="mini"
            @click="handleEdit()">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete()">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>


</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          class:'软工1503',
          number:'2015011446'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          class:'软工1503',
          number:'2015011446'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          class:'软工1503',
          number:'2015011446'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          class:'软工1503',
          number:'2015011446'
        }],

        form: {
          studentId: '',
          name: '',
          class: '',
        },
        formLabelWidth: '120px',
        dialogTableVisible: false,
      }
    },

    methods:{
      handleEdit(){
        alert("handleEdit")
      },
      handleDelete(){
          alert("111!!");
      }
    }

  }
</script>

<style>

  .el-col {
    border-radius: 4px;
  }
  /*.bg-purple-dark {*/
  /*  background: #99a9bf;*/
  /*}*/
  /*.bg-purple {*/
  /*  background: #d3dce6;*/
  /*}*/
  /*.bg-purple-light {*/
  /*  background: #e5e9f2;*/
  /*}*/
  /*.grid-content {*/
  /*  border-radius: 4px;*/
  /*  min-height: 36px;*/
  /*}*/
  /*.row-bg {*/
  /*  padding: 10px 0;*/
  /*  background-color: #f9fafc;*/
  /*}*/
</style>
