window.onload = function(){
    if(nobel_list == null){
        const nobel_list = [];
        localStorage.setItem("nobel_list",JSON.stringify(nobel_list))
    }
    
    if(manga_list == null){
        const manga_list = [];
        localStorage.setItem("manga_list",JSON.stringify(manga_list))
    }

    if(books_memo == null){
        const books_memo = {};
        localStorage.setItem("books_memo",JSON.stringify(books_memo))
    }


    // トップページにリスト表示
    // 漫画
    for(let i=0;i<manga_list.length;i++){ 
        const btn = document.createElement('button');
        const br = document.createElement('br');
        const btn_id = "manga_btn_"+i;
        btn.textContent = "・"+manga_list[i].name;
        btn.setAttribute("id",btn_id);
        btn.setAttribute("class","list_btn");

        btn.addEventListener('click',function(){
            sessionStorage.setItem('type',"manga");
            list_btn(i);
        });

        $manga_list.insertAdjacentElement('beforeend',btn);
        $manga_list.insertAdjacentElement('beforeend',br);
    }
    // ノベル
    for(let i=0;i<nobel_list.length;i++){ 
        const btn = document.createElement('button');
        const br = document.createElement('br');
        const btn_id = "nobel_btn_"+i;
        btn.textContent = "・"+nobel_list[i].name;
        btn.setAttribute("id",btn_id);
        btn.setAttribute("class","list_btn");

        btn.addEventListener('click',function(){
            sessionStorage.setItem('type',"nobel");
            list_btn(i);
        });

        $nobel_list.insertAdjacentElement('beforeend',btn);
        $nobel_list.insertAdjacentElement('beforeend',br);
    }
    isYet();
}
//オブジェクトの読み取り
const $main_page               = document.getElementById('main_page');
const $sub_page                = document.getElementById('sub_page');
const $search                  = document.getElementById('search');
const $search_clear            = document.getElementById('search_clear');

const $tomain                  = document.getElementById("tomain");

// メインページ：漫画リスト
const $manga_add_name          = document.getElementById("manga_add_name");
const $manga_add_buy           = document.getElementById("manga_add_buy");
const $manga_add_read          = document.getElementById("manga_add_read");
const $manga_add_btn           = document.getElementById("manga_add_btn");
const $manga_add_btn_continuou = document.getElementById("manga_add_btn_continuou");
const $manga_add_btn_cancel    = document.getElementById("manga_add_btn_cancel");
const $manga_list              = document.getElementById("manga_list");
const $add_new                 = document.getElementById('add_new');
const $add_new_btn             = document.getElementById('add_new_btn');
const $add_manga               = document.getElementById('add_manga');
const $add_title               = document.getElementById('add_title');
const $add_title_list          = document.getElementById('add_title_list');
const $manga_sort              = document.getElementById('manga_sort');
const $manga_sort_btn          = document.getElementById('manga_sort_btn');
const $manga_sort_explanation  = document.getElementById('manga_sort_explanation');
const $manga_sort_ok           = document.getElementById('manga_sort_ok');


// メインページ：ノベルリスト
const $nobel_list              = document.getElementById('nobel_list');
const $nobel_add_new           = document.getElementById('nobel_add_new');
const $nobel_add_new_btn       = document.getElementById('nobel_add_new_btn');
const $add_nobel               = document.getElementById('add_nobel');
const $nobel_add_name          = document.getElementById('nobel_add_name');
const $nobel_add_buy           = document.getElementById('nobel_add_buy');
const $nobel_add_read          = document.getElementById('nobel_add_read');
const $nobel_add_btn           = document.getElementById('nobel_add_btn');
const $nobel_add_btn_continuou = document.getElementById('nobel_add_btn_continuou');
const $nobel_add_btn_cancel    = document.getElementById('nobel_add_btn_cancel');
const $nobel_add_title         = document.getElementById('nobel_add_title');
const $nobel_add_title_list    = document.getElementById('nobel_add_title_list');

