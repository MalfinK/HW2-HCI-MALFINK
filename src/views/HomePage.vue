<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid class="start">
        <ion-row class="utama">
          <ion-col>
            <ion-card class="dibawah-home">
              <ion-card-header>
                <ion-card-title>Kolam</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <span class="tulisan-tebal">10</span>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card class="dibawah-home kanan">
              <ion-card-header>
                <ion-card-title>Kolam Aktif</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <span class="tulisan-tebal">8</span>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card class="dibawah-home">
              <ion-card-header>
                <ion-card-title>Ikan Hidup</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <span class="tulisan-tebal">182</span> Ekor
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card class="dibawah-home kanan">
              <ion-card-header>
                <ion-card-title>Ikan Mati</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <span class="tulisan-tebal">89</span> Ekor
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card class="dibawah-home">
              <ion-card-header>
                <ion-card-title>Panen 2022</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <span class="tulisan-tebal">109</span> Kg
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card class="dibawah-home kanan">
              <ion-card-header>
                <ion-card-title>Total Pakan</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <span class="tulisan-tebal">223</span> Kg
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-title class="judul">TOTAL BERAT IKAN</ion-title>
      <ion-slides class="slide">
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-card class="akhir">
                  <img alt="GAMBARKU"
                    src="https://files.5minvideo.id/wp-content/uploads/2022/04/gambar-ikan-logo-png-200x200.png" />
                  <ion-card-header>
                    <ion-card-title class="left">LELE</ion-card-title>
                  </ion-card-header>

                  <ion-card-content class="left bawah">
                    200 Kg
                  </ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <img alt="GAMBARKU"
                    src="https://files.5minvideo.id/wp-content/uploads/2022/04/gambar-ikan-logo-png-200x200.png" />
                  <ion-card-header>
                    <ion-card-title class="left">NILA MERAH</ion-card-title>
                  </ion-card-header>

                  <ion-card-content class="left bawah">
                    200 Kg
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-card>
                  <img alt="GAMBARKU"
                    src="https://files.5minvideo.id/wp-content/uploads/2022/04/gambar-ikan-logo-png-200x200.png" />
                  <ion-card-header>
                    <ion-card-title class="left">KERAPU</ion-card-title>
                  </ion-card-header>

                  <ion-card-content class="left bawah">
                    200 Kg
                  </ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col></ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
      </ion-slides>

      <ion-title class="judul">KUALITAS AIR</ion-title>
      <ion-slides class="slide">
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-title class="akhir"><span class="tulisan-tebal">pH</span></ion-card-title>
                  </ion-card-header>

                  <ion-card-content class="akhir">
                    Normal <span class="biru-tulisan">6 kolam</span>
                    Abnormal <span class="biru-tulisan">6 kolam</span>
                  </ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-title class="akhir"><span class="tulisan-tebal">DO</span></ion-card-title>
                  </ion-card-header>

                  <ion-card-content class="akhir">
                    Normal <span class="biru-tulisan">6 kolam</span>
                    Abnormal <span class="biru-tulisan">6 kolam</span>
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-title class="akhir"><span class="tulisan-tebal">Tekanan</span></ion-card-title>
                  </ion-card-header>

                  <ion-card-content class="akhir">
                    Normal <span class="biru-tulisan">6 kolam</span>
                    Abnormal <span class="biru-tulisan">6 kolam</span>
                  </ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col></ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
      </ion-slides>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard, IonCardContent, IonCardHeader, IonCardTitle,
    IonSlides, IonSlide
  },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts }
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}

.start {
  margin-top: -55px;
}

ion-row.utama {
  margin-top: 50px;
}

ion-card {
  margin-top: -3px;
  background-color: white;
  color: black;
  border-radius: 20px;
}

ion-card-title {
  margin-top: -4px;
  color: black;
}

ion-card-content {
  margin-top: -12px;
}

.dibawah-home {
  height: 85px;
}

.tulisan-tebal {
  font-weight: bold;
  font-size: 30px;
}

ion-card.kanan {
  margin-left: -10px;
}

.judul {
  margin-top: 10px;
}

.left {
  text-align: left;
}

.bawah {
  margin-top: -5px;
  color: #2c96f1;
  font-weight: bold;
}

.biru-tulisan {
  color: #2c96f1;
  font-weight: bold;
}

.slide {
  margin-top: 20px;
}

.akhir {
  text-align: left;
}
</style>
