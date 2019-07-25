<template>
<div id="buttons">
    <span style="font-size:24px;">菜鸟驿站</span>
    <div class="table-operations" style="float:right">
        <a-button-group>
            <a-button type="defalut" @click="$store.commit('change',0)">ALL</a-button>
            <a-button type="defalut" @click="$store.commit('change',1)">已预约</a-button>
            <a-button type="defalut" @click="$store.commit('change',2)">已收件</a-button>
            <a-button type="defalut" @click="$store.commit('change',3)">未预约</a-button>
        </a-button-group>
        <a-button type="defalut" shape="circle" @click="showModal" size="large" style="font-size:12px;">+添加</a-button>
    </div>
    <FormInfo :visible="visible" @change="change"/>
</div>
</template>

<script>
import FormInfo from './bookform.vue'
export default {
    name: 'each_book',
    data() {
        return {
            visible: false
        }
    },
    components: {
        FormInfo
    },
    methods: {
        showModal() {
            this.visible = true
        },
        change(){
            this.visible = false
        }
    }
}
</script>