// サブページ
const $book_title              = document.getElementById('book_title');
const $volume                  = document.getElementById('volume');
const $register                = document.getElementById('register');
const $date                    = document.getElementById('date');
const $info_edit               = document.getElementById('info_edit');
const $new_register            = document.getElementById('new_register');
const $date_edit               = document.getElementById('date_edit');
const $new_date                = document.getElementById('new_date');
const $add_register            = document.getElementById('add_register');
const $edit_register           = document.getElementById('edit_register');
const $new_delete              = document.getElementById('new_delete');
const $add_edit_top            = document.getElementById('add_edit_top');
const $add_edit                = document.getElementById('add_edit');
const $add_edit_btn            = document.getElementById('add_edit_btn');
const $title_delete_btn        = document.getElementById('title_delete_btn');
const $completed_btn           = document.getElementById('completed_btn');
const $edit_buy                = document.getElementById('edit_buy');
const $edit_buy_box            = document.getElementById('edit_buy_box');
const $edit_buy_number         = document.getElementById('edit_buy_number');
const $edit_buy_status         = document.getElementById('edit_buy_status');
const $edit_buy_btn            = document.getElementById('edit_buy_btn');
const $edit_buy_or             = document.getElementById('edit_buy_or');
const $edit_memo               = document.getElementById('edit_memo');
const $edit_memo_box           = document.getElementById('edit_memo_box');
const $edit_memo_number        = document.getElementById('edit_memo_number');
const $edit_memo_contents      = document.getElementById('edit_memo_contents');
const $edit_memo_btn           = document.getElementById('edit_memo_btn');
const $nobel_sort              = document.getElementById('nobel_sort');
const $nobel_sort_btn          = document.getElementById('nobel_sort_btn');
const $nobel_sort_explanation  = document.getElementById('nobel_sort_explanation');
const $nobel_sort_ok           = document.getElementById('nobel_sort_ok');


// リストの読み取り
let manga_list = JSON.parse(localStorage.getItem("manga_list"));
let nobel_list = JSON.parse(localStorage.getItem("nobel_list"));
let books_memo = JSON.parse(localStorage.getItem("books_memo"));

// ボタンにイベントリスナーを付与
$manga_add_btn              .addEventListener('click',manga_add_btn);
$manga_add_btn_continuou    .addEventListener('click',manga_add_btn_continuou);
$manga_add_btn_cancel       .addEventListener('click',manga_add_btn_cancel);
$tomain                     .addEventListener('click',tomain);
$register                   .addEventListener('click',register);
$info_edit                  .addEventListener('click',info_edit);
$new_register               .addEventListener('click',new_register);
$new_delete                 .addEventListener('click',new_delete);
$add_new_btn                .addEventListener('click',add_new_btn);
$add_edit_btn               .addEventListener('click',add_edit_btn);
$title_delete_btn           .addEventListener('click',title_delete_btn);
$completed_btn              .addEventListener('click',completed_btn);
$edit_buy                   .addEventListener('click',edit_buy);
$edit_buy_btn               .addEventListener('click',edit_buy_btn);
$nobel_add_new_btn          .addEventListener('click',nobel_add_new_btn);
$nobel_add_btn              .addEventListener('click',nobel_add_btn);
$nobel_add_btn_continuou    .addEventListener('click',nobel_add_btn_continuou);
$nobel_add_btn_cancel       .addEventListener('click',nobel_add_btn_cancel);
$edit_memo                  .addEventListener('click',edit_memo);
$edit_memo_btn              .addEventListener('click',edit_memo_btn);
$manga_sort_btn             .addEventListener('click',manga_sort_btn);
$manga_sort_ok              .addEventListener('click',manga_sort_ok);
$nobel_sort_btn              .addEventListener('click',nobel_sort_btn);
$nobel_sort_ok              .addEventListener('click',nobel_sort_ok);
$search_clear               .addEventListener('click',search_clear);

// 新規追加ボタンを押す
// 漫画
function add_new_btn(){
    $manga_sort.classList.add("hidden");
    $add_manga.classList.remove("hidden");
    $add_new.classList.add("hidden");
}
// ノベル
function nobel_add_new_btn(){
    $nobel_sort.classList.add("hidden");
    $add_nobel.classList.remove("hidden");
    $nobel_add_new.classList.add("hidden");
}

