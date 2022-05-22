import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value; //inputに入力された値だから、valueを使
  document.getElementById("add-text").value = ""; //inputTextの内容を空にする

  //div生成　DOM
  const div = document.createElement("div");
  div.className = "list-row"; //classを付与する

  //li生成 DOM
  const li = document.createElement("li");
  li.innerText = inputText; //中身をliタグの中に値を入れられる

  //divタグの子要素に各要素を設定
  div.appendChild(li);

  //未完了リストに追加 （incomplete-list の子要素に）
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button") //idにマッチするDocument要素を取得する
  .addEventListener("click", () => onClickAdd()); //イベント(ボタンを押したなど)を検知したら、onClickを返す
