<template>
<a-table :dataSource="$store.getters.getBookings()">
    <a-table-column title="运单号" dataIndex="id" key="id"/>
    <a-table-column title="收件人" dataIndex="name" key="name" />
    <a-table-column title="电话" dataIndex="phone" key="phone" />
    <a-table-column title="状态" dataIndex="state" key="state" />
    <a-table-column title="预约时间" dataIndex="time" key="time" />
    <a-table-column title="" dataIndex="state" key="booked">
        <template slot-scope="state,id">
            <a-button type="default" v-if="state != '已取件'" @click="update(id)">确认收货</a-button>
        </template>
    </a-table-column>
</a-table>
</template>
<script>
export default {
  methods:{
    update(table){
      this.$store.commit('update',table.id)
    }
  }
}
</script>