// 決定ボタンを押す
// 漫画
function manga_add_btn(){
    if($manga_add_name.value == ""){
        return;
    }
    add_manga_list();
    location.reload();
}
// ノベル
function nobel_add_btn(){
    if($nobel_add_name.value == ""){
        return;
    }
    add_nobel_list(); 
    location.reload();
}

// 連続追加ボタンを押す
// 漫画
function manga_add_btn_continuou(){
    if($manga_add_name.value == ""){
        return;
    }
    add_manga_list();

    $add_title.classList.remove("hidden");
    const p = document.createElement("p");
    p.textContent = $manga_add_name.value;
    $add_title_list.insertAdjacentElement("beforeend",p);

     //開発中モード：valueの値
     $manga_add_name.value = "";
     $manga_add_buy.value = "";
     $manga_add_read.value = "";
}
// ノベル
function nobel_add_btn_continuou(){
    if($nobel_add_name.value == ""){
        return;
    }
    add_nobel_list();

    $nobel_add_title.classList.remove("hidden");
    const p = document.createElement("p");
    p.textContent = $nobel_add_name.value;
    $nobel_add_title_list.insertAdjacentElement("beforeend",p);

     $nobel_add_name.value = "";
     $nobel_add_buy.value = "";
     $nobel_add_read.value = "";
}

// キャンセルボタンを押す
// 漫画
function manga_add_btn_cancel(){
    location.reload();
}
// ノベル
function nobel_add_btn_cancel(){
    location.reload();
}

// リスト書き込み
// 漫画
function add_manga_list(){
    const add_manga = {} ;
    add_manga.name = $manga_add_name.value;
    for(let i=1 ;i <= $manga_add_buy.value ;i++){
        if(i<=$manga_add_read.value){
            add_manga[i] = "ALREADY_READ";
        }else{
            add_manga[i] = "YET_READ";
        }
    }
    manga_list.push(add_manga);
    localStorage.setItem("manga_list",JSON.stringify(manga_list))
}
// ノベル
function add_nobel_list(){
    const add_nobel = {} ;
    add_nobel.name = $nobel_add_name.value;
    for(let i=1 ;i <= $nobel_add_buy.value ;i++){
        if(i<=$nobel_add_read.value){
            add_nobel[i] = "ALREADY_READ";
        }else{
            add_nobel[i] = "YET_READ";
        }
    }
    nobel_list.push(add_nobel);
    localStorage.setItem("nobel_list",JSON.stringify(nobel_list))
}

// サブ画面からメイン画面へ
function tomain(){
    $main_page.classList.remove('hidden');
    $sub_page.classList.add('hidden');
    sessionStorage.removeItem('index')
    sessionStorage.removeItem('number')
    sessionStorage.removeItem('type')
    location.reload();
}

// メイン画面からサブ画面へ
function tosub(){
    $main_page.classList.add('hidden');
    $sub_page.classList.remove('hidden');
    $add_register.classList.remove("hidden");
    $edit_register.classList.add("hidden");
}

