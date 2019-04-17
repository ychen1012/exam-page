<template>
  <section>
    <el-row>
      <el-col :span="24">
        <!--表单-->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="专业">
            <el-input v-model="formInline.student.name" placeholder="专业" style="width: 140px;"></el-input>
          </el-form-item>
          <!--          <el-form-item label="年份">-->
          <!--            <el-date-picker-->
          <!--              v-model="formInline.user.date"-->
          <!--              align="right"-->
          <!--              type="year"-->
          <!--              placeholder="选择年份">-->
          <!--            </el-date-picker>-->
          <!--          </el-form-item>-->
          <!--          <el-form-item label="地址">-->
          <!--            <el-cascader expand-trigger="hover" :options="options" v-model="formInline.user.address"></el-cascader>-->
          <!--          </el-form-item>-->
          <!--          <el-form-item label="籍贯">-->
          <!--            <el-select v-model="formInline.user.place" placeholder="请选择">-->
          <!--              <el-option-->
          <!--                v-for="item in places"-->
          <!--                :label="item.label"-->
          <!--                :value="item.value">-->
          <!--              </el-option>-->
          <!--            </el-select>-->
          <!--          </el-form-item>-->
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <a href="javascript:" id="download"
             style="background-color:#409EFF;color: #fff;padding: 12px 10px!important;margin-left: 10px!important;border-radius:4px "
             @click="download()" download="download.csv">导出数据</a>

          <!--          新增题目 ，弹出diglog-->
          <el-button type="primary" @click="dialogFormVisible=true">添加学生</el-button>
          <el-dialog title="添加学生" :visible="dialogFormVisible" size="tiny">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="学号">
                <el-input v-model="form.studentId"></el-input>
              </el-form-item>
              <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>

              <el-form-item label="班级">
                <el-input v-model="form.grade"></el-input>
              </el-form-item>

              <el-form-item label="专业">
                <el-form-item v-model="form.major"></el-form-item>
              </el-form-item>
<!--              <el-form-item label="描述">-->
<!--                <el-input type="textarea" :rows="8" placeholder="题目描述" v-model="form.desc"></el-input>-->
<!--                &lt;!&ndash;          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>&ndash;&gt;-->
<!--              </el-form-item>-->
              <el-form-item>
                <el-button type="primary" @click="handleSave" :loading="editLoading">添加</el-button>
                <el-button @click="dialogFormVisible = false">取消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>


          <!--          题目显示表格-->
        </el-form>
        <!--表格-->
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column type="selection">
          </el-table-column>
          <el-table-column
            prop="studentId"
            label="学号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="grade"
            label="班级">
          </el-table-column>

          <el-table-column
            prop="major"
            label="专业">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>


        <!--        分页的翻页设置，多页情况下的设置-->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="编辑学生" :visible="dialogFormVisible" size="tiny">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="学号">
          <el-input v-model="form.studentId"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="form.grade"></el-input>
        </el-form-item>

        <el-form-item label="专业">
          <el-input  v-model="form.major"></el-input>
          <!--          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>-->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave" :loading="editLoading">修改</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </section>
</template>


<!--js逻辑部分-->
<script>
  const axios =require('axios');
  // axios.get('/api/exam/question/all').then(function (response) {
  //   if (response.data.code === "A0000") {
  // this.tableData=response.data.data;
  //    console.log(this.tableData);
  //   }
  // });
  export default {
    data() {
      return {
        formInline: {
          student: {
            studentId: '',//学号
            name: '',//姓名
            grade: '',//班级
            major: '',//专业

          }
        },
        tableData: [],
        options: [],
        places: [],
        dialogFormVisible: false,
        editLoading: false,
        form: {
          studentId: '',
          name: '',
          grade: '',
          major: '',
        },
        currentPage: 4,
        table_index: 999,
      };
    },


    // created() {
    //   axios.get('api/exam/question/all').then(function (response) {
    //     console.log()
    //     if (response.data.code === "A0000") {
    //       console.log("aaaa");
    //       console.log(this.tableData);
    //
    //
    //     }
    //   })
    // },

    mounted: function () {
      this.getUsers();
    },
//
//
//     // 待封装,
    methods: {
      getUsers() {
        var self = this;
        axios.get('/api/student/all').then(function (response) {
          console.log(response);
          if (response.data.code === "A0000") {
            self.tableData = response.data.data;
            console.log(self.tableData);
          }
        })
      },


      onSubmit() {
        this.$message('模拟数据，这个方法并不管用哦~');
      },
      handleDelete(index, row) {
        this.tableData.splice(index, 1);
        this.$message({
          message: "操作成功！",
          type: 'success'
        });
      },
      handleEdit(index, row) {
        this.dialogFormVisible = true;
        this.form = Object.assign({}, row);
        this.table_index = index;
      },
      handleSave() {
        this.$confirm('确认提交吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          cancelButtonClass: 'cancel'
        }).then(() => {
          this.editLoading = true;
          let date = this.form.date;
          if (typeof date === "object") {
            date = [date.getFullYear(), (date.getMonth() + 1), (date.getDate())].join('-');
            this.form.date = date
          }
//          this.tableData[this.table_index] = this.form;
          this.tableData.splice(this.table_index, 1, this.form);
          console.log(this.form.name);
          this.$message({
            message: "操作成功！",
            type: 'success'
          });
          this.editLoading = false;
          this.dialogFormVisible = false;
        }).catch(() => {

        });
      },
      download: function () {
        console.log("xiazai");
        var obj = document.getElementById('download');
        var str = "学号,姓名,班级,专业\n";
        for (var i = 0; i < this.tableData.length; i++) {
          var item = this.tableData[i];
          str += item.studentId + ',' + item.name + ',' + item.grade+','+item.major;
          str += "\n";
        }
        console.log(obj);
        str = encodeURIComponent(str);
        console.log(str);
        obj.href = "data:text/csv;charset=utf-8,\ufeff" + str;
        obj.download = "download.csv";
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
    }
  }


</script>
<style>
  .el-pagination {
    text-align: center;
    margin-top: 30px;
  }

  .el-message-box__btns .cancel {
    float: right;
    margin-left: 10px;
  }
</style>
