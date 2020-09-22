<template>
  <div class="app-container">
    <el-form  ref="form" :model="form"  label-width="120px">
      <el-form-item label="模型选择" >
        <el-select v-model="form.region" placeholder="请选择模型类型"  style="width: 33%;"  >
          <el-option label="贷款" value="shanghai" />
          <el-option label="存款" value="beijing" />
        </el-select>
        <el-select   v-model="form.auditModel" placeholder="请选择模型"  style="width: 34%;" >
          <el-option label="贷款XXXX模型1" value="shanghai" />
          <el-option label="贷款****模型2" value="beijing" />
        </el-select>
        <el-select  v-model="form.auditStatus" placeholder="请选择状态"  style="width: 33%;" >
          <el-option label="所有" value="shanghai" />
          <el-option label="待确认" value="beijing" />
          <el-option label="已确认" value="beijing1" />
          <el-option label="已取消" value="beijing2" />
          <el-option label="已反馈" value="beijing3" />
        </el-select>
      </el-form-item>
      <el-form-item label="起止时间">
        <el-col :span="11"  size="mini">
          <el-date-picker v-model="form.date1" type="date" placeholder="开始日期"    style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11"  size="mini">
          <el-date-picker v-model="form.date2" type="date" placeholder="截止日期"  style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="onCancel">批量确认</el-button>
        <el-button @click="onCancel">批量取消</el-button>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        auditModel:'',
        auditStatus:'',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