function list_btn(index){
    tosub();
    isYet();
    const type = sessionStorage.getItem('type');
    
    //タイトル挿入
    // 漫画
    if(type == "manga"){
        $book_title.textContent = manga_list[index].name;
    }
    // ノベル
    if(type == "nobel"){
        $book_title.textContent = nobel_list[index].name;
    }


    $volume.innerHTML = '';
    
    // サブ画面：リスト表示
    let i = 1;
    // 漫画
    if(type == "manga"){
        while(true){
            if(manga_list[index][i] == undefined){
                break;
            }
            const check = document.createElement('input');
            const span = document.createElement('span');
            const br = document.createElement('br');
            const check_id = "check_"+i;
            check.type = 'checkbox';
            if(manga_list[index][i] == "ALREADY_READ"){
                check.checked = true;
            }
            if(manga_list[index][i] == "YET_READ"){
                check.checked = false;
            }
            if(manga_list[index][i] == "ALREADY_READ_MEMO"){
                memo(index,i);
                check.checked = true;
            }

            check.setAttribute('id',check_id);
            check.setAttribute('class','check_btn');

            if(manga_list[index][i] != "COMPLETED"){
                span.textContent = i;
                $volume.insertAdjacentElement('beforeend',check);
            }else{
                span.textContent = "〜【完】〜";
                $completed_btn.textContent = "完結情報を取り消す";
            }
            
            $volume.insertAdjacentElement('beforeend',span);

            if(typeof manga_list[index][i] == "object" || manga_list[index][i].includes('202')){
                yet_released(index,i);
            }

            if(manga_list[index][i] == "ALREADY_RELEASED"){
                already_released(i);
            }

            $volume.insertAdjacentElement('beforeend',br);

            // クロージャで `i` の値をキャプチャ
            check.addEventListener('change', (function(currentIndex) {
                return function() {
                    volume_check(index, currentIndex);
                };
            })(i));

            i++;
        }
    }
    if(type == "nobel"){
        while(true){
            if(nobel_list[index][i] == undefined){
                break;
            }
            const check = document.createElement('input');
            const span = document.createElement('span');
            const br = document.createElement('br');
            const check_id = "check_"+i;
            check.type = 'checkbox';
            if(nobel_list[index][i] == "ALREADY_READ"){
                check.checked = true;
            }
            if(nobel_list[index][i] == "YET_READ"){
                check.checked = false;
            }
            if(nobel_list[index][i] == "ALREADY_READ_MEMO"){
                memo(index,i);
                check.checked = true;
            }
            check.setAttribute('id',check_id);

            if(nobel_list[index][i] != "COMPLETED"){
                span.textContent = i;
                $volume.insertAdjacentElement('beforeend',check);
            }else{
                span.textContent = "〜【完】〜";
                $completed_btn.textContent = "完結情報を取り消す";
            }
            
            $volume.insertAdjacentElement('beforeend',span);

            if(typeof nobel_list[index][i] == "object" || nobel_list[index][i].includes('202')){
                yet_released(index,i);
            }

            if(nobel_list[index][i] == "ALREADY_RELEASED"){
                already_released(i);
            }

            $volume.insertAdjacentElement('beforeend',br);

            // クロージャで `i` の値をキャプチャ
            check.addEventListener('change', (function(currentIndex) {
                return function() {
                    volume_check(index, currentIndex);
                };
            })(i));

            i++;
        }
    }
    sessionStorage.setItem("index",index);
    sessionStorage.setItem("number",i);
}

// メモの挿入
function memo(index,number){
    const type = sessionStorage.getItem('type');
    const memo = type + "_" + index + "_" + number;
    const btn = document.createElement('btn');
    const btn_id = "memo_" + number;
    btn.setAttribute('id',btn_id)
    btn.setAttribute("class","left_pos list_btn");
    btn.textContent = books_memo[memo];;
    $volume.insertAdjacentElement("beforeend",btn);
    btn.addEventListener('click',function(){
        out_memo(number);
    });
}

// メモを消去
function out_memo(number){
    const type = sessionStorage.getItem('type');
    const index = sessionStorage.getItem('index');
    const memo = type + "_" + index + "_" + number;
    if(confirm('メモを消去しますか？')){
         // 漫画
        if(type == "manga"){
            manga_list[index][number] = "ALREADY_READ"
            localStorage.setItem('manga_list',JSON.stringify(manga_list));
        }
        // ノベル
        if(type == "nobel"){
            nobel_list[index][number] = "ALREADY_READ"
            localStorage.setItem('nobel_list',JSON.stringify(nobel_list));
        }
        console.log(memo)
        delete books_memo[memo];
        localStorage.setItem('books_memo',JSON.stringify(books_memo));
        list_btn(index);
    }
}

// 発売前の本の処理
function yet_released(index,i){
    const type = sessionStorage.getItem('type');
    // 漫画
    if(type == "manga"){
        const date = new Date(manga_list[index][i]);
        const release_date = date.getMonth()+1 + "月" + date.getDate() + "日";
        const span = document.createElement('span');
        span.setAttribute('class','left_pos');
        span.textContent = "発売日：" + release_date;
        $volume.insertAdjacentElement('beforeend',span);
    }
    // ノベル
    if(type == "nobel"){
        const date = new Date(nobel_list[index][i]);
        const release_date = date.getMonth()+1 + "月" + date.getDate() + "日";
        const span = document.createElement('span');
        span.textContent = "発売日：" + release_date;
        span.setAttribute('class','left_pos');
        $volume.insertAdjacentElement('beforeend',span);
    } 
    $add_register.classList.add("hidden")
    $edit_register.classList.remove("hidden");
}

