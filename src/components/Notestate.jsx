import React, { useRef, useState, useEffect } from "react";
import NoteContext from "./Notecontext";
const NoteState = (props) => {
  const LoveS = [
  { 
    title: "Heer Ranjha", 
    img: "https://tellyflight.com/wp-content/uploads/2022/10/rohit_khandelwal77_311624227_1104150840218499_2675634296787623887_n-819x1024.jpg", 
    heding: "Heer", 
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/heer.mp3" 
  },
  { 
    title: "Pahele", 
    img: "https://i.ytimg.com/vi/gRs7oQmerq0/maxresdefault.jpg", 
    heding: "Pahele",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/pahele.mp3" 
  },
  { 
    title: "Angaaron", 
    img: "https://c.saavncdn.com/580/Angaaron-From-Pushpa-2-The-Rule-Hindi-2024-20240528221027-500x500.jpg", 
    heding: "Angaaron",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Angaaron.mp3" 
  },
  { 
    title: "Main Rang Sharbato Ka", 
    img: "https://tse1.mm.bing.net/th/id/OIP.I9SSvSxYHeyZUDgWAT-XzwHaHa?pid=Api&P=0&h=180", 
    heding: "Rang",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Main Rang Sharbato Ka.mp3" 
  },
  { 
    title: "Haan", 
    img: "https://lh3.googleusercontent.com/I1GQ5TK0EN2W41YbO_FJu9VS91vngSEqMn1YbddRvP80sJHy4FBuU0ZzlwAswKD26YCL3vc4A4NKZgpJRg", 
    heding: "Haan",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/haan.mp3"  
  },
  { 
    title: "Jeene", 
    img: "https://i2.wp.com/c.saavncdn.com/601/Jeene-Laga-Hoon-Strings-Of-Love-Hindi-2015-500x500.jpg", 
    heding: "Jeene",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/jeene.mp3" 
  },
  { 
    title: "Vaaroon", 
    img: "https://pagaltrack.com/uploads/thumbnails/300x300/id3Picture_1266792844.jpg", 
    heding: "Vaaroon",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Vaaroon.mp3" 
  },
  { 
    title: "Agar Tum Saath Ho", 
    img: "https://www.allindiandjsdrive.com/wp-content/uploads/2022/12/Agar-Tum-Saath-Ho-LoFi-Remix-Shiven-768x768.jpg", 
    heding: "Agar Tum Saath Ho",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Agar Tum Saath Ho.mp3" 
  },
  { 
    title: "Tere Bina", 
    img: "https://i.scdn.co/image/ab67616d0000b2730504fdf58bae8cd52dd13047", 
    heding: "Tere Bina",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tere Bina.mp3" 
  },
  { 
    title: "Tum Se Hi", 
    img: "https://i.ytimg.com/vi/LFKEFl3w5nc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEkgTyhlMA8=&rs=AOn4CLCVzlBHsUJDnQbolRr3QtokKcMRwg", 
    heding: "Tum Se Hi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tum Se Hi.mp3" 
  },
];

 const Old = [
  { 
    title: "Pehla Nasha", 
    img: "https://images.justwatch.com/poster/138498071/s718/pehla-nasha.jpg", 
    heding: "Pehla Nasha",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Pehla Nasha .mp3" 
  },
  { 
    title: "Tujhe Dekha To", 
    img: "https://c.saavncdn.com/440/Tujhe-Dekha-To-Ye-Jaana-Sanam-Hindi-2015-500x500.jpg", 
    heding: "Tujhe Dekha To",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tujhe Dekha To.mp3" 
  },
  { 
    title: "Kuch Kuch Hota Hai", 
    img: "https://miro.medium.com/max/3000/1*a-iCIN_TDTO6AVzxYvVQGw.jpeg", 
    heding: "Kuch Kuch Hota Hai",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kuch Kuch Hota Hai.mp3" 
  },
  { 
    title: "Saat Samundar Paar", 
    img: "https://i.ytimg.com/vi/BsroOpCjwyc/maxresdefault.jpg", 
    heding: "Saat Samundar Paar",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Saat Samundar Paar.mp3" 
  },
  { 
    title: "Yeh Kaali Kaali Aankhen", 
    img: "https://i.ytimg.com/vi/BQeXlDqlt38/maxresdefault.jpg", 
    heding: "Yeh Kaali Kaali Aankhen",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Yeh Kaali Kaali Aankhen.mp3" 
  },
  { 
    title: "Tip Tip Barsa Pani", 
    img: "https://c.saavncdn.com/170/Tip-Tip-Barsa-Pani-Recreated-Hindi-2019-20190212165531-500x500.jpg", 
    heding: "Tip Tip Barsa Pani",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tip Tip Barsa Paani.mp3" 
  },
  { 
    title: "Ae Mere Humsafar", 
    img: "https://i.ytimg.com/vi/L-decMjJ408/maxresdefault.jpg", 
    heding: "Ae Mere Humsafar",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Ae Mere Humsafar.mp3" 
  },
  { 
    title: "Dil Hai Ki Manta Nahin", 
    img: "https://c-fa.cdn.smule.com/rs-s80/arr/3c/27/62d754e5-f861-497a-b38e-cb06f31bab58.jpg", 
    heding: "Dil Hai Ki Manta Nahin",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dil Hai Ki Manta Nahin.mp3" 
  },
  { 
    title: "Neele Neele Ambar Par", 
    img: "https://i.ytimg.com/vi/xxLspGUVMqw/maxresdefault.jpg", 
    heding: "Neele Neele Ambar Par",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Neele Neele Ambar Par.mp3" 
  },
  { 
    title: "Dekha Ek Khwab", 
    img: "https://a10.gaanacdn.com/gn_img/albums/w4MKPObojg/4MKP8Mw4Ko/size_m.jpg", 
    heding: "Dekha Ek Khwab",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dekha Ek Khwab.mp3" 
  },
];

const Motivational = [
  { 
    title: "Zinda", 
    img: "http://upload.wikimedia.org/wikipedia/en/thumb/1/18/Zinda_(Bhaag_Milkha_Bhaag)_-_Cover_2013.jpg/220px-Zinda_(Bhaag_Milkha_Bhaag)_-_Cover_2013.jpg", 
    heding: "Zinda",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Zinda.mp3" 
  },
  { 
    title: "Kar Har Maidaan Fateh", 
    img: "http://www.letslyrics.com/wp-content/uploads/2018/06/kar-har-maidaan-fateh-sanju.jpg", 
    heding: "Kar Har Maidaan Fateh",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kar Har Maidaan Fateh.mp3" 
  },
  { 
    title: "Bandeya Rey Bandeya", 
    img: "https://i1.wp.com/urbanasian.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-17-at-9.18.57-PM.png?fit=824%2C843", 
    heding: "Bandeya Rey Bandeya",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Bandeya Rey Bandeya.mp3" 
  },
  { 
    title: "Shaabaashiyaan", 
    img: "https://images.genius.com/891d26b5c493ce2d3bddb6299c375fd8.1000x1000x1.jpg", 
    heding: "Shaabaashiyaan",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Shaabaashiyaan.mp3" 
  },
  { 
    title: "Aarambh", 
    img: "https://i.scdn.co/image/ab67616d0000b273c45169492ebc6af70588df7d", 
    heding: "Aarambh",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Aarambh.mp3" 
  },
  { 
    title: "Ziddi Dil", 
    img: "https://c.saavncdn.com/756/Mary-Kom-Hindi-2018-20250617070311-500x500.jpg", 
    heding: "Ziddi Dil",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Ziddi Dil.mp3" 
  },
  { 
    title: "Ek Zindagi", 
    img: "https://lh3.googleusercontent.com/jG3CNR8as_bK4mSr84HKdV9DLdgilDf0dWzjdX4YMeNjMEmfmOHJRX3UJStHRNx2TDXElWlbYavJUM9L", 
    heding: "Ek Zindagi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Ek Zindagi.mp3" 
  },
  { 
    title: "Dangal", 
    img: "https://1.bp.blogspot.com/-MHcHijH9kDk/W4AJ82At58I/AAAAAAAAAEg/Ro74U5N6K08Ms4IbLO5XHi6cVqNhkSFogCLcBGAs/s1600/51oYfMKJbhL.jpg", 
    heding: "Dangal",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dangal.mp3" 
  },
  { 
    title: "Vardaan", 
    img: "https://i.scdn.co/image/ab67616d00001e02f773cbc5a13b50a7e48053cc", 
    heding: "Vardaan",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Vardaan.mp3" 
  },
  { 
    title: "Manzar Hai Yeh Naya", 
    img: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/EWlwepZz3z/size_m_1713532793.jpg", 
    heding: "Manzar Hai Yeh Naya",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Manzar Hai Yeh Naya.mp3" 
  },
];

 const SadS = [
  { 
    title: "Saiyaara", 
    img: "https://tse4.mm.bing.net/th/id/OIP.bNZc1SULbE3Pg9tTwIZbzwAAAA?pid=Api&P=0&h=180", 
    heding: "Saiyaara",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Saiyaara.mp3"
  },
  { 
    title: "Hamari Adhuri Kahani", 
    img: "http://3.bp.blogspot.com/-Dgeg_Nbn9c0/VWESDQZzrcI/AAAAAAAABIY/YwCOfnqlfoM/s1600/Hamari-Adhuri-Kahani.jpg", 
    heding: "Hamari Adhuri Kahani",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Hamari Adhuri Kahani.mp3"
  },
  { 
    title: "Raanjhan", 
    img: "https://c.saavncdn.com/915/Raanjhan-From-Do-Patti-Hindi-2024-20241004153945-500x500.jpg", 
    heding: "Raanjhan",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Raanjhan.mp3"
  },
  { 
    title: "Har kisi ko", 
    img: "https://c.saavncdn.com/058/Har-Kisi-Ko-Nahi-Milta-Sentiments-Of-Love-Instrumental--English-2012-20190924081752-500x500.jpg", 
    heding: "Har kisi ko",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Har Kisi Ko.mp3"
  },
  { 
    title: "Bewajah", 
    img: "https://a10.gaanacdn.com/gn_img/albums/mGjKr1b6zX/jKrPAX2VW6/size_m_1739991929.jpg", 
    heding: "Bewajah",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Bewajah.mp3"
  },
  { 
    title: "Phir Bhi Tumko Chaahunga", 
    img: "https://c.saavncdn.com/001/Phir-Bhi-Tumko-Chaahunga-Lofi-Mix-Hindi-2022-20221126115952-500x500.jpg", 
    heding: "Phir Bhi Tumko Chaahunga",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Phir Bhi Tumko Chaahunga.mp3"
  },
  { 
    title: "Agar Tum Sath Ho", 
    img: "https://c.saavncdn.com/723/Agar-Tum-Saath-Ho-From-Tamasha--English-2019-20200106215945-500x500.jpg", 
    heding: "Agar Tum Sath Ho",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Agar Tum Saath Ho.mp3"
  },
  { 
    title: "Choo Lo", 
    img: "https://images.genius.com/1478a886e438f0a746a8b42eacfdbcc4.1000x1000x1.jpg", 
    heding: "Choo Lo",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Choo Lo.mp3"
  },
  { 
    title: "Abhi Na Jao Chhod Kar", 
    img: "https://lh3.googleusercontent.com/btPt4ugVMTGR02Jo_7gInRW9kj2aLLe-z5v9ViMzcoZDV438Q6Dt8O4V8IOIuBce2zPILHKWpJqHdZpG", 
    heding: "Abhi Na Jao Chhod Kar",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Abhi Na Jao Chhod Kar.mp3"
  },
  { 
    title: "Kalank", 
    img: "https://c.saavncdn.com/784/Kalank-Hindi-2019-20200508163312-500x500.jpg", 
    heding: "Kalank",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kalank.mp3"
  },
];
 const PunjabiS = [
  { 
    title: "So High", 
    img: "https://a10.gaanacdn.com/images/albums/50/1977550/crop_480x480_1590578876_1977550.jpg", 
    heding: "So High",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/So High.mp3"
  },
  { 
    title: "Same Beef", 
    img: "https://i1.sndcdn.com/artworks-000584454542-3xirgu-t500x500.jpg", 
    heding: "Same Beef",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Same Beef.mp3"
  },
  { 
    title: "Millionaire", 
    img: "https://tse1.mm.bing.net/th/id/OIP.970quhddvnJUWGB3DQilywHaHa?pid=Api&P=0&h=180", 
    heding: "Millionaire",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Millionaire.mp3"
  },
  { 
    title: "Jatt Da Muqabala", 
    img: "https://c.saavncdn.com/588/Pbx-1-Punjabi-2018-20181018-500x500.jpg", 
    heding: "Jatt Da Muqabala",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Jatt Da Muqabala.mp3"
  },
  { 
    title: "Wavy", 
    img: "https://i1.sndcdn.com/artworks-zEAZQQAoRfBUPAgh-25OFow-t500x500.jpg", 
    heding: "Wavy",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Wavy.mp3"
  },
  { 
    title: "Titliaan", 
    img: "https://www.pagaiworld.com/covers/titliaan_4.jpg", 
    heding: "Titliaan",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Titliaan.mp3"
  },
  { 
    title: "Brown Munde", 
    img: "https://tse4.mm.bing.net/th/id/OIP.Gm9cUwETq-hvv4tqWNgE7QHaHa?pid=Api&P=0&h=180", 
    heding: "Brown Munde",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Brown Munde.mp3"
  },
  { 
    title: "Excuses", 
    img: "https://i.scdn.co/image/ab67616d0000b2735b74e703d6ffb2ea16860c86", 
    heding: "Excuses",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Excuses.mp3"
  },
  { 
    title: "Aam Jahe Munde", 
    img: "http://c.saavncdn.com/135/Aam-Jahe-Munde-Punjabi-2020-20230727130015-500x500.jpg", 
    heding: "Aam Jahe Munde",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Aam Jahe Munde.mp3"
  },
  { 
    title: "295", 
    img: "https://a10.gaanacdn.com/images/albums/13/5946713/crop_480x480_5946713.jpg", 
    heding: "295",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/295.mp3"
  },
];

  const EnglishS = [
  { 
    title: "Sapphire", 
    img: "https://a10.gaanacdn.com/gn_img/albums/kGxbn03y4r/xbn1yrd1Wy/size_m.jpg", 
    heding: "Sapphire",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Sapphire.mp3"
  },
  { 
    title: "7 Years", 
    img: "https://c.saavncdn.com/004/7-Years-English-2015-500x500.jpg", 
    heding: "7 Years",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/7 Years.mp3"
  },
  { 
    title: "A Thousand Years", 
    img: "https://dsoundtrack.com/wp-content/uploads/2020/07/1519726501.jpeg", 
    heding: "A Thousand Years",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/A Thousand Years.mp3"
  },
  { 
    title: "See You Again", 
    img: "https://i.pinimg.com/originals/d8/3c/31/d83c3168624bb1d75b16d8a6f063f3ad.jpg", 
    heding: "See You Again",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/See You Again.mp3"
  },
  { 
    title: "Faded", 
    img: "https://opradre.com/wp-content/uploads/2022/07/artworks-000169731686-zgvff2-t500x500.jpg", 
    heding: "Faded",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Faded.mp3"
  },
  { 
    title: "Despacito", 
    img: "https://images.coveralia.com/audio/l/Luis_Fonsi-Despacito_(Featuring_Daddy_Yankee)_(Version_Urbana_-_Sky)_(Cd_Single)-Frontal.jpg", 
    heding: "Despacito",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Despacito.mp3"
  },
  { 
    title: "Die With A Smile", 
    img: "https://tse4.mm.bing.net/th/id/OIP.Gm9cUwETq-hvv4tqWNgE7QHaHa?pid=Api&P=0&h=180", 
    heding: "Die With A Smile",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Die With A Smile.mp3"
  },
  { 
    title: "Collide", 
    img: "https://upload.wikimedia.org/wikipedia/en/1/17/Ellie_Goulding_-_Love_Me_Like_You_Do.png", 
    heding: "Collide",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Collide.mp3"
  },
  { 
    title: "Let Me Love You", 
    img: "https://m.media-amazon.com/images/M/MV5BMzA1YWJmNjAtZjQyZS00OGQxLWI0NDEtMWZlZWQ3MzRjOTZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
    heding: "Let Me Love You",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Let Me Love You.mp3"
  },
  { 
    title: "Starboy", 
    img: "https://preview.redd.it/6xn03bi6yvp91.jpg?width=1024&format=pjpg&auto=webp&s=414a351b0876920097d18977abdfcf76ad09a245", 
    heding: "Starboy",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Starboy.mp3"
  },
];

 const FriendS = [
  { 
    title: "Arbi Ghode", 
    img: "https://c.saavncdn.com/508/Arbi-Ghode-Unknown-2024-20240616133051-500x500.jpg", 
    heding: "Arbi Ghode",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Arbi Ghode.mp3"
  },
  { 
    title: "Naach Meri Jaan", 
    img: "https://a10.gaanacdn.com/gn_img/song/D0PKLqr3Gl/PKLnENPqWG/size_m_1516001625.jpg", 
    heding: "Naach Meri Jaan",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Naach Meri Jaan.mp3"
  },
  { 
    title: "Sajjda", 
    img: "https://c.saavncdn.com/766/Sajjda-Punjabi-2018-20240815043934-500x500.jpg", 
    heding: "Sajjda",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Sajjda.mp3"
  },
  { 
    title: "Salamat Rahe Dostana Hamara", 
    img: "https://c.saavncdn.com/320/Dostana-Hindi-2009-20240924133603-500x500.jpg", 
    heding: "Salamat Rahe Dostana Hamara",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Salamat Rahe Dostana Hamara.mp3"
  },
  { 
    title: "Jashn e ishqa", 
    img: "https://a10.gaanacdn.com/gn_img/albums/koMWQ4B3qL/oMWQ41ZX3q/size_l.jpg", 
    heding: "Jashn e ishqa",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Jashn e ishqa.mp3"
  },
  { 
    title: "Tera Yar Hu Main", 
    img: "https://pendujatt.com.se/uploads/album/yaaron-ki-yaariyan-benny-dayal.webp", 
    heding: "Tera Yar Hu Main",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tera Yaar Hoon Main.mp3"
  },
  { 
    title: "Yaar Mod Do", 
    img: "https://a10.gaanacdn.com/gn_img/albums/kGxbn03y4r/GxbnoPqaKy/size_m.jpg", 
    heding: "Yaar Mod Do",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Yaar Mod Do.mp3"
  },
  { 
    title: "Yaro Ne Mere Vaste", 
    img: "https://a10.gaanacdn.com/gn_img/albums/0wrb4qNKLg/wrb4VBXa3L/size_m.jpg", 
    heding: "Yaro Ne Mere Vaste",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Yaro Ne Mere Vaste.mp3"
  },
  { 
    title: "Tere Jaisa Yaar Kahan", 
    img: "https://i1.sndcdn.com/artworks-000384016836-9t4xc8-t500x500.jpg", 
    heding: "Tere Jaisa Yaar Kahan",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tere Jaisa Yaar Kahan.mp3"
  },
  { 
    title: "Inteha Ho Gayi Intezaar Ki", 
    img: "https://pendujatt.com.se/uploads/album/de-de-pyar-de-jaya-prada-bappi-lahiri.webp", 
    heding: "Inteha Ho Gayi Intezaar Ki",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Inteha Ho Gayi Intezaar Ki.mp3"
  },
];

const Shivji = [
  { 
    title: "Jay Jay Kedara", 
    img: "https://s.saregama.tech/image/c/m/b/0e/91/jai-jai-kedara_1440x1440_1659605976.jpg", 
    heding: "Jay Jay Kedara",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Jay Jay Kedara.mp3"
  },
  { 
    title: "Mere Baba", 
    img: "https://c.saavncdn.com/166/Mere-Baba-Hindi-2022-20220307121010-500x500.jpg", 
    heding: "Mere Baba",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Mere Baba.mp3"
  },
  { 
    title: "Devon Ke Dev Mahadev", 
    img: "https://c.saavncdn.com/339/Devo-Ke-Dev-Mahadev-Haryanvi-2021-20210311004612-500x500.jpg", 
    heding: "Devon Ke Dev Mahadev",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Devon Ke Dev Mahadev.mp3"
  },
  { 
    title: "Namo Namo", 
    img: "https://a10.gaanacdn.com/gn_img/albums/qaLKY23pO4/LKY6vjB73p/size_m.jpg", 
    heding: "Namo Namo",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Namo Namo.mp3"
  },
  { 
    title: "Shish Nawata Hoon", 
    img: "https://tse2.mm.bing.net/th/id/OIP.HogKUR5css7wK6zhpdu-CAHaHa?pid=Api&P=0&h=180", 
    heding: "Shish Nawata Hoon",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Shish Nawata Hoon.mp3"
  },
  { 
    title: "Parvati Boli Shankar Se", 
    img: "https://c.saavncdn.com/303/Parvati-Boli-Shankar-Se-Hindi-2022-20240925072407-500x500.jpg", 
    heding: "Parvati Boli Shankar Se",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Parvati Boli Shankar Se.mp3"
  },
  { 
    title: "Bhala", 
    img: "https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/wPKOOMe0Kq/size_m_1600093006.jpg", 
    heding: "Bhala",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Bhala.mp3"
  },
  { 
    title: "Lagi Lagan Shankara", 
    img: "https://images.genius.com/32a9ec1310dca8cf8b3ca6d21c990f2c.1000x1000x1.png", 
    heding: "Lagi Lagan Shankara",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Lagi Lagan Shankara.mp3"
  },
  { 
    title: "Mahakal Najar Ayye", 
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/06/17/e6/0617e67a-bb16-18fa-1e64-552be36ff4e5/196398338808.png/800x800cc.jpg", 
    heding: "Mahakal Najar Ayye",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Mahakal Najar Ayye.mp3"
  },
  { 
    title: "Bhole Baba Mere Hai", 
    img: "https://a10.gaanacdn.com/gn_img/albums/XzVWRLKdqR/VWRvZo86Wd/size_m.jpg", 
    heding: "Bhole Baba Mere Hai",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Bhole Baba Mere Hai.mp3"
  },
];

  const Bajrangbali = [
  { 
    title: "Hanuman Chalisa", 
    img: "https://a10.gaanacdn.com/images/albums/17/7175817/crop_480x480_7175817.jpg", 
    heding: "Hanuman Chalisa",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Hanuman Chalisa.mp3"
  },
  { 
    title: "Balaji Achha Lage Se", 
    img: "https://c.saavncdn.com/494/Balaji-Aacha-Lage-Se-Haryanvi-2022-20221019190522-500x500.jpg", 
    heding: "Balaji Achha Lage Se",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Balaji Achha Lage Se.mp3"
  },
  { 
    title: "Keejo Kesari Ke Laal", 
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/bd/21/98/bd21989a-eb31-5bf4-2533-390f72681fe4/195375355623_cover.jpg/1200x1200bf-60.jpg", 
    heding: "Keejo Kesari Ke Laal",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Keejo Kesari Ke Laal.mp3"
  },
  { 
    title: "Aasman Ko Chukar Dekha", 
    img: "https://i.scdn.co/image/ab67616d0000b273f6cf72bd190be11e87c9f1e5", 
    heding: "Aasman Ko Chukar Dekha",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Aasman Ko Chukar Dekha.mp3"
  },
  { 
    title: "Ram Na Milege Hanuman K Bina", 
    img: "https://c.saavncdn.com/679/Ram-Na-Milenge-Hanuman-Ke-Bina-Hindi-2000-20220426171001-500x500.jpg", 
    heding: "Ram Na Milege Hanuman K Bina",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Ram Na Milege Hanuman K Bina.mp3"
  },
  { 
    title: "Shri Ram Janki Baithe Hai Mere Seene Me", 
    img: "https://c.saavncdn.com/502/Shri-Ram-Janki-Baithe-Hai-Mere-Seene-Mein-Hindi-2023-20230421111011-500x500.jpg", 
    heding: "Shri Ram Janki Baithe Hai Mere Seene Me",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Shri Ram Janki Baithe Hai Mere Seene Me.mp3"
  },
  { 
    title: "Jai Shree Ram Hansraj Raghuwanshi", 
    img: "https://images.genius.com/9f35c045a2de64305edddfd4bb86e5e4.1000x1000x1.png", 
    heding: "Jai Shree Ram Hansraj Raghuwanshi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Jai Shree Ram Hansraj Raghuwanshi.mp3"
  },
  { 
    title: "Mere Ghar Ram Aaye Hain", 
    img: "https://c.saavncdn.com/946/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg", 
    heding: "Mere Ghar Ram Aaye Hain",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Mere Ghar Ram Aaye Hain.mp3"
  },
  { 
    title: "Ramji Ki Nikli Sawari", 
    img: "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/76/26/bc/7626bc87-ea38-06cf-7efa-eb13ac9e1351/artwork.jpg/1200x1200bf-60.jpg", 
    heding: "Ramji Ki Nikli Sawari",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Ramji Ki Nikli Sawari.mp3"
  },
  { 
    title: "Hamare Sath Shri Raghunath", 
    img: "https://a10.gaanacdn.com/gn_img/albums/P7m3GNKqxo/m3GPzm98Wq/size_m.jpg", 
    heding: "Hamare Sath Shri Raghunath",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Hamare Sath Shri Raghunath.mp3"
  },
];

  const Shadi = [
  { 
    title: "Raanjhanna", 
    img: "https://pendujatt.com.se/uploads/album/raanjhanaa-ar-rahman.webp", 
    heding: "Raanjhanna",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Raanjhanna.mp3"
  },
  { 
    title: "Tainu Leke", 
    img: "https://pendujatt.com.se/uploads/album/love-anthems-sonu-nigam-sonu-nigam.webp", 
    heding: "Tainu Leke",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tainu Leke.mp3"
  },
  { 
    title: "Kudmayi", 
    img: "https://pendujatt.com.se/uploads/album/rocky-aur-rani-kii-prem-kahaani-pritam.webp", 
    heding: "Kudmayi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kudmayi.mp3"
  },
  { 
    title: "Tere Dware Pe Aai Baraat", 
    img: "https://pendujatt.com.se/uploads/album/vivah-ravindra-jain.webp", 
    heding: "Tere Dware Pe Aai Baraat",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tere Dware Pe Aai Baraat.mp3"
  },
  { 
    title: "O Jiji", 
    img: "https://pendujatt.com.se/uploads/album/vivah-ravindra-jain.webp", 
    heding: "O Jiji",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/O Jiji.mp3"
  },
  { 
    title: "Yeh Ladka Hai Allah", 
    img: "https://pendujatt.com.se/uploads/album/kabhi-khushi-kabhie-gham-original-motion-picture-soundtrack-jatin-lalit.webp", 
    heding: "Yeh Ladka Hai Allah",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Yeh Ladka Hai Allah.mp3"
  },
  { 
    title: "Tujhko He Dulha Banaugi", 
    img: "https://pendujatt.com.se/uploads/album/chalo-ishq-ladaaye-himesh-reshammiya.webp", 
    heding: "Tujhko He Dulha Banaugi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tujhko He Dulha Banaugi.mp3"
  },
  { 
    title: "Chal Pyar Karegi", 
    img: "https://pendujatt.com.se/uploads/album/jab-pyaar-kisise-hota-hai-jatin-lalit.webp", 
    heding: "Chal Pyar Karegi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Chal Pyar Karegi.mp3"
  },
  { 
    title: "Dulha Bhi Lajawab Hai", 
    img: "https://pendujatt.com.se/uploads/album/haseena-maan-jaayegi-anu-malik.webp", 
    heding: "Dulha Bhi Lajawab Hai",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dulha Bhi Lajawab Hai.mp3"
  },
  { 
    title: "Piya Ghar Aavenge", 
    img: "https://pendujatt.com.se/uploads/album/chaandan-mein-kailasa.webp", 
    heding: "Piya Ghar Aavenge",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Piya Ghar Aavenge.mp3"
  }
];

 const Arijit = [
  { 
    title: "Tum Hi Ho", 
    img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Tum_Hi_Ho_cover.jpeg", 
    heding: "Tum Hi Ho",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tum Hi Ho.mp3"
  },
  { 
    title: "Channa Mereya", 
    img: "https://pendujatt.com.se/uploads/album/jashn-e-bahaaraa-classic-love-songs-various-artists.webp", 
    heding: "Channa Mereya",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Channa Mereya.mp3"
  },
  { 
    title: "Gerua", 
    img: "https://pendujatt.com.se/uploads/album/gerua-slowed-mirshad-bin-moideen.webp", 
    heding: "Gerua",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Gerua.mp3"
  },
  { 
    title: "Raabta", 
    img: "https://pendujatt.com.se/uploads/album/love-forever-with-arijit-singh-arijit-singh.webp", 
    heding: "Raabta",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Raabta.mp3"
  },
  { 
    title: "Khairiyat", 
    img: "https://i0.wp.com/fillumdekho.com/wp-content/uploads/2019/09/Khairiyat-poster.jpg?w=1000", 
    heding: "Khairiyat",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Khairiyat.mp3"
  },
  { 
    title: "Phir Bhi Tumko Chaahunga", 
    img: "https://c.saavncdn.com/001/Phir-Bhi-Tumko-Chaahunga-Lofi-Mix-Hindi-2022-20221126115952-500x500.jpg", 
    heding: "Phir Bhi Tumko Chaahunga",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Phir Bhi Tumko Chaahunga.mp3"
  },
  { 
    title: "Soch Na Sake", 
    img: "http://1.bp.blogspot.com/-czFnKlx3z8k/VnmXjoKzkyI/AAAAAAAAEZo/xzKVtyw5LN0/s1600/Soch%2BNa%2BSake%2B-%2BGCW.jpg", 
    heding: "Soch Na Sake",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Soch Na Sake.mp3"
  },
  { 
    title: "Muskurane", 
    img: "https://images.genius.com/6cecf8b508a8fade69a96d81ad7b2ed1.1000x1000x1.jpg", 
    heding: "Muskurane",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Muskurane.mp3"
  },
  { 
    title: "Agar Tum Saath Ho", 
    img: "https://www.allindiandjsdrive.com/wp-content/uploads/2022/12/Agar-Tum-Saath-Ho-LoFi-Remix-Shiven-768x768.jpg", 
    heding: "Agar Tum Saath Ho",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Agar Tum Saath Ho.mp3" 
  },
  { 
    title: "Hawayein", 
    img: "https://c.saavncdn.com/260/Hawayein-From-Jab-Harry-Met-Sejal--Hindi-201720170726112607-500x500.jpg", 
    heding: "Hawayein",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Hawayein.mp3"
  }
];

 const PritaM = [
  { 
    title: "Kesariya", 
    img: "https://pendujatt.com.se/uploads/album/brahmastra-original-motion-picture-soundtrack-pritam.webp", 
    heding: "Kesariya",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kesariya.mp3"
  },
  { 
    title: "Subhanallah", 
    img: "https://pendujatt.com.se/uploads/album/romance-like-ranbir-various-artists.webp", 
    heding: "Subhanallah",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Subhanallah.mp3"
  },
  { 
    title: "Shayad", 
    img: "https://pendujatt.com.se/uploads/album/pritam-all-time-hits-pritam.webp", 
    heding: "Shayad",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Shayad.mp3"
  },
  { 
    title: "Dil Ibaadat", 
    img: "https://pendujatt.com.se/uploads/album/best-of-kk-lofi-hits-kk.webp", 
    heding: "Dil Ibaadat",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dil Ibaadat.mp3"
  },
  { 
    title: "Ae Dil Hai Mushkil", 
    img: "https://pendujatt.com.se/uploads/album/pritam-all-time-hits-pritam.webp", 
    heding: "Ae Dil Hai Mushkil",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Ae Dil Hai Mushkil.mp3"
  },
  { 
    title: "Balam Pichkari", 
    img: "https://pendujatt.com.se/uploads/album/holi-dhamaal-bollywood-style-amitabh-bachchan.webp", 
    heding: "Balam Pichkari",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Balam Pichkari.mp3"
  },
  { 
    title: "Tum Se Hi", 
    img: "https://c.saavncdn.com/223/Jab-We-Met-Hindi-2007-20231016162009-500x500.jpg", 
    heding: "Tum Se Hi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tum Se Hi.mp3"
  },
  { 
    title: "Tera Hone Laga Hoon", 
    img: "https://pendujatt.com.se/uploads/album/best-of-romance-atif-aslam-pritam-atif-aslam.webp", 
    heding: "Tera Hone Laga Hoon",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tera Hone Laga Hoon.mp3"
  },
  { 
    title: "Kabira", 
    img: "https://i.pinimg.com/1200x/a1/6c/b5/a16cb5a37cf8d3aee02b782f73dcb9c7.jpg", 
    heding: "Kabira",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kabira.mp3"
  },
  { 
    title: "Ilahi", 
    img: "https://pendujatt.com.se/uploads/album/groove-with-arijit-singh-arijit-singh.webp", 
    heding: "Ilahi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Ilahi.mp3"
  }
];

 const ARRahman = [
  { 
    title: "Kun Faya Kun", 
    img: "https://i.pinimg.com/736x/c7/13/ae/c713ae62763e0959a0a664f34b5dc19f.jpg", 
    heding: "Kun Faya Kun",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kun Faya Kun.mp3"
  },
  { 
    title: "Tere Bina", 
    img: "https://i.scdn.co/image/ab67616d0000b2730504fdf58bae8cd52dd13047", 
    heding: "Tere Bina",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tere Bina.mp3"
  },
  { 
    title: "Jai Ho", 
    img: "https://pendujatt.com.se/uploads/album/slumdog-millionaire-ar-rahman.webp", 
    heding: "Jai Ho",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Jai Ho.mp3"
  },
  { 
    title: "Roja Jaaneman", 
    img: "https://pendujatt.com.se/uploads/album/the-essential-hits-of-a-r-rahman-ar-rahman.webp", 
    heding: "Roja Jaaneman",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Roja Jaaneman.mp3"
  },
  { 
    title: "Tu Hi Re", 
    img: "https://cf.mora.jp/contents/package/0000/00000087/0024/728/555/0024728555.200.jpg", 
    heding: "Tu Hi Re",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tu Hi Re.mp3"
  },
  { 
    title: "Nadaan Parindey", 
    img: "https://pendujatt.com.se/uploads/album/rockstar-ar-rahman.webp", 
    heding: "Nadaan Parindey",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Nadaan Parindey.mp3"
  },
  { 
    title: "Kehna Hi Kya", 
    img: "https://i.pinimg.com/originals/ae/d4/a5/aed4a5317051b39e85c56db632f9cf7e.jpg", 
    heding: "Kehna Hi Kya",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kehna Hi Kya.mp3"
  },
  { 
    title: "O Humdum Suniyo Re", 
    img: "https://pendujatt.com.se/uploads/album/khuda-jaane-hits-of-kk-various-artists.webp", 
    heding: "O Humdum Suniyo Re",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/O Humdum Suniyo Re.mp3"
  },
  { 
    title: "Dil Se Re", 
    img: "https://pendujatt.com.se/uploads/album/ar-rehman-the-music-meastro-of-bollywood-ar-rahman.webp", 
    heding: "Dil Se Re",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dil Se Re.mp3"
  },
  { 
    title: "Maa Tujhe Salaam", 
    img: "https://pendujatt.com.se/uploads/album/vande-mataram-ar-rahman.webp", 
    heding: "Maa Tujhe Salaam",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Maa Tujhe Salaam.mp3"
  }
];

 const AtifAslam = [
  { 
    title: "Tera Hone Laga Hoon", 
    img: "https://c.saavncdn.com/572/Tera-Hone-Laga-Hun-Hindi-2021-20210414130133-500x500.jpg", 
    heding: "Tera Hone Laga Hoon",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tera Hone Laga Hoon.mp3"
  },
  { 
    title: "Jeene Laga Hoon", 
    img: "https://pendujatt.com.se/uploads/album/ramaiya-vastavaiya-sachin-jigar.webp", 
    heding: "Jeene Laga Hoon",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Jeene Laga Hoon.mp3"
  },
  { 
    title: "Jeene Ke Hain Chaar Din", 
    img: "https://pendujatt.com.se/uploads/album/salman-khan-bollywood-hunk-various-artists.webp", 
    heding: "Jeene Ke Hain Chaar Din",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Jeene Ke Hain Chaar Din.mp3"
  },
  { 
    title: "Pehli Dafa", 
    img: "https://pendujatt.com.se/uploads/album/baarish-waala-ishq-jubin-nautiyal.webp", 
    heding: "Pehli Dafa",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Pehli Dafa.mp3"
  },
  { 
    title: "Dil Diyan Gallan", 
    img: "https://pendujatt.com.se/uploads/album/top-hits-katrina-kaif-various-artists.webp", 
    heding: "Dil Diyan Gallan",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dil Diyan Gallan.mp3"
  },
  { 
    title: "Tera Ban Jaunga", 
    img: "https://pendujatt.com.se/uploads/album/kabir-singh-various-artists.webp", 
    heding: "Tera Ban Jaunga",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tera Ban Jaunga.mp3"
  },
  { 
    title: "O Saathi", 
    img: "https://pendujatt.com.se/uploads/album/baaghi-2-sandeep-shirodkar.webp", 
    heding: "O Saathi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/O Saathi.mp3"
  },
  { 
    title: "Tu Jaane Na", 
    img: "https://pendujatt.com.se/uploads/album/ajab-prem-ki-ghazab-kahani-pritam.webp", 
    heding: "Tu Jaane Na",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Tu Jaane Na.mp3"
  },
  { 
    title: "Piya O Re Piya", 
    img: "https://pendujatt.com.se/uploads/album/piya-o-re-piya.webp", 
    heding: "Piya O Re Piya",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Piya O Re Piya.mp3"
  },
  { 
    title: "Kuch Is Tarah", 
    img: "https://pendujatt.com.se/uploads/album/doorie-atif-aslam.webp", 
    heding: "Kuch Is Tarah",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kuch Is Tarah.mp3"
  }
];

  const HoneySingh = [
  {
    title: "Brown Rang",
    img: "https://pendujatt.com.se/uploads/album/brown-rang-yo-yo-honey-singh.webp",
    heding: "Brown Rang",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Brown Rang.mp3"
  },
  {
    title: "Desi Kalakaar",
    img: "https://pendujatt.com.se/uploads/album/yo-yo-honey-singh-is-back-yo-yo-honey-singh.webp",
    heding: "Desi Kalakaar",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Desi Kalakaar.mp3"
  },
  {
    title: "Angreji Beat",
    img: "https://pendujatt.com.se/uploads/album/international-villager-yo-yo-honey-singh.webp",
    heding: "Angreji Beat",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Angreji Beat.mp3"
  },
  {
    title: "Dope Shope",
    img: "https://pendujatt.com.se/uploads/album/dope-shope-lofi-remix-deep.webp",
    heding: "Dope Shope",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dope Shope.mp3"
  },
  {
    title: "Millionaire",
    img: "https://images.genius.com/88acf10bc6a590d85db9d902074f2315.1000x1000x1.webp",
    heding: "Millionaire",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Millionaire.mp3"
  },
  {
    title: "High Heels",
    img: "https://i.scdn.co/image/ab67616d0000b27356174dffd15c4548d7f92850",
    heding: "High Heels",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/High Heels.mp3"
  },
  {
    title: "Sunny Sunny",
    img: "https://a10.gaanacdn.com/gn_img/albums/a7LWBzWzXA/7LWBkJJjbz/size_m.jpg",
    heding: "Sunny Sunny",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Sunny Sunny.mp3"
  },
  {
    title: "Love Dose",
    img: "https://c.saavncdn.com/110/Yo-Yo-Honey-Singh-Is-Back-Hindi-2018-20180312-500x500.jpg",
    heding: "Love Dose",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Love Dose.mp3"
  },
  {
    title: "Party All Night",
    img: "https://a10.gaanacdn.com/gn_img/albums/21GWwR3pkg/1GWwrvy23p/size_m.jpg",
    heding: "Party All Night",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Party All Night.mp3"
  },
  {
    title: "Blue Eyes",
    img: "https://c.saavncdn.com/279/Blue-Eyes-2013-500x500.jpg",
    heding: "Blue Eyes",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Blue Eyes.mp3"
  }
];

 const ShreyaGhoshal = [
  {
    title: "Teri Meri",
    img: "https://i.pinimg.com/originals/11/ff/43/11ff43dddc126bcdc9568e403884bb02.jpg",
    heding: "Teri Meri",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Teri Meri.mp3"
  },
  {
    title: "Sun Raha Hai",
    img: "https://pendujatt.com.se/uploads/album/best-of-shreya-ghoshal-shreya-ghoshal.webp",
    heding: "Sun Raha Hai",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Sun Raha Hai.mp3"
  },
  {
    title: "Angaaron",
    img: "https://c.saavncdn.com/580/Angaaron-From-Pushpa-2-The-Rule-Hindi-2024-20240528221027-500x500.jpg",
    heding: "Angaaron",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Angaaron.mp3"
  },
  {
    title: "Agar Tum Mil Jao",
    img: "https://pendujatt.com.se/uploads/album/zeher-various-artists.webp",
    heding: "Agar Tum Mil Jao",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Agar Tum Mil Jao.mp3"
  },
  {
    title: "Dola Re Dola",
    img: "https://pendujatt.com.se/uploads/album/devdas-various-artists.webp",
    heding: "Dola Re Dola",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dola Re Dola.mp3"
  },
  {
    title: "Teri Ore",
    img: "https://pendujatt.com.se/uploads/album/singh-is-kinng-pritam.webp",
    heding: "Teri Ore",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Teri Ore.mp3"
  },
  {
    title: "Nagada Sang Dhol",
    img: "https://pendujatt.com.se/uploads/album/goliyon-ki-raasleela-ram-leela-siddharth-garima.webp",
    heding: "Nagada Sang Dhol",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Nagada Sang Dhol.mp3"
  },
  {
    title: "Barso Re",
    img: "https://pendujatt.com.se/uploads/album/guru-original-motion-picture-soundtrack-ar-rahman.webp",
    heding: "Barso Re",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Barso Re.mp3"
  },
  {
    title: "Deewani Mastani",
    img: "https://pendujatt.com.se/uploads/album/bajirao-mastani-various-artists.webp",
    heding: "Deewani Mastani",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Deewani Mastani.mp3"
  },
  {
    title: "Manwa Laage",
    img: "https://pendujatt.com.se/uploads/album/happy-new-year-vishal-shekhar.webp",
    heding: "Manwa Laage",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Manwa Laage.mp3"
  }
];

const SunidhiChauhan = [
  {
    title: "Beedi",
    img: "https://pendujatt.com.se/uploads/album/omkara-gulzar.webp",
    heding: "Beedi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Beedi.mp3"
  },
  {
    title: "Dhoom Machale",
    img: "https://pendujatt.com.se/uploads/album/house-party-playlist-various-artists.webp",
    heding: "Dhoom Machale",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dhoom Machale.mp3"
  },
  { 
    title: "Aaja Nachle", 
    img: "https://a10.gaanacdn.com/gn_img/albums/qa4WEkqKP1/a4WEE7dWP1/size_l.jpg", 
    heding: "Aaja Nachle",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Aaja Nachle.mp3"
  },
  {
    title: "Kamli",
    img: "https://c.saavncdn.com/643/Kamli-Electrified-Dance-Numbers-2014-500x500.jpg",
    heding: "Kamli",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kamli.mp3"
  },
  {
    title: "Sheila Ki Jawani",
    img: "https://downloads4djs.co.in/wp-content/uploads/2023/02/Sheila-Ki-Jawaani-DJ-Salman.jpg",
    heding: "Sheila Ki Jawani",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Sheila Ki Jawani.mp3"
  },
  {
    title: "Suno Na",
    img: "https://i.ytimg.com/vi/6ZLe6ykxiy4/hq720_2.jpg?sqp=-oaymwEYCNAFENAFSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLBYEKmuSNl9deJYHfYra61Hq0C_rg",
    heding: "Suno Na",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Suno Na.mp3"
  },
  {
    title: "Chhaliya",
    img: "https://pendujatt.com.se/uploads/album/terrific-kareena-kareena-kapoor-khan.webp",
    heding: "Chhaliya",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Chhaliya.mp3"
  },
  {
    title: "Dance Pe Chance",
    img: "https://pendujatt.com.se/uploads/album/dance-pe-chance-best-of-sunidhi-chauhan-sunidhi-chauhan.webp",
    heding: "Dance Pe Chance",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dance Pe Chance.mp3"
  },
  {
    title: "Udi",
    img: "https://pendujatt.com.se/uploads/album/guzaarish-sanjay-leela-bhansali.webp",
    heding: "Udi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Udi.mp3"
  },
  {
    title: "Desi Girl",
    img: "https://pendujatt.com.se/uploads/album/dostana-original-motion-picture-soundtrack-vishal-shekhar.webp",
    heding: "Desi Girl",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Desi Girl.mp3"
  }
];

const NehaKakkar = [
  {
    title: "Dilbar",
    img: "https://pendujatt.com.se/uploads/album/satyameva-jayate-tanishk-bagchi.webp",
    heding: "Dilbar",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Dilbar.mp3"
  },
  {
    title: "Chalti Hai Kya 9 Se 12",
    img: "https://pendujatt.com.se/uploads/album/judwaa-2-anu-malik.webp",
    heding: "Chalti Hai Kya 9 Se 12",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Chalti Hai Kya 9 Se 12.mp3"
  },
  { 
    title: "Aankh Marey", 
    img: "https://c.saavncdn.com/453/Aankh-Marey-From-Simmba-Hindi-2018-20181206064340-500x500.jpg", 
    heding: "Aankh Marey",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Aankh Marey.mp3"
  },
  {
    title: "Kar Gayi Chull",
    img: "https://pendujatt.com.se/uploads/album/kar-gayi-chull-sped.webp",
    heding: "Kar Gayi Chull",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kar Gayi Chull.mp3"
  },
  {
    title: "London Thumakda",
    img: "https://c-fa.cdn.smule.com/rs-s77/arr/07/2a/f55578de-b5b5-4ff9-ba4d-4559afc51fac.jpg",
    heding: "London Thumakda",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/London Thumakda.mp3"
  },
  {
    title: "Sunny Sunny",
    img: "https://a10.gaanacdn.com/gn_img/albums/a7LWBzWzXA/7LWBkJJjbz/size_m.jpg",
    heding: "Sunny Sunny",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Sunny Sunny.mp3"
  },
  {
    title: "Coca Cola",
    img: "https://pendujatt.com.se/uploads/album/best-of-kriti-sanon-various-artists.webp",
    heding: "Coca Cola",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Coca Cola.mp3"
  },
  {
    title: "Garmi",
    img: "https://pendujatt.com.se/uploads/album/garmi-from-street-dancer.webp",
    heding: "Garmi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Garmi.mp3"
  },
  {
    title: "Morni Banke",
    img: "https://pendujatt.com.se/uploads/album/morni-banke-from-badhaai-ho-neha-kakkar.webp",
    heding: "Morni Banke",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Morni Banke.mp3"
  },
  {
    title: "Cheez Badi",
    img: "https://pendujatt.com.se/uploads/album/best-of-neha-kakkar-neha-kakkar.webp",
    heding: "Cheez Badi",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Cheez Badi.mp3"
  },
];

const KanikaKapoor = [
  {
    title: "Baby Doll",
    img: "https://i1.sndcdn.com/artworks-000072438797-lnf654-t500x500.jpg",
    heding: "Baby Doll",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Baby Doll.mp3"
  },
  {
    title: "Chittiyaan Kalaiyaan",
    img: "https://pendujatt.com.se/uploads/album/best-of-jacqueline-fernandez-jacqueline-fernandez.webp",
    heding: "Chittiyaan Kalaiyaan",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Chittiyaan Kalaiyaan.mp3"
  },
  { 
    title: "Desi Look", 
    img: "https://pendujatt.com.se/uploads/album/ek-paheli-leela-various-artists.webp", 
    heding: "Desi Look",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Desi Look.mp3"
  },
  {
    title: "Lovely",
    img: "https://m.media-amazon.com/images/I/51ZcBOfK1rL.jpg",
    heding: "Lovely",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Lovely.mp3"
  },
  {
    title: "Jugni Peeke Tight Hai",
    img: "https://pendujatt.com.se/uploads/album/kis-kisko-pyaar-karoon-dr-zeus.webp",
    heding: "Jugni Peeke Tight Hai",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Jugni Peeke Tight Hai.mp3"
  },
  {
    title: "Panghat",
    img: "https://pendujatt.com.se/uploads/album/panghat-kanika-kapoor.webp",
    heding: "Panghat",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Panghat.mp3"
  },
  {
    title: "Nachan Farrate",
    img: "https://pendujatt.com.se/uploads/album/move-your-lakk-with-sonakshi-sinha-various-artists.webp",
    heding: "Nachan Farrate",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Nachan Farrate.mp3"
  },
  {
    title: "Rangg",
    img: "https://pendujatt.com.se/uploads/album/rang-kanika-kapoor.webp",
    heding: "Rangg",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Rangg.mp3"
  },
  {
    title: "Buhe Bariyan",
    img: "https://pendujatt.com.se/uploads/album/buhe-bariyan-kanika-kapoor.webp",
    heding: "Buhe Bariyan",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Buhe Bariyan.mp3"
  },
  {
    title: "Kamlee",
    img: "https://pendujatt.com.se/uploads/album/happy-new-year-vishal-shekhar.webp",
    heding: "Kamlee",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Kamlee.mp3"
  },
];

const MonaliThakur = [
  {
    title: "Sawaar Loon",
    img: "https://pendujatt.com.se/uploads/album/lootera-amit-trivedi.webp",
    heding: "Sawaar Loon",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Sawaar Loon.mp3"
  },
  {
    title: "Moh Moh Ke Dhaage",
    img: "https://pendujatt.com.se/uploads/album/dum-laga-ke-haisha-anu-malik.webp",
    heding: "Moh Moh Ke Dhaage",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Moh Moh Ke Dhaage.mp3"
  },
  { 
    title: "Zara Zara Touch Me", 
    img: "https://pendujatt.com.se/uploads/album/race-jhankar-pritam.webp", 
    heding: "Zara Zara Touch Me",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Zara Zara Touch Me.mp3"
  },
  {
    title: "Khudaya Khair",
    img: "https://pendujatt.com.se/uploads/album/billu-barber-pritam.webp",
    heding: "Khudaya Khair",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Khudaya Khair.mp3"
  },
  {
    title: "Raghupati Raghav",
    img: "https://pendujatt.com.se/uploads/album/rising-star-monali-thakur-monali-thakur.webp",
    heding: "Raghupati Raghav",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Raghupati Raghav.mp3"
  },
  {
    title: "Badri Ki Dulhania",
    img: "https://pendujatt.com.se/uploads/album/badrinath-ki-dulhania-bappi-lahiri.webp",
    heding: "Badri Ki Dulhania",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Badri Ki Dulhania.mp3"
  },
  {
    title: "Cham Cham",
    img: "https://pendujatt.com.se/uploads/album/cham-cham-from-baaghi-geek-music.webp",
    heding: "Cham Cham",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Cham Cham.mp3"
  },
  {
    title: "Khwab Dekhe",
    img: "https://pendujatt.com.se/uploads/album/race-jhankar-pritam.webp",
    heding: "Khwab Dekhe",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Khwab Dekhe.mp3"
  },
  {
    title: "Anjaana Anjaani Ki Kahani",
    img: "https://pendujatt.com.se/uploads/album/dance-like-ranbir-various-artists.webp",
    heding: "Anjaana Anjaani Ki Kahani",
    src1: "https://mpfaxubkxuwolbkkdbkr.supabase.co/storage/v1/object/public/Songs/Anjaana Anjaani Ki Kahani.mp3"
  },
];


  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(new Audio()); // ✅ Correct way
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [Categorie, setCategorie] = useState(LoveS)
  const [title, setTitle] = useState("")

  // ✅ Removed: const audio = new Audio();

  let oldsong = () => {
    setCategorie(Old)
    setTitle("Best Of 90's")
  }
  let lovesong = () => {
    setCategorie(LoveS)
    setTitle("Love Songs")
  }
  let motisongs = () => {
    setCategorie(Motivational)
    setTitle("Motivational Songs")
  }
  let sad = () => {
    setCategorie(SadS)
    setTitle("Sad Songs")
  }
  let punjabi = () => {
    setCategorie(PunjabiS)
    setTitle("Punjabi Songs")
  }
  let english = () => {
    setCategorie(EnglishS)
    setTitle("English Songs")
  }
  let friend = () => {
    setCategorie(FriendS)
    setTitle("Friendship Songs")
  }
  let Shiv = () => {
    setCategorie(Shivji)
    setTitle("Shivji Songs")
  }
  let bajrangbali = () => {
    setCategorie(Bajrangbali)
    setTitle("Bajrangbali Songs")
  }
  let Weeding = () => {
    setCategorie(Shadi)
    setTitle("Weeding Songs")
  }
  let ArijitSingh = () => {
    setCategorie(Arijit)
    setTitle("Arijit Singh Special")
  }
  let Pritam = () => {
    setCategorie(PritaM)
    setTitle("Pritam Special")
  }
  let Raheman = () => {
    setCategorie(ARRahman)
    setTitle("AR Raheman Special")
  }
  let Atif = () => {
    setCategorie(AtifAslam)
    setTitle("Atif Aslam Special")
  }
  let Honey = () => {
    setCategorie(HoneySingh)
    setTitle("Honey Singh Special")
  }
  let Shreya = () => {
    setCategorie(ShreyaGhoshal)
    setTitle("Shreya Ghosal Special")
  }
  let Sunidhi = () => {
    setCategorie(SunidhiChauhan)
    setTitle("Sunidhi Chauhan Special")
  }
   let Neha = () => {
    setCategorie(NehaKakkar)
    setTitle("Neha Kakkar Special")
  }
  let Kanika = () => {
    setCategorie(KanikaKapoor)
    setTitle("Kanika Kapoor Special")
  }
    let Monali = () => {
    setCategorie(MonaliThakur)
    setTitle("Monali Thakur Special")
  }
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      playNextSong(Categorie); // Automatically play next song
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateTime);
    audio.addEventListener("ended", handleEnded); // 🔁 Listen for song end

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateTime);
      audio.removeEventListener("ended", handleEnded); // 🔁 Clean up
    };
  }, [currentIndex]); 

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const playSong = (song, index) => {
    const filePath = `${song.src1}`; // Make sure this file exists in public folder or correct location
    const audio = audioRef.current;

    if (currentSong === song.src1 && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.src = filePath;
      audio.play().then(() => {
        setIsPlaying(true);
        setCurrentSong(song.title);
        setCurrentIndex(index);
        console.log("Playing:", song.title);
      }).catch(error => {
        console.error("Audio play failed:", error);
      });
    }
  };
  const playNextSong = (love) => {
    const nextIndex = (currentIndex + 1) % love.length;
    const nextSong = love[nextIndex];

    if (nextSong) {
      playSong(nextSong, nextIndex);
    } else {
      console.warn("No next song found");
    }
  };
  const playPrevSong = (love) => {
    if (!love || love.length === 0) return;

    const prevIndex = (currentIndex - 1 + love.length) % love.length;
    const prevSong = love[prevIndex];

    if (prevSong) {
      playSong(prevSong, prevIndex);
    } else {
      console.warn("No previous song found");
    }
  };
  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Error resuming audio:", error);
      });
    }
  };

  return (
    <NoteContext.Provider value={{ Atif,Monali,Kanika,Neha,Sunidhi,Shreya,Honey, Raheman, PritaM, Pritam, Arijit, ArijitSingh, Shadi, Weeding, Shiv, bajrangbali, Bajrangbali, Shivji, LoveS, lovesong, EnglishS, english, friend, FriendS, punjabi, PunjabiS, sad, SadS, motisongs, Motivational, title, oldsong, Categorie, togglePlayPause, playNextSong, playPrevSong, playSong, isPlaying, currentSong, formatTime, duration, currentTime, setCurrentTime, audioRef }}>
      {props.children}
    </NoteContext.Provider>
  );
};


export default NoteState;