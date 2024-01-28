<template>
    <div class="container-slider">
        <div class="container-cover">
            <div class="cover">
                <!-- <img src="https://via.placeholder.com/1138x290" alt="Cover" /> -->
                <img :src="posterActive" alt="Cover" />
            </div>

        </div>
        <div class="itens-slider">
            <div v-for="item in arrSlider" :key="item.id" class="item" :class="{ active: item.isActive }"
                @click="selectItem(item.id)">
                <!-- {{ item.id }} -->
                <img :src="item.image" alt="Cover" />
                <div class="content">
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HomeSlider',
    data() {
        return {
            arrSlider: [
                {
                    id: 1,
                    title: 'Titulo 1',
                    description: 'Descrição 1',
                    image: 'https://placekitten.com/g/250/401',
                    isActive: false,
                    poster: 'https://placekitten.com/1138/290'
                },
                {
                    id: 2,
                    title: 'Titulo 2',
                    description: 'Descrição 2',
                    image: 'https://placekitten.com/g/250/402',
                    isActive: false,
                    poster: 'https://placekitten.com/1138/291'
                },
                {
                    id: 3,
                    title: 'Titulo 3',
                    description: 'Descrição 3',
                    image: 'https://placekitten.com/g/250/403',
                    isActive: true,
                    poster: 'https://placekitten.com/1500/293'
                },
                {
                    id: 4,
                    title: 'Titulo 4',
                    description: 'Descrição 4',
                    image: 'https://placekitten.com/g/250/404',
                    isActive: false,
                    poster: 'https://placekitten.com/1137/293'
                },
                {
                    id: 5,
                    title: 'Titulo 5',
                    description: 'Descrição 5',
                    image: 'https://placekitten.com/g/250/405',
                    isActive: false,
                    poster: 'https://placekitten.com/1132/293'
                }
            ],
            loopInterval: null,
            timer: 5000,
            posterActive: 'https://placekitten.com/g/1138/290'
        };
    },
    methods: {
        next() {
            const activeItem = this.arrSlider.find(item => item.isActive);
            const nextIndex = activeItem.id === this.arrSlider.length ? 0 : activeItem.id;
            const nextItem = this.arrSlider[nextIndex];
            activeItem.isActive = false;
            nextItem.isActive = true;
            this.posterActive = nextItem.poster;
        },
        prev() {
            const activeItem = this.arrSlider.find(item => item.isActive);
            const prevItem = this.arrSlider[activeItem.id - 2];
            activeItem.isActive = false;
            prevItem.isActive = true;
        },
        autoPlay() {
            // this.loopInterval = setInterval(() => {
            //     this.next();
            // }, this.timer);
        },
        selectItem(id) {
            clearInterval(this.loopInterval);
            const activeItem = this.arrSlider.find(item => item.isActive);
            activeItem.isActive = false;
            const nextItem = this.arrSlider[id - 1];
            nextItem.isActive = true;
            this.posterActive = nextItem.poster;
            this.autoPlay();
        }
    },
    mounted() {
        this.autoPlay();
    }
}
</script>
  
<style></style>
  