// 発売済み：未購入タグの挿入
function already_released(i){
    const btn = document.createElement('btn');
    const btn_id = "yet_buy_" + i;
    btn.setAttribute('id',btn_id);
    btn.setAttribute("class","left_pos list_btn");
    btn.textContent = "未購入";
    $volume.insertAdjacentElement("beforeend",btn);
    btn.addEventListener('click',function(){
        already_buy(i);
    });
}

function already_buy(number){
    const type = sessionStorage.getItem('type');
    const index = sessionStorage.getItem('index');
    if(confirm('購入済みにしますか？')){
         // 漫画
        if(type == "manga"){
            manga_list[index][number] = "YET_READ"
            localStorage.setItem('manga_list',JSON.stringify(manga_list));
        }
        // ノベル
        if(type == "nobel"){
            nobel_list[index][number] = "YET_READ"
            localStorage.setItem('nobel_list',JSON.stringify(nobel_list));
        }
        list_btn(index);
    }
}

// 読書済みor未読
function volume_check(index,i){
    const type = sessionStorage.getItem('type');
    const check_id = "check_"+i;
    const check = document.getElementById(check_id);
     // 漫画
     if(type == "manga"){
        if(manga_list[index][i] != "ALREADY_READ" && manga_list[index][i] != "YET_READ"){
            check.checked = false;
            return;
        }
    
        if(check.checked){
            manga_list[index][i] = "ALREADY_READ";
        }else{
            manga_list[index][i] = "YET_READ";
        }
        localStorage.setItem("manga_list",JSON.stringify(manga_list));
    }
    // ノベル
    if(type == "nobel"){
        if(nobel_list[index][i] != "ALREADY_READ" && nobel_list[index][i] != "YET_READ"){
            check.checked = false;
            return;
        }
    
        if(check.checked){
            nobel_list[index][i] = "ALREADY_READ";
        }else{
            nobel_list[index][i] = "YET_READ";
        }
        localStorage.setItem("nobel_list",JSON.stringify(nobel_list));
    }
}

// 最新刊発売情報追加
function register(){
    const release_date = new Date($date.value);
    const index = sessionStorage.getItem('index');
    const number = sessionStorage.getItem('number');
    const type = sessionStorage.getItem('type');
    if(release_date == "Invalid Date"){
        return;
    }

    // 漫画
    if(type == "manga"){
        manga_list[index][number] = release_date;
        localStorage.setItem('manga_list',JSON.stringify(manga_list));
    }
    // ノベル
    if(type == "nobel"){
        nobel_list[index][number] = release_date;
        localStorage.setItem('nobel_list',JSON.stringify(nobel_list))
    }
    
    list_btn(index);
    $add_edit.classList.add("hidden")
}

// 最新刊発売日情報変更ボタン
function info_edit(){
    if($date_edit.classList.contains("hidden")){
        $date_edit.classList.remove("hidden");
    }else{
        $date_edit.classList.add("hidden");
    }
}

// 情報の追加・編集
function add_edit_btn(){
    $date_edit.classList.add("hidden"); 
    $edit_buy_box.classList.add("hidden");
    $edit_memo_box.classList.add("hidden");
    if($add_edit.classList.contains("hidden")){
        $add_edit.classList.remove("hidden");
    }else{
        $add_edit.classList.add("hidden");
    }
}

// 最新刊発売日変更
function new_register(){
    const release_date = new Date($new_date.value);
    const index = sessionStorage.getItem('index');
    const number = sessionStorage.getItem('number') - 1;
    const type = sessionStorage.getItem('type');

    if(release_date == "Invalid Date"){
        return;
    }

    // 漫画
    if(type == "manga"){
        manga_list[index][number] = release_date;
        localStorage.setItem('manga_list',JSON.stringify(manga_list));
    }
    // ノベル
    if(type == "nobel"){
        nobel_list[index][number] = release_date;
        localStorage.setItem('nobel_list',JSON.stringify(nobel_list))
    }
    $add_edit.classList.add("hidden");
    list_btn(index);
}

