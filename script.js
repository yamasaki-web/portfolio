  document.addEventListener("DOMContentLoaded", function() {
    // ページ内リンクがクリックされたときスムーズにスクロールする
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        
        var speed = 500; // スクロールの速さ
        var href = this.getAttribute("href"); // リンクのhref属性を取得
        var target = document.querySelector(href === "#" || href === "" ? "html" : href); // リンク先の要素を取得
        var position = target.offsetTop; // 要素の位置を取得
        var scrollOptions = {
          top: position,
          behavior: "smooth" // スムーズなスクロール
        };
        window.scrollTo(scrollOptions);
      });
    });

    //スクロールしたときヘッダーの色を変更する
    window.addEventListener("scroll", function() {
        const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
        if (scroll >= 100) { // 100は任意の値に変えてください
          document.querySelector("header").classList.add("header-color");
        } else {
          document.querySelector("header").classList.remove("header-color");
        }
      });
    
  });

     
  