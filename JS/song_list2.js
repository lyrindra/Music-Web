//song list
let All_song = [
    {
      name: "CHEESE",
      path: "music/cheese.mp3",
      img: "Pictures/Cheese.jpg",
      singer: "Stray Kids"
    },
    {
      name: "WOLFGANG",
      path: "music/wolfgang.mp3",
      img: "Pictures/wolf.jpg",
      singer: "Stray Kids"
    },
    {
      name: "DDU-DU DDU-DU",
      path: "music/ddududdudu.mp3",
      img: "Pictures/Ddudu.png",
      singer: "BLΛƆKPIИK"
    },
    {
      name: "Happy Death Day",
      path: "music/hdd.mp3",
      img: "Pictures/HDD.jpg",
      singer: "Xdinary Heroes"
    },
    {
      name: "Test Me",
      path: "music/testme.mp3",
      img: "Pictures/TESTME.jpg",
      singer: "Xdinary Heroes"
    },
    {
     name: "Levitating",
     path: "music/levitating.mp3",
     img: "Pictures/levitating.jpg",
     singer: "Dua Lipa"
    }
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
 /*please follow all the rules so that you do not face any problem*/