// 最新刊情報消去
function new_delete(){
    const index = sessionStorage.getItem('index');
    const number = sessionStorage.getItem('number') - 1;
    const type = sessionStorage.getItem('type');

    // 漫画
    if(type == "manga"){
        delete manga_list[index][number];
        localStorage.setItem("manga_list",JSON.stringify(manga_list));
    }
    // ノベル
    if(type == "nobel"){
        delete nobel_list[index][number];
        localStorage.setItem("nobel_list",JSON.stringify(nobel_list));
    }
    
    list_btn(index);
}

// タイトル消去
function title_delete_btn(){
    const index = sessionStorage.getItem('index');
    const type = sessionStorage.getItem('type');
    if(confirm("本当に消去しますか？")){
        // 漫画
        if(type == "manga"){
            manga_list.splice(index,1);
            localStorage.setItem('manga_list',JSON.stringify(manga_list));
        }
        // ノベル
        if(type == "nobel"){
            nobel_list.splice(index,1);
            localStorage.setItem('nobel_list',JSON.stringify(nobel_list));
        }
    
        tomain();
    }
}

// 完結ボタン
function completed_btn(){
    const index = sessionStorage.getItem('index');
    const number = sessionStorage.getItem('number');
    const type = sessionStorage.getItem('type');

    $add_edit.classList.add("hidden");

    // 漫画
    if(type == "manga"){
        if(manga_list[index][number - 1] == "COMPLETED"){
        delete manga_list[index][number - 1];
        $completed_btn.textContent = "この作品は完結しました"
        localStorage.setItem('manga_list',JSON.stringify(manga_list));
        list_btn(index);
        return 
        } 

        if(confirm("この作品は完結済みですか？")){
            manga_list[index][number] = "COMPLETED"
            $completed_btn.textContent = "完結情報を取り消す"
            localStorage.setItem('manga_list',JSON.stringify(manga_list));
            list_btn(index);
        }
    }
    // ノベル
    if(type == "nobel"){
        if(nobel_list[index][number - 1] == "COMPLETED"){
        delete nobel_list[index][number - 1];
        $completed_btn.textContent = "この作品は完結しました"
        localStorage.setItem('nobel_list',JSON.stringify(nobel_list));
        list_btn(index);
        return 
        } 

        if(confirm("この作品は完結済みですか？")){
            nobel_list[index][number] = "COMPLETED"
            $completed_btn.textContent = "完結情報を取り消す"
            localStorage.setItem('nobel_list',JSON.stringify(nobel_list));
            list_btn(index);
        }
    }
}

// 発売済みか否か
function isYet(){
    let index;
    let i;

    // 漫画
    index = 0;
    while(true){
        i = 1;
        if(manga_list[index] == undefined){
            break;
        }
        while(true){
            if(manga_list[index][i] == undefined){
                break;
            }

            if(typeof manga_list[index][i] =="object" || manga_list[index][i].includes('202')){
                const release_date = new Date(manga_list[index][i])
                const today = new Date();
                today.setHours(9);
                today.setMinutes(0);
                today.setSeconds(0);
                if(release_date <= today){
                    manga_list[index][i] = "ALREADY_RELEASED"
                    localStorage.setItem('manga_list',JSON.stringify(manga_list));      
                }
            }
            i++;
        }
        index++;
    }
    // ノベル
    index = 0;
    while(true){
        i = 1;
        if(nobel_list[index] == undefined){
            break;
        }
        while(true){
            if(nobel_list[index][i] == undefined){
                break;
            }

            if(typeof nobel_list[index][i] =="object" || nobel_list[index][i].includes('202')){
                const release_date = new Date(nobel_list[index][i])
                const today = new Date();
                today.setHours(9);
                today.setMinutes(0);
                today.setSeconds(0);
                if(release_date <= today){
                    nobel_list[index][i] = "ALREADY_RELEASED"
                    localStorage.setItem('nobel_list',JSON.stringify(nobel_list));      
                }
            }
            i++;
        }
        index++;
    }
}

// 購入状況変更
function edit_buy(){
    $add_edit.classList.add("hidden");
    $edit_buy_box.classList.remove("hidden");
}

