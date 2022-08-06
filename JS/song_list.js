//song list
let All_song = [
    {
      name: "Maniac",
      path: "music/maniac.mp3",
      img: "Pictures/Maniac.jpg",
      singer: "Stray Kids"
    },
    {
      name: "My Pace",
      path: "music/MyPace.mp3",
      img: "Pictures/MyPace.jpg",
      singer: "Stray Kids"
    },
    {
      name: "Hellevator",
      path: "music/hellevator.mp3",
      img: "Pictures/Hellevator.jpg",
      singer: "Stray Kids"
    },
    {
      name: "SOLO",
      path: "music/SOLO.mp3",
      img: "Pictures/SOLO.png",
      singer: "Jennie"
    },
    {
      name: "MIROH",
      path: "music/MIROH.mp3",
      img: "Pictures/MIROH.jpg",
      singer: "Stray Kids"
    },
    {
     name: "Kill This Love",
     path: "music/KTL.mp3",
     img: "Pictures/KTL.jpg",
     singer: "BLΛƆKPIИK"
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