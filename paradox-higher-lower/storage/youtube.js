let ytVids = [];

function resetYTVids() {
    ytVids = [
        {
            "title": "MORE WORLD CONQUESTS? - VideoLife Reacts to No Step Back Achievements",
            "id": "9WwUEe61K74",
            "date": "2021-05-28T07:17:38Z",
            "thumbnail": "https://img.youtube.com/vi/9WwUEe61K74/maxresdefault.jpg",
            "views": "183"
        },
        {
            "title": "When Russia has to save the Allies...again | WINNING as AC CANADA",
            "id": "xbkhyCgLyYo",
            "date": "2021-06-06T06:59:09Z",
            "thumbnail": "https://img.youtube.com/vi/xbkhyCgLyYo/maxresdefault.jpg",
            "views": "90"
        },
        {
            "title": "Mr Incredible Becoming Canny | Eastern Front | HOI4 MEME",
            "id": "ZNL-0AojizM",
            "date": "2021-04-28T06:42:53Z",
            "thumbnail": "https://img.youtube.com/vi/ZNL-0AojizM/maxresdefault.jpg",
            "views": "2410"
        },
        {
            "title": "NATO Has Entered The Chat",
            "id": "mvnMhcIN0ps",
            "date": "2021-04-05T05:12:45Z",
            "thumbnail": "https://i.ytimg.com/vi/mvnMhcIN0ps/maxresdefault.jpg",
            "views": "89"
        },
        {
            "title": "Canadian Streamer Gets Mad at the French",
            "id": "NSCQCpZ2qpw",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/NSCQCpZ2qpw/sddefault.jpg",
            "views": "77"
        },
        {
            "title": "GERMAN REACTS TO OVERSIMPLIFIED THE FALKLANDS - MINIWARS #1 | #SeemopsREACTION",
            "id": "RE6HNfcq0us",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/RE6HNfcq0us/sddefault.jpg",
            "views": "2248"
        },
        {
            "title": "LOSING AS AC HUNGARY ft. SeeMops",
            "id": "hizoEavk8wo",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/hizoEavk8wo/sddefault.jpg",
            "views": "132"
        },
        {
            "title": "SO I 1v1'd MY STREAM",
            "id": "wzMf77ROUYc",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/wzMf77ROUYc/sddefault.jpg",
            "views": "117"
        },
        {
            "title": "FUNNIEST RP Game Ever? ROLEPLAY as Sweden!",
            "id": "AfbOel3jpbY",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/AfbOel3jpbY/sddefault.jpg",
            "views": "90"
        },
        {
            "title": "When you accidentally delete your whole fleet to get enough manpower for 1 ship in HOI4 MP😭😱 #shorts",
            "id": "8YLOLVjwXYw",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/8YLOLVjwXYw/sddefault.jpg",
            "views": "18937"
        },
        {
            "title": "Hiter Has A “Stroke” In HOI4 RP",
            "id": "YNp2MT3OI1Q",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/YNp2MT3OI1Q/sddefault.jpg",
            "views": "268"
        },
        {
            "title": "I`m Gay Lisa It`s Over",
            "id": "pwJErUenXaw",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/pwJErUenXaw/sddefault.jpg",
            "views": "242650"
        },
        {
            "title": "HOI4: When you almost close an encirclement in HOI4 Multiplayer",
            "id": "YhvCEzQyeHI",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/YhvCEzQyeHI/sddefault.jpg",
            "views": "510"
        },
        {
            "title": "Can YOU Save Germany In Stalingrad!? - HOI4 Challenge Scenario",
            "id": "HFKkIgF5jg4",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/HFKkIgF5jg4/maxresdefault.jpg", 
            "views": "191212"
        },
        {
            "title": "Sus Intro",
            "id": "yxE32p45J5Y",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/yxE32p45J5Y/maxresdefault.jpg", 
            "views": "13505"
        },
        {
            "title": "[HOI4] When You Play Third Reich for the First Time",
            "id": "0yXqBLvESYk",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/0yXqBLvESYk/maxresdefault.jpg", 
            "views": "2019803"
        },
        {
            "title": "(HOI4) Factions in a Nutshell",
            "id": "Oqk8ShwvmTI",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/Oqk8ShwvmTI/maxresdefault.jpg", 
            "views": "9214875"
        },
        {
            "title": "This 1938 USA Disaster Save Was In A Terrible Situation",
            "id": "SPERrmY3X0o",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/SPERrmY3X0o/maxresdefault.jpg", 
            "views": "200596"
        },
        {
            "title": "Streamer Roleplays A Woman",
            "id": "GaPnukRrhiQ",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/GaPnukRrhiQ/maxresdefault.jpg", 
            "views": "19019"
        },
        {
            "title": "We Are Pregnant Boys!",
            "id": "NZJ3jpc5iKs",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/NZJ3jpc5iKs/maxresdefault.jpg", 
            "views": "133167"
        },
        {
            "title": "HOI4 The International Community Protests....",
            "id": "CYiwrXfIpmU",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/CYiwrXfIpmU/maxresdefault.jpg", 
            "views": "428"
        },
        {
            "title": "When Tommy Plays Japan In HOI4 Multiplayer...",
            "id": "uteIQLG8LMA",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/uteIQLG8LMA/maxresdefault.jpg", 
            "views": "282075"
        },
        {
            "title": "Not Like 9/11",
            "id": "P08t5f9FfbU",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/P08t5f9FfbU/maxresdefault.jpg", 
            "views": "930127"
        },
        {
            "title": "Spooky Hoi4 Mods",
            "id": "vVqvSdBWT8s",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/vVqvSdBWT8s/maxresdefault.jpg", 
            "views": "15752"
        },
        {
            "title": "When You Play Israel In Hearts Of Iron 4...",
            "id": "IA6HuGX64Jg",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/IA6HuGX64Jg/maxresdefault.jpg", 
            "views": "189741"
        },
        {
            "title": "THEY BANNED THIS COUNTRY FROM HOI4 MULTIPLAYER BECAUSE OF ME! THIS COUNTRY IS TOO BROKEN! - HOI4 MTG",
            "id": "frcNPEQQ8CM",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/frcNPEQQ8CM/maxresdefault.jpg", 
            "views": "843580"
        },
        {
            "title": "I'm Right Wing",
            "id": "cPJ8UQUPwh8",
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/cPJ8UQUPwh8/maxresdefault.jpg", 
            "views": "244419"
        },
        {
            "title": "Teaching a Girl Hearts of Iron 4",
            "id": "kwdsykngYbE", 
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/kwdsykngYbE/maxresdefault.jpg", 
            "views": "45770"
        },
        {
            "title": "[HOI4] POV: YOURE GERMANY",
            "id": "HnWZnUWgwww", 
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/HnWZnUWgwww/maxresdefault.jpg", 
            "views": "6196255"
        },
        {
            "title": "Ultra Germany vs Everyone - HOI4 Timelapse",
            "id": "tl4FAb8A0FY", 
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/tl4FAb8A0FY/maxresdefault.jpg", 
            "views": "1577026"
        },
        {
            "title": "Hearts of Iron IV: No Step Back | Pre-Order Trailer",
            "id": "p26A0H3IoO4", 
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "https://i.ytimg.com/vi/p26A0H3IoO4/maxresdefault.jpg", 
            "views": "1120460"
        },
        {
            "title": "30 Years since collapse of the Soviet Union",
            "id": "BnsEatdxMDc", 
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "http://i3.ytimg.com/vi/BnsEatdxMDc/hqdefault.jpg", 
            "views": "51527"
        },
        {
            "title": "I Added Dating Mechanics to Hoi4...",
            "id": "fTvlbjlJKaw", 
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "http://i3.ytimg.com/vi/fTvlbjlJKaw/hqdefault.jpg", 
            "views": "65307"
        },
        {
            "title": "Japan goes Communist and conquers Everyone",
            "id": "4lHooXRkdv0", 
            "date": "2021-04-22T07:01:43Z",
            "thumbnail": "http://i3.ytimg.com/vi/4lHooXRkdv0/hqdefault.jpg", 
            "views": "105292"
        },
    ]
}