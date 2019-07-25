<template>
  <a-form :form="form" @submit="handleSubmit" @keydown.enter="handleSubmit">
    <a-form-item label="运单号：" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'id',
          {rules: [{ required: true, message: '请输入运单号' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="取件时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
      <a-date-picker
        v-decorator="[
          'time',
          {rules: [{ required: true, message: '请输入重量' }]}

        ]"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
        style="width:400px;"
      />
    </a-form-item>
    <a-form-item
      :wrapper-col="{
        xs: { span: 24, offset: 0 },
        sm: { span: 13, offset: 11 },
      }"
    >
      <a-button type="primary" html-type="submit">预约</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, fieldsValue) => {
        let time = fieldsValue["time"].format("YYYY-MM-DD HH:mm:ss");
        if (
          parseInt(time.substring(11, 13)) >= 9 &&
          parseInt(time.substring(11, 13)) <= 20
        ) {
          this.$store.commit("booked", {
            id: fieldsValue.id,
            time: time
          });
          this.$message.success("预约成功", 5);
        } else {
          this.$message.error("预约失败", 5);
        }
      });
    }
  }
};
</script>
