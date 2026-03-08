// 1. DATA MUSIK
const songList = [
    
{
        title: "Lagu Cafe - 01",
        artist: "Various Artists", 
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
   },
{
        title: "Lagu Cafe - 02",
        artist: "Various Artists",
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Lagu Cafe - 03",
        artist: "Various Artists",
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    }, 
{
        title: "Lagu Cafe - 04",
        artist: "Various Artists", 
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Lagu Cafe - 05",
        artist: "Various Artists", 
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2005.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Lagu Cafe - 06",
        artist: "Various Artists", 
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2006.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

      {
        title: "Terlalu Lelah",
        artist: "evo Band",
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/terlalu%20lelah%20-%20evo.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)",
    },
     { 
        title: "Whataya Want From Me", 
        artist: "Adam Lambert", 
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/what_from_me.mp3", 
        cover: "linear-gradient(135deg, #feb47b, #ff7e5f)"
    }, 
    { 
        title: "Hall of Fame", 
        artist: "The Script ft. will.i.am", 
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/hall%20of%20fame.mp3", 
        cover: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {   
        title: "It's My Life",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/its_My_Life.mp3",
        cover: "linear-gradient(135deg, #43e97b, #38f9d7)"
    }, 
{   
        title: "Green Day - 21 Guns",
        artist: "Green Day",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Green%20Day_21%20Gun.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
    title: "Iris",
    artist: "Goo Goo Dolls",
    // Gunakan format RAW agar lancar jaya
    src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Iris.mp3",
    cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    }, 

{
        title: "Don't Cry",
        artist: "Guns N' Roses",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/dont%20cry%20gnr.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Bad Liar",
        artist: "Imagine Dragons",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bad%20liar.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "In The End",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/in%20the%20end.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
    title: "Young Dumb & Broke",
    artist: "Khalid",
    // Link sudah diperbaiki ke format RAW yang benar
    src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/young_dumb.mp3",
    cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Slow Dancing in the Burning Room",  
        artist: "John Mayer",
        // Pastikan file ini memang eksis di repo GitHub lo
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/slow_dacing.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Can We Kiss Forever?",
        artist: "Kina ft. Adriana Proenza",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/can_we_kiss.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Poker Face",
        artist: "Lady Gaga",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/poker_face.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Rain On Me",
        artist: "Lady Gaga & Ariana Grande",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rain_on_me.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Numb",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/numb.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Perfect",
        artist: "Simple Plan",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Perfect_simpel.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Surender",
        artist: "Natalie Taylor",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/surender.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Something Like This",
        artist: "The Chainsmokers & Coldplay",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/something%20like%20this.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Akatsuki No Ito",
        artist: "Wakaki",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/akatsuki%20no%20ito.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "What I've Done",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/what%20ive%20done.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Where You Will Go",
        artist: "OneRepublic",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/where%20you%20will%20go.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 01",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 02",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 03",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 04",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "barat - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/barat%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "barat - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/barat%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "barat - 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/barat%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "ghibli - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ghibli%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "ghibli - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/gibli%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "river flow rock",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/River%20Flow%20Rock.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "rock - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rock%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "rock - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rock%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "rock - 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rock%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Getcha",
        artist: "Sania Twain",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sania_twain_getcha.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 04",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 05",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2005.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 06",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2006.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 07",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2007.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"

    },
{
        title: "Clasic - 08",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2008.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "yiruma - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/yiruma%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "yiruma - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/yiruma%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Padi - 01",
        artist: "Padi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/padi%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Padi - 02",
        artist: "Padi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/padi%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Padi - 03",
        artist: "Padi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/padi%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "Viera - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/viera%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Viera - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/viera%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Didi Kempot - 01",
        artist: "Didi Kempot",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/didi%20kempot%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Didi Kempot - 02",
        artist: "Didi Kempot",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/didi%20kempot%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Didi Kempot - 03",
        artist: "Didi Kempot",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/didi%20kempot%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Daughtry",
        artist: "Daughtry",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Daughtry.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Scorpion - 01",
        artist: "Scorpion",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Sorpion%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Scorpion 02",
        artist: "Scorpion",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Sorpion%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Scorpion - 03",
        artist: "Scorpion",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Sorpion%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Andmesh - 01",
        artist: "Andmesh",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/andmesh%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Andmesh - 02",
        artist: "Andmesh",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/andmesh%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ungu - 01",
        artist: "Ungu",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ungu%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ungu - 02",
        artist: "Ungu",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ungu%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ungu - 03",
        artist: "Ungu",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ungu%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah - 01",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%20001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "Noah - 02",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"

        
    },
{
        title: "Noah - 03",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah - 04",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah - 05",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2005.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah - 06",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2006.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 01",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 02",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 03",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 04",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "Naff - 01",
        artist: "Naff",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/naff%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Naff - 02",
        artist: "Naff",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/naff%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Naff - 03",
        artist: "Naff",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/naff%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Geisha - 01",
        artist: "Geisha",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/geisya%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Geisha - 02",
        artist: "Geisha",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/geisya%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Adele - 01",
        artist: "Adele",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/adele%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Adele - 02",
        artist: "Adele",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/adele%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Adele - 03",
        artist: "Adele",
        // Link sudah diperbaiki ke format RAW yang benar   
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/adele%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ed Sheeran - 01",
        artist: "Ed Sheeran",
        // Link sudah diperbaiki ke format RAW yang benar
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ed%20sheeran%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ed Sheeran - 02",
        artist: "Ed Sheeran",
        // Link sudah diperbaiki ke format RAW yang benar
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ed%20sheeran%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ed Sheeran - 03",
        artist: "Ed Sheeran",
        // Link sudah diperbaiki ke format RAW yang benar
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ed%20sheeran%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Dewa 19 - 01",
        artist: "Dewa 19",
        // Link sudah diperbaiki ke format RAW yang benar
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/dewa%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Dewa 19 - 02",
        artist: "Dewa 19",
        // Link sudah diperbaiki ke format RAW yang benar   
            src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/dewa%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Dewa 03",
        artist: "Dewa 19",
        // Link sudah diperbaiki ke format RAW yang benar   
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/dewa%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Tiara Andini - 01",
        artist: "Tiara Andini",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/tiara%20andini%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Tiara Andini -02",
        artist: "Tiara Andini",
        // Link sudah diperbaiki ke format RAW yang benar   
            src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/tiara%20andini%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Radja -01",
        artist: "Radja",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/radja%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Radja -02",
        artist: "Radja",
        // Link sudah diperbaiki ke format RAW yang benar   
            src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/radja%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Radja - 03",
        artist: "Radja",
        // Link sudah diperbaiki ke format RAW yang benar   
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/radja%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Indo 2026 - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/indo%202026.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Indo 2026 - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/indo%202026%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

  
{
        title: "Indo 2026 - 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/indo%202026%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Bon Jovi - 01",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bon%20jovi%2001.mp3", 
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Bon Jovi - 02",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bon%20jovi%2002.mp3", 
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{   
        title: "Bon Jovi - 03",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bon%20jovi%2003.mp3", 
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Bon Jovi - 04",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bon%20jovi%2004.mp3", 
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Jamrud - 01",
        artist: "Jamrud",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/jamrud%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
   },
{
        title: "Jamrud - 02",
        artist: "Jamrud",
        // Link sudah diperbaiki ke format RAW yang benar       
            src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/jamrud%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{

        title: "Last Child - 01",
        artist: "Last Child",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/last%20child%2001mp3.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
   },
{
        title: "Last Child - 02",
        artist: "Last Child",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/last%20child%2002mp3.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"  
    },
{
        title: "Boomerang - 01",
        artist: "Boomerang",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/boomerang%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Boomerang - 02",
        artist: "Boomerang",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/boomerang%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Kangen Band - 01",
        artist: "Kangen Band",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/kangen%20band%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Kangen Band - 02",
        artist: "Kangen Band",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/kangen%20band%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Kangen Band - 03",
        artist: "Kangen Band",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/kangen%20band%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },  
  
];

// 1. SELEKTOR ELEMENT (Wajib paling atas agar terbaca oleh fungsi & listener)
const audio = document.getElementById('main-audio');
const playBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const repeatBtn = document.getElementById('repeat-btn');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const albumArt = document.getElementById('album-art');
const volumeSlider = document.getElementById('volume-slider');
const playlistContainer = document.getElementById('playlist-container');

// Selektor Track/Progress
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');


// 3. STATE / STATUS
let songIndex = 0;
let isPlaying = false;
let isRepeat = false;

// 4. FUNGSI FORMAT & PROGRESS (Fungsi bantu)
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeEl.innerText = formatTime(currentTime);
        durationEl.innerText = formatTime(duration);
    }
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    if (duration) {
        audio.currentTime = (clickX / width) * duration;
    }
}

// 5. FUNGSI LOAD & KONTROL
function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
    
    // Reset background & animasi
    albumArt.style.background = ""; 
    if (song.cover.includes("gradient")) {
        albumArt.style.background = song.cover;
        albumArt.innerText = ""; 
    } else {
        albumArt.style.backgroundImage = `url(${song.cover})`;
        albumArt.innerText = "";
    }
    updatePlaylistActive();
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playBtn.innerText = "PLAY";
        stopAnimation();
    } else {
        audio.play();
        playBtn.innerText = "PAUSE";
        startAnimation();
    }
    isPlaying = !isPlaying;
}