// 購入状況変更ボタン
function edit_buy_btn(){
    const index = sessionStorage.getItem('index')
    let number = sessionStorage.getItem('number') - 1;
    const type = sessionStorage.getItem('type');
    const number_key = $edit_buy_number.value;
    if(number_key == "" || $edit_buy_status.value == ""){
        return;
    }
    if($edit_buy_or == "のみ"){
        number = number_key;
    }

    // 漫画
    if(type == "manga"){
        for(let num = number_key; num <= number; num++){
        if($edit_buy_status.value == "未購入"){
            manga_list[index][num] = "ALREADY_RELEASED";
        }else{
            manga_list[index][num] = "YET_READ";
        }
        }   
        localStorage.setItem('manga_list',JSON.stringify(manga_list));
    }
    // ノベル
    if(type == "nobel"){
        for(let num = number_key; num <= number; num++){
        if($edit_buy_status.value == "未購入"){
            nobel_list[index][num] = "ALREADY_RELEASED";
        }else{
            nobel_list[index][num] = "YET_READ";
        }
        }   
        localStorage.setItem('nobel_list',JSON.stringify(nobel_list));
    }

    $edit_buy_number.value = "";
    $edit_buy_or.value = "";
    $edit_buy_status.value = "";
    $edit_buy_box.classList.add("hidden")

    
    list_btn(index);
}

// メモ追加
function edit_memo(){
    $add_edit.classList.add("hidden");
    $edit_memo_box.classList.remove("hidden");
}

// メモ追加ボタン
function edit_memo_btn(){
    const index = sessionStorage.getItem('index');
    const number = $edit_memo_number.value;
    const type = sessionStorage.getItem('type');
    const contents = $edit_memo_contents.value;
    const memo = type + "_" + index + "_" + number;

    // 漫画
    if(type == "manga"){
        if(manga_list[index][number] == "ALREADY_READ" || manga_list[index][number] == "ALREADY_READ_MEMO"){
            manga_list[index][number] = "ALREADY_READ_MEMO"
            localStorage.setItem('manga_list',JSON.stringify(manga_list));
        }else{
            return;
        }
    }
    // ノベル
    if(type == "nobel"){
        if(nobel_list[index][number] == "ALREADY_READ" || nobel_list[index][number] == "ALREADY_READ_MEMO"){
            nobel_list[index][number] = "ALREADY_READ_MEMO"
            localStorage.setItem('nobel_list',JSON.stringify(nobel_list));
        }else{
            return;
        }
    }
    books_memo[memo] = contents;
    localStorage.setItem('books_memo',JSON.stringify(books_memo));
    $edit_memo_box.classList.add("hidden")
    list_btn(index);
}

// 順番入れ替えボタン
// 漫画
function manga_sort_btn(){
    const p = document.createElement('p');
    p.setAttribute("id","sort_ex");
    if($manga_sort_ok.classList.contains("hidden")){
        $add_new_btn.classList.add("hidden");
        p.textContent = '入れ替える二つのタイトルを選択してください'
        $manga_sort_explanation.insertAdjacentElement("beforeend",p);
        $manga_sort_ok.classList.remove("hidden");
        for(let i = 0; i < manga_list.length; i++){
            const check  = document.createElement('input');
            check.type = 'checkbox';
            const sort_id = "sort_" + i;
            check.setAttribute("id",sort_id);
            check.setAttribute("class","sort_check")
            const btn_id = "manga_btn_" + i;
            const btn = document.getElementById(btn_id);
            btn.insertAdjacentElement("beforebegin",check);
        }
    }else{
        $add_new_btn.classList.remove("hidden");
        $manga_sort_ok.classList.add("hidden");
        const ex = document.getElementById('sort_ex');
        ex.remove();
        for(let i = 0; i < manga_list.length; i++){
            const sort_id = "sort_" + i;
            const check  = document.getElementById(sort_id);
            check.remove();
        }
        
    }
}
// ノベル
function nobel_sort_btn(){
    const p = document.createElement('p');
    p.setAttribute("id","sort_ex");
    if($nobel_sort_ok.classList.contains("hidden")){
        $add_new_btn.classList.add("hidden");
        p.textContent = '入れ替える二つのタイトルを選択してください'
        $nobel_sort_explanation.insertAdjacentElement("beforeend",p);
        $nobel_sort_ok.classList.remove("hidden");
        for(let i = 0; i < nobel_list.length; i++){
            const check  = document.createElement('input');
            check.type = 'checkbox';
            const sort_id = "sort_" + i;
            check.setAttribute("id",sort_id);
            check.setAttribute("class","sort_check")
            const btn_id = "nobel_btn_" + i;
            const btn = document.getElementById(btn_id);
            btn.insertAdjacentElement("beforebegin",check);
        }
    }else{
        $add_new_btn.classList.remove("hidden");
        $nobel_sort_ok.classList.add("hidden");
        const ex = document.getElementById('sort_ex');
        ex.remove();
        for(let i = 0; i < manga_list.length; i++){
            const sort_id = "sort_" + i;
            const check  = document.getElementById(sort_id);
            check.remove();
        }
        
    }
}

