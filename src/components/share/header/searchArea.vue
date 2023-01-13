<template>
    <input type="text" placeholder="örnek; Zumba, Disney" v-model="search">
    <div className="search-box" v-html="searchList"></div>
    <button><i class="fa-regular fa-magnifying-glass"></i></button>
</template>
<script>
export default {
  data() {
    return {
      sources: [
        {
          name: "Yorgunlukla Başa Çıkmak",
          person: "Ece Sever",
          location: "Ankara",
          type: "Yüz yüze Deneyim",
        },
        {
          name: "Yoldan Çıkan Oyun",
          person: "Zorlu PSM",
          location: "Bilet",
          type: "Yüz yüze Deneyim",
        },
        {
          name: "Youtube Premium",
          person: "Youtube",
          location: "Üyelik",
          type: "Vendor",
        },
        {
          name: "Yonca Bilir Diksiyon Dersi",
          person: "Humanart",
          type: "Çevrimiçi Deneyim",
        },
        {
          name: "Chakra Balance Yoga Dersi",
          person: "Vendor",
          type: "Çevrimiçi Deneyim",
        },
        {
          name: "Yolda Tek Başına",
          person: "Zorlu PSM",
          location: "Bilet",
          type: "Dijital Ürün",
        },
        {
          name: "Yoldan Çıkan Oyun",
          person: "Ece Sever",
          location: "Ankara",
          type: "Yüz yüze Deneyim",
        },
        {
          name: "Yoldan Çıkan Oyun",
          person: "Ece Sever",
          location: "Ankara",
          type: "Yüz yüze Deneyim",
        },
        {
          name: "Yoldan Çıkan Oyun",
          person: "Ece Sever",
          location: "Ankara",
          type: "Yüz yüze Deneyim",
        },
        {
          name: "Yoldan Çıkan Oyun",
          person: "Ece Sever",
          location: "Ankara",
          type: "Yüz yüze Deneyim",
        }
      ],
      search: "",
    }
  },
  computed: {
    searchList() {
      const regexp = new RegExp(this.search, "ig")
      var highlights = "";
      this.sources.forEach((source) => {
        if (source.name.toLowerCase().includes(this.search.toLowerCase())) {
          highlights = highlights + '<div class="search-element">' + '<h2>' + source.name.replace(regexp, '<strong>$&</strong>') + '</h2>' +
              '<div class="search-element-detail"><div class="search-detail-right">'
          if (source.person) {
            highlights += '<span>' + source.person + '</span>'
          }
          if (source.location) {
            highlights += '<span>' + source.location + '</span>'
          }
          highlights += '</div><span>' + source.type + '</span></div></div>'
        }
      });
      return `${highlights}`
    },
  }
}
</script>