function nextSong() {
    songIndex = (songIndex + 1) % songList.length;
    loadSong(songList[songIndex]);
    if (isPlaying) audio.play();
}

function prevSong() {
    songIndex = (songIndex - 1 + songList.length) % songList.length;
    loadSong(songList[songIndex]);
    if (isPlaying) audio.play();
}

function startAnimation() { albumArt.classList.add('rotating'); }
function stopAnimation() { albumArt.classList.remove('rotating'); }

// 6. RENDER PLAYLIST
function renderPlaylist() {
    playlistContainer.innerHTML = "";
    songList.forEach((song, index) => {
        const div = document.createElement('div');
        div.classList.add('track-item');
        if(index === songIndex) div.classList.add('active');
        div.innerHTML = `<span>${index + 1}</span><span class="track-name">${song.title}</span>`;
        div.onclick = () => {
            songIndex = index;
            loadSong(songList[songIndex]);
            if (!isPlaying) togglePlay(); else audio.play();
        };
        playlistContainer.appendChild(div);
    });
}

function updatePlaylistActive() {
    const items = document.querySelectorAll('.track-item');
    items.forEach((item, index) => item.classList.toggle('active', index === songIndex));
}

// 7. EVENT LISTENERS (Daftarkan semua di sini)
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
volumeSlider.addEventListener('input', (e) => audio.volume = e.target.value);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', () => isRepeat ? (audio.currentTime = 0, audio.play()) : nextSong());
repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle('active-repeat', isRepeat);
    repeatBtn.innerText = isRepeat ? "Repeat:On" : "Repeat:Off";
});

// Inisialisasi awal
loadSong(songList[songIndex]);
renderPlaylist();