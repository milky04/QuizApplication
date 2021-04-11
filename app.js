// question:問題、answers:解答群、correct:答え
const quiz = [
  {
    question: 'ガブリアスの種族値は？',
    answers: [
      '95-135-80-110-80-100',
      '91-134-95-100-100-80',
      '108-130-95-80-85-102',
      '100-128-90-77-77-128',
      '89-125-90-115-80-101'
    ],
    correct: '108-130-95-80-85-102'
  }, {
    question: 'ドラパルトが攻撃を受けた時、半減以下に抑えられるタイプの数は？',
    answers: [
      '5種類',
      '6種類',
      '7種類',
      '8種類',
      '9種類'
    ],
    correct: '8種類'
  }, {
    question: 'ジャラランガの覚えられない技は？',
    answers: [
      'きあいだめ',
      'ふるいたてる',
      'こわいかお',
      'にらみつける',
      'しんぴのまもり'
    ],
    correct: 'きあいだめ'
  }
];

// クイズの数の合計
const quizLength = quiz.length;
// 現在クイズの何問目か
let quizIndex = 0;
// 正解数
let score = 0;

// ボタンの数を取得
const $button = document.getElementsByTagName('button');
// ボタンの数の合計
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  // 現在何番目のボタンか
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const judge = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！正解は' + '「' + quiz[quizIndex].correct + '」でした！');
  }
  quizIndex++;
  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

// 現在何回クリック(回答)したか
let answersIndex = 0;
// 解答群の数の合計
let answersLength = quiz[quizIndex].answers.length;

// ボタンをクリックしたら正誤判定
while(answersIndex < answersLength){
  $button[answersIndex].addEventListener('click', (e) => {
    judge(e);
  });
  answersIndex++;
};
