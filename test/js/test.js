// 네비게이션
// const showMenu = (headerToggle,navbarID) =>{
//   const toggleBtn = document.getElementById(headerToggle);

//   if (headerToggle && navbarID) {
//     toggleBtn.addEventListener('click',() => {
//       nav.classList.toggle('show-menu')
//       toggleBtn.classList.toggle('x-times')
//     })
//   }
// }
// showMenu('header-toggle', 'navbar')

// const linkcolor = document.querySelectorAll('.nav_link');

// function colorLink() {
//   linkcolor.forEach((1, => 1.classList.remove('active'))
//   this.classList.add('active')
// }
//


    function displayVideos(videoIds) {
        const container = document.getElementById('videoContainer');
    
        videoIds.forEach(videoId => {
            searchYoutube(videoId, container);
        });
    }
    
    function searchYoutube(searchData, container){
        const apiUrl = `http://oreumi.appspot.com/video/getVideoInfo?video_id=${searchData}`;
    
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === XMLHttpRequest.DONE){
                if (xhr.status === 200){ 
                    let data = JSON.parse(xhr.responseText)
                    if (data.Response === 'False'){
                        alert('정보를 가져오는데 실패했습니다.')
                    } else{
                        // let videoDiv = '';
                        let videoDiv = document.createElement('div');
                        videoDiv.innerHTML = `
                            <article class="Thumbnail_art">
                                <a href="${data.video_link}"><img class="Thumbnail_img" src='${data.image_link}' alt='Video Thumbnail'></a>
                                <h3 class="Thumbnail_h3">${data.video_title}</h3>
                                <p>채널명: ${data.video_channel}</p>
                                <p>등록일: ${data.upload_date}, 조회수: ${data.views}회</p>
                            </article>
                        `;
                        container.appendChild(videoDiv);
                        // document.getElementById('InfoTitle').innerHTML = videoDiv
                    }
                } else {
                    alert('정보를 가져오는데 실패했습니다.');
                }
            }
        };
        xhr.open('GET', apiUrl, true); 
        xhr.send();
    }
        

    let videoIds = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]; // 여기에 비디오 id 작성해주시면 됩니다!
    displayVideos(videoIds);