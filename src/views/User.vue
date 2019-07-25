<template>
<div id="user">
      <a-row>
        <a-col :xs="{ span: 3, offset: 1 }" :lg="{ span: 4, offset: 2 }"></a-col>
        <a-col :xs="{ span: 15, offset: 1 }" :lg="{ span: 10, offset: 2 }"> 
            <div style="text-align:center"><img alt="Vue logo" src="../assets/logo.png"></div>
            <h1 style="text-align:center">预约取件</h1>
            <Userform/>
        </a-col>
        <a-col :xs="{ span: 3, offset: 1 }" :lg="{ span: 4, offset: 2 }"></a-col>
    </a-row>
</div>
</template>

<script>
import Userform from '../components/userform.vue'
export default {
  name: 'user',
  components: {Userform}
}
</script>
