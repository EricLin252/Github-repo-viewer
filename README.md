# Github Repository Viewer

網頁連結(PC/Mobile)：https://ericlin252.github.io/

## 使用說明

在搜尋欄搜尋用戶後，repo列表即會出現在下方。
每次搜尋會顯示10個repo，滑動至頁面底端後會再顯示更多repo。
若想了解repo的內容，可直接點選repo，會顯示repo的說明以及github連結。

## 架構說明

該專案使用React，配合React Bootstrap與React Hook，簡化專案實作過程，並且使用typescript。

### Typedefine
```typescript
////單個repo的詳細資訊////
type repo = {
  fullname: string,     //repo的完整名字
  description: string,  //repo的說明
  starcount: number,    //repo的star數
  url: string           //repo的github連結
}

////repolist的資料內容，為repo簡易資訊的一個array////
type repoL = {
  reponame: string,   //repo的名字
  starcount: number   //repo的star數
}[];

////網頁搜尋狀態enum////
const enum loadingState {
  none,     //無狀態
  new,      //新搜索用戶
  append    //對相同用戶搜索更多repo
};
```
### Component

#### RepoRow：Repo列表中的repo欄位。

```typescript
props: {
  reponame: string,   //repo的名字
  starcount: number,  //repo的star數
  open: () => void    //repo被點選時要執行的function
}
```

#### Repolist：Repo列表。

```typescript
props: {
  repolist: repoL,                  //列表顯示資料內容
  openRepo: (repo: string) => void  //搜尋repo內容時要執行的function
}
```

#### RepoNav：標頭欄。

```typescript
props: {
  search: (input: string) => void //搜尋用戶時要執行的function
}
```

#### RepoPage：repo的詳細資訊頁面。

```typescript
props: {
  show: boolean,                      //控制頁面是否顯示
  fullname: string | undefined,       //repo的完整名字
  description:  string | undefined,   //repo的介紹
  starcount:  number | undefined,     //repo的star數
  url: string | undefined,            //repo的github連結
  close: () => void                   //頁面關閉時要執行的function
}
```

### 執行流程

* 點選搜尋按鈕

去除輸入的多餘空白後，若是使用者未輸入內容，略過搜尋。

若搜尋欄有輸入，將loading狀態改為new，並將輸入存至username，repolist清空。

將username合併至query url中，fetch資料，並將資料儲存至repolist中。

將repolist中的內容顯示出來，並將頁面回歸至頂。

* 下拉頁面至底

若loading的狀態不是none，略過搜尋。

若page為-1(代表該用戶沒有更多repo可以顯示)，略過搜尋。

若仍可搜尋更多內容，將loading狀態改為append，

將username與page合併至query url中，fetch資料，並將資料合併至repolist中。

最後將repolist中的內容顯示出來。

* 點選repo

將username與reponame合併至query url，fetch資料，並將資料更新至repo中。

最後將repo的內容顯示在RepoPage中。
