const wordList = [
  {
    word: "gitar",
    türk: "Tellerle çalınan bir müzik aleti.",
  },
  {
    word: "oksijen",
    türk: "Hayat için gerekli renksiz, kokusuz bir gaz.",
  },
  {
    word: "dağ",
    türk: "Yer yüzeyinde büyük doğal yükselti.",
  },
  {
    word: "resim",
    türk: "Bir yüzeye renklerle yapılan sanat formu.",
  },
  {
    word: "astronomi",
    türk: "Göksel cisimlerin ve olayların bilimsel incelenmesi.",
  },
  {
    word: "futbol",
    türk: "Yuvarlak bir top ile oynanan popüler spor.",
  },
  {
    word: "çikolata",
    türk: "Kakao çekirdeklerinden yapılan tatlı bir yiyecek.",
  },
  {
    word: "kelebek",
    türk: "Renkli kanatları ve ince bir vücudu olan bir böcek.",
  },
  {
    word: "tarih",
    türk: "Geçmiş olayların ve insan uygarlığının incelenmesi.",
  },
  {
    word: "pizza",
    türk: "Yuvarlak, yassı bir taban üzerine malzemeler eklenmiş bir yemek.",
  },
  {
    word: "caz",
    türk: "Doğaçlama ve senkopasyon ile karakterize edilen bir müzik türü.",
  },
  {
    word: "kamera",
    türk: "Görüntü veya video kaydetmek için kullanılan bir cihaz.",
  },
  {
    word: "elmas",
    türk: "Parlaklığı ve sertliği ile bilinen değerli bir taş.",
  },
  {
    word: "macera",
    türk: "Heyecan verici veya cesur bir deneyim.",
  },
  {
    word: "bilim",
    türk: "Fiziksel ve doğal dünyanın yapısının ve davranışının sistematik olarak incelenmesi.",
  },
  {
    word: "bisiklet",
    türk: "İki tekerlekli, insan gücüyle çalışan bir araç.",
  },
  {
    word: "günbatımı",
    türk: "Güneşin ufuk altında kaybolduğu günlük olay.",
  },
  {
    word: "kahve",
    türk: "Kavrulmuş kahve çekirdeklerinden yapılan popüler kafeinli içecek.",
  },
  {
    word: "dans",
    türk: "Genellikle müzikle yapılan ritmik vücut hareketi.",
  },
  {
    word: "galaksi",
    türk: "Yer çekimi ile bir arada tutulan yıldızlar, gaz ve tozdan oluşan büyük sistem.",
  },
  {
    word: "orkestra",
    türk: "Çeşitli enstrümanları çalan büyük bir müzisyen topluluğu.",
  },
  {
    word: "volkan",
    türk: "Lava, kaya parçaları, sıcak buhar ve gazların püskürdüğü dağ veya tepe.",
  },
  {
    word: "roman",
    türk: "Genellikle karmaşık bir olay örgüsü ve karakterlerle uzun bir kurgu eseri.",
  },
  {
    word: "heykel",
    türk: "Malzemeleri şekillendirerek veya birleştirerek oluşturulan üç boyutlu sanat formu.",
  },
  {
    word: "senfoni",
    türk: "Tam orkestra için, genellikle çok bölümlü uzun bir müzik bestesi.",
  },
  {
    word: "mimari",
    türk: "Binaların tasarlanması ve inşa edilmesi sanatı ve bilimi.",
  },
  {
    word: "bale",
    türk: "Kesin ve zarif hareketlerle karakterize edilen klasik dans formu.",
  },
  {
    word: "astronot",
    türk: "Uzayda seyahat etmek ve çalışmak üzere eğitilmiş kişi.",
  },
  {
    word: "şelale",
    türk: "Yüksekten düşen su kütlesi.",
  },
  {
    word: "teknoloji",
    türk: "Bilimsel bilginin pratik amaçlar için uygulanması.",
  },
  {
    word: "gökkuşağı",
    türk: "Işığın yansıması, kırılması ve dağılması ile oluşan meteorolojik olay.",
  },
  {
    word: "evren",
    türk: "Var olan tüm madde, uzay ve zamanın bütünü.",
  },
  {
    word: "piyano",
    türk: "Tuşlara basılarak çalınan, tellerin çekiçlerle vurulmasıyla ses çıkaran bir müzik aleti.",
  },
  {
    word: "tatil",
    türk: "Eğlence, dinlenme veya rahatlama için ayrılmış zaman.",
  },
  {
    word: "yağmur ormanı",
    türk: "Yüksek yağış ve biyolojik çeşitlilik ile karakterize edilen yoğun orman.",
  },
  {
    word: "tiyatro",
    türk: "Oyunlar, filmler veya diğer gösterilerin sahnelendiği bina veya açık alan.",
  },
  {
    word: "telefon",
    türk: "Uzun mesafelerde ses iletimi için kullanılan cihaz.",
  },
  {
    word: "dil",
    türk: "Kelimeler, jestler ve dil bilgisi içeren iletişim sistemi.",
  },
  {
    word: "çöl",
    türk: "Çok az veya hiç yağış almayan kurak veya çorak arazi.",
  },
  {
    word: "ayçiçeği",
    türk: "Büyük sarı çiçek başına sahip uzun bitki.",
  },
  {
    word: "fantazi",
    türk: "Büyü ve doğaüstü unsurlar içeren hayali kurgu türü.",
  },
  {
    word: "teleskop",
    türk: "Uzaktaki nesneleri gözlemlemek için kullanılan optik alet.",
  },
  {
    word: "meltem",
    türk: "Hafif rüzgar.",
  },
  {
    word: "vaha",
    türk: "Çölde su bulunan verimli nokta.",
  },
  {
    word: "fotoğrafçılık",
    türk: "Işığı veya diğer elektromanyetik radyasyonu kaydederek görüntüler oluşturma sanatı, süreci veya pratiği.",
  },
  {
    word: "safari",
    türk: "Genellikle doğal yaşamı gözlemlemek için yapılan keşif veya yolculuk.",
  },
  {
    word: "gezegen",
    türk: "Bir yıldızın etrafında dönen ve kendi ışığını üretmeyen gök cismi.",
  },
  {
    word: "nehir",
    türk: "Denize, göle veya başka bir akarsuya akan büyük doğal su akışı.",
  },
  {
    word: "tropikal",
    türk: "Yengeç Dönencesi ve Oğlak Dönencesi arasındaki bölge ile ilgili.",
  },
  {
    word: "gizemli",
    türk: "Anlaşılması, açıklanması veya tanımlanması zor.",
  },
  {
    word: "bilmece",
    türk: "Gizemli, zor veya anlaşılması zor bir şey.",
  },
  {
    word: "paradoks",
    türk: "Kendi içinde çelişen veya sezgiye meydan okuyan bir ifade veya durum.",
  },
  {
    word: "bulmaca",
    türk: "Zeka veya bilgi testi için tasarlanmış bir oyun, oyuncak veya problem.",
  },
  {
    word: "fısıldamak",
    türk: "Çok yavaş veya sessizce konuşmak, genellikle gizli bir şekilde.",
  },
  {
    word: "gölge",
    türk: "Bir nesnenin ışığı engelleyerek oluşturduğu karanlık alan veya şekil.",
  },
  {
    word: "sır",
    türk: "Başka insanlardan gizlenen veya bilinmeyen bir şey.",
  },
  {
    word: "merak",
    türk: "Bir şeyi bilme veya öğrenme isteği.",
  },
  {
    word: "tahmin edilemez",
    türk: "Önceden görülemeyen veya bilinmeyen; belirsiz.",
  },
  {
    word: "karartmak",
    türk: "Birini kafasını karıştırmak veya şaşırtmak; bir şeyi belirsiz veya anlaşılması zor hale getirmek.",
  },
  {
    word: "ortaya çıkarmak",
    türk: "Daha önce gizli veya bilinmeyen bir şeyi açığa çıkarmak veya ifşa etmek.",
  },
  {
    word: "yanılsama",
    türk: "Yanlış algı veya inanç; aldatıcı görünüm veya izlenim.",
  },
  {
    word: "ayışığı",
    türk: "Ay'dan gelen ışık.",
  },
  {
    word: "canlı",
    türk: "Enerji, parlaklık ve hayat dolu.",
  },
  {
    word: "nostalji",
    türk: "Geçmişe karşı duygusal özlem veya hasret.",
  },
  {
    word: "parlak",
    türk: "Olağanüstü zeki, yetenekli veya etkileyici.",
  },
  // Yeni kelimeler
  {
    word: "müzik",
    türk: "Melodi, ritim ve harmoni ile yapılan sanat formu.",
  },
  {
    word: "kitap",
    türk: "Bilgi veya hikaye içeren basılı veya dijital eser.",
  },
  {
    word: "bilgisayar",
    türk: "Veri işleme ve bilgi saklama için kullanılan elektronik cihaz.",
  },
  {
    word: "uçak",
    türk: "Havada uçabilen taşıt.",
  },
  {
    word: "film",
    türk: "Hikaye anlatımı veya bilgi aktarımı için hareketli görüntüler.",
  },
  {
    word: "robot",
    türk: "Çeşitli görevleri yerine getirmek için programlanmış mekanik cihaz.",
  },
  {
    word: "doğa",
    türk: "Canlılar ve çevreyle ilgili her şey.",
  },
  {
    word: "sanat",
    türk: "Yaratıcı ifade ve estetik değer taşıyan insan etkinliği.",
  },
  {
    word: "spor",
    türk: "Rekabetçi fiziksel etkinlikler.",
  },
  {
    word: "uzay",
    türk: "Dünya atmosferinin ötesindeki boşluk.",
  },
  {
    word: "gitar",
    türk: "Tellerle çalınan bir müzik aleti.",
  },
  {
    word: "oksijen",
    türk: "Hayat için gerekli renksiz, kokusuz bir gaz.",
  },
  {
    word: "dağ",
    türk: "Yer yüzeyinde büyük doğal yükselti.",
  },
  {
    word: "resim",
    türk: "Bir yüzeye renklerle yapılan sanat formu.",
  },
  {
    word: "astronomi",
    türk: "Göksel cisimlerin ve olayların bilimsel incelenmesi.",
  },
  {
    word: "futbol",
    türk: "Yuvarlak bir top ile oynanan popüler spor.",
  },
  {
    word: "çikolata",
    türk: "Kakao çekirdeklerinden yapılan tatlı bir yiyecek.",
  },
  {
    word: "kelebek",
    türk: "Renkli kanatları ve ince bir vücudu olan bir böcek.",
  },
  {
    word: "tarih",
    türk: "Geçmiş olayların ve insan uygarlığının incelenmesi.",
  },
  {
    word: "pizza",
    türk: "Yuvarlak, yassı bir taban üzerine malzemeler eklenmiş bir yemek.",
  },
  {
    word: "caz",
    türk: "Doğaçlama ve senkopasyon ile karakterize edilen bir müzik türü.",
  },
  {
    word: "kamera",
    türk: "Görüntü veya video kaydetmek için kullanılan bir cihaz.",
  },
  {
    word: "elmas",
    türk: "Parlaklığı ve sertliği ile bilinen değerli bir taş.",
  },
  {
    word: "macera",
    türk: "Heyecan verici veya cesur bir deneyim.",
  },
  {
    word: "bilim",
    türk: "Fiziksel ve doğal dünyanın yapısının ve davranışının sistematik olarak incelenmesi.",
  },
  {
    word: "bisiklet",
    türk: "İki tekerlekli, insan gücüyle çalışan bir araç.",
  },
  {
    word: "günbatımı",
    türk: "Güneşin ufuk altında kaybolduğu günlük olay.",
  },
  {
    word: "kahve",
    türk: "Kavrulmuş kahve çekirdeklerinden yapılan popüler kafeinli içecek.",
  },
  {
    word: "dans",
    türk: "Genellikle müzikle yapılan ritmik vücut hareketi.",
  },
  {
    word: "galaksi",
    türk: "Yer çekimi ile bir arada tutulan yıldızlar, gaz ve tozdan oluşan büyük sistem.",
  },
  {
    word: "orkestra",
    türk: "Çeşitli enstrümanları çalan büyük bir müzisyen topluluğu.",
  },
  {
    word: "volkan",
    türk: "Lava, kaya parçaları, sıcak buhar ve gazların püskürdüğü dağ veya tepe.",
  },
  {
    word: "roman",
    türk: "Genellikle karmaşık bir olay örgüsü ve karakterlerle uzun bir kurgu eseri.",
  },
  {
    word: "heykel",
    türk: "Malzemeleri şekillendirerek veya birleştirerek oluşturulan üç boyutlu sanat formu.",
  },
  {
    word: "senfoni",
    türk: "Tam orkestra için, genellikle çok bölümlü uzun bir müzik bestesi.",
  },
  {
    word: "mimari",
    türk: "Binaların tasarlanması ve inşa edilmesi sanatı ve bilimi.",
  },
  {
    word: "bale",
    türk: "Kesin ve zarif hareketlerle karakterize edilen klasik dans formu.",
  },
  {
    word: "astronot",
    türk: "Uzayda seyahat etmek ve çalışmak üzere eğitilmiş kişi.",
  },
  {
    word: "şelale",
    türk: "Yüksekten düşen su kütlesi.",
  },
  {
    word: "teknoloji",
    türk: "Bilimsel bilginin pratik amaçlar için uygulanması.",
  },
  {
    word: "gökkuşağı",
    türk: "Işığın yansıması, kırılması ve dağılması ile oluşan meteorolojik olay.",
  },
  {
    word: "evren",
    türk: "Var olan tüm madde, uzay ve zamanın bütünü.",
  },
  {
    word: "piyano",
    türk: "Tuşlara basılarak çalınan, tellerin çekiçlerle vurulmasıyla ses çıkaran bir müzik aleti.",
  },
  {
    word: "tatil",
    türk: "Eğlence, dinlenme veya rahatlama için ayrılmış zaman.",
  },
  {
    word: "yağmur ormanı",
    türk: "Yüksek yağış ve biyolojik çeşitlilik ile karakterize edilen yoğun orman.",
  },
  {
    word: "tiyatro",
    türk: "Oyunlar, filmler veya diğer gösterilerin sahnelendiği bina veya açık alan.",
  },
  {
    word: "telefon",
    türk: "Uzun mesafelerde ses iletimi için kullanılan cihaz.",
  },
];
