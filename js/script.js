(function () {
  'use strict';

  (function () {
    var $blocks = $('.events__item');
    $('.main__event-link').click(function (e) {
      e.preventDefault();
      var type = $(this).data('type');
      console.log(type);

      if (type && $blocks.length) {
        $blocks.hide().filter(function () {
          return $(this).hasClass('events__item--' + type);
        }).show();
      }
    });
  })(jQuery); // Подписка


  (function ($) {
    var metrikaID = 37543275;

    var sendGoal = function (id) {
      if (id && typeof ym === "function") {
        ym(metrikaID, 'reachGoal', id);
      } else {
        console.log('1111');
      }
    };

    $('.form-rest').submit(function (e) {
      e.preventDefault();
      var $form = $(this);
      var $check = $form.find('[type="checkbox"]').prop('checked');

      if ($check) {
        var $btn = $form.find('[type="submit"]').prop('disabled', true).animate({
          opacity: 0.5
        }, 200);
        $form.css('opacity', '0.8');
        var query = $.post($form.attr('action'), $form.serialize());
        query.done(function (data) {
          console.log('Удачная отправка формы');
          sendGoal($form.find('[name="goal"]').val());

          if ($form.hasClass('grant__form')) {
            document.querySelector('.grant__form').style = "display:none";
            document.querySelector('.grant__title').innerHTML = "Ваша заявка принята!";
            document.querySelector('.grant__sucsess').classList.add('grant__sucsess--active');
          }

          if ($form.hasClass('request__form')) {
            document.querySelector('.request__form').style = "display:none";
            document.querySelector('.request__title').innerHTML = "Ваша заявка принята!";
            document.querySelector('.request__sucsess').classList.add('request__sucsess--active');
            document.querySelector('.request__inner').classList.add('request__inner--active');
          }

          if ($form.hasClass('event__form')) {
            document.querySelector('.event__form').style = "display:none";
            document.querySelector('.event__title').classList.add('hidden');
            document.querySelector('.event__title--sucsess').classList.add('active');
            document.querySelector('.event__sucsess').classList.add('event__sucsess--active');
            document.querySelector('.event__inner').classList.add('event__inner--active');
          }

          if ($form.hasClass('prevent__pup__form')) {
            document.querySelector('.prevent__pup__form').style = "display:none";
            document.querySelector('.prevent__pup__sucsess').classList.add('prevent__pup__sucsess--active');
            document.querySelector('.prevent__pup__inner').classList.add('prevent__pup__inner--active');
          }

          if ($form.hasClass('consult__pup__form')) {
            document.querySelector('.consult__pup__form').style = "display:none";
            document.querySelector('.consult__pup__title--main').style = "display:none";
            document.querySelector('.consult__pup__sucsess').classList.add('consult__pup__sucsess--active');
            document.querySelector('.consult__pup__inner').classList.add('consult__pup__inner--active');
          }

          if ($form.hasClass('aplicForm__form')) {
            document.querySelector('.aplicForm__form').style = "display:none";
            document.querySelector('.aplicForm__title').innerHTML = "Ваша заявка принята!";
            document.querySelector('.aplicForm__sucsess').classList.add('aplicForm__sucsess--active');
          }

          $form.css('opacity', '1');
        });
        query.fail(function (data) {
          alert(data.responseJSON.message);
          $form.css('opacity', '1');
        });
        query.always(function (data) {
          $btn.prop('disabled', false).animate({
            opacity: 1
          }, 200);
          $form.css('opacity', '1');
        });
      }
    }); // if (document.querySelector('.grant__form')) {
    //     document.querySelector('.grant__form').addEventListener('submit', function (e) {
    //         e.preventDefault();
    //         document.querySelector('.grant__form').style = "display:none";
    //         document.querySelector('.grant__title').innerHTML = "Ваша заявка принята!";
    //         document.querySelector('.grant__sucsess').classList.add('grant__sucsess--active');
    //         console.log(e.target);
    //     })
    // }
    // if (document.querySelector('.request__form')) {
    //     document.querySelector('.request__form').addEventListener('submit', function (e) {
    //         e.preventDefault();
    //         document.querySelector('.request__form').style = "display:none";
    //         document.querySelector('.request__title').innerHTML = "Ваша заявка принята!";
    //         document.querySelector('.request__sucsess').classList.add('request__sucsess--active');
    //         document.querySelector('.request__inner').classList.add('request__inner--active');
    //         console.log(e.target);
    //     })
    // }
    // if (document.querySelector('.event__form')) {
    //     document.querySelector('.event__form').addEventListener('submit', function (e) {
    //         e.preventDefault();
    //         document.querySelector('.event__form').style = "display:none";
    //         document.querySelector('.event__title').classList.add('hidden');
    //         document.querySelector('.event__title--sucsess').classList.add('active');
    //         document.querySelector('.event__sucsess').classList.add('event__sucsess--active');
    //         document.querySelector('.event__inner').classList.add('event__inner--active');
    //         console.log(e.target);
    //     })
    // }
    // if (document.querySelector('.prevent__pup__form')) {
    //     document.querySelector('.prevent__pup__form').addEventListener('submit', function (e) {
    //         e.preventDefault();
    //         document.querySelector('.prevent__pup__form').style = "display:none";
    //         document.querySelector('.prevent__pup__sucsess').classList.add('prevent__pup__sucsess--active');
    //         document.querySelector('.prevent__pup__inner').classList.add('prevent__pup__inner--active');
    //         console.log(e.target);
    //     })
    // }
    // if (document.querySelector('.consult__pup__form')) {
    //     document.querySelector('.consult__pup__form').addEventListener('submit', function (e) {
    //         e.preventDefault();
    //         document.querySelector('.consult__pup__form').style = "display:none";
    //         document.querySelector('.consult__pup__title--main').style = "display:none";
    //         document.querySelector('.consult__pup__sucsess').classList.add('consult__pup__sucsess--active');
    //         document.querySelector('.consult__pup__inner').classList.add('consult__pup__inner--active');
    //         console.log(e.target);
    //     })
    // }
    // if (document.querySelector('.aplicForm__form')) {
    //     document.querySelector('.aplicForm__form').addEventListener('submit', function (e) {
    //         e.preventDefault();
    //         document.querySelector('.aplicForm__form').style = "display:none";
    //         document.querySelector('.aplicForm__title').innerHTML = "Ваша заявка принята!";
    //         document.querySelector('.aplicForm__sucsess').classList.add('aplicForm__sucsess--active');
    //         console.log(e.target);
    //     })
    // }
  })(jQuery);

  $(document).ready(function () {
    $('.teachers__item:nth-child(n+10)').slideToggle();
    $('.teachers__button--toggle').on('click', function (e) {
      e.preventDefault();
      $('.teachers__item:nth-child(n+10)').slideToggle();
    });
  });
  let programmNavLink = document.querySelectorAll('.programm__nav-li');
  [].forEach.call(programmNavLink, function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault(); // console.log(e.target.tagName);

      if (e.target.tagName === 'A') document.querySelector('.programm__nav-link--active').classList.remove('programm__nav-link--active');
      document.querySelector('.programm__nav-li--active').classList.remove('programm__nav-li--active');
      document.querySelector('.programm__description-inner--active').classList.remove('programm__description-inner--active');
      item.classList.add('programm__nav-li--active');
      let id = e.target.href.split('#')[1];
      document.querySelector('#' + id).classList.add('programm__description-inner--active');
      e.target.classList.add('programm__nav-link--active');
    });
  });
  $(document).ready(function () {
    // document.cookie = "";
    console.log("cookie :", document.cookie, "wlocation :", window.location.host + document.cookie);

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }

      return "";
    }

    console.log(window.location.hostname, window.location.href);

    if (getCookie("value").length < 1) {
      console.log("КУКИ ЕЩЕ НЕТ");
      $('.question').addClass('question--active');

      if ($('.question')) {
        $('.question__button--yes').on('click', function (e) {
          e.preventDefault();
          $('.question').removeClass('question--active');
          setCookie("value", "/", 1);
          let path = getCookie("value");

          if (path == "/") {
            if ($('body').hasClass('region-site')) {
              window.location.replace(window.location.protocol + "//" + window.location.hostname + path);
            }
          }
        });
        $('.question__button--no').on('click', function (e) {
          e.preventDefault();
          $('.question').removeClass('question--active');

          if (!document.querySelector('.city__list--active')) {
            document.querySelectorAll('.city__list').forEach(list => {
              list.classList.add('city__list--active');
            });
            document.querySelectorAll('.city__selected').forEach(item => {
              item.classList.add('city__selected--active');
            });
          }
        });
      }
    } else {
      $('.question').removeClass('question--active');
      let path = getCookie("value");
      console.log("path === " + path);

      if ($('body').hasClass('main-site')) {
        console.log("Это главная");

        if (path !== "/") {
          if (window.location.href.search(path) === -1) {
            window.location.replace(window.location.protocol + "//" + window.location.hostname + path);
            console.log("Это главная а кука региона");
          }
        }
      } else {
        console.log("Это не главная");

        if (path == "/") {
          console.log("Это не главная а кука главной");
          window.location.replace(window.location.protocol + "//" + window.location.hostname + path);
        }
      }
    }

    $('.city__list-item').on('click', function (e) {
      console.log($(this).attr('href'));
      let href = $(this).attr('href');
      setCookie("value", href, 1);
      let path = getCookie("value");
      window.location.replace(window.location.protocol + "//" + window.location.hostname + path);
    });
    let currentSlide;
    let slidesCount;
    let sliderCounter = document.querySelectorAll('.numSlides--first');

    const updateSliderCounter = function (slick, currentIndex, counter) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(counter).text(function (n) {
        return currentSlide + '/' + slidesCount;
      });
    };

    var $sliderFirst = $('.slider_first');

    if ($sliderFirst.length) {
      $sliderFirst.on('init', function (event, slick, currentSlide) {
        let counter = sliderCounter;
        updateSliderCounter(slick, currentSlide, counter);
      });
      $sliderFirst.on('afterChange', function (event, slick, currentSlide) {
        let counter = sliderCounter;
        updateSliderCounter(slick, currentSlide, counter);
      });
      $('.slider_first').slick({
        infinite: true,
        dots: true,
        customPaging: function (slider, i) {
          console.log(slider, i);
          return '<span class="dot"></span>';
        },
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-frst'),
        nextArrow: $('.next-frst'),
        autoplay: true,
        autoplaySpeed: 3000
      });
    }

    let countFirst = $('.life .slick-dots > li').length;
    $('.life .slick-dots > li').css({
      width: 'calc(1 / ' + countFirst + ' * 100% - (1 - 1 / ' + countFirst + ') * 4.4px)'
    });
    var $sliderSecond = $('.slider_second');

    if ($sliderSecond.length) {
      var sliderCounterSecond = document.querySelector('.numSlides--second');
      $sliderSecond.on('init', function (event, slick, currentSlide) {
        let counter = sliderCounterSecond;
        updateSliderCounter(slick, currentSlide, counter);
      });
      $sliderSecond.on('afterChange', function (event, slick, currentSlide) {
        let counter = sliderCounterSecond;
        updateSliderCounter(slick, currentSlide, counter);
      });
      $('.slider_second').slick({
        infinite: false,
        dots: false,
        customPaging: function (slider, i) {
          console.log(slider, i);
          return '<span class="dot"></span>';
        },
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev-sec'),
        nextArrow: $('.next-sec'),
        // autoplay: true,
        autoplaySpeed: 9000,
        responsive: [{
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }]
      }).on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
      });
    }

    var $sliderPrevent = $('.prevent__slider-inner');

    if ($sliderPrevent.length) {
      var sliderPreventCounter = document.querySelector('.numSlides--prevent');
      $sliderPrevent.on('init', function (event, slick, currentSlide) {
        let counter = sliderPreventCounter;
        updateSliderCounter(slick, currentSlide, counter);
      });
      $sliderPrevent.on('afterChange', function (event, slick, currentSlide) {
        let counter = sliderPreventCounter;
        updateSliderCounter(slick, currentSlide, counter);
      });
      $('.prevent__slider-inner').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-event'),
        nextArrow: $('.next-event'),
        // autoplay: true,
        autoplaySpeed: 3000
      });
    }

    $('.slider_third').slick({
      infinite: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false // prevArrow: $('.prev-frst'),
      // nextArrow: $('.next-frst'),
      // autoplay: true,
      // autoplaySpeed: 3000,

    });
    $('.events__button').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, '300');
    });
  }); // window.addEventListener('scroll', myFunction());
  // function myFunction() {
  //   var elmnt = document.getElementByTagName('html');
  //   var y = elmnt.scrollTop;
  //   document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
  // }

  let header = document.querySelector('.main__header');
  let headerMail = document.querySelector('.main__header-mail');
  let headerPhone = document.querySelector('.main__header-phone');
  let headerUniver = document.querySelector('.main__header-univer');
  let citySelect = document.querySelector('.main__header-city--top');
  let citySelected = document.querySelectorAll('.city__selected');
  let citySelectMob = document.querySelector('.main__header-city--bottom');
  let logo = document.querySelector('.logo__text');
  let nav = document.querySelector('.nav');
  let navLinks = document.querySelector('.nav__links-inner');
  let navButton = document.querySelector('.nav__button');
  let cityList = document.querySelectorAll('.city__list');
  let cityItem = document.querySelectorAll('.city__list-item');
  let mFooterBut = document.querySelector('.mfooter__button');
  let toggle = document.querySelector('.toggle');
  toggle && toggle.addEventListener("click", function () {
    if (!document.querySelector('.main__header--active')) {
      header.classList.add('main__header--active');
      nav.classList.add('nav--active');
      window.scrollBy(0, 1);
    } else {
      header.classList.remove('main__header--active');
      nav.classList.remove('nav--active');
      window.scrollBy(0, 1);
      window.scrollBy(0, -2);
    }
  });
  citySelected && citySelected.forEach(div => {
    div.addEventListener("click", function () {
      if (!document.querySelector('.city__list--active')) {
        cityList.forEach(list => {
          list.classList.add('city__list--active');
        });
        citySelected.forEach(item => {
          item.classList.add('city__selected--active');
        });

        if (window.innerWidth > 959) {
          if ($('.toggle--scroll').ready().length > 0) {
            $('.city__selected.city__selected--active').css({
              'background': '#fff'
            });
            $('.city__list--active').css({
              'background': '#fff'
            });
            $('.city__list--active .city__list-item').css({
              'color': '#000'
            });
          } else {
            $('.city__selected.city__selected--active').css({
              'background': '#393939'
            });
            $('.city__list--active').css({
              'background': '#393939'
            });
            $('.city__list--active .city__list-item').css({
              'color': '#fff'
            });
          }
        }
      } else {
        cityList.forEach(list => {
          list.classList.remove('city__list--active');
        });
        citySelected.forEach(item => {
          item.classList.remove('city__selected--active');
        });

        if (window.innerWidth > 959) {
          $('.city__selected').css({
            'background': 'unset'
          });
        }
      }
    });
  });
  cityItem && cityItem.forEach(div => {
    div.addEventListener("click", function (e) {
      // console.log(e.target.innerHTML);
      if (document.querySelector('.city__list-item--active')) {
        document.querySelectorAll('.city__list-item--active').forEach(item => {
          item.classList.remove('city__list-item--active');
        }); // } else {

        e.target.classList.add('city__list-item--active');
        citySelected.forEach(list => {
          list.innerHTML = e.target.innerHTML;
        });
        cityList.forEach(list => {
          list.classList.remove('city__list--active');
        });
        citySelected.forEach(item => {
          item.classList.remove('city__selected--active');
        });
      }
    });
  });
  mFooterBut && mFooterBut.addEventListener("click", function (e) {
    if (!document.querySelector('.mfooter__button--active')) {
      e.target.classList.add('mfooter__button--active');
      document.querySelector('.mfooter__messengers').classList.add('mfooter__messengers--active');
    } else {
      e.target.classList.remove('mfooter__button--active');
      document.querySelector('.mfooter__messengers').classList.remove('mfooter__messengers--active');
    }
  });
  document.querySelector('.city__close').addEventListener('click', function () {
    if (document.querySelector('.city__list--active')) {
      cityList.forEach(list => {
        list.classList.remove('city__list--active');
      });
    }
  });
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > 0) {
      header.style.cssText = "background-color: #fff; color: #000;";
      toggle.classList.add('toggle--scroll');
      headerMail.classList.add('main__header-mail--scroll');
      headerPhone.classList.add('main__header-phone--scroll');
      headerUniver.classList.add('main__header-univer--scroll');
      citySelect && citySelect.classList.add('main__header-city--top--scroll');
      citySelectMob && citySelectMob.classList.add('main__header-city--bottom--scroll');
      logo.classList.add('logo__text--scroll');
      navLinks.classList.add('nav__links-inner--scroll');
      navButton.classList.add('nav__button--scroll');

      if (window.innerWidth > 959) {
        $('.city__selected.city__selected--active').css({
          'background': '#fff'
        });
        $('.city__list--active').css({
          'background': '#fff'
        });
        $('.city__list--active .city__list-item').css({
          'color': '#000'
        });
      }
    } else {
      if (!document.querySelector('.main__header--active') && !document.querySelector('.main__header--active')) {
        header.style.cssText = "background-color: unset;";
        toggle.classList.remove('toggle--scroll');
        headerMail.classList.remove('main__header-mail--scroll');
        headerPhone.classList.remove('main__header-phone--scroll');
        headerUniver.classList.remove('main__header-univer--scroll');
        citySelect && citySelect.classList.remove('main__header-city--top--scroll');
        citySelectMob && citySelectMob.classList.remove('main__header-city--bottom--scroll');
        logo.classList.remove('logo__text--scroll');
        navLinks.classList.remove('nav__links-inner--scroll');
        navButton.classList.remove('nav__button--scroll');

        if (window.innerWidth > 959) {
          $('.city__selected.city__selected--active').css({
            'background': '#393939'
          });
          $('.city__list--active').css({
            'background': '#393939'
          });
          $('.city__list--active .city__list-item').css({
            'color': '#fff'
          });
        }
      }
    } // if ($('.main__header-city--top--scroll')) {
    //     $('.city__selected--active').css({
    //         'background':'#fff'
    //     });
    //     $('.city__list--activee').css({
    //         'background':'#fff'
    //     });
    // };


    if (st > lastScrollTop) {
      header.classList.add('main__header--scroll');
    } else {
      header.classList.remove('main__header--scroll');
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
  let aboutPopup = document.querySelector('.about__popup');
  let lifePopup = document.querySelector('.life__popup');

  if (document.querySelector('.about__video-inner')) {
    document.querySelector('.about__video-inner').addEventListener('click', function () {
      if (!document.querySelector('.popup__video--active')) {
        // aboutPopup.classList.add('popup__video--active');
        $(".about__popup").clone().addClass("new_pup").addClass("popup__video--active").appendTo(".video__container");
        $('.popup__video--close').on('click', function () {
          $(".video__container>div").remove();
        });
        $('.popup__video').on('click', function () {
          $(".video__container>div").remove();
        });
      } else {
        $(".video__container>div").remove(); //     aboutPopup.classList.remove('popup__video--active');
      }
    });
  }

  document.querySelectorAll('.life__slide-img').forEach(div => {
    div.addEventListener('click', function () {
      if (!document.querySelector('.life__popup--active')) {
        $("." + div.id).clone().addClass("new_pup").addClass("life__popup--active").appendTo(".video__container");
        $('.popup__video--close').on('click', function () {
          $(".video__container>div").remove();
        });
        $('.popup__video').on('click', function () {
          $(".video__container>div").remove();
        }); // document.querySelector("." + div.id).classList.add('life__popup--active');
      }
    });
  }); // @todo Не все блоки должны вызывать попап

  document.querySelectorAll('.intensives__item-preview').forEach(div => {
    div.addEventListener('click', function () {
      console.log(div.id);

      if (!document.querySelector('.intensives__popup--active')) {
        $("." + div.id).clone().addClass("new_pup").addClass("intensives__popup--active").appendTo(".video__container");
        $('.popup__video--close').on('click', function () {
          $(".video__container>div").remove();
        });
        $('.popup__video').on('click', function () {
          $(".video__container>div").remove();
        }); // document.querySelector("." + div.id).classList.add('intensives__popup--active');
      }
    });
  });
  document.querySelectorAll('.smi__slide-preview').forEach(div => {
    div.addEventListener('click', function () {
      // console.log(div.id);
      if (!document.querySelector('.smi__popup--active')) {
        $("." + div.id).clone().addClass("new_pup").addClass("smi__popup--active").appendTo(".video__container");
        $('.popup__video--close').on('click', function () {
          $(".video__container>div").remove();
        });
        $('.popup__video').on('click', function () {
          $(".video__container>div").remove();
        }); // document.querySelector("." + div.id).classList.add('smi__popup--active');
      }
    });
  });
  $(document).ready(function () {
    $('.popup__video--close').on('click', function () {
      console.log("asd");
      $(".video__container>div").remove();
    });
  }); // document.querySelectorAll('.popup__video--close').forEach(div => {
  //     div.addEventListener('click', function () {
  //         $(".video__container>div").remove();
  //         // document.querySelector('video').pause();
  //         // if (document.querySelector('.life__popup--active')) {
  //         //     document.querySelector('.life__popup--active').classList.remove('life__popup--active');
  //         // }
  //         // if (document.querySelector('.sucsess__popup--active')) {
  //         //     document.querySelector('.sucsess__popup--active').classList.remove('sucsess__popup--active');
  //         // }
  //         // if (document.querySelector('.reviews__popup--active')) {
  //         //     document.querySelector('.reviews__popup--active').classList.remove('reviews__popup--active');
  //         // }
  //         // if (document.querySelector('.intensives__popup--active')) {
  //         //     document.querySelector('.intensives__popup--active').classList.remove('intensives__popup--active');
  //         // }
  //         // if (document.querySelector('.smi__popup--active')) {
  //         //     document.querySelector('.smi__popup--active').classList.remove('smi__popup--active');
  //         // }
  //     })
  // });

  document.querySelectorAll('.sucsess__slide__img').forEach(div => {
    div.addEventListener('click', function () {
      // console.log(div.id);
      if (!document.querySelector('.sucsess__popup--active')) {
        // document.querySelector("." + div.id).classList.add('sucsess__popup--active');
        $("." + div.id).clone().addClass("new_pup").addClass("sucsess__popup--active").appendTo(".video__container");
        $('.popup__video--close').on('click', function () {
          $(".video__container>div").remove();
        });
        $('.popup__video').on('click', function () {
          $(".video__container>div").remove();
        });
      }
    });
  });
  document.querySelectorAll('.reviews__item').forEach(div => {
    div.addEventListener('click', function () {
      // console.log(div.id);
      if (!document.querySelector('.reviews__popup--active')) {
        $("." + div.id).clone().addClass("new_pup").addClass("reviews__popup--active").appendTo(".video__container");
        $('.popup__video--close').on('click', function () {
          $(".video__container>div").remove();
        });
        $('.popup__video').on('click', function () {
          $(".video__container>div").remove();
        }); // document.querySelector("." + div.id).classList.add('reviews__popup--active');
      }
    });
  });

  if (document.querySelectorAll('.events__item')) {
    let i = 0;

    if (document.querySelectorAll('.events__item').length < 9) {
      document.querySelectorAll('.events__item').forEach(div => {
        div.style.order = 0;
      });
    } else {
      document.querySelectorAll('.events__item').forEach(div => {
        if (i < 8) {
          div.style.order = 0;
        } else {
          div.style.order = 2;
        }

        i++;
      });
    }
  }

  if (document.querySelectorAll('.upcoming__item')) {
    let i = 0;

    if (document.querySelectorAll('.upcoming__item').length < 9) {
      document.querySelectorAll('.upcoming__item').forEach(div => {
        div.style.order = 0;
      });
    } else {
      document.querySelectorAll('.upcoming__item').forEach(div => {
        if (i < 8) {
          div.style.order = 0;
        } else {
          div.style.order = 2;
        }

        i++;
      });
    }
  }

  if (document.querySelectorAll('.upcoming__item-date-day')) {
    document.querySelectorAll('.upcoming__item-date-day').forEach(div => {
      if (div.innerHTML.length < 3) {
        div.classList.add('upcoming__item-date-day--big');
      }
    });
  }

  if (document.querySelectorAll('.events__item-date-day')) {
    document.querySelectorAll('.events__item-date-day').forEach(div => {
      if (div.innerHTML.length < 3) {
        div.classList.add('events__item-date-day--big');
      }
    });
  }

  if (document.querySelector('.prevent__button--reg')) {
    document.querySelector('.prevent__button--reg').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.prevent__popup').classList.add('prevent__popup--active');
      document.querySelector('.prevent__pup__close').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.prevent__popup').classList.remove('prevent__popup--active');
      });
    });
  }

  if (document.querySelector('.nav__button')) {
    document.querySelector('.nav__button').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.consult__popup').classList.add('consult__popup--active');
      document.querySelector('.consult__pup__close').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.consult__popup').classList.remove('consult__popup--active');
      });
    });
  }

  if (document.querySelector('.dfooter__recall')) {
    document.querySelector('.dfooter__recall').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.consult__popup').classList.add('consult__popup--active');
      document.querySelector('.consult__pup__close').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.consult__popup').classList.remove('consult__popup--active');
      });
    });
  }

  if (document.querySelector('.directions__item-button')) {
    $('.directions__item-button').click(function () {
      $(this).toggleClass('directions__item-button--active'); // $('.directions__item-button--active ~ .directions__item-subjects').toggleClass('directions__item-subjects--active');
      // console.log($(this).sibling());
    });
  }

  $(document).ready(function () {
    $('.photoSlider__slider').slick({
      infinite: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev-ps'),
      nextArrow: $('.next-ps'),
      // autoplay: true,
      autoplaySpeed: 3000
    });
    $('.swork__slider-top').slick({
      infinite: false,
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $('.prev-swork'),
      nextArrow: $('.next-swork'),
      // autoplay: true,
      autoplaySpeed: 3000,
      responsive: [{
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }]
    }).on('setPosition', function (event, slick) {
      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
    $('.smi__slider').slick({
      infinite: false,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.prev-smi'),
      nextArrow: $('.next-smi'),
      autoplaySpeed: 3000,
      responsive: [{
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }]
    });

    function sideScroll(element, direction, speed, distance, step) {
      let scrollAmount = 0;
      var slideTimer = setInterval(function () {
        if (direction == 'left') {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }

        scrollAmount += step;

        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    }

    $('.next-stages').click(function () {
      var container = document.querySelector(".container__overflow--active");
      sideScroll(container, 'right', 10, 200, 10);
    });
    $('.prev-stages').click(function () {
      var container = document.querySelector(".container__overflow--active");
      sideScroll(container, 'left', 10, 200, 10);
    });

    if (document.querySelector(".main__aplic-item--bac")) {
      document.querySelector(".main__aplic-item--bac").addEventListener('click', function () {
        document.querySelector(".main__aplic-item--bac").classList.add('main__aplic-item--active');
        document.querySelector(".main__aplic-item--mag").classList.remove('main__aplic-item--active');
        document.querySelector(".container__overflow-bachelor").classList.add('container__overflow--active');
        document.querySelector(".container__overflow-magister").classList.remove('container__overflow--active');
      });
      document.querySelector(".main__aplic-item--mag").addEventListener('click', function () {
        document.querySelector(".main__aplic-item--mag").classList.add('main__aplic-item--active');
        document.querySelector(".main__aplic-item--bac").classList.remove('main__aplic-item--active');
        document.querySelector(".container__overflow-magister").classList.add('container__overflow--active');
        document.querySelector(".container__overflow-bachelor").classList.remove('container__overflow--active');
      });
    }

    $('.sachive__button').on('click', function () {
      $('.sachive__item--hidden').slideToggle();
    });
    $(".docum__inner").slick({
      infinite: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.prev-doc'),
      nextArrow: $('.next-doc'),
      autoplaySpeed: 3000,
      responsive: [{
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 480,
        settings: "unslick"
      }]
    });

    if ($('.directions__item:last-child').ready()) {
      $('.directions__item').css({
        'min-height': '0px'
      });
      let fItem = $('.directions__item:first-child').outerHeight();
      let sItem = $('.directions__item:last-child').outerHeight();

      if (fItem > sItem) {
        $('.directions__item').css({
          'min-height': fItem + 'px'
        });
      } else {
        $('.directions__item').css({
          'min-height': sItem + 'px'
        });
      }

      console.log(fItem);
    }

    window.addEventListener('resize', function () {
      console.log(this.window.innerWidth, $('.docum__inner').hasClass('slick-initialized'));

      if (this.window.innerWidth > 479) {
        if (!$('.docum__inner').hasClass('slick-initialized')) {
          $(".docum__inner").slick({
            infinite: true,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: $('.prev-doc'),
            nextArrow: $('.next-doc'),
            autoplaySpeed: 3000,
            responsive: [{
              breakpoint: 960,
              settings: {
                slidesToShow: 3
              }
            }, {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            }, {
              breakpoint: 480,
              settings: "unslick"
            }]
          });
        }
      }

      if ($('.directions__item:first-child').ready()) {
        $('.directions__item').css({
          'min-height': '0px'
        });
        setTimeout(() => {
          let fItem = $('.directions__item:first-child').outerHeight();
          let sItem = $('.directions__item:last-child').outerHeight();

          if (fItem > sItem) {
            $('.directions__item').css({
              'min-height': fItem + 'px'
            });
          } else {
            $('.directions__item').css({
              'min-height': sItem + 'px'
            });
          }
        }, 100);
      }
    });
    $('.main__button--index').on('click', function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $('.programm').offset().top - 90
      }, 600);
    });
    $('.main__button--region').on('click', function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $('.features').offset().top - 90
      }, 600);
    });
    $('.features__button--how').on('click', function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $('.faq').offset().top - 90
      }, 600);
    });
  });
  var x;
  var i;
  var j;
  var l;
  var ll;
  var selElmnt;
  var a;
  var b;
  var c;
  /* Look for any elements with the class "custom-select": */

  x = document.getElementsByClassName("blog__sorting");
  l = x.length;

  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */

    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */

    b = document.createElement("DIV");
    b.setAttribute("class", "select-items");

    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;

        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;

            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }

            this.setAttribute("class", "same-as-selected");
            break;
          }
        }

        h.click();
      });
      b.appendChild(c);
    }

    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-show");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;

    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }

    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */


  document.addEventListener("click", closeAllSelect);
  const loadMoreButton = document.querySelector(".blog__load-more-button");
  const selectedOption = document.querySelector(".select-selected");
  const selectItems = document.querySelectorAll(".select-items");
  const blogList = document.querySelector(".blog__list");

  const sorting = () => {
    if (selectedOption.textContent === "Сначала старые") {
      blogList.style.flexFlow = "row-reverse wrap-reverse";
    } else {
      blogList.style.flexFlow = "row wrap";
    }
  };

  sorting();

  const load = () => {
    let blogItems = document.querySelectorAll(".blog__item");
    let blogItemsArray = [...blogItems];

    if (selectedOption.textContent === "Сначала старые") {
      blogItemsArray = [...blogItems].reverse();

      for (let blogItem of blogItemsArray) {
        blogItem.classList.remove("blog__item--hidden");
      }

      console.log(blogItemsArray);
    }

    for (let blogItem of blogItemsArray) {
      blogItem.classList.remove("blog__item--hidden");
    }

    const hiddenBlogItems = blogItemsArray.slice(9);

    for (let hiddenBlogItem of hiddenBlogItems) {
      hiddenBlogItem.classList.add("blog__item--hidden");
    }
  };

  load();

  for (let selectItem of selectItems) {
    selectItem.onclick = () => {
      loadMoreButton.style.display = "block";
      sorting();
      let blogItems = document.querySelectorAll(".blog__item--hidden");
      let blogItemsArray = [...blogItems];

      for (let blogItem of blogItemsArray) {
        blogItem.classList.remove("blog__item--hidden");
      }

      load();
    };
  }

  const loadMore = () => {
    let blogItems = document.querySelectorAll(".blog__item--hidden");
    let blogItemsArray = [...blogItems];
    const shownBlogItems = blogItemsArray.slice(0, 9);

    for (let shownBlogItem of shownBlogItems) {
      shownBlogItem.classList.remove("blog__item--hidden");
    }

    blogItems = document.querySelectorAll(".blog__item--hidden");

    if (blogItems.length === 0) {
      loadMoreButton.style.display = "none";
    }
  };

  loadMoreButton.onclick = () => {
    loadMore();
  };
})();