<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col size="10">
              <ion-title class="ion-float-left">Kolam</ion-title>
            </ion-col>
            <ion-col>
              <ion-icon src="img/filter.svg"></ion-icon>
            </ion-col>
            <ion-col>
              <ion-icon src="img/tambahan.svg"></ion-icon>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-card>
          <ion-item color="dark" lines="full" class="item-judul">
            <ion-label slot="start" class="sub-judul">Alpha</ion-label>
            <ion-button color="success" size="small" slot="end"><span><strong>Aktif</strong></span></ion-button>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/kalender.svg" />
            </ion-thumbnail>
            <ion-label>01-09-2022</ion-label>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/waktu.svg" />
            </ion-thumbnail>
            <ion-label>90 Hari</ion-label>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/ikan.svg" />
            </ion-thumbnail>
            <ion-label>200 Ekor</ion-label>
          </ion-item>
        </ion-card>

        <ion-card class="kartu-berikut">
          <ion-item color="dark" lines="full" class="item-judul">
            <ion-label slot="start" class="sub-judul">Beta</ion-label>
            <ion-button color="danger" size="small" slot="end"><span><strong>Tidak Aktif</strong></span></ion-button>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/kalender.svg" />
            </ion-thumbnail>
            <ion-label>01-09-2022</ion-label>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/waktu.svg" />
            </ion-thumbnail>
            <ion-label>90 Hari</ion-label>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/ikan.svg" />
            </ion-thumbnail>
            <ion-label>200 Ekor</ion-label>
          </ion-item>
        </ion-card>

        <ion-card class="kartu-berikut">
          <ion-item color="dark" lines="full" class="item-judul">
            <ion-label slot="start" class="sub-judul">Charlie</ion-label>
            <ion-button color="success" size="small" slot="end"><span><strong>Aktif</strong></span></ion-button>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/kalender.svg" />
            </ion-thumbnail>
            <ion-label>01-09-2022</ion-label>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/waktu.svg" />
            </ion-thumbnail>
            <ion-label>90 Hari</ion-label>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/ikan.svg" />
            </ion-thumbnail>
            <ion-label>200 Ekor</ion-label>
          </ion-item>
        </ion-card>

        <ion-card class="kartu-berikut">
          <ion-item color="dark" lines="full" class="item-judul">
            <ion-label slot="start" class="sub-judul">Delta</ion-label>
            <ion-button color="success" size="small" slot="end"><span><strong>Aktif</strong></span></ion-button>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/kalender.svg" />
            </ion-thumbnail>
            <ion-label>01-09-2022</ion-label>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/waktu.svg" />
            </ion-thumbnail>
            <ion-label>90 Hari</ion-label>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/ikan.svg" />
            </ion-thumbnail>
            <ion-label>200 Ekor</ion-label>
          </ion-item>
        </ion-card>

        <ion-card class="kartu-berikut">
          <ion-item color="dark" lines="full" class="item-judul">
            <ion-label slot="start" class="sub-judul">Epsilon</ion-label>
            <ion-button color="success" size="small" slot="end"><span><strong>Aktif</strong></span></ion-button>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/kalender.svg" />
            </ion-thumbnail>
            <ion-label>01-09-2022</ion-label>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/waktu.svg" />
            </ion-thumbnail>
            <ion-label>90 Hari</ion-label>
          </ion-item>

          <ion-item color="dark" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="img/ikan.svg" />
            </ion-thumbnail>
            <ion-label>200 Ekor</ion-label>
          </ion-item>
        </ion-card>
      </ion-list>
    </ion-content>

    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button color="tertiary">
        <ion-icon src="img/tambah.svg"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonList,
  IonButton,
  IonCol, IonGrid, IonRow

} from '@ionic/vue';

export default defineComponent({
  name: 'KolamPage',
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
    IonItem, IonLabel, IonList,
    IonButton,
    IonCol, IonGrid, IonRow
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

template {
  --ion-font-family: 'Poppins', sans-serif;
}

ion-list {
  padding: 20px;
}

ion-card {
  border-radius: 15px;
}

ion-item.item-judul {
  border-bottom: 3px solid black;
}

.sub-judul {
  font-size: 25px;
  font-weight: bold;
}

ion-button {
  border-radius: 20px;
}

span {
  color: white !important;
  text-transform: capitalize;
}

.kartu-berikut {
  margin-top: 20px;
}

ion-fab-button {
  color: rgb(0, 41, 153) !important;
}
</style>