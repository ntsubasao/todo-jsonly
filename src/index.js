import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value; //inputに入力された値だから、valueを使
  document.getElementById("add-text").value = ""; //inputTextの内容を空にする

  //div生成　DOM
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成 DOM
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //クリックというイベントが起きたときに、処理が実行される

    //押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromeIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click" , () => {
      alert("戻す");
    }

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromeIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li); //liをdivの子要素にする
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(div);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除(共通化して、関数化)
const deleteFromeIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button") //idにマッチするDocument要素を取得する
  .addEventListener("click", () => onClickAdd()); //イベント(ボタンを押したなど)を検知したら、onClickを返す
