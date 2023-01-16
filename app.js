const app = Vue.createApp ({

  data() {

    return {
        firstImage: 'img/mbg-01.jpg',
        secondImage: 'img/mbg-02.jpg',
        thirdImage: 'img/mbg-01.jpg',
        fourthImage: 'img/mbg-04.jpg',
        fifthImage: 'img/mbg-02.jpg',
        window: {
          width: 0,
          height: 0
      },

    }
  },
  
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      
  },
    mouseMove() {
        if (event.clientX > this.window.width/2) {
          console.log("X is " + event.clientX + " Window width = " + this.window.width/2);
          this.firstImage = this.thirdImage;
        } else {
          this.firstImage = this.secondImage;
        }
  },
    mouseHeight() {
      if (event.clientY > this.window.height/2) {
        console.log("Y is " + event.clientY + " Window width = " + this.window.width/2);
        this.firstImage = this.fourthImage;
      } else {
        this.secondImage = this.fifthImage;
      }
    }
  }
});

app.mount('#myImageBackground');