// 順番入れ替えボタン：実行
// 漫画
function manga_sort_ok(){
    let number = 0;
    const sort = []
    for(let i = 0; i < manga_list.length; i++){
        const sort_id = "sort_" + i;
        const check  = document.getElementById(sort_id);
        if(check.checked){
            sort[number] = i;
            number++;
        }
    }
    if(number == 2){
        [manga_list[sort[0]],manga_list[sort[1]]] = [manga_list[sort[1]],manga_list[sort[0]]]
        localStorage.setItem('manga_list',JSON.stringify(manga_list));
        location.reload();
    }else{
        manga_sort_btn();
    }
    if(number < 2){
        window.alert("２つ選択してください");
    }
    if(number > 2){
        window.alert("選択できるのは２つまでです");
    }
}
// ノベル
function nobel_sort_ok(){
    let number = 0;
    const sort = []
    for(let i = 0; i < nobel_list.length; i++){
        const sort_id = "sort_" + i;
        const check  = document.getElementById(sort_id);
        if(check.checked){
            sort[number] = i;
            number++;
        }
    }
    if(number == 2){
        [nobel_list[sort[0]],nobel_list[sort[1]]] = [nobel_list[sort[1]],nobel_list[sort[0]]]
        localStorage.setItem('nobel_list',JSON.stringify(nobel_list));
        location.reload();
    }else{
        nobel_sort_btn();
    }
    if(number < 2){
        window.alert("２つ選択してください");
    }
    if(number > 2){
        window.alert("選択できるのは２つまでです");
    }
}

function search(){
    // 検索条件に一致するトップページを表示
    // 漫画
    const btn_manga = $manga_list.children;
    Array.from(btn_manga).forEach(function(btn){
        btn.remove();
    })
    for(let i=0;i<manga_list.length;i++){ 
        const btn = document.createElement('button');
        const br = document.createElement('br');
        const btn_id = "manga_btn_"+i;
        btn.textContent = "・"+manga_list[i].name;
        btn.setAttribute("id",btn_id);
        btn.setAttribute("class","list_btn");

        btn.addEventListener('click',function(){
            sessionStorage.setItem('type',"manga");
            list_btn(i);
        });

        if(manga_list[i].name.includes($search.value)){
            $manga_list.insertAdjacentElement('beforeend',btn);
            $manga_list.insertAdjacentElement('beforeend',br);
        }
    }
    // ノベル
    const btn_nobel = $nobel_list.children;
    Array.from(btn_nobel).forEach(function(btn){
        btn.remove();
    })
    for(let i=0;i<nobel_list.length;i++){ 
        const btn = document.createElement('button');
        const br = document.createElement('br');
        const btn_id = "nobel_btn_"+i;
        btn.textContent = "・"+nobel_list[i].name;
        btn.setAttribute("id",btn_id);
        btn.setAttribute("class","list_btn");

        btn.addEventListener('click',function(){
            sessionStorage.setItem('type',"nobel");
            list_btn(i);
        });

        if(nobel_list[i].name.includes($search.value)){
            $nobel_list.insertAdjacentElement('beforeend',btn);
            $nobel_list.insertAdjacentElement('beforeend',br);
        }
    }
}

function search_clear(){
    $search.value = "";
    location.reload();
}

document.querySelector('input').addEventListener('focus', function() {
    window.scrollTo(0, this.getBoundingClientRect().top);
});