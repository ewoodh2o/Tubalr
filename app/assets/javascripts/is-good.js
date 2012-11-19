var validVideo = {
  isNotBlocked: function (video) {
    return !video.hasOwnProperty("app$control");
  },

  isMusic: function (video) {
    return video.media$group.media$category[0].$t === "Music";
  },

  isUnique: function (video) {
    var unique = true;
    
    for (var i = 0; i < videos.length; i++) {
      if (videos[i].VideoID === video.id.$t.split(":")[3]) {
        unique = false;
        break;
      }

      var tmpTitle1 = videos[i].VideoTitle.toLowerCase().replace(/ *\([^)]*\) */g, '').replace(/[^a-zA-Z ]/g, "");
      var tmpTitle2 = video.title.$t.toLowerCase().replace(/ *\([^)]*\) */g, '').replace(/[^a-zA-Z ]/g, "");
      
      if (tmpTitle1 === tmpTitle2) {
        unique = false;
        break;
      }
    }
     
    return unique;
  },

  isNotCoverOrRemix: function (video) {
    var videoTitle = video.title.$t.toLowerCase();

    return (videoTitle.search("cover") == -1 && videoTitle.search("remix") && -1 || videoTitle.search("alternate") && -1);
  },

  isNotUserBanned: function (video) {
    return bannedVideos.indexOf(video.id.$t.split(":")[3]) == -1
  }
};