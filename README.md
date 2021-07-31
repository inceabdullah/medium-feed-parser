# Medium Feed Parser

Medium rss feed parser. It parses content:encoded

## Install

`npm i medium-feed-parser`

### Example

```JavaScript
const mediumFeedParsed = require("medium-feed-parser");

mediumFeedParsed("coingeciyomu")
  .then(articles=>console.log({articles}))
  .catch(err=>console.error({err}));
```

<details><summary>expected result</summary>
<p>

```Javascript
{
  articles: [
    {
      title: 'BLOCKCHAIN GİRİŞİMCİLİK EKOSİSTEMİ',
      url: 'https://coingeciyomu.medium.com/blockchain-gi%CC%87ri%CC%87%C5%9Fi%CC%87mci%CC%87li%CC%87k-ekosi%CC%87stemi%CC%87-4ea23dd181ab?source=rss-57d97c63ef3------2',
      desc: 'Blockchain şifrelenmiş işlem takibi sağlayan dağıtık bir yapıya sahip veri depolama sistemidir. Veriler güncellenemez ve silinemez. Bu özelliği ile veri blokları birbirlerine şifreleme algoritmaları ile bağlanarak saklanır. Bir zincir özelliği taşıdığı için blok zinciri (blockchain) ismini almıştır. Çalışma mantığını daha iyi anlamak için basit bir örnekle devam edelim.',
      thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*jAcPXrXCJhIzQMtbMCBiCw.jpeg'
    },
    {
      title: 'IOTA Coin: Blockchain ve IOT Teknolojilerinin Geleceği',
      url: 'https://coingeciyomu.medium.com/iota-coin-blockchain-ve-iot-teknolojilerinin-gelece%C4%9Fi-ec793a10b1d7?source=rss-57d97c63ef3------2',
      desc: 'IOTA ağının; Sergey Ivancheglo, Serguei Popov, David Sønstebø ve Dominik Schiener olmak zere ',
      thumbnail: 'https://cdn-images-1.medium.com/max/1000/1*OEiNTfuiwQu3kPtUkrCNXA.jpeg'
    },
    {
      title: 'Cryptolencer: Kriptopara ve Freelance Çalışma Biçimi',
      url: 'https://coingeciyomu.medium.com/cryptolencer-kriptopara-ve-freelance-%C3%A7al%C4%B1%C5%9Fma-bi%C3%A7imi-10c4d18b9055?source=rss-57d97c63ef3------2',
      desc: "2027'de ABD’nin çalışan nüfusunun çoğunluğu freelance çalışanlardan oluşacak. Şu an da freelence çalışan sayısı 58 milyon. Vasıflı freelancerlar için saatlik ücret ortalaması 28 dolar. Çalışanların büyük çoğunluğu freelance çalışma biçimine sıcak bakmaktadır.",
      thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*gJsjugTAHaZQxeINx7yvbw.jpeg'
    },
    {
      title: 'chiliZ&FTO&JUV-PSG Token',
      url: 'https://coingeciyomu.medium.com/chiliz-fto-juv-psg-token-b5e1e0c9cf11?source=rss-57d97c63ef3------2',
      desc: 'Yılın sonu yaklaşırken ChiliZ(CHZ)’in taraftar tokenları (FTO) blockchain ekosistemine damga vurdu. 21 Aralık 2020’de Juventus(JUV) ve Paris Saint-Germain(PSG) takımlarının tokenları Binance üzerinden işleme açıldı ve kısa sürede çok büyük ilgi gördü. Türkiyeden Galatasaray(GAL), Trabzonspor(TRA), Başakşehir(IBSK) gibi futbol klüpleri de geçtiğimiz dönemlerde taraftar tokenlarını işleme koymuştu. Dünyaca ünlü Barcelona, Roma gibi kulüpler de daha önce tokenları başlattılar. Peki nedir bu taraftar tokenları? Ne işe yarar? Arkasında nasıl bir teknoloji var? Hep birlikte inceleyelim.',
      thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*Hr4t5sYhcevS_6s-_P4-wQ.jpeg'
    },
    {
      title: 'Çılgın İkili: IOT ve Blockchain',
      url: 'https://coingeciyomu.medium.com/%C3%A7%C4%B1lg%C4%B1n-i%CC%87kili-iot-ve-blockchain-ef7bffaa6edf?source=rss-57d97c63ef3------2',
      desc: 'Nesnelerin İnterneti (IoT) vizyonunda geleneksel cihazlar akıllı ve özerk hale geliyor. Bu vizyon, teknolojideki gelişmeler sayesinde gerçeğe dönüşüyor, ancak özellikle güvenlik alanında, örneğin veri güvenilirliğinde ele alınması gereken zorluklar var. Blockchain, bilgiyi paylaşma şeklimizi değiştirecek anahtar bir teknoloji olarak ortaya çıktı. Yetkililere ihtiyaç duymadan dağıtılmış ortamlarda güven oluşturmak, aralarında IoT olmak üzere birçok sektörü değiştirme potansiyeline sahip teknolojik bir ilerlemedir.',
      thumbnail: 'https://cdn-images-1.medium.com/max/765/1*b7nZqbhWMNRVE2NoDOvI-A.png'
    },
    {
      title: 'Su Yakmıyo Ya: Bitcoin’in Karbon Ayakizi Kaç CO2?',
      url: 'https://coingeciyomu.medium.com/su-yakm%C4%B1yo-ya-bitcoinin-karbon-ayakizi-ka%C3%A7-co2-97103dfdc0ac?source=rss-57d97c63ef3------2',
      desc: "Bitcoin’in kurucusu Satoshi 2008'de, yalnızca on yıl sonra 800 milyar doların üzerinde bir zirve piyasa değerine ulaşan bir dijital para birimi vizyonunu yayınladı. Bitcoin’in devrim niteliğindeki unsuru, kendi başına bir dijital para birimi fikri değil, temeldeki blok zinciri teknolojisiydi. Güvenilir bir üçüncü taraf yerine, teşvik edilmiş ağ katılımcıları işlemleri onaylar ve bir veri protokolünün merkezi olmayan yönetimi aracılığıyla ağın bütünlüğünü sağlar. Satoshi tarafından oluşturulan dağıtılmış defter protokolü, o zamandan beri ilk blok zinciri olarak anılıyor.",
      thumbnail: 'https://cdn-images-1.medium.com/max/879/1*ouDaRTwfRnISNNHq2es8Xg.jpeg'
    },
    {
      title: 'ZillionLife (ZLF) Token ile Söyleşi',
      url: 'https://coingeciyomu.medium.com/zillionlife-zlf-token-ile-s%C3%B6yle%C5%9Fi-16aaa47d5fa0?source=rss-57d97c63ef3------2',
      desc: 'Telegram blockchain ürünleri için çok etkin olarak kullanılan bir mecradır. Biz de Lokesh ile Telegram’daki gruplar vasıtasıyla tanıştık. Lokesh Oracle’da çalışıyor ve bunun yanı sıra 2 token üretmiş. İlki oyunlar üzerine bir token. ZLF, bir e-ticaret pazarı olan ve aynı zamanda uluslararası eğitim ürünleri ile uğraşan ZillonLife ekosisteminin temelini oluşturan kripto para birimidir.',
      thumbnail: 'https://cdn-images-1.medium.com/max/881/1*ozeXwENMP_KVDOEyt8BGoA.jpeg'
    },
    {
      title: 'Çılgın İkili: 5G-Blockchain Teknolojileri',
      url: 'https://coingeciyomu.medium.com/%C3%A7%C4%B1lg%C4%B1n-i%CC%87kili-5g-blockchain-teknolojileri-f25c5863a5e?source=rss-57d97c63ef3------2',
      desc: 'Bu makale, ‘Blockchain for 5G and Beyond Networks: A State of The Art Survey’ ve ‘Blockchain for 5G: Opportunities and Challenges’ adlı 2 çalışmadan derlenmiştir. Makalelerin blockchain ve 5g teknolojilerinin işbirliği gerçekleştirebileceği alanlara yönelik 2 ana tablosu üzerinden derleme ve çeviri faaliyeti gerçekleştirilecektir. Makale de doğrudan alıntı yapılmış ve İngilizce dilinden Türkçe diline çeviri gerçekleştirilmiştir. Researchgate’deki adresleri aşağıda sizlerle paylaşılacaktır:',
      thumbnail: 'https://cdn-images-1.medium.com/max/500/1*7vK65-09Q9pu7F3tN_Chdw.jpeg'
    },
    {
      title: 'Ufuk 2020 Greendeal Programı-Karbonsuz Ekonomi İçin 1 Milyar Euro Destek ve Detayları',
      url: 'https://coingeciyomu.medium.com/ufuk-2020-greendeal-program%C4%B1-karbonsuz-ekonomi-i%CC%87%C3%A7in-1-milyar-euro-destek-ve-detaylar%C4%B1-c1e87f458533?source=rss-57d97c63ef3------2',
      desc: 'AvrupaKomisyonu Başkanı Ursula VON DER LEYEN’in yeni görevine gelişi ile oluşturulan insiyatif kapsamında Avrupa Birliği’nin 2050 yılına kadar karbonsuz ekonomiye geçişinin tamamlanması hedeflenmektedir. Sürdürülebilir Avrupa Yatırım Planı kapsamındadır.',
      thumbnail: 'https://cdn-images-1.medium.com/max/800/1*NjKZEHpAXmyR21JS7Fz9EQ.jpeg'
    },
    {
      title: 'Blockchain ve Sürdürülebilirlik: Zero Carbon Project',
      url: 'https://coingeciyomu.medium.com/blockchain-ve-s%C3%BCrd%C3%BCr%C3%BClebilirlik-zero-carbon-project-d2d6ed75b452?source=rss-57d97c63ef3------2',
      desc: 'linkedin.com/company/coin-geciyo-mu',
      thumbnail: 'https://cdn-images-1.medium.com/max/500/1*Dk7aG28yLGnATTkpfLjzUg.jpeg'
    }
  ]
}
```

</p>
</details>