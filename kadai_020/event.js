// btnというidを持つHTML要素を取得し、中身を出力する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、中身を出力する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener ('click', () => {
    // li要素を新しく作成する
    const childList = document.createElement('li');

    // 作成したli要素に「クリックしました」というテキストを追加する
    childList.textContent = 'クリックしました';

    // 作成したli要素をul要素の子要素として末尾に追加
    text.appendChild(childList);

    // id="text"の文章を書き換えるには、textContentを使用
    text.textContent = 'ボタンをクリックしました'

})
