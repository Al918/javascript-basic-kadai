// btnというidを持つHTML要素を取得し、中身を出力する
const btn = document.getElementById("btn");

// textというidを持つHTML要素を取得し、中身を出力する
const text = document.getElementById("text");

// クリックしたら処理を実行する
btn.addEventListener("click", () => {
  // 2秒後に処理を実行する
  setTimeout(() => {
    text.textContent = 'ボタンがクリックされました';
  }, 2000);
});
