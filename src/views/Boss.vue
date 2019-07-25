<template>
<div id="boss">
    <a-row>
        <a-col :xs="{ span: 3, offset: 1 }" :lg="{ span: 4, offset: 2 }"></a-col>
        <a-col :xs="{ span: 15, offset: 1 }" :lg="{ span: 10, offset: 2 }"> 
            <div style="text-align:center"><img alt="Vue logo" src="../assets/logo.png"></div>
            <Buttons />
            <Bookings />
        </a-col>
        <a-col :xs="{ span: 3, offset: 1 }" :lg="{ span: 4, offset: 2 }"></a-col>
    </a-row>
</div>
</template>

<script>
import Buttons from '../components/BossButtons.vue'
import Bookings from '../components/Bookings.vue'
export default {
    name: 'boss',
    components: {
        Bookings,
        Buttons
    }
}
</script>
