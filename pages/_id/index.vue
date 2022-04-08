<template>
  <div class="flex justify-center w-full my-10">
      <div class="container w-full flex">
          <div class="grid grid-cols-12 w-full gap-10">
            <div class="col-span-4 flex justify-center">
                <div class="w-full flex flex-wrap justify-center">   
                    <div class="w-full flex items-center justify-center">
                        <img class="h-[300px] rounded-lg" src="https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/414489/ccf521c11df37d3a.jpg" />
                    </div>
                    
                    <section class="w-full">
                        <p>Nơi Đó Có Tình Yêu</p>

                        <p>Tác giả Nhiều tác giả</p>

                        <p>Thời lượng 2h53'</p>

                        <p>KênhFirst News - Trí Việt</p>

                        <p>Giá bán lẻ 29.000đ</p>
                    </section>

                    <client-only>
                        <audio-player
                        class="w-full"
                        ref="audioPlayer"
                        :audio-list="audioList.map((elm) => elm.url)"
                        :before-play="handleBeforePlay"
                        />
                    </client-only>
                </div>
            </div>
            <div class="col-span-8">
                <div class="w-full flex flex-wrap">
                    <code>
                        Lời tựa
Nơi Đó Có Tình Yêu Tình yêu thương là điều gần gũi, giản dị nhất nhưng cũng là điều quý giá thiêng liêng nhất mà bất kỳ ai cũng mong muốn được chia sẻ và có được trong cuộc sống. Tập sách NƠI ĐÓ CÓ TÌNH YÊU bao gồm những câu chuyện giản dị nhưng ý nghĩa về tình yêu thương con người, tình yêu cuộc sống. Qua những câu chuyện bạn sẽ tìm thấy những khoảnh khắc lắng đọng và nhận ra bấy lâu nay mình đã giàu có biết nhường nào với những tình cảm sâu sắc đã có trong đời. Để sau mỗi cay đắng, thất bại, mất mát, bạn sẽ hướng về chốn bình yên của cảm xúc yêu thương đang hiện hữu hay ngay cả trong ký ức - nơi bình an đó luôn có một tình yêu dành cho bạn - để tiếp niềm vui và nghị lực cho bạn tiếp bước. Bởi hơn tất cả mọi thứ trên đời, tình yêu thương là nguồn sức mạnh tinh thần có thể giúp bạn làm nên những điều kỳ diệu. Mong bạn đọc sẽ tìm thấy và nuôi dưỡng được những tình yêu đích thực trong đời!
                    </code>
                    <span v-for="(item,index) in model" :key="index" class="w-full flex items-center py-4 px-2">
                        <span>
                            {{index}} - 
                        </span>
                        <h2>
                            {{item.name}}
                        </h2>
                        <span v-if="item.duration" >
                            {{item.duration}}
                        </span>
                        <span>
                            {{item.id}}
                        </span>
                    </span>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
    async asyncData({ params, app }) {
        let data = await app.$axios.get('https://api.voiz.vn/v1/playlists/2044/audios?order=asc&position=bottom&limit=20');
        return {model : data.data.data}
    },
    components: {
      
    },
    data(){
        return {
            title: "",
            audioList: [
                {
                name: "audio 1",
                url:
                    "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FYWF6RUxSb2U0Uk5pdjJyc21JaG01SUJseF9fdXc5M1VDdHN2bExDRVI0YkRn.mp3",
                },
                {
                name: "audio 2",
                url:
                    "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FYzM3dlRwM1JDTkV0Ry05c3FPRS1UVUJqZzBNZ0w0MDk5Z0VFREdsX0NtS0RB.mp3",
                },
            ],
        }
    },
    mounted(){
        var vm = this;
        vm.$nextTick(async ()=>{
            this.title = this.audioList[0].name;
            //this.$refs.audioPlayer.play();
        })
    },
    methods: {
        // Use this function if you want to do something before you start playing
        handleBeforePlay(next) {
        this.title = this.audioList[this.$refs.audioPlayer.currentPlayIndex].name;
        next(); // Start play
        },
    },
}
</script>

<style>

</style>    