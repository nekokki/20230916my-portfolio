document.addEventListener("DOMContentLoaded", function () {
  const rotatingText = document.getElementById("rotatingText");
  let isProgrammer = true;

  function startRotation() {
    // アニメーションを設定
    rotatingText.style.animation = "vertical-single-rotate 3s linear";

    // 3秒後にテキストを変更
    setTimeout(function () {
      rotatingText.textContent = isProgrammer ? "Programmer" : "Programmer";
      isProgrammer = !isProgrammer;

      // アニメーションをリセット
      rotatingText.style.animation = "none";

      // 3秒間待つ
      setTimeout(startRotation, 3000);
    }, 3000);
  }

  // 最初のアニメーションを開始
  startRotation();
});


document.addEventListener("DOMContentLoaded", function () {
  const videoItems = document.querySelectorAll(".video-item");
  const hoverImgs = document.querySelectorAll(".hover-img");

  videoItems.forEach((video, index) => {
    const hoverImg = hoverImgs[index];

    hoverImg.addEventListener("mouseover", function () {
      // 画像を透明にして、動画を少し拡大して透明度を元に戻す
      hoverImg.style.opacity = 0;
      video.style.transform = "scale(1.15)";
      video.style.opacity = 1;
      video.play();
    });

    hoverImg.addEventListener("mouseout", function () {
      // 画像を元に戻して、動画を元のサイズと透明度に
      hoverImg.style.opacity = 1;
      video.style.transform = "scale(1)";
      video.style.opacity = 0;
      video.pause();
    });
  });
});


// スクロール時の処理
window.addEventListener('scroll', function() {
  const toTop = document.querySelector('.to-top');
  if (window.scrollY > 100) {
    toTop.classList.add('is-show');
  } else {
    toTop.classList.remove('is-show');
  }
});

// アンカーリンクのクリック時の処理
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href').substring(1);  // '#'を除去
    const header = document.querySelector('header');  // 'p-header' を 'header' に変更
    const headerHeight = header ? header.offsetHeight : 0;  // ヘッダーの高さを取得
    let position = 0;

    if (id) {
      const target = document.getElementById(id);
      if (target) {
        position = target.offsetTop - headerHeight;  // ヘッダーの高さを考慮
      }
    }

    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  });
});

window.addEventListener("load", function () {
  // プリローダー要素を取得
  const preloader = document.getElementById("preloader");

  // 本体のコンテンツを取得
  const content = document.getElementById("content");

  // プリローダーを非表示に
  preloader.style.display = "none";

  // 本体のコンテンツを表示
  content.style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
  // ドロワーメニューのトリガー
  const drawerImg = document.querySelector(".p-drawer-img");
  const drawerMenu = document.querySelector(".p-drawer-menu");
  const drawerMenuTexts = document.querySelectorAll("a.p-drawer-menu__text");

  // ドロワーメニューを開閉する
  drawerImg.addEventListener("click", function (e) {
    e.preventDefault();

    drawerMenu.classList.toggle("is-active");
    drawerImg.classList.toggle("is-active");

    return false;
  });

  // ドロワーメニュー外をクリックして閉じる
  drawerMenu.addEventListener("click", function () {
    drawerMenu.classList.remove("is-active");
    drawerImg.classList.remove("is-active");
  });

  // メニュー項目をクリックしてドロワーを閉じる
  drawerMenuTexts.forEach(function (textElement) {
    textElement.addEventListener("click", function (e) {
      // もし必要なら、ここでスクロール処理などを行う

      drawerMenu.classList.remove("is-active");
      drawerImg.classList.remove("is-active");
    });
  });
});
