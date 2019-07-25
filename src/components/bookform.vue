<template>
<a-modal title="包裹入库" :visible="visible" @ok="handleSubmit" :confirmLoading="confirmLoading" @cancel="handleCancel" @keydown.enter="handleSubmit">
    <a-form :form="form">
        <a-form-item label="运单号：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="[
          'id',
          {rules: [{ required: true, message: '请输入运单号' }]}
        ]" />
        </a-form-item>
        <a-form-item label="收件人" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="[
          'name',
          {rules: [{ required: true, message: '请输入姓名' }]}
        ]" />
        </a-form-item>
        <a-form-item label="电话" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="[
          'phone',
          {rules: [{ required: true, message: '请输入电话' }]}
        ]" />
        </a-form-item>
        <a-form-item label="重量" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="[
          'time',
          {rules: [{ required: true, message: '请输入重量' }]}
        ]" />
        </a-form-item>
    </a-form>
</a-modal>
</template>

<script>
export default {
    data() {
        return {
            formLayout: 'horizontal',
            form: this.$form.createForm(this),
            confirmLoading: false
        };
    },
    props: {
        visible: Boolean
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    let today = new Date();
                    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    let dateTime = date + ' ' + time;
                    delete values.weight
                    values['state'] = "未取件"
                    values['time'] = dateTime;
                    this.$store.commit('push', values)
                }
            });
            this.confirmLoading = true
            setTimeout(() => {
                this.$emit('change')
                this.confirmLoading = false
            }, 1000)
        },
        handleCancel(e) {
            this.$emit('change')
        }
    },
};
</script>
