<template>
  <div>
    <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in model" :key="item">
            <img class="w-full h-full" :src="item"/>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data(){
        return {
            model: [
                "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/image/filename/9230/b5fda4599a70537e.jpg",
                "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/image/filename/9044/2df85067d6274587.jpeg",
                "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/image/filename/9045/8fc7b5a115ba7bb0.jpeg",
            ]
        }
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>