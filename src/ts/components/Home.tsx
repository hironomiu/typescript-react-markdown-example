import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const Home: FC = () => {
  const markdown = `
# hoge
aiueo

## fuga
kakiku

### piyo
sasisuseso 

~~~js:hoge.js
hogehoge
~~~

- hoho
  - fufu

aaaaaaaaaaaaaaaaaaaaaaaaaaa
---

**aaa**
  `
  return (
    <>
      <div className="flex flex-col item-center justify-center">
        <div className="markdown whitespace-pre-wrap px-10 text-start">
          <ReactMarkdown plugins={[gfm]}>{markdown}</ReactMarkdown>
        </div>
        <div className=" text-center">
          <h1>not markdown</h1>
        </div>
      </div>
    </>
  )
}

export default Home
