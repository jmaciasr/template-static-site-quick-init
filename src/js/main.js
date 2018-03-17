/**
 * main javascript file
 *
 */
$(document).ready(function () {
  /*
  *
  * General javascript
  *
  */
  // next matches
  fetch('https://api.stattleship.com/basketball/nba/games?on=today', {
    headers: {
      Accept: 'application/vnd.stattleship.com; version=1',
      Authorization: 'Token token=ab97a593039f0e54e901e60b493307ad',
      'Content-Type': 'application/json',
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      for (let i = 0; i < 6; i += 1) {
        document.getElementById('sidebarParent').innerHTML += '<div class="sidebar__item sidebar-next-maches"><div class="sidebar__item-content flex-row flex-row--between"><div style="display:  inherit;"><p class="next-maches__team">' + data.games[i].name + '</p><p class="next-maches__score">' + data.games[i].score + '</p></div></div></div>';
      }
    });

  // top news
  fetch('https://newsapi.org/v2/top-headlines?sources=espn&apiKey=c3d8ad8085124333ba61a0a80593b94d', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      for (let i = 0; i < 3; i += 1) {
        let description = data.articles[i].description;
        description = description.substring(0, 50);
        document.getElementById('newsParent').innerHTML += '<a target="_blank" href="' + data.articles[i].url + '"><div class="sidebar__item"><div class="sidebar__item-content flex-row flex-row--between"><div class="popular-news__img"><img src="' + data.articles[i].urlToImage + '" alt="' + data.articles[i].title + '"></div><div class="popular-news__texts"><h5 class="popular-news__texts-title">' + data.articles[i].title + '</h5><p class="popular-news__texts-descr">' + description + ' ...</p></div></div></div></a>';
      }
    });

  // add slider sing-up
  $('#mainSlider').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /*
  *
  *javascript only for main page
  *
  */
  if ($('body').is('.main-page')) {
    // video function api from youtube
    $(function () {
      const API_KEY = 'AIzaSyC9ExM9-0pl15YPiw0BG3gPF5DJdia7EeU';
      const PLAYLIST_ID = 'PLn3nHXu50t5wMebpNXA7aFpKMzu8grU0a';
      const GOOGLE_API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C+snippet%2C+contentDetails&playlistId='+PLAYLIST_ID+'&key='+API_KEY+'&callback=showVideos';
      $.ajax({
        url: GOOGLE_API_URL,
        dataType: 'jsonp',
        crossDomain: true,
      });
      window.showVideos = function (data) {
        if (data.items && data.items.length > 0) {
          for (let i = 0; i < 2; i += 1) {
            document.getElementById('videos').innerHTML += '<iframe class ="news-videos__last" src="http://www.youtube.com/embed/'+data.items[i].contentDetails.videoId+'"></iframe>';
          }
        }
      };
    });

    // add ajax slider
    const owlEspn = $('#owl-carousel-espn').owlCarousel({
      loop: false,
      autoplay: false,
      mouseDrag: false,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
    $.ajax({
      type: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=c3d8ad8085124333ba61a0a80593b94d',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      contentType: 'application/json; charset=utf-8',
      async: true,
      dataType: 'json',
      success: function (data) {
        $.each(data, function (k, v) {
          for (let i = 2; i < v.length; i += 1) {
            owlEspn.trigger('add.owl.carousel', [$('<a target="_blank" href="' + v[i].url + '" class="news-article"><img class="news-article__img" src="' + v[i].urlToImage + '" alt="' + v[i].title + '"><img class="news-article__icon-filter" src="img/logo-filter-espn.jpg" alt=""><p class="group news-article__date">' + v[i].publishedAt + '</p><p class="group news-article__text">' + v[i].title + '</p></a>')]);
          }
        });
        owlEspn.trigger('refresh.owl.carousel');
      },
    });

    // add ajax slider
    const owlBbc = $('#owl-carousel-bbc').owlCarousel({
      loop: false,
      autoplay: false,
      mouseDrag: false,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
    $.ajax({
      type: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=c3d8ad8085124333ba61a0a80593b94d',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      contentType: 'application/json; charset=utf-8',
      async: true,
      dataType: 'json',
      success: function (data) {
        $.each(data, function (k, v) {
          for (let i = 2; i < v.length; i += 1) {
            owlBbc.trigger('add.owl.carousel', [$('<a target="_blank" href="' + v[i].url + '" class="news-article"><img class="news-article__img" src="' + v[i].urlToImage + '" alt="' + v[i].title + '"><img class="news-article__icon-filter" src="img/logo-filter-bbc.jpg" alt=""><p class="group news-article__date">' + v[i].publishedAt + '</p><p class="group news-article__text">' + v[i].title + '</p></a>')]);
          }
        });
        owlBbc.trigger('refresh.owl.carousel');
      },
    });

    // add ajax slider
    const owlFox = $('#owl-carousel-fox').owlCarousel({
      loop: false,
      autoplay: false,
      mouseDrag: false,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
    $.ajax({
      type: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=c3d8ad8085124333ba61a0a80593b94d',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      contentType: 'application/json; charset=utf-8',
      async: true,
      dataType: 'json',
      success: function (data) {
        $.each(data, function (k, v) {
          for (let i = 2; i < v.length; i += 1) {
            if (v[i].description == null) {
              console.log('is not a str');
            } else {
              owlFox.trigger('add.owl.carousel', [$('<a target="_blank" href="' + v[i].url + '" class="news-article"><img class="news-article__img" src="' + v[i].urlToImage + '" alt="' + v[i].title + '"><img class="news-article__icon-filter" src="img/logo-filter-fox.jpg" alt=""><p class="group news-article__date">' + v[i].publishedAt + '</p><p class="group news-article__text">' + v[i].title + '</p></a>')]);
            }
          }
        });
        owlFox.trigger('refresh.owl.carousel');
      },
    });

    // add ajax slider bible
    const owlBible = $('#owl-carousel-bible').owlCarousel({
      loop: false,
      autoplay: false,
      mouseDrag: false,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
    $.ajax({
      type: 'GET',
      url: 'https://newsapi.org/v2/top-headlines?sources=the-sport-bible&apiKey=c3d8ad8085124333ba61a0a80593b94d',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      contentType: 'application/json; charset=utf-8',
      async: true,
      dataType: 'json',
      success: function (data) {
        $.each(data, function (k, v) {
          for (let i = 2; i < v.length; i += 1) {
            owlBible.trigger('add.owl.carousel', [$('<a target="_blank" href="' + v[i].url + '" class="news-article"><img class="news-article__img" src="' + v[i].urlToImage + '" alt="' + v[i].title + '"><img class="news-article__icon-filter" src="img/logo-filter-bible.jpg" alt=""><p class="group news-article__date">' + v[i].publishedAt + '</p><p class="group news-article__text">' + v[i].title + '</p></a>')]);
          }
        });
        owlBible.trigger('refresh.owl.carousel');
      },
    });
  }

  /*
  *
  * javascript only for main page
  *
  */
  if ($('body').is('.next-matches')) {
    // next matches nba
    fetch('https://api.stattleship.com/basketball/nba/games?on=today', {
      headers: {
        Accept: 'application/vnd.stattleship.com; version=1',
        Authorization: 'Token token=ab97a593039f0e54e901e60b493307ad',
        'Content-Type': 'application/json',
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        for (let i = 0; i < data.games.length; i += 1) {
          document.getElementById('nextMatchesNba').innerHTML += '<tr><td>'+data.games[i].label+'</td><td>'+data.games[i].on+'</td><td>'+data.games[i].score+'</td><td>'+data.games[i].broadcast+'</td></tr>';
        }
      });
    // next matches nfl
    fetch('https://api.stattleship.com/football/nfl/games?status=upcoming', {
      headers: {
        Accept: 'application/vnd.stattleship.com; version=1',
        Authorization: 'Token token=ab97a593039f0e54e901e60b493307ad',
        'Content-Type': 'application/json',
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        if (data <= 1) {
          for (let i = 0; i < data.games.length; i += 1) {
            document.getElementById('nextMatchesNfl').innerHTML += '<tr><td>'+data.games[i].label+'</td><td>'+data.games[i].on+'</td><td>'+data.games[i].score+'</td><td>'+data.games[i].broadcast+'</td></tr>';
          }
        }else{
            document.getElementById('nextMatchesNfl').innerHTML += '<tr><td>Not data available</td><td>Not data available</td><td>Not data available</td><td>Not data available</td></tr>';
        }
      });
    // next matches mlb
    fetch('https://api.stattleship.com/baseball/mlb/games?status=upcoming', {
      headers: {
        Accept: 'application/vnd.stattleship.com; version=1',
        Authorization: 'Token token=ab97a593039f0e54e901e60b493307ad',
        'Content-Type': 'application/json',
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        for (let i = 0; i < data.games.length; i += 1) {
          document.getElementById('nextMatchesMlb').innerHTML += '<tr><td>'+data.games[i].label+'</td><td>'+data.games[i].on+'</td><td>'+data.games[i].score+'</td><td>'+data.games[i].broadcast+'</td></tr>';
        }
      });
    // next matches nhl
    fetch('https://api.stattleship.com/hockey/nhl/games?on=today', {
      headers: {
        Accept: 'application/vnd.stattleship.com; version=1',
        Authorization: 'Token token=ab97a593039f0e54e901e60b493307ad',
        'Content-Type': 'application/json',
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        for (let i = 0; i < data.games.length; i += 1) {
          document.getElementById('nextMatchesNhl').innerHTML += '<tr><td>'+data.games[i].label+'</td><td>'+data.games[i].on+'</td><td>'+data.games[i].score+'</td><td>'+data.games[i].broadcast+'</td></tr>';
        }
      });
  }

  // add tabs function
  (function ($) {
    $('.filter .filter__items').addClass('active').find('> p:eq(0)').addClass('current');
    $('.filter .filter__items p a').click(function (g) {
      const tab = $(this).closest('.filter');
      const index = $(this).closest('p').index();
      tab.find('.filter__items > p').removeClass('current');
      $(this).closest('p').addClass('current');
      tab.find('.filter__results').find('.tabs_item').not('.tabs_item:eq(' + index + ')').slideUp();
      tab.find('.filter__results').find('.tabs_item:eq(' + index + ')').slideDown();
      g.preventDefault();
    });
  })(jQuery);
});
