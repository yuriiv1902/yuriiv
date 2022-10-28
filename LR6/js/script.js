const script = () => {
  let wrap = document.querySelector(".wrap")
  let table = wrap.children[1]
  let articles = ParseSelectionArticles('blog')
  console.log(articles)
  for (let index = 0; index < 3; index++) {
    table.rows[2].cells[index].innerHTML = articles[index].paragraph
  }
  SwapElements('table','photo')
  document.getElementsByTagName("button")[0].remove()
}

const ParseSelectionArticles = (SelectionName) => {
  let selection = document.querySelector(`.${SelectionName}`)
  let articles = new Array
  for (let index = 0; index < selection.childElementCount; index++) {
    let header = selection.children[index].firstElementChild.innerHTML
    let paragraph = selection.children[index].lastElementChild.innerHTML
    articles[index] = {
      header,
      paragraph
    }
  }
  return articles
}

const SwapElements = (name1, name2) => {
  let element1 = document.querySelector(`.${name1}`)
  let element2 = document.querySelector(`.${name2}`)
  element1.parentNode.insertBefore(element2, element1);
}
