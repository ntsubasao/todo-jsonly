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

  //button（完了）作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを変数に入れる(いろいろ作ったあとに消すとどれ消すかわからなくなるから上)
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode; //まずはdivから/divまでの要素を取得

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText; //div要素の子要素の一番初めだから、firstelementchildを使う

    //div以下を初期化
    addTarget.textContent = null;
    console.log(addTarget);
  });

  //button（削除）作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除ボタン
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定(appendchildはどんどん下に追加される)
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加 （incomplete-list の子要素に）
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除(関数化)
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}; //tagetを引数として、対象を受け取って削除する関数

document
  .getElementById("add-button") //idにマッチするDocument要素を取得する
  .addEventListener("click", () => onClickAdd()); //イベント(ボタンを押したなど)を検知したら、onClickを返す
